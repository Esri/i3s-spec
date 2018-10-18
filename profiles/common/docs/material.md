# materialDefinition

Materials describe how a feature or a set of features is to be rendered. This includes which shading and which colors to use. The following table provides the set of attributes and params for the 'type': 'standard' material.

### Related:

[common::store](store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| name | string | A name for the material as assigned in the creating application. |
| type | string | Indicates the material type, chosen from the supported values {standard, water, billboard, leafcard, reference}. |
| $ref | string | JSONPointer - The href that resolves to the shared resource bundle in which the material definition is contained. |
| params.vertexRegions | boolean[] |  |
| params.vertexColors | boolean[] |  |
| params.useVertexColorAlpha | boolean[] |  |
| params.transparency | number | Indicates whether the transparency of this material; 0 = opaque, 1 = fully transparent. |
| params.reflectivity | number | Indicates reflectivity of this Material. |
| params.shininess | number | Indicates shininess of this Material. |
| params.ambient | number[] |  |
| params.diffuse | number[] |  |
| params.specular | number[] |  |
| params.renderMode | string | Rendering mode, any one of {textured, solid, untextured, wireframe} |
| params.castShadows | boolean | true if features with this material should cast shadows. |
| params.receiveShadows | boolean | true if features with this material should receive shadows. |
| params.cullFace | string | Indicates the material culling options {back, front, *none*}. Default being none. |

*Note: properties in **bold** are required*

