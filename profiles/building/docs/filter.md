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
| modelName | string | Model name of the filter. Used by client applications to define special behavior. For example, the modelName 'currentState' describes the default filter for all ArcGIS client applications expect a building to have a current state. In the 'currentState' filter, all elements in the 'created' phases are drawn, while elements in the 'demolished' phases are invisible. can build specific UI for this filter. |
| **filterBlocks** | [building::filterBlock](filterBlock.md)[] | Array of filter blocks defining the filter. A filter contains at least one filter block. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

