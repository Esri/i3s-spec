# Material definition

Feature-compatible with [glTF material](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#materials) (with the exception of emissive texture?)

### Related:

[meshv2::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| alphaMode | string | define the meaning of the alpha-channel/alpha-mask<div>Possible values are:<ul><li>`opaque`: The rendered output is fully opaque and any alpha value is ignored</li><li>`mask`: The rendered output is either fully opaque or fully transparent depending on the alpha value and the specified alpha cutoff value. This mode is used to simulate geometry such as tree leaves or wire fences.</li><li>`blend`: The rendered output is combined with the background using the normal painting operation (i.e. the Porter and Duff over operator).</li></ul></div> |
| alphaCutoff | number | The alpha cutoff value of the material (alphaMode=`mask`) default = `0.25` |
| doubleSided | boolean | Specifies whether the material is double sided. For lightning, the opposite normals will be used when original normals are facing away from the camera. default=`false` |
| normalTexture | [meshv2::materialtexture](materialtexture.md) | The normal map texture. |
| occlusionTexture | [meshv2::materialtexture](materialtexture.md) | The normal map texture. |
| emissiveTexture | [meshv2::materialtexture](materialtexture.md) | _TBD_: may not support this |
| emissiveFactor | number[3] | _TBD_: may not support this |
| pbrMetallicRoughness | [meshv2::pbrmetallicroughness](pbrmetallicroughness.md) | A set of parameter values that are used to define the metallic-roughness material model from Physically-Based Rendering (PBR) methodology. When not specified, all the default values of pbrMetallicRoughness apply. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Metal material 

```json
 {
  "alphaMode": "mask",
  "alphaCutoff": 0.25,
  "pbrMetallicRoughness": {
    "baseColorFactor": [
      0.5,
      0.5,
      0.5,
      1.0
    ],
    "baseColorTexture": {
      "textureSetDefinitionId": 0,
      "texCoord": 0
    },
    "metallicFactor": 1,
    "roughnessFactor": 1,
    "metallicRoughnessTexture": {
      "textureSetDefinitionId": 2,
      "texCoord": 1
    }
  },
  "normalTexture": {
    "textureSetDefinitionId": 1,
    "factor": 2.0,
    "texCoord": 1
  }
} 
```

