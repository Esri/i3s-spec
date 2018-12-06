# Geometry

This is the common container class for all types of geometry definitions used in I3S.

### Related:

[features](features.md), [featureData](featureData.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Unique ID of the geometry in this store. |
| type | string | The type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as an internal reference (GeometryReference), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded). |
| transformation | number[] | 3D (4x4) transformation matrix expressed as a linear array of 16 values. |
| params | [geometryParams](geometryParams.md) | The parameters for a geometry, as an Embedded GeometryParams object, an ArrayBufferView, a GeometryReference object, or a SharedResourceReference object.       |

*Note: properties in **bold** are required*

### Examples 

#### Example:  Geometry 

```json
 {
  "id": 0,
  "type": "ArrayBufferView",
  "transformation": [
    1.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0
  ],
  "params": {
    "type": "triangles",
    "material": "/materialDefinitions/Mat0",
    "texture": "/textureDefinitions/0",
    "vertexAttributes": {
      "position": {
        "byteOffset": 8,
        "count": 324,
        "valueType": "Float32",
        "valuesPerElement": 3
      },
      "normal": {
        "byteOffset": 3896,
        "count": 324,
        "valueType": "Float32",
        "valuesPerElement": 3
      },
      "uv0": {
        "byteOffset": 7784,
        "count": 324,
        "valueType": "Float32",
        "valuesPerElement": 2
      },
      "color": {
        "byteOffset": 10376,
        "count": 324,
        "valueType": "UInt8",
        "valuesPerElement": 4
      }
    },
    "featureAttributes": {
      "id": {
        "byteOffset": 11672,
        "count": 1,
        "valueType": "UInt64",
        "valuesPerElement": 1
      },
      "faceRange": {
        "byteOffset": 11680,
        "count": 1,
        "valueType": "UInt32",
        "valuesPerElement": 2
      }
    }
  }
} 
```

