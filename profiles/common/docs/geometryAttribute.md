# geometryAttribute

Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face.

### Related:

[common::vestedGeometryParams](vestedGeometryParams.md), [common::defaultGeometrySchema](defaultGeometrySchema.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| byteOffset | number | The starting byte position where the required bytes begin. Only used with the Geometry **ArrayBufferView**. |
| count | number | The number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read. Only used with the Geometry **ArrayBufferView**. |
| **valueType** | string | The element type, from {UInt8, UInt16, Int16, Int32, Int64 or Float32, Float64}. |
| **valuesPerElement** | number | The short number of values need to make a valid element (such as 3 for a xyz position). |
| values | number[] | The short number of values need to make a valid element (such as 3 for a xyz position). |
| componentIndices | number[] | An optional array that indicates how many of the elements in this view belong to the first, second and consecutive components of the geometry. The number of entries in this array, when present, has to be equal to the number of entries in the components List of the enclosing Geometry object. The entire field is optional when no components have been declared for this Geometry. |

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

#### Example: Vertex attributes for integrated mesh 

```json
 {
  "vertexAttributes": {
    "position": {
      "byteOffset": 8,
      "count": 23622,
      "valueType": "Float32",
      "valuesPerElement": 3
    },
    "normal": {
      "byteOffset": 283472,
      "count": 23622,
      "valueType": "Float32",
      "valuesPerElement": 3
    },
    "uv0": {
      "byteOffset": 566936,
      "count": 23622,
      "valueType": "Float32",
      "valuesPerElement": 2
    },
    "color": {
      "byteOffset": 755912,
      "count": 23622,
      "valueType": "UInt8",
      "valuesPerElement": 4
    }
  }
} 
```

