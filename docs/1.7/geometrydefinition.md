# Mesh definition



### Related:

[3DSceneLayer](3DSceneLayer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| topology | string | <div>Must be:<ul><li>`triangle`</li></ul></div> |
| **geometryBuffers** | [geometrybuffer](geometrybuffer.md)[1:2] | Array of geometry representation(s) for this class of mesh. When multiple representations are listed, Clients should select the most compact one (e.g. Draco compressed mesh) they support. Length must be 1 or 2 |

*Note: properties in **bold** are required*

### Examples 

#### Example: Definition for a v1.6-equivalent geometry buffer and draco compressed geometry buffer 

