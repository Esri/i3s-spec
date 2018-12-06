# Filter Authoring Info for Filter Blocks

The filter authoring info object contains metadata about the authoring process for creating a filter block object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it.

### Related:

[filterAuthoringInfo.bld](filterAuthoringInfo.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **filterTypes** | [filterType](filterType.bld.md) | Array of defined filter types. Each filter type has an array of filter values. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer filter block authoring info 

```json
 "" 
```

