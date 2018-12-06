# params

Parameter describing the material.

### Related:

[materialDefinition.cmn](materialDefinition.cmn.md)
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

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 None 
```

