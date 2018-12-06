# geometryAttribute

Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face.

### Related:

[defaultGeometrySchema](defaultGeometrySchema.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **position** | [geometryAttribute](geometryAttribute.md) | Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face. |
| **normal** | [geometryAttribute](geometryAttribute.md) | Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face. |
| **uv0** | [geometryAttribute](geometryAttribute.md) | Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face. |
| **color** | [geometryAttribute](geometryAttribute.md) | Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face. |
| region | [geometryAttribute](geometryAttribute.md) | Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Vertex attributes for 3dObject 

```json
 {
  "vertexAttributes": {
    "position": {
      "byteOffset": 8,
      "count": 222,
      "valueType": "Float32",
      "valuesPerElement": 3
    },
    "normal": {
      "byteOffset": 2672,
      "count": 222,
      "valueType": "Float32",
      "valuesPerElement": 3
    },
    "uv0": {
      "byteOffset": 5336,
      "count": 222,
      "valueType": "Float32",
      "valuesPerElement": 2
    },
    "color": {
      "byteOffset": 7112,
      "count": 222,
      "valueType": "UInt8",
      "valuesPerElement": 4
    }
  }
} 
```

