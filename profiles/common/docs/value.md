# Value

Value for attributeByteCount, attributeValues and objectIds.

### Related:

[common::attributeStorageInfo](attributeStorageInfo.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **valueType** | string | Defines the value type. |
| encoding | string | Encoding method for the value. |
| valuesPerElement | number | Number of values per element. |

*Note: properties in **bold** are required*

### Examples 

#### Example: cachedDrawingInfo for 3D Object scene layer. 

```json
 {
  "attributeByteCounts": {
    "valueType": "UInt32",
    "valuesPerElement": 1
  },
  "attributeValues": {
    "valueType": "String",
    "encoding": "UTF-8",
    "valuesPerElement": 1
  },
  "objectIds": {
    "valueType": "UInt32",
    "valuesPerElement": 1
  }
} 
```

