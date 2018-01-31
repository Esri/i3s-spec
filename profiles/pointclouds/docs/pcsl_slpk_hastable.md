# SLPK hash table

Scanning an SLPK (ZIP store) containing millions of documents is usually inefficient and slow. To improve first load and file scanning performances, a hash table file may be added to the SLPK.

## To create SLPK hash-table
1. The offset of each file is known. For example, the byte offset from the beginning of the slpk file to the first byte of its ZIP local file header. See ZIP specification for reference.

2. Convert all file paths to their canonical form: 
  - lower case
  - forward-slash path separator ( / )
  - no heading forward-slash (e.g.  /my/PATH.json  becomes  my/path.json ).

3. Compute MD5 128 bit-hash for each canonical path to create an array of key-value pairs [MD5-digest ->Offset 64bit]. 

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
5. Write this sorted array as the last file of the SLPK archive (last entry in the ZIP central directory). the file must be named  @specialIndexFileHASH128@. Each array element is 24-bytes long:
  - 16 bytes for the MD5-digest and 8 bytes for the offset
  - In little-endian order
  - No padding
  - No header

## To read SLPK hash-table
1. Convert the input path to canonical form and compute its md5 hash (i.e. key).

2. Search for key in the hash table. This can be easily implemented as a dichotomic (or binary) search since the keys are sorted.

3. Retrieve the file from the ZIP archive using the offset associated with key.
