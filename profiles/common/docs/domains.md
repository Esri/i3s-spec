# I3S Domain definition resource

see [A quick tour of attribute domains](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/an-overview-of-attribute-domains.htm) for more info on domains

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **domains** | [common::domain](domain.md)[] | Array of all available domains for this layer |

*Note: properties in **bold** are required*

### Examples 

#### Example: Example 1 

```json
 {
  "domains": [
    {
      "type": "range",
      "name": "RDOM_1",
      "fieldType": "esriFieldTypeInteger",
      "range": [
        1,
        50
      ],
      "mergePolicy": "esriMPTDefaultValue",
      "splitPolicy": "esriSPTDefaultValue"
    },
    {
      "type": "range",
      "name": "RDOM_3",
      "fieldType": "esriFieldTypeDouble",
      "range": [
        100,
        150.5
      ],
      "mergePolicy": "esriMPTDefaultValue",
      "splitPolicy": "esriSPTDefaultValue"
    },
    {
      "type": "codedValue",
      "name": "CDOM_1",
      "fieldType": "esriFieldTypeDouble",
      "codedValues": [
        {
          "name": "code 1 description",
          "code": 1
        },
        {
          "name": "code 1.5 description",
          "code": 1.5
        },
        {
          "name": "code 2 description",
          "code": 2
        },
        {
          "name": "code 2.5 description",
          "code": 2.5
        }
      ],
      "mergePolicy": "esriMPTDefaultValue",
      "splitPolicy": "esriSPTDefaultValue"
    }
  ]
} 
```

