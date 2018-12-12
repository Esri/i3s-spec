# Filter Type

The file authoring information for a filter, including the filter type and its value settings.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| oldProp | string | Original |
| **newProp** | string[], integer[], number[] | New to 1.7 |

*Note: properties in **bold** are required*

### Examples 

#### Example: test changes in 1.7 

```json
 {
  "oldProp": "this is a 1.6 property",
  "newProp": [
    1,
    2,
    3,
    4
  ]
} 
```

