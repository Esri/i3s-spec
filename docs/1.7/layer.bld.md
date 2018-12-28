# Building Scene Layer



#### Building scene layer structure

A building scene layer represents a 3D BIM model as a single layer composed of sublayers. A building scene layer is organized in discipline layers (groups) such as Architectural, Electrical, Mechanical, Piping and Structural and category layers representing content such as walls or windows. A building scene layer may contain an overview.

The concept of a group (i.e. `layerType='group'`) has been added to organized sublayers into a nested tree structure that can be reflected in the table of content of 3D Clients. If a building scene layer does not contain an overview, the structure should not include an overview or full model, only the disciplines directly.

Please note that:
- Groups and sublayers may be referenced **once** (e.g. a sublayer may not be in multiple groups).
- Groups and sublayers do not have any resource associated with them.
- Sublayer resources are located in the sublayers of the building scene layer: layers/{bim_layer_id}/sublayers/{sub_layer_id}/....

Since a building scene layer may have an associated featureService, care must be taken to match building scene layer sublayer IDs with the service. In practice, if the building scene layer has n sublayers numbered [0,n-1] they need to match the featureService sublayers IDs. Any group layers ID in the scene layer need to be greater.

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
- capabilities that have been removed
  - `sublayers.href` and `groups.href` have been removed in favor of IDs
  - Removed `fullExtent` from `group` object
- Added backed `modelName`.
- Added statistics

**TBD**
- Update portal item JSON with mapping between FeatureServer layer ids and BIM SL id !?



### Related:

[bld::statsummary](statsummary.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for the layer. Building scene layer id is not in the same namespace as sublayer id. **Important**: clients should **not** assume it will be `0`. |
| **name** | string | Layer name. |
| **version** | string | Version of building scene layer. |
| alias | string | Alias of the layer name. Can be empty if alias and name are identical. |
| **layerType** | string | <div>Must be:<ul><li>`Building`</li></ul></div> |
| description | string | Description for the layer. |
| copyrightText | string | Copyright information to be displayed. |
| **fullExtent** | [fullExtent](fullExtent.cmn.md) | 3d extent. If `layer.fullExtent.spatialReference` is specified, it **must** match `layer.spatialReference`. |
| **spatialReference** | [spatialReference](spatialReference.cmn.md) | The spatialReference of the layer including the vertical coordinate system. WKT is included to support custom spatial references. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | An object containing the vertical coordinate system information. |
| **sublayers** | [sublayer](sublayer.bld.md)[] | List of sublayers or group of sublayers. |
| filters | [filter](filter.bld.md)[] | Array of filters defined for the building scene layer. |
| activeFilterID | string | Global ID, filter ID of the currently active filter for the building scene layer. |
| statisticsHRef | string | url to statistic summary for the BIM layer. [statistics/summary.json](statsummary.md) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 {
  "id": 10,
  "name": "esri_campus",
  "layerType": "Building",
  "alias": "Esri Campus 2018",
  "version": "1.6",
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

#### Example: Building Scene Layer without overview 

```json
 {
    "id": 0,
    "name": "11 Jay St - 2015",
    "layerType": "Building",
    "alias": "11 Jay St - 2015",
    "version": "1.6",
    "spatialReference": {
        "wkid": 2875,
        "latestWkid": 2875
    },
    "fullExtent": {
        "xmin": 6275739.750599888153,
        "ymin": 2329145.64472599281,
        "xmax": 6275810.25458117947,
        "ymax": 2329220.688075052574,
        "spatialReference": {
            "wkid": 4326,
            "latestWkid": 4326,
            "vcsWkid": 5703,
            "latestVcsWkid": 5703
        },
        "zmin": 396.6794973805014,
        "zmax": 412.033626022210115
    },
    "sublayers": [
        {
            "id": 1,
            "layerType": "3DObject",
            "name": "ElectricalFixtures",
            "alias": "ElectricalFixtures",
            "modelName": "ElectricalFixtures",
            "discipline": "Electrical",
            "visibility": true
        },
        {
            "id": 2,
            "layerType": "3DObject",
            "name": "LightingFixtures",
            "alias": "LightingFixtures",
            "modelName": "LightingFixtures",
            "discipline": "Electrical",
            "visibility": true
        },
        {
            "id": 3,
            "layerType": "3DObject",
            "name": "DuctFitting",
            "alias": "DuctFitting",
            "modelName": "DuctFitting",
            "discipline": "Mechanical",
            "visibility": true
        },
        {
            "id": 4,
            "layerType": "3DObject",
            "name": "Ducts",
            "alias": "Ducts",
            "modelName": "Ducts",
            "discipline": "Mechanical",
            "visibility": true
        },
        {
            "id": 5,
            "layerType": "3DObject",
            "name": "MechanicalEquipment",
            "alias": "MechanicalEquipment",
            "modelName": "MechanicalEquipment",
            "discipline": "Mechanical",
            "visibility": true
        }
    ]
} 
```

