# Building scene layer attribute statistics

Concatenated attribute statistics. If needed, the type of the attribute (string or number) may be inferred from `mostFrequentValues` and/or `min`/`max` fields.

### Related:

[bld::statsummary](statsummary.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **fieldName** | string | Name of the field. |
| label | string | Label of the field name. If label is empty, the label and fieldName are identical. |
| modelName | string | A fixed string of building information, similar to a filter. Used by client applications to define specific behavior for the modelName. The [default filter types](description/defaultFilterTypes.bld.0106.md) define the modelName for the attribute statistics.<div>Possible values are:<ul><li>`category`</li><li>`family`</li><li>`familyType`</li><li>`bldgLevel`</li><li>`createdPhase`</li><li>`demolishedPhase`</li><li>`discipline`</li><li>`assemblyCode`</li><li>`omniClass`</li><li>`systemClassifications`</li><li>`systemType`</li><li>`systemName`</li><li>`systemClass`</li><li>`custom`</li></ul></div> |
| min | number | Minimum value. Numeric attributes only. |
| max | number | Maximum value. Numeric attributes only. |
| mostFrequentValues | integer[], string[] | Most frequent value, if applicable for this attribute. Truncated to 256 entries. |
| **subLayerIds** | integer[] | List of sublayers where this attribute may be found. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: `String` attribute with `modelName` to specify filterable semantic 

```json
 {
  "fieldName": "fournitures",
  "label": "Meuble interieur",
  "modelName": "custom",
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

#### Example: `Integral` attribute with `modelName` to specify filterable semantic  

```json
 {
  "fieldName": "floor",
  "label": "Etages",
  "modelName": "bldgLevel",
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

#### Example: `Float` attribute 

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

