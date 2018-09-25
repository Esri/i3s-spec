# Filter authoring info for Building Scene Layer

The filter authoring info object contains metadata about the authoring process for creating a filter object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Includes properties such as enabled categories or slider.

### Related:

[bim::filter](filter.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Declares type or authoring infoilter style of type wire frame.<div>Must be:<ul><li>`checkbox`: Allows client to build UI using checkbox for each filter value presented to the user.</li></ul></div> |
| filterValue | string[] | Array of defined filter values. Represents a value that a filter type can have. Filter values are the attributes that can be stored for individual fields in a layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer filter authoring info 

```json
 "" 
```

