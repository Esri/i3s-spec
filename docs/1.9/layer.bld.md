# Building Scene Layer



#### Building scene layer structure

A building scene layer represents a 3D BIM model as a single layer composed of sublayers. The 3D BIM model can be any man made structure organized in discipline layers (groups) such as Architectural, Electrical, Infrastructure, Mechanical, Piping or Structural and category layers representing content such as walls or windows. A building scene layer may contain an overview including only exterior feature in addition to the full model.

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
  "serviceVersion" : "1.8"
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

**Edits**
- Group/layer names **must be unique**. 
- Capabilities that have been removed.
  - `sublayers.href` and `groups.href` have been removed in favor of IDs.
  - Removed `fullExtent` from `group` object.
- Added back `modelName`.
- Added statistics.


### Related:

[bld::stats](stats.bld.md)
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
| statisticsHRef | string | url to statistic summary for the BIM layer. [statistics/summary.json](attributestats.bld.md) |
| capabilities | string[] | Capabilities supported by building scene layer. Overwrites any capabilities on sublayers.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li><li>`Extract`: Extract is defined.</li></ul></div> |

*Note: properties in **bold** are required*

