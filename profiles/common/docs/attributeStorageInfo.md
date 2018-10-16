# I3S scene layer: attributeStorageInfo

An object that describes the structure of the binary attributeData resource of a node.

### Related:

[common::3DSceneLayer](3DSceneLayer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| key | string | The unique field identifier key. |
| name | string | The name of the field. |
| header | string[] | <div>Possible values for each array string:<ul><li>`property`: Should always be present and indicates the count of features in the attribute storage.</li><li>`valueType`: The element type of the attributeValues property, from UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64 or Float32, Float64.</li></ul></div> |

*Note: properties in **bold** are required*

