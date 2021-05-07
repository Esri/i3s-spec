# filterBlock [building profile]

A filter block defines what elements will be filtered with a specific filter mode.  To ensure performance on client applications, it is not recommended to declare multiple filter blocks with the same filter mode. Filter blocks are contained in a filter for a building scene layer. Each filter includes at least one filter block.

### Related:

[bld::filter](filter.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **title** | string | Title of the filter block. |
| **filterMode** | [filterMode](filterMode.bld.md) | Filter mode defines how features are drawn. For example, the filter mode of a filter can be solid or wire frame. |
| **filterExpression** | string | Filter query expression for a building scene layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Filter block 

```json
 {
  "title": "Created Phase 1",
  "filterMode": {
    "type": "solid"
  },
  "filterExpression": "CreatedPhase=1"
} 
```

