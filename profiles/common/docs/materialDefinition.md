# materialDefinition

Materials describe how a feature or a set of features is to be rendered, including shading and color. The following table provides the set of attributes and parameters for the `type`: `standard` material.

### Related:

[common::sharedResource](sharedResource.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | A name for the material as assigned in the creating application. |
| type | string | Indicates the material type, chosen from the supported values.<div>Possible values are:<ul><li>`standard`</li><li>`water`</li><li>`billboard`</li><li>`leafcard`</li><li>`reference`</li></ul></div> |
| $ref | string | The href that resolves to the shared resource bundle in which the material definition is contained. |
| params | [common::params](params.md) | Parameter defined for the material. |

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

