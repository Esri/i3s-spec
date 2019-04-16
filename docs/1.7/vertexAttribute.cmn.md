# vertexAttribute

VertexAttributes describe valid properties for a single vertex.

### Related:

[cmn::defaultGeometrySchema](defaultGeometrySchema.cmn.md), [cmn::vestedGeometryParams](vestedGeometryParams.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **position** | [geometryAttribute](geometryAttribute.cmn.md) | Vertex position |
| **normal** | [geometryAttribute](geometryAttribute.cmn.md) | vertex normal |
| **uv0** | [geometryAttribute](geometryAttribute.cmn.md) | First set of UV coordinates |
| **color** | [geometryAttribute](geometryAttribute.cmn.md) | Colors attribute |
| region | [geometryAttribute](geometryAttribute.cmn.md) | Regions attribute |

*Note: properties in **bold** are required*

### Examples 

#### Example: Vertex attributes for 3dObject 

```json
 {
  "position": {
    "byteOffset": 8,
    "valueType": "Float32",
    "valuesPerElement": 3
  },
  "normal": {
    "byteOffset": 2672,
    "valueType": "Float32",
    "valuesPerElement": 3
  },
  "uv0": {
    "byteOffset": 5336,
    "valueType": "Float32",
    "valuesPerElement": 2
  },
  "color": {
    "byteOffset": 7112,
    "valueType": "UInt8",
    "valuesPerElement": 4
  }
} 
```

