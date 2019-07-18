# materialTexture

The material texture definition.

### Related:

[cmn::materialDefinitions](materialDefinitions.cmn.md), [cmn::pbrMetallicRoughness](pbrMetallicRoughness.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **textureSetDefinitionId** | integer | The index in [layer.textureSetDefinitions](3DSceneLayer.cmn.md). |
| factor | number | The _normal texture_: scalar multiplier applied to each normal vector of the normal texture. For _occlusion texture_,scalar multiplier controlling the amount of occlusion applied. Default=`1` |

*Note: properties in **bold** are required*

