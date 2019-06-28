# Filter Authoring Info for building scene layer

The filter authoring info object contains metadata about the authoring process for creating a filter object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed with an authoring client, the selections are remembered. Non-authoring clients can ignore it.

### Related:

[bld::filter](filter.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Declares type or filter authoring info.<div>Must be:<ul><li>`checkbox`: Client UI with checkbox representation for each filter type and filter value.</li></ul></div> |
| **filterBlocks** | [filterBlockAuthoringInfo](filterBlockAuthoringInfo.bld.md)[] | Array of filter block authoring info. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer filter authoring info 

```json
 {
  "type": "checkbox",
  "filterBlocks": [
    {
      "filterTypes": [
        {
          "filterType": "BldgLevel",
          "filterValues": [
            "3"
          ]
        },
        {
          "filterType": "CreatedPhase",
          "filterValues": [
            "1"
          ]
        }
      ]
    }
  ]
} 
```

