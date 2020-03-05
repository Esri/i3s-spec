# meshGeometry

Mesh geometry for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **definition** | integer | The index in [layer.geometryDefinitions](geometryDefinition.cmn.md) array |
| **resource** | integer | The resource locator to be used to query geometry resources: `layers/0/nodes/{resource_id}/geometries/{geometry_buffer_index}`. where `geometry_buffer_index` must be `0` or `1`.  Refer to [layer.geometryDefinitions](geometryDefinition.cmn.md) for more information. |
| vertexCount | integer | Number of vertices in the geometry buffer of this mesh for the **umcompressed mesh buffer**. Please note that `Draco` compressed meshes may have less vertices due to de-duplication (actual number of vertices is part of the Draco binary blob).  Default=`0` |
| featureCount | integer | Number of features for this mesh. Default=`0`. (Must omit or set to `0` if mesh doesn't use `features`.) |

*Note: properties in **bold** are required*

### Examples 

#### Geometry buffer will be at /layers/0/nodes/6/geometries/{key}

```json
 {
  "definition": 0,
  "resource": 6,
  "vertexCount": 1092,
  "featureCount": 7
} 
```

