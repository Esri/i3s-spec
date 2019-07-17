# domain (i.e. field)

Attribute domains are rules that describe the legal values of a field type, providing a method for enforcing data integrity. Attribute domains are used to constrain the values allowed in a particular attribute. Using domains helps ensure data integrity by limiting the choice of values for a particular field. Attribute domains can be shared across scene layers like 3D Object scene layers or Building Scene Layers.

### Related:

[cmn::field](field.cmn.md), [cmn::field](field.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Type of domain<div>Possible values are:<ul><li>`codedValue`</li><li>`range`</li></ul></div> |
| **name** | string | Name of the domain. Must be unique per Scene Layer. |
| description | string | Description of the domain |
| fieldType | string | The field type is the type of attribute field with which the domain can be associated.<div>Possible values are:<ul><li>`esriFieldTypeDate`</li><li>`esriFieldTypeSingle`</li><li>`esriFieldTypeDouble`</li><li>`esriFieldTypeInteger`</li><li>`esriFieldTypeSmallInteger`</li><li>`esriFieldTypeString`</li></ul></div> |
| range | number[2] | Range of the domain. Only numeric types are possible. |
| codedValues | [domainCodedValue](domainCodedValue.cmn.md)[] | Range of the domain. Only string types are possible. |
| mergePolicy | string | Merge policy for the domain. Not used by Scene Layers.<div>Possible values are:<ul><li>`esriMPTDefaultValue`</li><li>`esriMPTSumValues`</li><li>`esriMPTAreaWeighted`</li></ul></div> |
| splitPolicy | string | Split policy for the domain. Not used by Scene Layers. <div>Possible values are:<ul><li>`esriSPTGeometryRatio`</li><li>`esriSPTDuplicate`</li><li>`esriSPTDefaultValue`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: domain 

```json
 {
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
```

