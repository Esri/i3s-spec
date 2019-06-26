# params

Parameter describing the material.

### Related:

[cmn::materialDefinitionInfo](materialDefinitionInfo.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| transparency | number | Indicates transparency of this material; 0 = opaque, 1 = fully transparent. |
| reflectivity | number | Indicates reflectivity of this material. |
| shininess | number | Indicates shininess of this material. |
| ambient | number[] | Ambient color of this material. |
| diffuse | number[] | Diffuse color of this material. |
| specular | number[] | Specular color of this material. |
| **renderMode** | string | Rendering mode.<div>Possible values are:<ul><li>`textured`</li><li>`solid`</li><li>`untextured`</li><li>`wireframe`</li></ul></div> |
| castShadows | boolean | TRUE if features with this material should cast shadows. |
| receiveShadows | boolean | TRUE if features with this material should receive shadows |
| cullFace | string | Indicates the material culling options {back, front, *none*}. Default is none. |
| vertexColors | boolean | This flag indicates that the vertex color attribute of the geometry should be used to color the geometry for rendering. |
| vertexRegions | boolean | This flag indicates that the geometry has uv region vertex attributes. These are used for adressing subtextures in a texture atlas. The uv coordinate are relative to this subtexture in this case. |
| useVertexColorAlpha | boolean | The vertex color alpha value. |

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

