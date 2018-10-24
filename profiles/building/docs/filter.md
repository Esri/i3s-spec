# Filter

The filter object can be applied to a building scene layer. Filter allows client applications to reduce the drawn elements of a building to specific filter types and values.

### Related:

[building::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Global ID as unique identifier of the filter. |
| **name** | string | Name of the filter. |
| **description** | string | Description of the filter. |
| isDefaultFilter | boolean | Indicates if a filter is the default filter. Clients use the default filter to show the current state of a building. All elements in the 'created' phases are drawn, while elements in the 'demolished' phases are invisible. can build specific UI for this filter. The default filter is not shown in the UI and has no authoringInfo. |
| isVisible | boolean | Defines if a filter will be visible within the client application. Used to exclude filter that are overwritten from array of filters shown in the client application. |
| **filterBlocks** | [building::filterBlock](filterBlock.md)[] | Array of filter blocks defining the filter. A filter contains at least one filter block. |
| filterAuthoringInfo | [building::filterAuthoringInfo](filterAuthoringInfo.md) | Authoring info used to generate user interface for authoring clients. |

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
          "filterMode": "solid",
          "filterExpression": "CreatedPhase=1"
        }
      ]
    }
  ]
} 
```

