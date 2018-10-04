# A BIM sub-layer

A sub-layer may contains other layers or sublayer (i.e `group`) to form a nested structure

### Related:

[bim::sublayer](sublayer.md), [bim::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for this item. **IF** `layerType != 'group'`, resources will be at `/layers/{bim_layer_id}/sublayers/{this.id}/...` |
| **name** | string | Layer name. **must be unique** per BIM layer |
| alias | string | Alias of the layer name. Can be empty if alias and name are identcal. |
| modelName | string | Semantic for group that may help refine the UX. For example, `Overview` will indicate that this layer may not be filtered. We currently do not assign a `modelName` to sublayers (i.e. 'component')<div>Possible values are:<ul><li>`Overview`</li><li>`FullModel`</li><li>`Mechanical`</li><li>`Architectural`</li><li>`Piping`</li><li>`Electrical`</li><li>`Structural`</li></ul></div> |
| **layerType** | string | <div>Possible values are:<ul><li>`group`</li><li>`point`</li><li>`3DObject`</li></ul></div> |
| visibility | boolean | item visibility. Default: `true` |
| sublayers | [bim::sublayer](sublayer.md)[] | sub-layers |


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

