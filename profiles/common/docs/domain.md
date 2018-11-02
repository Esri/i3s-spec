# I3S Attribute (i.e. Field) domain

See [a quick tour of attribute domains](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/an-overview-of-attribute-domains.htm) for more info on domains.

### Related:

[common::field](field.md), [common::field](field.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Type of domain<div>Possible values are:<ul><li>`codedValue`</li><li>`range`</li></ul></div> |
| **name** | string | Name of the domain. Must be unique per Scene Layer. |
| **fieldType** | string | The field type is the type of attribute field with which the domain can be associated.<div>Possible values are:<ul><li>`esriFieldTypeDate`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li></ul></div> |
| range | number[2] | Range of the domain (numeric types only) |
| codedValues | [common::domainCodedValue](domainCodedValue.md)[] | Range of the domain (string types only) |
| mergePolicy | string | Merge policy for the domain. (unused by Scene Layers) <div>Possible values are:<ul><li>`esriMPTDefaultValue`</li><li>`esriMPTSumValues`</li><li>`esriMPTAreaWeighted`</li></ul></div> |
| splitPolicy | string | Split policy for the domain. (unused by Scene Layers) <div>Possible values are:<ul><li>`esriSPTGeometryRatio`</li><li>`esriSPTDuplicate`</li><li>`esriSPTDefaultValue`</li></ul></div> |

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

