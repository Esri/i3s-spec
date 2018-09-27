# Mesh object

Mesh geometry for a node

### Related:

[mesh17::node](node.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| materialId | integer | index in [layer.materialDefinitions](layer.md) array. |
| **geometryDefinitionId** | integer | index in [layer.meshDefinitions](layer.md) array. |
| **resourceId** | integer | resource locator to be used to query texture and geometry resources `layers/0/nodes/{this.resourceId}/...` **IMPORTANT**: unrelated to `node.index`! |
| scale | number[3] | Scale on local mesh X,Y and Z axis respectively (Applied first) |
| rotation | number[4] | Quaternion rotation in local mesh reference. Applied after scaling (_TBD_: vector + angle instead?) |
| translation | number[3] | offset on local mesh X,Y and Z axis respectively. Applied after scaling and rotation. |
| texelCountHint | integer | Estimated number of texel for the highest resolution base color texture. i.e. `texture.mip0.width*texture.mip0.height`. Useful to estimate the resource cost of this node and/or texel-resolution based LOD switching. Ignored for un-textured meshes |
| **vertexCount** | integer | Number of vertices in the geometry buffer of this mesh |
| indexCount | integer | Number of indices in the geometry buffer of this mesh (must omit or set to `0` for un-indexed meshes) |
| featureCount | integer | Number of features for this mesh (must omit or set to `0` if mesh doesn't use `features`) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Simple un-textured, un-indexed mesh  

```json
 {
  "geometryDefinitionId": 0,
  "resourceId": 124,
  "vertexCount": 526
} 
```

#### Example: Simple textured, indexed mesh  

```json
 {
  "materialId": 0,
  "geometryDefinitionId": 0,
  "resourceId": 124,
  "texelCountHint": 1048576,
  "vertexCount": 526,
  "indexCount": 21750
} 
```

#### Example: Transformed indexed mesh. Transformations are always applied in scale/rotation/translation order 

```json
 {
  "materialId": 0,
  "geometryDefinitionId": 0,
  "resourceId": 124,
  "texelCountHint": 1048576,
  "vertexCount": 526,
  "indexCount": 21750,
  "rotation": [
    -0.07,
    0.0305,
    -0.0569,
    0.9
  ],
  "translation": [
    500.0,
    0.0,
    24.0
  ]
} 
```

