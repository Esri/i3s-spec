# fields

A collection of objects describing each attribute field.

### Related:

[3DSceneLayer.cmn](3DSceneLayer.cmn.md), [layer.pcsl](layer.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | Name of the field. |
| **type** | string | Type of the field.<div>Possible values are:<ul><li>`esriFieldTypeDate`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeGUID`</li><li>`esriFieldTypeGlobalID`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeOID`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li></ul></div> |
| alias | string | Alias of the field. |
| domain | [domain](domain.cmn.md) | Array of domains defined for a field. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Fields example 

```json
 {
  "name": "CreatedPhase",
  "type": "esriFieldTypeInteger",
  "alias": "CreatedPhase",
  "domain": {
    "type": "codedValue",
    "name": "Phases",
    "description": "Phases",
    "codedValues": [
      {
        "name": "Existing",
        "code": 0
      },
      {
        "name": "Baby Room Overhaul",
        "code": 1
      },
      {
        "name": "Roof Garden",
        "code": 2
      }
    ],
    "mergePolicy": "esriMPTDefaultValue",
    "splitPolicy": "esriSPTDefaultValue"
  }
} 
```

