# Mesh Geometry

Mesh geometry for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **definition** | integer | The index in [layer.geometryDefinitions](geometryDefinition.cmn.md) array |
| **resource** | integer | The resource locator to be used to query geometry resources: `layers/0/nodes/{this.resource}/geometries/{layer.geometryDefinitions[this.definition].geometryBuffers[0 or 1]}`. |
| vertexCount | integer | Number of vertices in the geometry buffer of this mesh for the **umcompressed mesh buffer**. Please note that `Draco` compressed meshes may have less vertices due to de-duplication (actual number of vertices is part of the Draco binary blob).  Default=`0` |
| featureCount | integer | Number of features for this mesh. Default=`0`. (Must omit or set to `0` if mesh doesn't use `features`.) |

*Note: properties in **bold** are required*

### Examples 

#### Example:  

```json
 {
  "definition": 0,
  "resource": 6,
  "vertexCount": 1092,
  "featureCount": 7
} 
```

