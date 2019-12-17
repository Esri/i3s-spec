Nodes represent the spatial index of the data as a bounding volume hierarchy. To reduce the number of node-index requests required to traverse this index tree, they are organized in *pages* of [layer.index.nodesPerPage](index.pcsl.md) nodes.  

Children must be **contiguous**, in index range, so they may be located using  `firstChild`  and  `childrenCount` fields.

**Page Number Computation Example:**

`page_id = floor( node_id / layer.store.index.nodesPerPage )`

Let's say  `node id` = 78 and `layer.store.index.nodesPerPage` = 64.

```
page_id = floor (78 / 64)
        = floor (1.22)
        = 1
```

 The `page_id` of this node is `1`.  This is the second page since indexing starts at 0. 

 **IMPORTANT:** Page size must be a power-of-two less than `4096`.