# Filters for Building Scene Layer

The filter object which can be applied to a building scene layer.

### Related:

[bim::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| **modelName** | string | Model name defines the filter. For example, if the modelName is Floor or Building the clients can build specific UI for this filter. Any other modelName is custom. This would be important for web scene viewer so they can identify filter that are not floor or others that they will have UI for. |
| **filterMode** | [bim::filterMode](filterMode.md) | Filter mode that defines how features are drawn. |
| **filterExpression** | string | Filter query expression for a building scene layer. From this expression clients need to be able to rebuild the UI. For example if the field (filter type) is wall the UI needs to show all unique values of the filter type wall. |
| filterAuthoringInfo | [bim::filterAuthoringInfo](filterAuthoringInfo.md) | List of visible filter types of the filter. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

