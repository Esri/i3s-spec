# Node pages definition



Nodes objects are stored contiguously in what can be seen as a _flat_ array of nodes. This array can be accessed by fixed-size pages of nodes for better requests efficiency".
All pages contains exactly `layer.nodePages.nodesPerPage` nodes, except for the last page (that may contain less).

 we use an integer ID to map a node to its page as follow:
 ```
page_id         = floor( node_id / node_per_page)
node_id_in_page = modulo( node_id, node_per_page)
``` 


### Related:

[meshv2::node](node.md), [meshv2::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodesPerPage** | integer | Number of node per page for this layer |
| **lodSelectionMetricType** | string | Defines the meaning of `nodes[].lodThreshold` for this layer<div>Possible values are:<ul><li>`maxScreenThresholdSQ`: _TBD_: Unless we have a strong case for supporting anything else, we should settle on a **single** type of lod metric</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: 64 nodes per page index 

```json
 {
  "nodePerPage": 64,
  "lodSelectionMetricType": "maxScreenThresholdSQ"
} 
```

