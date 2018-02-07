# I3S point cloud scene layer: store

Describes storage for the layer.

### Related:

[pointcloud::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | Id for the store. Not currently used by the point cloud scene layer. |
| **profile** | string | Defines the profile type of the scene layer as point cloud scene layer. |
| **version** | string | Point cloud scene layer specification version. |
| **extent** | number[4] | 2D extent of the layer in the layer spatial reference units. |
| **index** | [pointcloud::index](index.md) | Describes the index (i.e. bounding volume tree) of the layer. |
| **defaultGeometrySchema** | [pointcloud::defaultGeometrySchema](defaultGeometrySchema.md) | Attribute description as field. |

*Note: properties in **bold** are required*

```json
	"store": {
		"id": "",
		"profile": "PointCloud",
		"version": "2.0",
		"extent": [2690584.17,
		238213.85,
		2693979.04,
		240815.11],
		"index": {
			"nodeVersion": 1,
			"boundingVolumeType": "obb",
			"nodesPerPage": 64,
			"lodSelectionMetricType": "density-threshold"
		},
		"defaultGeometrySchema": {
			"geometryType": "points",
			"header": [],
			"topology": "PerAttributeArray",
			"encoding": "lepcc-xyz",
			"vertexAttributes": {
				"position": {
					"valueType": "Float64",
					"valuesPerElement": 3
				}
			},
			"ordering": ["position"]
		}
	}
```