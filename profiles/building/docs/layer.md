# Building Scene Layer



#### Building scene layer structure

A building scene layer represents a 3D BIM model as a single layer composed of sublayers (see _Examples_ section below). A building scene layer is organized in discipline layers (groups) such as Architectural, Electrial, Mechnical, Piping and Structural and category layers representing content such as walls or windows. A building scene layer may contain an overview.

The concept of a `group` (i.e. `layerType='group'`) has been added to organized `sublayers` into a nested tree structure that can be reflected in the table of content of 3D Clients. 

Please note that:
- `Groups` and `sublayers` may be referenced **once** (e.g. a sublayer may not be in multiple groups).
- `Groups` sublayers do not have any resource associated with them.
- `Sublayers` resources are located in the `sublayers` of the builidng scene layer: `layers/{bim_layer_id}/sublayers/{sub_layer_id}/...`.

Since a building scene layer may have an associated featureService, care must be taken to match building scene layer sublayer IDs with the service. In practice, if the building scene layer has  `n` sublayers numbered [0,n-1] matching the featureService sublayers, then the `ids` for the scene layer and its groups must be greater or equal to `n`

``` 
+-- layers
|  +-- 10 (3dSceneLayer.json for layer10, layerType ='building' )
|  |  +-- statistics
|  |  |   +-- summary.json
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

#### Building scene layer service:
The service definition is identical to other scene layer service definitions and will list a single layer (the BIM layer) e.g:
``` js
{
  "serviceName" : "Esri Campus",
  "serviceVersion" : "1.6"
  "supportedBindings" : "REST"
  "layers":
  [
    {
     "id" : 10,
     "layerType" : "Building"
     // ... 
     // building scene layer JSON definitions (see example below)
     // ...
    }
  ]
}
```

#### Notes on _City_ scale building scene layer:
Building scene layer is not envisioned to represent many buildings (e.g. a city). In this case, a single `3DObject` layer will be used as a placeholder to visualize and select individual building scene layers. Once a building is selected, its matching building scene layer will be open.

**Edits**
- group/layer names **must be unique**. 
- `sublayers.href` and `groups.href` have been removed in favor of `ids`
- `capabilities` have been removed:
- Removed `fullExtent` from `group` object
- added backed `modelName`.
- Added statistics

**TBD**
- Update portal item JSON with mapping between FeatureServer layer ids and BIM SL id !?



### Related:

[building::statsummary](statsummary.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for the layer. Building scene layer id is not in the same namespace as sublayer id. **Important**: clients should **not** assume it will be `0`. |
| **name** | string | Layer name. |
| alias | string | Alias of the layer name. Can be empty if alias and name are identical. |
| **layerType** | string | <div>Must be:<ul><li>`Building`</li></ul></div> |
| description | string | Description for the layer. |
| copyrightText | string | Copyright information to be displayed. |
| **fullExtent** | [common::fullExtent](../../common/docs/fullExtent.md) | 3d extent. If `layer.fullExtent.spatialReference` is specified, it **must** match `layer.spatialReference`. |
| **spatialReference** | [common::spatialReference](../../common/docs/spatialReference.md) | The spatialReference of the layer including the vertical coordinate system. Wkt is included to support custom spatial references. |
| heightModelInfo | [common::heightModelInfo](../../common/docs/heightModelInfo.md) | An object containing the vertical coordinate system information. |
| **sublayers** | [building::sublayer](sublayer.md)[] | List of sublayers or group of sublayers. |
| filters | [building::filter](filter.md)[] | Array of filters defined for the building scene layer. |
| activeFilterID | number | Filter id of the currently active filter for the building scene layer. |
| statisticsHRef | string | url to statistic summary for the BIM layer. [statistics/summary.json](statsummary.md) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 {
  "id": 10,
  "name": "esri_campus",
  "layerType": "building",
  "alias": "Esri Campus 2018",
  "spatialReference": {
    "wkid": 4326,
    "latestWkid": 4326
  },
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
  "statisticsHRef": "statistics/summary",
  "sublayers": [

    {
      "id": 0,
      "layerType": "3DObject",
      "name": "overview",
      "alias": "External shell",
      "modelName": "Overview",
      "visibility": true
    },
    {
      "id": 200,
      "layerType": "group",
      "name": "full_model",
      "alias": "Model Complet",
      "modelName": "FullModel",
      "visibility": true,
      "sublayers": [
        {
          "id": 210,
          "layerType": "group",
          "name": "architectural",
          "alias": "Elements d'architecture",
          "modelName": "Architectural",
          "visibility": true,
          "sublayers": [
            {
              "id": 1,
              "layerType": "3DObject",
              "name": "walls",
              "alias": "Murs porteurs",
              "modelName": "Architectural",
              "visibility": false
            },
            {
              "id": 2,
              "layerType": "3DObject",
              "name": "roofs",
              "modelName": "Architectural",
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
          "modelName": "Piping",
          "visibility": true,
          "sublayers": [
            {
              "id": 3,
              "layerType": "3DObject",
              "name": "small_pipes",
              "modelName": "Piping",

              "alias": "Petits tuyaux",
              "visibility": true
            },
            {
              "id": 4,
              "layerType": "3DObject",
              "name": "big_pipes",
              "alias": "Conduits (large)",
              "modelName": "Piping",
              "visibility": true
            }
          ]
        }
      ]
    }
  ]
}
 
```

