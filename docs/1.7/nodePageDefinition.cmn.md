# nodePagesz [common profile]



Nodes are stored contiguously in what can be seen as a _flat_ array of nodes. This array can be accessed by fixed-size pages of nodes for better requests efficiency of requests.
All pages contains exactly `layer.nodePages.nodesPerPage` nodes, except for the last page (that may contain less).

We use an integer ID to map a node to its page as follow:
 ```
page_id         = floor( node_id / node_per_page)
node_id_in_page = modulo( node_id, node_per_page)
 ```



### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [cmn::node](node.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodesPerPage** | integer | Number of nodes per page for this layer. **Must be a power-of-two** less than `4096` |
| rootIndex | integer | Index of the root node.  Default = 0. |
| **lodSelectionMetricType** | string | Defines the meaning of `nodes[].lodThreshold` for this layer.<div>Must be:<ul><li>`maxScreenThresholdSQ`: A per-node value for the maximum area of the projected bounding volume on screen in pixel squared. 3D Viewers may implement **look-angle dependent** node switching by comparing this metric with the area of the 2D outline of the oriented-bounding box (OBB) on screen. ( see [_"Fast Projected Area Computation for Three-Dimensional Bounding Boxes", Dieter Schmalstieg and Robert F. Tobler_](https://pdfs.semanticscholar.org/1f59/8266e387cf367702d16acf5a4e02cc72cb99.pdf) for an efficient algorithm). If a **look-angle independent** LOD switching is desired, viewers may use the area of minimum bounding-sphere (MBS) of the node if available or the MBS of the OBB otherwise. Note:  `maxScreenThresholdSQ` may be related to `maxScreenThreshold` as follow:  `maxScreenThresholdSQ = PI * 0.25 * maxScreenThreshold * maxScreenThreshold`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: 64 nodes per page index 

```json
 {
  "nodesPerPage": 64,
  "rootIndex": 0,
  "lodSelectionMetricType": "maxScreenThresholdSQ"
} 
```

