#### BIM scene layer structure

In this proposal, a BIM model is represented as a single layer composed of sublayers (see _Examples_ section below)

The concept of a `group` (i.e. `layerType='group'`) has been added to organized `sublayers` into a nested tree structure that can be reflected in the table of content of 3D Clients. 

Please note that:
- `groups` and `sublayers` may be referenced **once** (e.g. a sublayer may not be in multiple groups)
- `groups` sublayers do not have any resource associated with them
- `sublayers` resources are located in the `sublayers` of the BIM layer: `layers/{bim_layer_id}/sublayers/{sub_layer_id}/...`.

Since a BIM layer may have an associated featureService, care must be taken to match BIM sublayer IDs with the service. In practice, if the BIM model has  `n` sublayers numbered [0,n-1] matching the featureService sublayers, then the `ids` for the scene layer and its groups must be greater or equal to `n`

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

#### BIM service:
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
     "layerType" : "building"
     // ... 
     // BIM layer JSON definitions (see example below)
     // ...
    }
  ]
}
```

#### Notes on _City_ scale BIM:
BIM is not envisioned to represent many buildings (e.g. a city). In this case, a single `3DObject` layer will be used as a placeholder to visualize and select individual BIM Scene Layers. Once a building is selected, its matching BIM scene layer will be open.

**Edits**
- group/layer names **must be unique**. 
- `sublayers.href` and `groups.href` have been removed in favor of `ids`
- `capabilities` have been removed:
- Removed `fullExtent` from `group` object
- added backed `modelName`.
- Added statistics

**TBD**
- Update portal item JSON with mapping between FeatureServer layer ids and BIM SL id !?

