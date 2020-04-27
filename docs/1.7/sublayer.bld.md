# sublayer [building profile]

Sublayer of a building scene layer. A building scene layer is composed of an overview and the full model containing the discipline and category layers. These layer types are represented as sublayers. A sublayer may contain other layers or sublayers (i.e. `group`) to form a nested structure.  The order of the layers is inverted, meaning the first layer is on the bottom and the last layer is on the top.

### Related:

[bld::layer](layer.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for this sublayer. **If** `layerType != 'group'`, resources will be at `/layers/{bim_layer_id}/sublayers/{this.id}/...` |
| **name** | string | Layer name. **Must be unique** per building scene layer. |
| alias | string | Alias of the layer name. Can be empty if alias and name are identical. |
| discipline | string | Semantics for work discipline groups which can be used to refine the user experience. <div>Possible values are:<ul><li>`Mechanical`</li><li>`Architectural`</li><li>`Piping`</li><li>`Electrical`</li><li>`Structural`</li></ul></div> |
| modelName | string | A fixed string of sublayer information. Used by client applications to define specific behavior for the modelName. See [list of defined modelNames](subLayerModelName.md) for sublayers. |
| **layerType** | string | <div>Possible values are:<ul><li>`group`</li><li>`3DObject`</li><li>`Point`</li></ul></div> |
| visibility | boolean | Visibility of the sublayer. Default is `true`. |
| sublayers | [sublayer](sublayer.bld.md)[] | Sublayers contained in this layer. |
| isEmpty | boolean | Returns true if the layer is empty, false otherwise. |

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
  "isEmpty": false,
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
  "isEmpty": false,
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

