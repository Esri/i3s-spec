# Filter authoring info for building scene layer

The filter authoring info object contains metadata about the authoring process for creating a filter block object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it.

### Related:

[building::filterBlock](filterBlock.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Declares type or filter authoring info.<div>Must be:<ul><li>`checkbox`: Client UI with checkbox representation for each filter type and filter value.</li></ul></div> |
| **filterTypes** | [building::filterType](filterType.md) | Array of defined filter types. Each filter type has an array of filter values. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer filter authoring info 

```json
 "" 
```

