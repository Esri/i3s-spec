# BIM Statistics

Statistics for all BIM sublayers

### Related:

[bim::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **summary** | [bim::attributestats](attributestats.md)[] | Per-attribute statistics for all sublayers  |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer statistics 

```json
 {
  "summary": [
    {
      "name": "floor",
      "alias": "Etage",
      "modelName": "floorId",
      "mostFrequentValues": [
        1,
        2,
        5,
        4
      ],
      "layerIds": [
        0,
        2,
        3,
        5,
        6,
        10
      ]
    },
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
    },
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
  ]
} 
```

