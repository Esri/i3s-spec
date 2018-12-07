# GeometryReferenceParams

Instead of owning a Geometry exclusively, a Feature can reference part of a Geometry defined for the node. This allows to pre-aggregate Geometries for many features. In this case, GeometryReferenceParams must be used.

### Related:

[cmn::geometryParams](geometryParams.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **href** | string | In-document absolute reference to full geometry definition (Embedded or ArrayBufferView) using the I3S json pointer syntax. For example /geometryData/1 |
| type | string | The type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as an internal reference (GeometryReference), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded). |
| faceRange | number[] | Inclusive range of faces in this geometry that belongs to this feature. |
| lodGeometry | boolean | True if this geometry participates in an LoD tree. Always true in mesh-pyramids profile. |

*Note: properties in **bold** are required*

### Examples 

#### Example: geomtryReferenceParams 

```json
 {
  "type": "GeometryReference",
  "params": {
    "$ref": "/geometryData/1",
    "faceRange": [
      0,
      195
    ]
  }
} 
```

