# featureAttribute

Declaration of the attributes per feature in the geometry, such as feature ID or face range.

### Related:

[cmn::defaultGeometrySchema](defaultGeometrySchema.cmn.md), [cmn::featureData](featureData.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | [value](value.cmn.md) | ID of the feature attribute. |
| faceRange | [value](value.cmn.md) | Describes the face range of the feature attribute. |

### Examples 

#### Example: featureAttribute example 

```json
 {
  "id": {
    "valueType": "UInt64",
    "valuesPerElement": 1
  },
  "faceRange": {
    "valueType": "UInt32",
    "valuesPerElement": 2
  }
} 
```

