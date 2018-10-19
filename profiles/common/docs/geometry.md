# Geometry

This is the common container class for all types of geometry definitions used in I3S.

### Related:

[common::featureData](featureData.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Reference-able, unique ID of the Geometry in this store. |
| type | string | The type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as an internal reference (GeometryReference), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded). |
| transformation | number[] | 3D (4x4) transformation matrix expressed as a linear array of 16 values. |
| params | [common::geometryParams](../../common/docs/geometryParams.md) | The parameters for a geometry, as an Embedded GeometryParams object, an ArrayBufferView, a GeometryReference object, or a SharedResourceReference object.       |

*Note: properties in **bold** are required*

### Examples 

#### Example: info for point scene layer 

```json
 None 
```

#### Example:  info for 3D object scene layer 

```json
 None 
```

#### Example:  info for integrated mesh scene layer 

```json
 None 
```

