# I3S Scene Layer: attributeStorageInfo

An object that describes the structure of the binary attribute data resource of a node.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | The unique field identifier key. |
| **name** | string | The name of the field. |
| **header** | [headerValue](headerValue.cmn.md)[] |  |
| ordering | string[] | <div>Possible values for each array string:<ul><li>`attributeByteCounts`: Should only be present when working with string data types.</li><li>`attributeValues`: Should always be present. </li><li>`ObjectIds`</li></ul></div> |
| attributeValues | [value](value.cmn.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| attributeByteCounts | [value](value.cmn.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| objectIds | [value](value.cmn.md) | Stores the object-id values of each feature within the node. |

*Note: properties in **bold** are required*

### Examples 

#### Example: attributeStorageInfo for 3d object scene layer 

```json
 {
  "key": "f_2",
  "name": "Family",
  "header": [
    {
      "property": "count",
      "valueType": "UInt32"
    },
    {
      "property": "attributeValuesByteCount",
      "valueType": "UInt32"
    }
  ],
  "ordering": [
    "attributeByteCounts",
    "attributeValues"
  ],
  "attributeByteCounts": {
    "valueType": "UInt32",
    "valuesPerElement": 1
  },
  "attributeValues": {
    "valueType": "String",
    "encoding": "UTF-8",
    "valuesPerElement": 1
  }
} 
```

