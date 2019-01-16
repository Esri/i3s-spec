# Building Scene Layer Sublayer

A building scene layer is composed of an overview and the full model containing discipline and category layer. These layer types are represented as sublayers. A sublayer may contain other layers or sublayers (i.e `group`) to form a nested structure.

### Related:

[bld::layer](layer.bld.md), [bld::sublayer](sublayer.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for this item. **IF** `layerType != 'group'`, resources will be at `/layers/{bim_layer_id}/sublayers/{this.id}/...` |
| **name** | string | Layer name. **Must be unique** per building scene layer |
| alias | string | Alias of the layer name. Can be empty if alias and name are identical. |
| discipline | string | Semantic for work discipline groups which refine the user experience. <div>Possible values are:<ul><li>`Mechanical`</li><li>`Architectural`</li><li>`Piping`</li><li>`Electrical`</li><li>`Structural`</li></ul></div> |
| modelName | string | A fixed string of sublayer information. Used by client applications to define specific behavior for the modelName. See [list of defined modelNames](subLayerModelName.md) for sublayers. |
| **layerType** | string | <div>Possible values are:<ul><li>`group`</li><li>`3DObject`</li><li>`Point`</li></ul></div> |
| visibility | boolean | Visibility of the sublayer. Default is `true` |
| sublayers | [sublayer](sublayer.bld.md)[] | Sublayers contained in this layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer simple group 

```json
 {
  "id": 100,
  "layerType": "group",
  "name": "architectural",
  "alias": "Architecture",
  "modelName": "Architectural",
  "visibility": true,
  "sublayers": [
    {
      "id": 0,
      "layerType": "3DObject",
      "name": "stairs",
      "alias": "Escaliers",
      "visibility": true
    },
    {
      "id": 1,
      "layerType": "3DObject",
      "name": "roof",
      "alias": "Toitures",
      "visibility": true
    }
  ]
} 
```

#### Example: Building Scene Layer simple group with Point sublayer 

```json
 {
  "id": 100,
  "layerType": "group",
  "name": "architectural",
  "alias": "Architecture",
  "modelName": "Architectural",
  "visibility": true,
  "sublayers": [
    {
      "id": 1,
      "layerType": "3DObject",
      "name": "Casework",
      "alias": "Casework",
      "modelName": "Casework",
      "discipline": "Architectural",
      "visibility": true
    },
    {
      "id": 2,
      "layerType": "Point",
      "name": "LocationPoints",
      "alias": "LocationPoints",
      "modelName": "LocationPoints",
      "discipline": "Architectural",
      "visibility": true
    }
  ]
} 
```

