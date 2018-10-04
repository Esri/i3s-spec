# Filter authoring info for Building Scene Layer

The filter authoring info object contains metadata about the authoring process for creating a filter object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Includes properties such as enabled categories or slider.

### Related:

[bim::filterBlock](filterBlock.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Declares type or authoring infoilter style of type wire frame.<div>Must be:<ul><li>`checkbox`: Allows client to build UI using checkbox for each filter value presented to the user.</li></ul></div> |
| **filterTypes** | [bim::filterType](filterType.md) | Array of defined filter types. Each filter type has an array of filter values. |


*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer filter authoring info 

```json
 "" 
```

