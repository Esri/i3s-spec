# Building Scene Layer



#### BIM scene layer structure

In this proposal, a BIM model is represented as a single layer composed of sublayers ( see _Examples_ section below)

The concept of a `group` has been added to organized `sublayers` into a nested tree structure that can be reflected in the table of content of 3D Clients. 
Please note that `sublayers` (but **not** `groups`!) may be referenced in multiple `groups`. 

`groups` objects do not have any resource associated with them and `sublayers` resource are located in the `sublayers` of the BIM layer:

`layers/{bim_layer_id}/sublayers/{sub_layer_id}`




Since a BIM layer may have a associated featureService, care must be taken to match BIM sublayer IDs with the service. In practice, if the BIM model has  `n` sublayers numbered [0,n-1] matching the featureService sublayers, then the `ids` for the scene layer and its groups must be greater or equal to `n`

``` 
+-- layers
|  +-- 10 (3dSceneLayer.json for layer10, layerType ='building' )
|  |  +-- sublayers
|  |  |  +--0 (3dSceneLayer.json for layer0, layerType='3DObject')
|  |  |  |  +--nodes
|  |  |  |  |  +--0
|  |  |  |  |  |  +--3dNodeIndexDocument.json
|  |  |  |  |  |  +--geometries (...)
|  |  |  |  |  |  +--attributes (...)
|  |  |  |  |  +--1
|  |  |  |  |  |  +--3dNodeIndexDocument.json
|  |  |  |  |  |  +--geometries (...)
|  |  |  |  |  |  +--attributes (...)
|  |  |  |  |  +--(...)
|  |  |  |  +--statistics
|  |  |  +--1 (3dSceneLayer.json for layer1, layerType='3DObject')
|  |  |  |  +-- (...)
|  |  |  +--(... , layerType='3DObject')

```

#### Notes on _City_ scale BIM:
BIM is not envisionned to represent many buildings (e.g. a city). In this case an single `3DObject` layer will be used as a placeholder to visualize and select individual BIM Scene layers. Once a building is selected, its matching BIM scene layer will be open.

**Edits**
- group/layer names **must be unique**. 
- `href` for `sublayers` and `groups` have been removed in favor of `ids`
- `capabilities` have been removed:
``` json
    "capabilites": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [ "view", "query" ]
      },
      "description": "Layer capabilites. **concreate sub-layers only**. ignored for `layerType`=`groups`. "
    },
```
- Removed `fullExtent` from `group` object
- Removed `modelName`. BIM filter will use layer names (or aliases) for filtering instead.
``` json
    "modelName": {
      "type": "string",
      "enum": [ "Architectural", "Structural", "Electrical", "Mechanical", "Piping", "ExteriorShell", "None" ],
      "description": "(Values are _TBD_). String to give a hint of what type of scene layer sub layer it is. modelName is a unique string value that provides context to the content of the layer. This one is provided so that clients wont make assumptons based on name"
    },
```


### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for the layer. **Important**: clients should **not** assume it will be `0` |
| **name** | string | Layer name. |
| alias | string | Alias of the layer name. Can be empty if alias and name are identical. |
| **layerType** | string | <div>Possible values are:<ul><li>`building`</li></ul></div> |
| description | string | Description for the layer. |
| copyrightText | string | Copyright information to be displayed with this layer. |
| **fullExtent** | [common::fullExtent](../../common/docs/fullExtent.md) | Layer spatial reference and 3d extent. |
| heightModelInfo | [common::heightModelInfo](../../common/docs/heightModelInfo.md) | An object containing the vertical coordinate system information. |
| groupSelectionPolicy | string | <div>Possible values are:<ul><li>`single-item`: A single item from `groups[]` may be selected at any given time (i.e. radio-buttons UX)</li><li>`multiple-items`: Any number of items from `groups[]` may be selected (i.e. check-boxes UX)</li></ul></div> |
| **groups** | [bim::group](group.md)[] | list of sublayers or group of sublayers. |
| filters | [bim::filter](filter.md)[] | _TBD: BIM layer specific filters_ |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 {
  "id": 10,
  "name": "esri_campus",
  "href": "./layers/10",
  "layerType": "building",
  "alias": "Esri Campus 2018",
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
  },
  "groupSelectionPolicy": "single-item",
  "groups": [
    {
      "id": 100,
      "layerType": "group",
      "name": "exterior_shell",
      "alias": "Exterieur",
      "visibility": true,
      "groups": [
        {
          "id": 0,
          "layerType": "3DObject",
          "name": "overview",
          "alias": "External shell",
          "visibility": true
        },
        {
          "id": 2,
          "layerType": "3DObject",
          "name": "roofs",
          "alias": "Toiture exterieures",
          "visibility": false
        }
      ]
    },
    {
      "id": 200,
      "layerType": "group",
      "name": "full_model",
      "alias" :  "Model Complet",
      "visibility": true,
      "groups": [
        {
          "id": 210,
          "layerType": "group",
          "name": "architectural",
          "alias": "Elements d'architecture",
          "groupSelectionPolicy": "multiple-items",
          "visibility": true,
          "groups": [
            {
              "id": 1,
              "layerType": "3DObject",
              "name": "walls",
              "alias": "Murs porteurs",
              "visibility": false
            },
            {
              "id": 2,
              "layerType": "3DObject",
              "name": "roofs",
              "alias": "Toiture exterieures",
              "visibility": true
            }
          ]
        },
        {
          "id": 220,
          "layerType": "group",
          "name": "piping",
          "alias": "Tuyauterie",
          "visibility": true,
          "groups": [
            {
              "id": 3,
              "layerType": "3DObject",
              "name": "small_pipes",
              "alias": "Petits tuyaux",
              "visibility": true
            },
            {
              "id": 4,
              "layerType": "3DObject",
              "name": "big_pipes",
              "alias": "Conduits (large)",
              "visibility": true
            }
          ]
        }
      ]
    }
  ]
}
 
```

