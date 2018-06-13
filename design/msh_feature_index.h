#pragma once
#include <vector>
#include <algorithm>
#include <set>

typedef int fid_t;
typedef int node_id_t;// a I3S node_id. (assumes tree-key as been replace by 32 bit ids)

//! for testing only:
//! list the nodes where a given feature may be found:
struct Test_input
{
  fid_t  fid;
  std::vector< node_id_t > node_ids; // **SORTED** in descending I3S node depth in the tree (i.e. leaf node is first)
};

struct Index_node
{
  fid_t fid;
  int   pointer;// may point to a page of Index_node or to a record_id
};

struct Index_page
{
  int level; //0 is leaf
  std::vector< Index_node > nodes;
};

//! last index_page will be the root page
inline 
void    build_index(int page_size, std::vector< Test_input>& in, std::vector< Index_page >* index, std::vector< node_id_t>* records)
{
  index->clear();
  //sort input by ascending fid:
  std::sort(in.begin(), in.end(), [](const Test_input& a, const Test_input& b) { return a.fid < b.fid; });
  const fid_t end_fid = in.back().fid + 1; //doesn't exist

  // create the records array sorted by fid
  records->clear();
  std::vector< fid_t > tmp_fids;
  for (auto& ti : in)
  {
    records->insert(records->end(), ti.node_ids.begin(), ti.node_ids.end());
    tmp_fids.resize(tmp_fids.size() + ti.node_ids.size(), ti.fid); 
  }
  _ASSERT(tmp_fids.size() == records->size());
  // build page level 0:
  auto i0 = tmp_fids.begin();
  auto i1 = i0;
  auto i2 = i1 + 1;
  std::vector< Index_node > tmp_page;
  tmp_page.reserve(page_size+1);
  while (i1 < tmp_fids.end())
  {
    while (i2 != tmp_fids.end() && (*i2 == *i1))
      ++i2;
    tmp_page.push_back({ *i1, (int)(i1-i0) });
    if (tmp_page.size() == page_size || i2 == tmp_fids.end())
    {
      //add an entry for next page:
      auto next_fid = i2 == tmp_fids.end() ? end_fid : *i2;
      tmp_page.push_back({ next_fid, (int)(i2-i0)});
      //finalize the page:
      index->push_back({0, tmp_page});
      tmp_page.clear();
    }
    i1 = i2;
  }
  // build page lods (internal index pages )
  auto p1 = 0;
  auto p2 = (int)index->size();
  int n_pages = 0;
  int level = 1;
  do
  {
    //number of page for this level:
    n_pages = (int)ceil(double(p2 - p1) / (double)(page_size));
    index->reserve( index->size()+n_pages );
    tmp_page.clear();
    for (auto p = p1; p < p2; ++p)
    {
      tmp_page.push_back({ (*index)[p].nodes.front().fid, p });
      if (tmp_page.size() == page_size || p == p2-1)
      {
        //add an entry for next page:
        auto next_fid = p == p2 - 1 ? end_fid : (*index)[p + 1].nodes.front().fid;
        tmp_page.push_back({ next_fid, p+1 }); //note: "last" page of the level will not point to a 'valid' page, this is ok as only next_fid matters in this case.
        //finalize the page:
        index->push_back({ level, tmp_page });
        tmp_page.clear();
      }
    }
    p1 = p2;
    p2 = (int)index->size();
    ++level;
  } while (n_pages > 1);
}

inline
bool find_by_fid(const std::vector< Index_page >& paged_tree, int root_page_id, fid_t fid, int* record_offset, int* record_count )
{
  _ASSERT(root_page_id >=0 && root_page_id  < paged_tree.size());
  int page_id = root_page_id;
  std::vector< Index_node >::const_iterator node_iter;
  std::vector< Index_page >::const_iterator page_iter;
  do
  {
    page_iter = paged_tree.begin() + page_id;
    node_iter = std::upper_bound(page_iter->nodes.begin(), page_iter->nodes.end(), Index_node({ fid,0 }), [](const Index_node& a, const Index_node& b) { return a.fid < b.fid; });
    if (node_iter == page_iter->nodes.begin()|| node_iter == page_iter->nodes.end())
      return false; //out-of-range of known fids.
    node_iter = node_iter - 1;
    page_id = node_iter->pointer;
  } while (page_iter->level >0  );
  if (node_iter->fid != fid)
    return false; //not a match...
  *record_offset = node_iter->pointer;
  *record_count  = (node_iter + 1)->pointer- *record_offset;
  return true;
}

// --- testing: 
fid_t     generate_fid( fid_t last ) 
{
  static const int c_steps_count = 12;
  static const int c_steps[c_steps_count] = {1,1,1,1,1,1,1,1,1,17, 123, 1144 };
  int step = c_steps[ rand() % c_steps_count ];
  return last + step;
}

int     generate_node_count()
{
  static const int c_steps_count = 12;
  static const int c_steps[c_steps_count] = { 1,3,9,1,2,1,87,1,5,7,1,21};
  return c_steps[rand() % c_steps_count] + c_steps[rand() % c_steps_count];
}

node_id_t generate_node_id(int r1, int r2 )
{
  return (node_id_t)((double)(r2-r1) * (double)rand() / (double)RAND_MAX ) + r1;
}

inline
void create_test_input(std::vector< Test_input>* input, int fid_count)
{
  fid_t fid_iter=10;
  int node_id0 = 1'000'000;
  input->resize(fid_count);
  for (int i = 0; i < fid_count; ++i)
  {
    fid_iter = generate_fid(fid_iter);
    (*input)[i].fid = fid_iter;
    int n = generate_node_count();
    auto& vec = (*input)[i].node_ids;
    vec.resize(n);
    for (auto& v : vec)
      v = generate_node_id(node_id0, node_id0 + fid_count * 3);
  }
}

inline void test_expects(bool v)
{
  if (!v)
  {
    _ASSERT(false);
    int d = 0;
  }
}

inline void test_fid_index()
{
  const int c_page_size = 256;
  std::vector< Test_input> input;
  create_test_input(&input, 8'000);
  std::vector< Index_page > index;
  std::vector< node_id_t >  records;
  build_index(c_page_size, input, &index, &records);
  //check everything:
  int offset, count;
  std::set<fid_t> known_fids;
  for (auto& ti : input)
  {
    bool is_found = find_by_fid( index, (int)index.size()-1, ti.fid, &offset, &count);
    test_expects(is_found); //must be found
    test_expects(count == ti.node_ids.size()); // same number of records.
    for (int i = 0; i <  count; ++i)
    {
      test_expects(records[i + offset] == ti.node_ids[i]); //must be the same node ids.
    }
    known_fids.insert(ti.fid);
  }
  //Make sure than unkwown fids are *not* found:
  for (int fid = *known_fids.begin() - 10; fid < *(--known_fids.end()) + 10; ++fid)
  {
    if (known_fids.find(fid) == known_fids.end())
    {
      bool is_found = find_by_fid(index, (int)index.size() - 1, fid, &offset, &count);
      test_expects(!is_found);
    }
  }
}