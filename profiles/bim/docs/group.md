# Group

A group may contains sublayers or subgroups to form a nested structure

### Related:

[bim::layer](layer.md), [bim::group](group.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for this item. **IF** `layerType != 'group'`, resources will be at `/layers/{bim_layer_id}/sublayers/{this.id}/...` |
| **name** | string | Layer name |
| alias | string | Name to be used in UI |
| **layerType** | string | <div>Possible values are:<ul><li>`group`</li><li>`point`</li><li>`3DObject`</li></ul></div> |
| href | string | Layer URL. (_obsolete: IDs are the prefered way to access layer resources_) |
| modelName | string | _TBD_. <div>Possible values are:<ul><li>`architectural`</li><li>`overview`</li></ul></div> |
| visibility | boolean | item visibility. Default: `true` |
| fullExtent | [common::fullExtent](../../common/docs/fullExtent.md) | Layer spatial reference and 3d extent.  **ignored or omit if** `layerType != 'group'` _TBD:remove and use layer.fullExtent only?_ |
| groupSelectionPolicy | string | default: `multiple-items`<div>Possible values are:<ul><li>`single-item`: A single item from `groups[]` may be selected at any given time (i.e. radio-buttons UX)</li><li>`multiple-items`: Any number of items from `groups[]` may be selected (i.e. check-boxes UX)</li></ul></div> |
| capabilites | string[] | Layer capabilites. **concreate sub-layers only**. ignored for `layerType`=`groups`. _TBD: remnoved if nor needed here_<div>Possible values for each array string:<ul><li>`view`</li><li>`query`</li></ul></div> |
| groups | [bim::group](group.md)[] | sub-groups or layers |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer simple group 

```json
 {
  "id": 100,
  "layerType": "group",
  "name": "overview",
  "visibility": true,
  "groups": [
    {
      "id": 0,
      "layerType": "3DObject",
      "name": "Overview",
      "modeName": "overview",
      "alias": "External shell",
      "href": "./sublayers/0",
      "capabilities": [
        "view",
        "query"
      ],
      "visibility": true,
      "fullExtent": {
        "xmin": -117.855689264791,
        "ymin": 32.5702577626442,
        "xmax": -116.87086222794,
        "ymax": 34.1460567673275,
        "zmin": 0.1,
        "zmax": 50.0,
        "spatialReference": {
          "wkid": 4326,
          "latestWkid": 4326
        }
      }
    }
  ]
} 
```

