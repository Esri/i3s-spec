# geometryReferenceParams

Instead of owning a geometry exclusively, a feature can reference part of a geometry defined for the node. This allows to pre-aggregate geometries for many features. In this case, geometryReferenceParams must be used.  This allows for a single geometry to be shared(referenced) by multiple features.

### Related:

[cmn::geometryParams](geometryParams.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **href** | string | In-document absolute reference to full geometry definition (Embedded or ArrayBufferView) using the I3S json pointer syntax. For example, /geometryData/1.  See [OGC I3S Specification](https://docs.opengeospatial.org/cs/17-014r5/17-014r5.html#28) for more info. |
| type | string | The type denotes whether the following geometry is defined by using array buffer views (arrayBufferView), as an internal reference (geometryReference), as a reference to a shared Resource (sharedResourceReference) or embedded (Embedded). |
| faceRange | number[] | Inclusive range of faces in this geometry that belongs to this feature. |
| lodGeometry | boolean | True if this geometry participates in an LoD tree. Always true in mesh-pyramids profile. |

*Note: properties in **bold** are required*

### Examples 

#### Example: geomtryReferenceParams 

```json
 {
  "type": "GeometryReference",
  "href": "/geometryData/1",
  "faceRange": [
    0,
    195
  ]
} 
```

