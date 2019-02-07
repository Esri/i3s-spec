Nodes represent the spatial index of the data as a bounding-volume hierarchy. To reduce the number of node-index requests required to traverse this index tree, they are organized in *pages* of [layer.index.nodesPerPage](index.md) nodes.  

Children must be **contiguous**, in index range, so they may be located using  `firstChild`  and  `childrenCount`  fields.

**page number computation example:**

Assuming [layer.store.index.nodesPerPage](index.md) = 64, then `node id = 78` will be in page `page_id = floor( 78 / 64) = 1` (i.e. second page)

