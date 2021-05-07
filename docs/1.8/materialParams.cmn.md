# materialParams

Parameters describing the material.

### Related:

[cmn::materialDefinitionInfo](materialDefinitionInfo.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| transparency | number | Indicates transparency of this material; 0 = opaque, 1 = fully transparent. |
| reflectivity | number | Indicates reflectivity of this material. |
| shininess | number | Indicates shininess of this material. |
| ambient | number[] | Ambient color of this material. Ambient color is the color of an object where it is in shadow. This color is what the object reflects when illuminated by ambient light rather than direct light. |
| diffuse | number[] | Diffuse color of this material. Diffuse color is the most instinctive meaning of the color of an object. It is that essential color that the object reveals under pure white light. It is perceived as the color of the object itself rather than a reflection of the light. |
| specular | number[] | Specular color of this material. Specular color is the color of the light of a specular reflection (specular reflection is the type of reflection that is characteristic of light reflected from a shiny surface). |
| **renderMode** | string | Rendering mode.<div>Possible values are:<ul><li>`textured`</li><li>`solid`</li><li>`untextured`</li><li>`wireframe`</li></ul></div> |
| castShadows | boolean | TRUE if features with this material should cast shadows. |
| receiveShadows | boolean | TRUE if features with this material should receive shadows |
| cullFace | string | Indicates the material culling options {back, front, *none*}. |
| vertexColors | boolean | This flag indicates that the vertex color attribute of the geometry should be used to color the geometry for rendering. If texture is present, the vertex colors are multiplied by this color. e.g. `pixel_color = [interpolated]vertex_color * texel_color`.  Default is false. |
| vertexRegions | boolean | This flag indicates that the geometry has uv region vertex attributes. These are used for adressing subtextures in a texture atlas. The uv coordinates are relative to this subtexture in this case.  This is mostly useful for repeated textures in a texture atlas.  Default is false. |
| useVertexColorAlpha | boolean | Indicates whether Vertex Colors also contain a transparency channel.  Default is false. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {
  "vertexRegions": false,
  "vertexColors": true,
  "useVertexColorAlpha": false,
  "reflectivity": 0,
  "shininess": 1,
  "ambient": [
    0,
    0,
    0
  ],
  "diffuse": [
    1,
    1,
    1
  ],
  "specular": [
    0.0980392173,
    0.0980392173,
    0.0980392173
  ],
  "renderMode": "solid",
  "cullFace": "none"
} 
```

