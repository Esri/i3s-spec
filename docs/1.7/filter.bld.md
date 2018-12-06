# Filter

The filter object can be applied to a building scene layer. Filter allows client applications to reduce the drawn elements of a building to specific types and values.

### Related:

[layer.bld](layer.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Global ID as unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| isDefaultFilter | boolean | Indicates if a filter is the default filter. Clients use the default filter to show the current state of a building. For example, if 'created' is the default filter, all elements in the 'created' phases are drawn, while elements in the 'demolished' phases are invisible.  The default filter is not shown in the UI and does not have Authoring Info. (Can build specific UI for this filter) |
| isVisible | boolean | Defines if a filter is visible within the client application. Used to exclude filters that are overwritten from a group of filters shown in the client application. |
| **filterBlocks** | [filterBlock](filterBlock.bld.md)[] | Array of filter blocks defining the filter. A filter contains at least one filter block. |
| filterAuthoringInfo | [filterAuthoringInfo](filterAuthoringInfo.bld.md) | Authoring Info used to generate user interface for authoring clients. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 {
  "filters": [
    {
      "id": "6339E293-B52E-4F49-899A-E177DEC0D644",
      "name": "Default",
      "description": "Filter by all created phases.",
      "isDefaultFilter": true,
      "isVisible": false,
      "filterBlocks": [
        {
          "title": "Created Phase 1",
          "filterMode": {
            "type": "solid"
          },
          "filterExpression": "CreatedPhase=1"
        }
      ]
    }
  ]
} 
```

