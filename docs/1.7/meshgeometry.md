# Mesh object

Mesh geometry for a node

### Related:

[mesh](mesh.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **definition** | integer | index in [layer.geometryDefinitions](layer.md) array |
| **resource** | integer | resource locator to be used to query geometry resources `layers/0/nodes/geometry/{this.resourceId}/...` |
| texelCountHint | integer | Estimated number of texel for the highest resolution base color texture. i.e. `texture.mip0.width*texture.mip0.height`. Useful to estimate the resource cost of this node and/or texel-resolution based LOD switching. Ignored for un-textured meshes |
| **vertexCount** | integer | Number of vertices in the geometry buffer of this mesh for the **umcompressed mesh buffer**. `draco` meshes may have less vertices due to de-duplication |
| featureCount | integer | Number of features for this mesh (must omit or set to `0` if mesh doesn't use `features`) |

*Note: properties in **bold** are required*

### Examples 

#### Example:  

