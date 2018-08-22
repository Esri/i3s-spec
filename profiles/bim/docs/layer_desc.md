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
- `sublayers.href` and `groups.href` have been removed in favor of `ids`
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
- Removed `modelName`. BIM filters will use layer names for filtering instead.
``` json
    "modelName": {
      "type": "string",
      "enum": [ "Architectural", "Structural", "Electrical", "Mechanical", "Piping", "ExteriorShell", "None" ],
      "description": "(Values are _TBD_). String to give a hint of what type of scene layer sub layer it is. modelName is a unique string value that provides context to the content of the layer. This one is provided so that clients wont make assumptons based on name"
    },
```
