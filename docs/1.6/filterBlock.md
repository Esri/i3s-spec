# Filter Block

A filter block defines what elements will be filtered with a specific filter mode.  To ensure performance on client applications, it is not recommended to declare multiple filter blocks with the same filter mode. Filter blocks are contained in a filter for a building scene layer. Each filter includes at least one filter block.

### Related:

[filter](filter.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **title** | string | Title of the filter block. |
| **filterMode** | [filterMode](filterMode.md) | Filter mode defines how features are drawn. For example, the filter mode of a filter can be solid or wire frame. |
| **filterExpression** | string | Filter query expression for a building scene layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Filter block 

