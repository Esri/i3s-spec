# Mesh object

Mesh geometry for a node

### Related:

[mesh17::node](node.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| materialId | integer | index in [layer.materialDefinitions](layer.md) array. |
| **geometryDefinitionId** | integer | index in [layer.geometryDefinitions](layer.md) array. default is `0` |
| attributeDefinitionId | integer | index in [layer.attributeSetDefinitions](layer.md) array. Must be `null` (or omit) if mesh as no attributes |
| **resourceId** | integer | resource locator to be used to query texture and geometry resources `layers/0/nodes/{this.resourceId}/...` **IMPORTANT**: unrelated to `node.index`! |
| texelCountHint | integer | Estimated number of texel for the highest resolution base color texture. i.e. `texture.mip0.width*texture.mip0.height`. Useful to estimate the resource cost of this node and/or texel-resolution based LOD switching. Ignored for un-textured meshes |
| **vertexCount** | integer | Number of vertices in the geometry buffer of this mesh |
| featureCount | integer | Number of features for this mesh (must omit or set to `0` if mesh doesn't use `features`) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Simple un-textured mesh without  any attributes nor feature and using `geometryDefinitionSet[0]`  

```json
 {
  "resourceId": 124,
  "vertexCount": 526
} 
```

#### Example: Simple textured mesh with attribute(s) 

```json
 {
  "materialId": 0,
  "geometryDefinitionId": 0,
  "attributeDefinitionId": 0,
  "resourceId": 124,
  "texelCountHint": 1048576,
  "vertexCount": 526,
  "featureCount": 12
} 
```

