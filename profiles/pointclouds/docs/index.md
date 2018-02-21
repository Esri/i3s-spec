# I3S point cloud scene layer: index

Describes the index (i.e. bounding volume tree) of the layer.

### Related:

[pointcloud::store](store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodeVersion** | integer | The version of the individual nodes format. |
| **nodesPerPage** | integer | The page size describes the number of nodes per paged index document. 64 is currently expected. |
| boundingVolumeType | string | The bounding volume type. Only OBB is currently supported.<div>Possible values are:<ul><li>`obb`: Oriented bounding box</li></ul></div> |
| **lodSelectionMetricType** | string | Defines how `node.lodThreshold` should be interpreted<div>Possible values are:<ul><li>`density-threshold`: nodes[i].lodThreshold will represent an 'effective' 2D area for the node. This estimation works best when the point cloud scene layer represent a surface and is not volumetric in nature. World space density would be Dw = node.pointCount / node.effectiveArea which we call Ds once converted to screen space. Client would switch LOD when Ds is less/greater than a threshold defined by the client. For example, 0.1 point per pixel square. Note for point cloud scene layer creation: If each point footprint is assumed to be identical (say 0.1x0.1 unit), then the lodThreshold may be computed as number_of_point * point_footprint for a leaf node and sum( children[i].effective_area) for inner nodes.</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: index 

```json
 {
  "index": {
    "nodeVersion": 1,
    "boundingVolumeType": "obb",
    "nodesPerPage": 64,
    "lodSelectionMetricType": "density-threshold"
  }
} 
````

