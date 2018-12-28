# VestedGeometryParams

This object extends GeometryParams and is the abstract parent object for all concrete ('vested') GeometryParams objects that directly contain a geometry definition, either as an ArrayBufferView or as an embedded geometry.

### Related:

[cmn::geometryParams](geometryParams.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| type | string | The primitive type of the geometry defined through a VestedGeometryParams object. One of {*triangles*, lines, points} |
| topology | string | Declares the typology of embedded geometry attributes or those in a geometry resources. When 'Indexed', the indices (faces) must also be declared.<div>Possible values are:<ul><li>`PerAttributeArray`</li><li>`InterleavedArray`</li><li>`Indexed`</li></ul></div> |
| vertexAttributes | [vertexAttribute](vertexAttribute.cmn.md) | A list of Vertex Attributes, such as Position, Normals, UV coordinates, and their definitions. While there are standard keywords such as position, uv0..uv9, normal and color, this is an open, extendable list. |
| faces | [geometryAttribute](geometryAttribute.cmn.md) | A list of Face Attributes, such as indices to build faces, and their definitions. While there are standard keywords such as position, uv0..uv9, normal and color, this is an open, extendable list. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: vestedGeometryParams 

```json
 {
  "type": "triangles",
  "vertexAttributes": {
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
} 
```

