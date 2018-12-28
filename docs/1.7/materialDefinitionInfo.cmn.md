# materialDefinition

Materials describe how a feature or a set of features is to be rendered, including shading and color. The following table provides the set of attributes and parameters for the `type`: `standard` material.

### Related:

[cmn::materialDefinition](materialDefinition.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | A name for the material as assigned in the creating application. |
| type | string | Indicates the material type, chosen from the supported values.<div>Possible values are:<ul><li>`standard`</li><li>`water`</li><li>`billboard`</li><li>`leafcard`</li><li>`reference`</li></ul></div> |
| $ref | string | The href that resolves to the shared resource bundle in which the material definition is contained. |
| params | [params](params.cmn.md) | Parameter defined for the material. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {
  "type": "standard",
  "name": "standard",
  "params": {
    "reflectivity": 0,
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
      0.09803921568627451,
      0.09803921568627451,
      0.09803921568627451
    ],
    "shininess": 1,
    "renderMode": "solid",
    "cullFace": "none"
  }
} 
```

