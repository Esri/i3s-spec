# BIM attribute statistics

Concatenated attribute statistics

### Related:

[bim::statsummary](statsummary.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | Attribute name |
| alias | string | Alias of the Attribute name. Can be empty if alias and name are identical |
| min | number | Minimum value (numeric attributes only) |
| max | number | Maximum value (numeric attributes only) |
| mostFrequentValues | integer[] | Most frequent unique integral value (if applicable for this attribute). Truncated to 256 entries |
| mostFrequentStrings | string[] | Most frequent unique string values (string attribute only). Truncated to 256 entries |
| **layerIds** | integer[] | List of sublayers where this attribute may be found |

*Note: properties in **bold** are required*

### Examples 

#### Example: `String` attribute 

```json
 {
  "name": "fournitures",
  "alias": "Meuble interieur",
  "mostFrequentStrings": [
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

#### Example: `integral` attribute 

```json
 {
  "name": "floor",
  "alias": "Etages",
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

