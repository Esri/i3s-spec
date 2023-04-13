# geometryFeatureID

FeatureID attribute helps to identify a part of a mesh belonging to a particular GIS `feature`. This ID may be used to query additional information from a `FeatureService`. For example, if a 3D Object scene layer has a building with ID 1 all triangles in the faceRange for this feature will belong to this feature_id.

### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | A feature integer ID.<div>Possible values are:<ul><li>`UInt16`</li><li>`UInt32`</li><li>`UInt64`</li></ul></div> |
| **component** | integer | must be 1 |
| encoding | string | <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-feature`: Default for `geometryBuffer.featureId`. One `feature_id` per feature. **Requirement**: a) [`FaceRange`](geometryFaceRange.cmn.md) attribute must be **present** to map features-to-faces and vertices must _be grouped by feature_. **OR** b) [`compressedAttribute.attributes`](compressedAttributes.cmn.md) has `feature-index`. Important: a) and b) are mutually exclusive.</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Feature_id less than 65k, per-feature. `faceRange` attribute will be required 

```json
 {
  "type": "UInt16",
  "component": 1
} 
```

