# PBR Metalic Roughness material model

Feature-compatible with [glTF material](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materials) (with the exception of emissive texture?)

### Related:

[cmn::materialDefinitions](materialDefinitions.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| baseColorFactor | number[4] | The material's base color factor. default=`[1,1,1,1]` |
| baseColorTexture | [materialTexture](materialTexture.cmn.md) | The base color texture. |
| metallicFactor | number | the metalness of the material. default=`1.0` |
| roughnessFactor | number | the roughness of the material. default=`1.0` |
| metallicRoughnessTexture | [materialTexture](materialTexture.cmn.md) | the metallic-roughness texture. |

