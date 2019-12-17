# SLPK Hash Table

Scanning an SLPK (ZIP store) containing millions of documents is usually inefficient and slow.  A hash table file may be added to the SLPK to improve first load and file scanning performances.

A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found (Wkipedia).

## To create SLPK hash table
1. The offset of each SLPK file is known. For example, the byte offset from the beginning of the SLPK file to the first byte of its ZIP local file header. See ZIP specification for reference.
2. Convert all file paths to their canonical path. Canonical paths must:
   - Be lower case
   - Use a forward slash as the path separator `/`
   - Not contain a heading forward slash
   - Example: `/my/PATH.json` converts to `my/path.json`
3. Compute the MD5 128 bit-hash for each canonical path to create an array of key-value pairs [MD5-digest ->Offset 64bit]. 

4. Sort the key-value pairs by ascending keys using the following comparison based on little-endian architecture:
```cpp
	//for performance the following C++ comparator is used: (**little-endian**)
	typedef std::array< unsigned char, 16 > md5_hash;
	bool less_than( const md5_hash& hash_a, md5_hash& hash_b )
	{
	 const uint64* a = reinterpret_cast<const uint64*>(&hash_a[0]);	
	 const uint64* b = reinterpret_cast<const uint64*>(&hash_b[0]);	
	 return a[0] == b[0] ? a[1] < b[1] : a[0] < b[0];
	}
```
5. Write this sorted array as the last file of the SLPK archive (last entry in the ZIP central directory). The file must be named  `@specialIndexFileHASH128@`. Each array element is 24-bytes long, and includes the following restrictions:
   - 16 bytes for the MD5-digest and 8 bits for the offset.
   - Must be in little-endian order.
   - Must **not** contain padding.
   - Must  **not** contain a header.
## To read SLPK hash table
1. Convert the input path to the canonical path and compute its MD5 hash (i.e. key).

2. Search for key in the hash table. This can be easily implemented as a binary (i.e. dichotomic) search since the keys are sorted.

3. Retrieve the file from the ZIP archive using the offset associated with key.

