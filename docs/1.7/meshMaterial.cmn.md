# meshMaterial

Mesh geometry for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **definition** | integer | The index in [layer.materialDefinitions](3DSceneLayer.cmn.md) array. |
| resource | integer | Locator ID for the material textures. i.e: `layers/0/nodes/{material.resource}/textures/{tex_name}`. Is **required** if material declares any textures. |
| texelCountHint | integer | Estimated number of texel for the highest resolution base color texture. i.e. `texture.mip0.width*texture.mip0.height`. Useful to estimate the resource cost of this node and/or texel-resolution based LOD switching. Ignored for un-textured meshes. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Texture material 

Texture(s) will be at `layers/0/nodes/6/textures/{tex_name}`. The `tex_name` is from the 5th material definition. For example, the base color texture set would be `layer.materialDefinition[4].pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId`. 

```json
 {
  "definition": 4,
  "resource": 6,
  "texelCountHint": 1048576
} 
```

