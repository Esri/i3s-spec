# FeatureID attribute

FeatureID helps to indentify part of mesh from belonging to a particular GIS `feature`. This ID may be used to query additional information from a `FeatureService`.  Spec v1.7 only supports triangle.

### Related:

[cmn::geometrybuffer](geometrybuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | A feature integer ID<div>Possible values are:<ul><li>`UInt16`</li><li>`UInt32`</li><li>`UInt64`</li></ul></div> |
| **component** | integer | must be 1 |
| encoding | string | <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-feature`: Default for `geometryBuffer.featureId`. One `feature_id` per feature. **Requirement**: a) [`FaceRange`](geometryfacerange.md) attribute must be present** to map features-to-faces and vertices must _be grouped by feature_ **OR** b) [`compressedAttribute.attributes`](compressedAttributes.md) has `uvRegionIndex`. Important: a) and b) are mutually exlusive</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Feature_id less than 65k, per-feature. `faceRange` attribute will be required 

```json
 {
  "type": "UInt16",
  "component": 1
} 
```

