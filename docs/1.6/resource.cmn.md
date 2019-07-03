# Resource

Resource objects are pointers to different types of resources related to a node, such as the feature data, the geometry attributes and indices, textures and shared resources.

### Related:

[cmn::3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **href** | string | The relative URL to the referenced resource. |
| layerContent | string[] | **Deprecated.** The list of layer names that indicates which layer features in the bundle belongs to. The client can use this information to selectively download bundles. |
| featureRange | number[] | **Deprecated.** Only applicable for featureData resources. Provides inclusive indices of the features list in this node that indicate which features of the node are located in this bundle. |
| multiTextureBundle | string | **Deprecated.** Only applicable for textureData resources. TRUE if the bundle contains multiple textures. If FALSE or not set, clients can interpret the entire bundle as a single image. |
| vertexElements | number[] | **Deprecated.** Only applicable for geometryData resources. Represents the count of elements in vertexAttributes; multiply by the sum of bytes required for each element as defined in the defaultGeometrySchema. |
| faceElements | number[] | **Deprecated.** Only applicable for geometryData resources. Represents the count of elements in faceAttributes; multiply by the sum of bytes required for each element as defined in the defaultGeometrySchema. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Resource example 

```json
 {
  "href": "./features/0"
} 
```

