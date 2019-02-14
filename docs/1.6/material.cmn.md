# materialDefinition

The materialDefinition describes how a feature or a set of features is to be rendered. This includes which shading and which colors to use. The following table provides the set of attributes and params for the `type`: `standard` material.

### Related:

[cmn::store](store.cmn.md), [psl::store](store.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| name | string | A name for the material as assigned in the creating application. |
| type | string | Indicates the material type, chosen from the supported values {standard, water, billboard, leafcard, reference}. |
| $ref | string | JSONPointer - The href that resolves to the shared resource bundle in which the material definition is contained. |
| params.vertexRegions | boolean[] | Indicates whether this material uses per-vertex regions. Defaults to false. |
| params.vertexColors | boolean[] | Indicates whether this material use vertex colors. Defaults to false. |
| params.useVertexColorAlpha | boolean[] | Indicates whether vertex colors also contain a transparency channel. Defaults to false. |
| params.transparency | number | Indicates the transparency of the material; 0 = opaque, 1 = fully transparent. |
| params.reflectivity | number | Indicates reflectivity of this material. |
| params.shininess | number | Indicates shininess of this material. |
| params.ambient | number[] | Ambient color of this material. |
| params.diffuse | number[] | Diffuse color of this material. |
| params.specular | number[] | Specular color of this material. |
| params.renderMode | string | Rendering mode, any one of {textured, solid, untextured, wireframe} |
| params.castShadows | boolean | true if features with this material should cast shadows. |
| params.receiveShadows | boolean | true if features with this material should receive shadows. |
| params.cullFace | string | Indicates the material culling options {back, front, *none*}. Default being none. |

