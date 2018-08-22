# Group

A group may contains sublayers or subgroups to form a nested structure

### Related:

[bim::layer](layer.md), [bim::group](group.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for this item. **IF** `layerType != 'group'`, resources will be at `/layers/{bim_layer_id}/sublayers/{this.id}/...` |
| **name** | string | Layer name. **must be unique** per BIM layer |
| alias | string | Alias of the layer name. Can be empty if alias and name are identcal. |
| **layerType** | string | <div>Possible values are:<ul><li>`group`</li><li>`point`</li><li>`3DObject`</li></ul></div> |
| visibility | boolean | item visibility. Default: `true` |
| groupSelectionPolicy | string | default: `multiple-items`<div>Possible values are:<ul><li>`single-item`: A single item from `groups[]` may be selected at any given time (i.e. radio-buttons UX)</li><li>`multiple-items`: Any number of items from `groups[]` may be selected (i.e. check-boxes UX)</li></ul></div> |
| groups | [bim::group](group.md)[] | sub-groups or layers |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer simple group 

```json
 {
  "id": 100,
  "layerType": "group",
  "name": "architectural",
  "alias": "Architecture",
  "visibility": true,
  "groupSelectionPolicy": "multiple-items",
  "groups": [
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

