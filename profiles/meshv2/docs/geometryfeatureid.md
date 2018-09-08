# FeatureID attribute

FeatureID helps to indentify part of mesh from belonging to a particular GIS `feature`. This ID may be used to query additional information from a `FeatureService`. _TBD_: meaning when topology is `point` or `line` 

### Related:

[meshv2::instancebuffer](instancebuffer.md), [meshv2::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | A feature integer ID<div>Possible values are:<ul><li>`UInt16`</li><li>`UInt32`</li><li>`UInt64`</li></ul></div> |
| **component** | integer | must be 1 |
| encoding | string | <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Possible values are:<ul><li>`per-feature`: Default for `geometryBuffer.featureId`. One `feature_id` per feature. **[`FaceRange`](geometryfacerange.md) attribute must be present** to map features-to-faces and vertices must _be grouped by feature_ </li><li>`per-face`</li><li>`per-instance`: Default and only valid value for `instanceBuffer.featureId` . **cannot** be used in `geometryBuffer.featureId`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Feature_id less than 65k, per-feature. `faceRange` attribute will be required 

```json
 {
  "featureId": {
    "type": "UInt16",
    "component": 1
  }
} 
```

