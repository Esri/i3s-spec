# Building Scene Layer



#### BIM scene layer structure

In this proposal, a BIM model is represented as a single layer composed of sublayers ( see _Examples_ section below)

The concept of a `group` has been added to organized `sublayers` into a nested tree structure that can be reflected in the table of content of 3D Clients. 
Please note that `sublayers` (but **not** `groups`!) may be referenced in multiple `groups`. 

`groups` objects do not have any resource associated with them and `sublayers` resource are located in the `sublayers` of the BIM layer:

`layers/{bim_layer_id}/sublayers/{sub_layer_id}`




Since a BIM layer may have a associated featureService, care must be taken to match BIM sublayer IDs with the service. In practice, if the BIM model has  `n` sublayers numbered [0,n-1], the featureService will have [0,n-1] _concrete_ sublayers, so the BIM layer itself and its `groups` must be assigned an `id` greater or equal to `n`

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






### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for the layer. **Important**: clients should **not** assume it will be `0` |
| **name** | string | Layer name |
| alias | string | Name to be used in UI |
| **layerType** | string | <div>Possible values are:<ul><li>`building`</li></ul></div> |
| href | string | Layer URL. (_obsolete: IDs are the prefered way to access layer resources_) |
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
          "capabilities": [ "view", "query" ],
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
    },
    {
      "id": 200,
      "layerType": "group",
      "name": "full_model",
      "visibility": true,
      "groups": [
        {
          "id": 210,
          "layerType": "group",
          "name": "Architectural",
          "groupSelectionPolicy": "multiple-items",
          "visibility": true,
          "groups": [
            {
              "id": 1,
              "layerType": "3DObject",
              "name": "walls",
              "alias": "Walls",
              "href": "./sublayers/1",
              "visibility": false,
              "capabilities": [ "view", "query" ],
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
            },
            {
              "id": 2,
              "layerType": "3DObject",
              "name": "roofs",
              "alias": "Roofs",
              "href": "./sublayers/2",
              "capabilities": [ "view", "query" ],
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
      ]
    }
  ]
}
 
```

