# index [point cloud profile]

Describes the index (i.e. bounding volume tree) of the layer.

### Related:

[pcsl::store](store.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodeVersion** | integer | The version of the individual nodes format. |
| **nodesPerPage** | integer | The page size describes the number of nodes per paged index document. 64 is currently expected. |
| boundingVolumeType | string | The bounding volume type. Only OBB is currently supported.<div>Must be:<ul><li>`obb`: Oriented bounding box</li></ul></div> |
| lodSelectionMetricType | string | Defines how `node.lodThreshold` should be interpreted<div>Must be:<ul><li>`density-threshold`: nodes[i].lodThreshold will represent an 'effective' 2D area for the node. This estimation works best when the point cloud scene layer represents a surface and is not volumetric. World space density is defined as Dw = node.pointCount / node.effectiveArea.  Ds is Dw converted to screen space. Client would switch LOD when Ds is less/greater than a threshold defined by the client. For example, 0.1 point per pixel square. Note for point cloud scene layer creation: If each point footprint is assumed to be identical (say 0.1x0.1 unit), then the lodThreshold may be computed as number_of_points * point_footprint for a leaf node and sum( children[i].effective_area) for inner nodes.</li></ul></div> |
| href | string |  |

*Note: properties in **bold** are required*

### Examples 

#### Example: index 

```json
 {
  "nodeVersion": 1,
  "boundingVolumeType": "obb",
  "nodesPerPage": 64,
  "lodSelectionMetricType": "density-threshold"
} 
```

