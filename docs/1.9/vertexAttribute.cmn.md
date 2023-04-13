# vertexAttribute [common profile]

The vertexAttribute object describes valid properties for a single vertex.

### Related:

[cmn::defaultGeometrySchema](defaultGeometrySchema.cmn.md), [cmn::vestedGeometryParams](vestedGeometryParams.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **position** | [geometryAttribute](geometryAttribute.cmn.md) | The vertex position. |
| **normal** | [geometryAttribute](geometryAttribute.cmn.md) | The vertex normal. |
| **uv0** | [geometryAttribute](geometryAttribute.cmn.md) | The first set of UV coordinates. |
| **color** | [geometryAttribute](geometryAttribute.cmn.md) | The color attribute. |
| region | [geometryAttribute](geometryAttribute.cmn.md) | The region attribute. |

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

