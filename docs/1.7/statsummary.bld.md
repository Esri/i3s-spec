# Building scene layer Statistics

Statistics for all building scene layer sublayers. Captures statistical information for each field in the building scene layer and the sublayers containing this fields.

### Related:

[layer.bld](layer.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **summary** | [attributestats](attributestats.bld.md)[] | Per-attribute statistics for all sublayers  |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer statistics 

```json
 {
  "summary": [
    {
      "fieldName": "floor",
      "label": "Etage",
      "modelName": "floorId",
      "mostFrequentValues": [
        1,
        2,
        5,
        4
      ],
      "subLayerIds": [
        0,
        2,
        3,
        5,
        6,
        10
      ]
    },
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
    },
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
  ]
} 
```

