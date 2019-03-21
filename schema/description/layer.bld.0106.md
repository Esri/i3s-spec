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
