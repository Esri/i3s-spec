Nodes represent the spatial extent of the data subdivided into regions. They are organized in *pages* of [layer.index.nodesPerPage](index.md) nodes.  Nodes are organized in bounding volumes and define the tree hierarchy. 

Children must be **contiguous**, in index range, so they may be located using  `firstChild`  and  `childrenCount`  fields.

**page number computation example:**

Assuming [layer.store.index.nodesPerPage](index.md) = 64, then `node id = 78` will be in page `page_id = floor( 78 / 64) = 1` (i.e. second page)

