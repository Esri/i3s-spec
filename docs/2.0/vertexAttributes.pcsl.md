# vertexAttributes [point cloud profile]

The vertex buffer description.

### Related:

[pcsl::defaultGeometrySchema](defaultGeometrySchema.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| position | [value](value.pcsl.md) | Only LEPCC compressed (X,Y,Z) is supported. Decompressed data will be absolute `Float64` position. |

### Examples 

#### Example: vertexAttributes 

```json
 {
  "position": {
    "valueType": "Float64",
    "valuesPerElement": 3
  }
} 
```

