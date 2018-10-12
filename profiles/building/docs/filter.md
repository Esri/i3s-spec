# Filter

The filter object can be applied to a building scene layer. Filter allows client applications to reduce the drawn elements of a building to specific filter types and values.

### Related:

[building::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| isDefaultFilter | boolean | Indicates if a filter is the default filter. Clients use the default filter to show the current state of a building. All elements in the 'created' phases are drawn, while elements in the 'demolished' phases are invisible. can build specific UI for this filter. The default filter is not shown in the UI and has no authoringInfo. |
| **filterBlocks** | [building::filterBlock](filterBlock.md)[] | Array of filter blocks defining the filter. A filter contains at least one filter block. |
| filterAuthoringInfo | [building::filterAuthoringInfo](filterAuthoringInfo.md) | Authoring info used to generate user interface for authoring clients. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

