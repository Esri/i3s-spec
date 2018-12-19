# Geometry

This is the common container class for all types of geometry definitions used in I3S.

### Related:

[cmn::features](features.cmn.md), [cmn::featureData](featureData.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Unique ID of the geometry in this store. |
| type | string | The type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as an internal reference (GeometryReference), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded). |
| transformation | number[16] | 3D (4x4) transformation matrix expressed as a linear array of 16 values. |
| params | [geometryParams](geometryParams.cmn.md) | The parameters for a geometry, as an Embedded GeometryParams object, an ArrayBufferView, a GeometryReference object, or a SharedResourceReference object. |

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
  ]
} 
```

