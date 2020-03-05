# meshMaterial

Mesh geometry for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **definition** | integer | The index in [layer.materialDefinitions](3DSceneLayer.cmn.md) array. |
| resource | integer | Resource id for the material textures is **required** if material declares any textures. i.e: `layers/0/nodes/{resource_id}/textures/{tex_name}`.  Information on texture naming conventions may be found at [cmn::Texture](texture.cmn.md)|
| texelCountHint | integer | Estimated number of texel for the highest resolution base color texture. i.e. `texture.mip0.width*texture.mip0.height`. Useful to estimate the resource cost of this node and/or texel-resolution based LOD switching. Ignored for un-textured meshes. |

*Note: properties in **bold** are required*

### Examples 

#### Texture material buffer will be at /layers/0/nodes/6/geometries/{key}

Texture(s) will be at `layers/0/nodes/6/textures/{tex_name}`. In this example, the `tex_name` is from the 5th material definition. The base color texture would be `layer.materialDefinition[4].pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId`. 

```json
 {
  "definition": 4,
  "resource": 6,
  "texelCountHint": 1048576
} 
```

