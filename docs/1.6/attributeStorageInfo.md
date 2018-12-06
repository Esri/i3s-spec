# I3S Scene Layer: attributeStorageInfo

An object that describes the structure of the binary attribute data resource of a node.

### Related:

[3DSceneLayer](3DSceneLayer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | The unique field identifier key. |
| **name** | string | The name of the field. |
| **header** | [headerValue](headerValue.md)[] |  |
| ordering | string[] | <div>Possible values for each array string:<ul><li>`attributeByteCounts`: Should only be present when working with string data types.</li><li>`attributeValues`: Should always be present. </li><li>`ObjectIds`</li></ul></div> |
| attributeValues | [value](value.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| attributeByteCounts | [value](value.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| objectIds | [value](value.md) | Stores the object-id values of each feature within the node. |

*Note: properties in **bold** are required*

### Examples 

#### Example: attributeStorageInfo for 3d object scene layer 

