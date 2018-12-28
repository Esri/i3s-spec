# I3S point cloud scene layer: vertexAttributes

The vertex buffer description.

### Related:

[pcsl::defaultGeometrySchema](defaultGeometrySchema.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| position | [value](value.pcsl.md) | Only LEPCC compressed (X,Y,Z) is supported. Decompressed data will be absolute `double` position. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: vertexAttributes 

```json
 {
  "position": {
    "valueType": "Float",
    "valuesPerElement": 3
  }
} 
```

