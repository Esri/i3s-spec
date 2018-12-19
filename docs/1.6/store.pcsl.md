# I3S point cloud scene layer: store

Describes storage for the layer.

### Related:

[pcsl::layer](layer.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | Id for the store. Not currently used by the point cloud scene layer. |
| **profile** | string | Defines the profile type of the scene layer as point cloud scene layer.<div>Must be:<ul><li>`PointCloud`</li></ul></div> |
| **version** | string | Point cloud scene layer store version. |
| **extent** | number[4] | 2D extent of the point cloud scene layer in the layers spatial reference units. |
| **index** | [index](index.pcsl.md) | Describes the index (i.e. bounding volume tree) of the layer. |
| **defaultGeometrySchema** | [defaultGeometrySchema](defaultGeometrySchema.pcsl.md) | Attribute description as field. |
| geometryEncoding | string | MIME type for the encoding used for the Geometry Resources. For example: application/octet-stream; version=1.6. |
| attributeEncoding | string | MIME type for the encoding used for the Attribute Resources. For example: application/octet-stream; version=1.6. |

*Note: properties in **bold** are required*

### Examples 

#### Example: store 

```json
 {
  "id": "",
  "profile": "PointCloud",
  "version": "2.0",
  "extent": [
    -105.023403,
    39.740089,
    -105.011746,
    39.757051
  ],
  "index": {
    "nodeVersion": 1,
    "boundingVolumeType": "obb",
    "nodePerIndexBlock": 64,
    "lodSelectionMetricType": "density-threshold"
  },
  "defaultGeometrySchema": {
    "geometryType": "points",
    "header": [],
    "topology": "PerAttributeArray",
    "encoding": "lepcc-xyz",
    "vertexAttributes": {
      "position": {
        "valueType": "Float",
        "valuesPerElement": 3
      }
    },
    "ordering": [
      "position"
    ]
  }
} 
```

