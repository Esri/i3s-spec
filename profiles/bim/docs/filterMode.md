# Filter mode for Building Scene Layer

The filter mode object which can be applied to a building scene layer. A filter mode can use hidden or wire frame style.

### Related:

[bim::filter](filter.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | Name of the filter mode. Unique identifier of the filter mode. |
| label | string | Name of the filter. |
| filterStyle | [bim::filterStyle](filterStyle.md) | FilterStyle used for the mode wire frame or hide |
| **filterExpression** | string | Filter query expression for a building scene layer. From this expression clients need to be able to rebuild the UI. For example if the field (filter type) is wall the UI needs to show all unique values of the filter type wall. |
| **filterAuthoringInfo** | [bim::filterAuthoringInfo](filterAuthoringInfo.md) | List of visible filter types of the filter. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

