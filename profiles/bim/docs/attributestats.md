# BIM attribute statistics

Concatenated attribute statistics . Notes: if needed the type (string or number) of the attribute may be infer from the `mostFrequentValues` and/or `min`/`max` fields

### Related:

[bim::statsummary](statsummary.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | Attribute name |
| alias | string | Alias of the Attribute name. Can be empty if alias and name are identical |
| modelName | string | Useful fro BIM filters to map attribute semantic to attribute name (i.e. GDB fields). _TODO: get the full list_<div>Possible values are:<ul><li>`floorId`</li><li>`buildingId`</li><li>`roomType`</li></ul></div> |
| min | number | Minimum value (numeric attributes only) |
| max | number | Maximum value (numeric attributes only) |
| mostFrequentValues | integer[], string[] | Most frequent value (if applicable for this attribute). Truncated to 256 entries |
| **layerIds** | integer[] | List of sublayers where this attribute may be found |

*Note: properties in **bold** are required*

### Examples 

#### Example: `String` attribute 

```json
 {
  "name": "fournitures",
  "alias": "Meuble interieur",
  "mostFrequentValues": [
    "chair",
    "table",
    "cubicle",
    "boxes"
  ],
  "layerIds": [
    10,
    4,
    5
  ]
} 
```

#### Example: `integral` attribute with `modelName` to specify filterable semantic  

```json
 {
  "name": "floor",
  "alias": "Etages",
  "modelName": "floorId",
  "mostFrequentValues": [
    1,
    2,
    3
  ],
  "layerIds": [
    10,
    15
  ]
} 
```

#### Example: `float` attribute 

```json
 {
  "name": "diameter",
  "alias": "Diametre de conduit",
  "min": 0.2566,
  "max": 2.256,
  "layerIds": [
    3,
    5
  ]
} 
```

