# Feature Index for I3S
A `featureIndex` would map `feature_id` to a list of `node_id` representing this feature. This is a one-to-many mapping (in general) since a feature may be present in several LOD nodes. (even a leaf node may contains many features)

## Motivations:
1. **Partial updates**: Adding/removing/deleting features requires to find all the affected nodes.
2. I3S Services not backed by a feature service may use this `featureIndex` to **select nodes by featureId** (search, selection, etc.)

## Design goals:
1. Offers good performance (optimize number of queries vs. size of payload to download).
2. Must be as compact as possible
3. `featureIndex` is **optional** and must **not** required any changes to I3S trees.

## Design:

### Design assumptions:
1. `feature_id` is a 32 bit integer. (this is assumed in many places in ArcObject code base). Upgrading to 64 bit integer would not break the design but increase memory usage. 
2. `node_id` is a 32 bit integer (currently, `node_ids` are `tree-keys`(string) which are inefficient to store)
3. `feature_ids` are **not** assumed to be contiguous. ( i.e. `fids={10,11,20,22,30}` ) 

### Records:
Let's defined the "leaves" of the `featureIndex` as a contiguous array of `node_ids` that can be found in each feature. In this array, `Node_ids` are:
1.  grouped by ascending `feature_id`
2.  `node_ids` in each group are sorted by descending node level (i.e. the "leaf" `node_id` is first). => this allows to identify the leaf node without additional requests if needed. 
    
As an example, the following node tree:
```
-- Node_id=2: {fids=40,10,20}
	|
	|-- Node_id=0 : {fids=20,10}
	|
	|-- Node_id=1 : {fids=40}	
```  
would have the following "records" array:
```
   fid: | 10| 20| 40| <- sorted by ascending fid 
--------|---|---|---|
records:|0,2|0,2|1,2| <- each node_id group is sorted by descending node-depth 
                         (node_id=2 is the parent here, so it's listed last)
```
This record array will be stored as a 'paged' binary resource on the service. 

```
example for 14569 records and page_size=1024:
=> 15 pages:
	- 14 pages of 1024 records : 4 kB per page ( sizeof(record) * 1024 )
	- 1 (last) page of 233 records. 
```

### Index:  
In order find records efficiently in the `records` array, we build a search tree on top of it with the following properties:
- `search_nodes` are `{fid, pointer}` pairs (8 bytes per `search_node`). 
- `search_nodes` are grouped by pages to form `search_pages`
- For internal `search_node`, `pointer` contains the id of a `seach_page`. For leaf `search_node`, `pointer` contains an index in the record array (i.e.`record_id`)
- `search_node` are sorted by ascending `fid` keys
- the `index_tree` has a high branching factor (e.g. 2048 ) as to make the tree very shallow: Very few `search_pages` requests will be needed.
- `search_pages` contains up to `page_size+1` `search_nodes` ( see *implemenation* section below)

Since the all `search_nodes` are sorted, a simple binary-search ( with O(n) complexity ) is sufficient to locate (or not) a `search_node` in its `search_page`.

## I3S API and documents
### 3dSceneLayer
An *optional* field may be added to the layer document:
``` js
{
	"featureIndex" : 
	{
		"indexPageSize"  : 1024,
		"recordPageSize" : 2048,
 		"indexRootPageId": 5	 // id of the top-most page
	}
}
```
### `featureIndex` seach pages:
```
/layers/0/featureIndex/indexPages/{page_id}
```
the `search_pages` are binary array of `{field, pointer}` pairs ( 8 bytes per pair)-no binary header. Pages are numbered consecutively `[0, n-1]` and may be `gzip` compressed.

### `featureIndex` record pages:
```
/layers/0/featureIndex/recordPages/{page_id}
```
`record_pages` are binary array of `{node_id}` ( 4 bytes per `node_id`) -no binary header.
Pages are numbered consecutively `[0, m-1]` and may be `gzip` compressed.


## Implementation:
The following C++ implementation illustrates how to create the search tree (see `build_index()`) and look-up `node_ids` by `fid` (see : `find_by_id()`)

Code with unit-test: [msh_feature_index.h](./msh_feature_index.h)  

``` cpp

#pragma once
#include <vector>
#include <algorithm>
#include <set>

typedef int fid_t;
typedef int node_id_t;// a I3S node_id. (assumes tree-key as been replaced by 32 bit ids)

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


```
 



  

 
  