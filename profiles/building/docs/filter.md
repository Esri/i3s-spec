# Filter

The filter object which can be applied to a building scene layer.

### Related:

[building::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| **modelName** | string | Model name defines the filter. For example, if the modelName is Floor or Building the clients can build specific UI for this filter. Any other modelName is custom. This would be important for web scene viewer so they can identify filter that are not floor or others that they will have UI for. |
| **filterblocks** | [building::filterBlock](filterBlock.md)[] | Array of filter blocks defining the filter. A filter contains at least one filter block. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

