# I3S Scene Layer: statisticsInfo

Describes the statistics for the scene layer.

### Related:

[3DSceneLayer.cmn](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | Key indicating the resource of the statistics. For example f_1 for  ./statistics/f_1 |
| **name** | string | Name of the field of the statistical information. |
| **href** | string | The URL to the statistics information. For example ./statistics/f_1 |

*Note: properties in **bold** are required*

### Examples 

#### Example: statisticsInfo for 3D Object scene layer. 

```json
 {
  "statisticsInfo": [
    {
      "key": "f_1",
      "name": "Category",
      "href": "./statistics/f_1"
    },
    {
      "key": "f_2",
      "name": "Family",
      "href": "./statistics/f_2"
    },
    {
      "key": "f_3",
      "name": "FamilyType",
      "href": "./statistics/f_3"
    }
  ]
} 
```

