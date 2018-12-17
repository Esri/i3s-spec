# Filter Type

The file authoring information for a filter, including the filter type and its value settings.

### Related:

[testing::test](test.testing.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| oldProp1 | string | Original 1.6 |
| oldProp2 | string | Original 1.6 |
| objProp1 | [test](test.testing.md) | The file authoring information for a filter, including the filter type and its value settings. |
| **newProp** | string[2:4], integer[2:4], number[2:4] | In 1.7 |
| objProp | [test](test.testing.md) | The file authoring information for a filter, including the filter type and its value settings. |

*Note: properties in **bold** are required*

### Examples 

#### Example: test changes in 1.7 

```json
 {
  "oldProp1": "this is a 1.6 property",
  "newProp": [
    1,
    2,
    3,
    4
  ]
} 
```

