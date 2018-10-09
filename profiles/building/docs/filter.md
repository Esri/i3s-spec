# Filter

The filter object which can be applied to a building scene layer. Filter allow client application to reduce the shown elements of a building to specific filter types and values.

### Related:

[building::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| modelName | string | Model name of the filter. Used by client applications to define special behavior for a give modelName. For example, the modelName 'currentState' describes the default filter all ArcGIS client application are expecting to show the current state of a building. In the 'currentState' filer all elements in the created phases are drawn while elements in the demolished phases are invisible.can build specific UI for this filter. |
| **filterBlocks** | [building::filterBlock](filterBlock.md)[] | Array of filter blocks defining the filter. A filter contains at least one filter block. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

