# Filter block

A filter block defines what elements will be filtered with a specific filter mode. It is not recommended to declare multiple filter blocks with the same filter mode, to ensure good performance on client applications. Filter blocks are contained in a filter for a building scene layer. Each filter includes at least one filter block.

### Related:

[building::filter](filter.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **title** | string | Title of the filter block. |
| **filterMode** | [building::filterMode](filterMode.md) | Filter mode defines how features are drawn. For example, the filter mode of a filter can be solid or wire frame. |
| **filterExpression** | string | Filter query expression for a building scene layer. |
| filterAuthoringInfo | [building::filterAuthoringInfo](filterAuthoringInfo.md) | Authoring info used to generate user interface for authoring clients. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

