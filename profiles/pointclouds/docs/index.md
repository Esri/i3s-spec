# I3S point cloud scene layer: index

Describes the index (i.e. bounding volume tree) of the layer.

### Related:

[pointcloud::store](store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodeVersion** | number | The version of the individual nodes format. |
| **nodePerIndexBlock** | number | The page size describes the number of nodes per paged index document. 64 is currently expected. |
| boundingVolumeType | string | The bounding volume type. Only OBB is currently supported |

*Note: properties in **bold** are required*

```json
		"index": {
			"nodeVersion": 1,
			"boundingVolumeType": "obb",
			"nodesPerPage": 64,
			"lodSelectionMetricType": "density-threshold"
		}
```