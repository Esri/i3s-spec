# I3S Attribute (i.e. Field) domain

see [A quick tour of attribute domains](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/an-overview-of-attribute-domains.htm) for more info on domains

### Related:

[common::field](field.md), [common::domains](domains.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | type of domain<div>Possible values are:<ul><li>`codedValue`</li><li>`range`</li></ul></div> |
| **name** | string | name of the domain. must be unique per Scene Layer |
| **fieldType** | string | The field type is the type of attribute field with which the domain can be associated.<div>Possible values are:<ul><li>`esriFieldTypeDate`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li></ul></div> |
| range | number[2] | Range of the domain (numeric types only) |
| codedValues | [common::domainCodedValue](domainCodedValue.md)[] | Range of the domain (string types only) |
| mergePolicy | string | Merge policy for the domain. (unused by Scene Layers) <div>Possible values are:<ul><li>`esriMPTDefaultValue`</li><li>`esriMPTSumValues`</li><li>`esriMPTAreaWeighted`</li></ul></div> |
| splitPolicy | string | Split policy for the domain. (unused by Scene Layers) <div>Possible values are:<ul><li>`esriSPTGeometryRatio`</li><li>`esriSPTDuplicate`</li><li>`esriSPTDefaultValue`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: todo 

```json
 {
  "type": "range",
  "name": "RDOM_1",
  "fieldType": "esriFieldTypeInteger",
  "range": [
    1,
    50
  ]
} 
```

