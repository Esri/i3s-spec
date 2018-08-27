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
| **modelName** | string | Model name defines preset of the filter. For example if the modelName is Floor or Building the clients can build specific UI for this filter. Any other modelName is custom |
| **filterQuery** | string | Definition query setting the filter for a building scene layer. From this query clients need to be able to rebuild the UI. For example if the field (filter type) is wall the UI needs to show all unique values of the filter type wall. |
| **visibleFilterType** | string[] | List of visible filter types of the filter. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 "" 
```

