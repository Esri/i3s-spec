# GeometryParams

The abstract parent object for all GeometryParams classes (GeometryReferenceParams, VestedGeometryParamas, SingleComponentParams). It does not have properties of its own.

### Related:

[cmn::geometry](geometry.cmn.md)
### oneOf:

- [geometryReferenceParams](geometryReferenceParams.cmn.md)
- [vestedGeometryParams](vestedGeometryParams.cmn.md)
- [singleComponentParams](singleComponentParams.cmn.md)


### Examples 

#### Example: info for point scene layer 

```json
 None 
```

#### Example:  info for 3D object scene layer 

```json
 {
  "params": {
    "type": "triangles",
    "material": "/materialDefinitions/Mat525",
    "texture": "/textureDefinitions/525",
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
} 
```

#### Example:  info for integrated mesh scene layer 

```json
 {
  "id": 1,
  "type": "ArrayBufferView",
  "params": {
    "type": "triangles",
    "material": "/materialDefinitions/Mat525",
    "texture": "/textureDefinitions/525",
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
    },
    "featureAttributes": {
      "id": {
        "byteOffset": 8000,
        "count": 1,
        "valueType": "UInt64",
        "valuesPerElement": 1
      },
      "faceRange": {
        "byteOffset": 8008,
        "count": 1,
        "valueType": "UInt32",
        "valuesPerElement": 2
      }
    }
  }
} 
```

