# Building Scene Layer

Building content is derived from a Building Information Modeling (BIM). BIM is a best-practice process for optimizing design and construction. BIM processes can produce 3D virtual representations of real-world assets that are commonly used for construction, documentation, and evaluation. BIM processes are applied in multiple domains including architecture, buildings, energy, utilities, and transportation. A building scene layer can represent the 3D model aspect of BIM structuring disciplines such as architectural or piping, and its categories like windows or walls.

*Example of a Building Scene Layer*

![Building Scene Layer](img/buildingSceneLayer.png)

## Building Scene Layer Structure
The building scene layer contains discipline and category layers as sublayers which represent a building and its assets. Building scene layers can be used to create a scene layer package (*.slpk) or an I3S service. A building scene layer contains the following:

- [Layer description](layer.bld.md)
- [Sublayers](sublayer.bld.md)
- [Statistics](statsummary.bld.md)

*Example of building scene scene layer structure*

```
.<host>/SceneServer/layers
  +--0 (3dSceneLayer.json, layerType ='building' )
  |  +-- statistics
  |  |   +-- summary.json
  |  +-- sublayers
  |  |  +--0 (3dSceneLayer.json for layer0, layerType='3DObject')
  |  |  |  +--nodes
  |  |  |  |  +--0
  |  |  |  |  | +-- attributes
  |  |  |  |  |  |  |  +--2
  |  |  |  |  |  |  +--4
  |  |  |  |  |  |  +--8
  |  |  |  |  |  +--(...)
  |  |  |  |  |  +-- geometries
  |  |  |  |  |  |  +-- 0
  |  |  |  |  |  +-- shared
  |  |  |  |  |  |  +-- sharedResource
  |  |  |  + statistics
  |  |  |  |  +-- f_1
  |  |  |  |  |  +-- 0
  |  |  |  |  |  +-...
  |  |  |  +--1
  |  |  |  (...) //same structure for all nodes
  |  |  |  +--...
  |  |  |  +-- 259
  |  |  |  (...) //same structure for all nodes
```
# HTTP API Overview

The following API methods are available for Building Scene Layer:

|Resource|Description|URL example
|------|-------|-----------------|
|To query scene layer document| The layer ID needs to be a number. Default is 0.|http://my.server.com/BSL/SceneServer/layers/0|
|To query statistics|Statistics for the layer|http://my.server.com/BSL/SceneServer/layers/0/statistics/summary |
|To query scene layer document for a sublayer | Use the layer ID of a specific sublayer | http://my.server.com/BSL/SceneServer/layers/0/sublayers/4/|
|To query node document|Uses sublayer ID and the node ID to find a specific node. (e.g. sublayer 4, node 1) |http://my.server.com/BSL/SceneServer/layers/0/sublayers/4/nodes/0/|
|To query geometry  |Geometry of the node.|http://my.server.com/BSL/SceneServer/layers/0/sublayers/4/nodes/0/geometry/0 |
|To query attribute |Attribute is listed at  scenelayer.attributeStorageInfo[].key .|http://my.server.com/BSL/SceneServer/layers/0/sublayers/0/nodes/18/attributes/f_18/0 |
|To query statistics|Statistics is listed at  scenelayer.statisticsInfo[].key.|http://my.server.com/BSL/SceneServer/layers/0/sublayers/5/statistics/f_1/0} |
|To query shared resources|The shared resource such as textures.|http://my.server.com/BSL/SceneServer/layers/0/sublayers/5/nodes/0/shared/0|

