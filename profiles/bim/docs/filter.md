# Filter

The filter object which can be applied to a building scene layer.

### Related:

[bim::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| **modelName** | string | Model name defines the filter. For example, if the modelName is Floor or Building the clients can build specific UI for this filter. Any other modelName is custom. This would be important for web scene viewer so they can identify filter that are not floor or others that they will have UI for. |
| **filterMode** | [bim::filterMode](filterMode.md) | Filter mode defines how features are drawn. For example, the filter mode of a filter can be wire frame. |
| **filterExpression** | string | Filter query expression for a building scene layer. |
| filterAuthoringInfo | [bim::filterAuthoringInfo](filterAuthoringInfo.md) | Authoring info used to generate user interface for authoring clients. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

