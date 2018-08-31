# FeatureID attribute

FeatureID helps to indentify part of mesh from belonging to a particular GIS `feature`. This ID may be used to query additional information from a `FeatureService`

### Related:

[meshv2::geometrybuffer](geometrybuffer.md), [meshv2::instancebuffer](instancebuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | A feature integer ID<div>Possible values are:<ul><li>`UInt16`</li><li>`UInt32`</li><li>`UInt64`</li></ul></div> |
| **component** | integer | must be 1 |
| encoding | string | No encoding<div>Possible values are:<ul><li>`none`: default and only value supported</li></ul></div> |
| binding | string | binding for each featureID<div>Possible values are:<ul><li>`per-vertex`: default.</li><li>`per-face`: Feature ID is per triangle. (`topology` must be `triangle`)</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Feature_id less than 65k, per-vertex 

```json
 {
  "featureId": {
    "type": "UInt16",
    "component": 1
  }
} 
```

#### Example: Feature_id per-face 

```json
 {
  "featureId": {
    "type": "UInt32",
    "component": 1,
    "binding": "per-face"
  }
} 
```

