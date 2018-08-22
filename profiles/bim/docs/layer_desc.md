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




