# A BIM sub-layer

A sub-layer may contains other layers or sublayer (i.e `group`) to form a nested structure

### Related:

[bim::layer](layer.md), [bim::sublayer](sublayer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for this item. **IF** `layerType != 'group'`, resources will be at `/layers/{bim_layer_id}/sublayers/{this.id}/...` |
| **name** | string | Layer name. **must be unique** per BIM layer |
| alias | string | Alias of the layer name. Can be empty if alias and name are identcal. |
| **modelName** | string | Semantic for a layer or group that may help refine the UX. For example, `Overview` will indicate that this layer may not be filtered<div>Possible values are:<ul><li>`Overview`</li><li>`FullModel`</li><li>`Mechanical`</li><li>`Architectural`</li><li>`Piping`</li><li>`Electrical`</li><li>`Structural`</li></ul></div> |
| **layerType** | string | <div>Possible values are:<ul><li>`group`</li><li>`point`</li><li>`3DObject`</li></ul></div> |
| visibility | boolean | item visibility. Default: `true` |
| visibilityMode | string | default: `independent`<div>Possible values are:<ul><li>`exclusive`: A single item from `groups[]` may be selected at any given time (i.e. radio-buttons UX)</li><li>`independent`: Any number of items from `groups[]` may be selected (i.e. check-boxes UX)</li><li>`inherited`: Same as parent group</li></ul></div> |
| layers | [bim::sublayer](sublayer.md)[] | sub-layers |

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
  "visibilityMode": "independent",
  "layers": [
    {
      "id": 0,
      "layerType": "3DObject",
      "name": "stairs",
      "alias": "Escaliers",
      "modelName": "Architectural",
      "visibility": true
    },
    {
      "id": 1,
      "layerType": "3DObject",
      "name": "roof",
      "alias": "Toitures",
      "modelName": "Architectural",
      "visibility": true
    }
  ]
} 
```

