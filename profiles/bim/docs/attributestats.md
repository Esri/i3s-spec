# BIM attribute statistics

Concatenated attribute statistics . Notes: if needed the type (string or number) of the attribute may be infer from the `mostFrequentValues` and/or `min`/`max` fields

### Related:

[bim::statsummary](statsummary.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **fieldname** | string | Name of the field. |
| label | string | Label of the field name. If label is empty the label and fieldName are identical. Labels are shown in the UI for filter types, for example. |
| modelName | string | Useful for building information such as filter or phases to be a fixed string. Used by client application to define specific behavior for the modelName _TODO: get the full list_<div>Possible values are:<ul><li>`floorId`</li><li>`buildingId`</li><li>`roomType`</li></ul></div> |
| min | number | Minimum value. Nnumeric attributes only. |
| max | number | Maximum value. Numeric attributes only. |
| mostFrequentValues | integer[], string[] | Most frequent value, if applicable for this attribute. Truncated to 256 entries. |
| **subLayerIds** | integer[] | List of sublayers where this attribute may be found. |

*Note: properties in **bold** are required*

### Examples 

#### Example: `String` attribute 

```json
 {
  "fieldName": "fournitures",
  "label": "Meuble interieur",
  "mostFrequentValues": [
    "chair",
    "table",
    "cubicle",
    "boxes"
  ],
  "subLayerIds": [
    10,
    4,
    5
  ]
} 
```

#### Example: `integral` attribute with `modelName` to specify filterable semantic  

```json
 {
  "fieldName": "floor",
  "label": "Etages",
  "modelName": "floorId",
  "mostFrequentValues": [
    1,
    2,
    3
  ],
  "subLayerIds": [
    10,
    15
  ]
} 
```

#### Example: `float` attribute 

```json
 {
  "fieldName": "diameter",
  "label": "Diametre de conduit",
  "min": 0.2566,
  "max": 2.256,
  "subLayerIds": [
    3,
    5
  ]
} 
```

