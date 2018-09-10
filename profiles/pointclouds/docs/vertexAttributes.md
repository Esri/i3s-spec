# I3S point cloud scene layer: vertexAttributes

The vertex buffer description.

### Related:

[pointcloud::defaultGeometrySchema](defaultGeometrySchema.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| position | [pointcloud::value](value.md) | Only LEPCC compressed (X,Y,Z) is supported. Decompressed data will be absolute `double` position. |

*Note: properties in **bold** are required*

### Examples 

#### Example: vertexAttributes 

```json
 {
  "vertexAttributes": {
    "position": {
      "valueType": "Float64",
      "valuesPerElement": 3
    }
  }
} 
```

