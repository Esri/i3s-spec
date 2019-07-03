# Filter Type

The file authoring information for a filter, including the filter type and its value settings.

### Related:

[bld::filterBlockAuthoringInfo](filterBlockAuthoringInfo.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **filterType** | string | Represents the filter type name. Name is a unique identifier. |
| **filterValues** | string[] | Array of filter values. Filter values are the attributes that can be stored for individual fields in a layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer filter type 

```json
 {
  "filterType": "CreatedPhase",
  "filterValues": [
    "1"
  ]
} 
```

