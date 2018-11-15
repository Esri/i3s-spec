# Mesh object

Mesh geometry for a node

### Related:

[mesh17::mesh](mesh.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **definition** | integer | index in [layer.materialDefinitions](layer.md) array. |
| resource | integer | Locator ID for the material textures. i.e: `layers/0/nodes/{material.resource}/textures/{tex_index}`. **required** if material declares any textures |

*Note: properties in **bold** are required*

### Examples 

#### Example: Texture material 

Texture(s) will be at `layers/0/nodes/6/textures/{tex_index}`. `tex_index` is from the 5th material definition. For example, the base color texture set would be `layer.materialDefinition[4].pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId` 

```json
 {
  "definition": 4,
  "resource": 6
} 
```

