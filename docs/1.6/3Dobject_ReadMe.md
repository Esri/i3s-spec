# 3D Object Scene Layer

A 3D object scene layer is used to visualize 3D objects.  3D object scene layers are often created from GIS data with attributes and explicitly modeled in 3D.  These attributes allow definition queries to specify symbology and other properties in lieu of setting properties for each object individually.  A 3D object scene layer can efficiently create and share just a few buildings or an entire city.

*Realistic 3D Object Scene Layer with textures*

![Realistic 3D Object Scene Layer with textures](../img/LyonTextured.png)

*Thematic 3D Object Scene Layer without textures*

![Thematic 3D Object Scene Layer without textures](../img/LyonThematic.png)

## 3D Object Scene Layer Structure
The 3D object scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. A 3D object scene layer can be used to create a scene layer package (*.slpk) or a I3S service. A 3D object scene layer contains the following:

- [Layer description](3DSceneLayer.cmn.md)
- Nodes containing [Geometry](geometry.cmn.md) and [Attributes](attributeStorageInfo.cmn.md)
- [Node Index Document](3DNodeIndexDocument.cmn.md)
- [Statistics](statsInfo.cmn.md)
- [Shared Resources](sharedResource.cmn.md)

*Example of 3DObject layer structure*

```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodes
	|  +--0
	|  |  +-- attributes
	|  |  |  +--2
	|  |  |  +--4
	|  |  |  +--8
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
	|  |  +-- shared
	|  |  |   +-- sharedResource
	|  +--1
	|  |  (...) //same structure for all nodes
	|  +--...
	|  +-- 259
	|  |  (...) //same structure for all nodes
	+--statistics
	|  +-- 2
	|  +-- 4
	|  +-- 8
	|  +-- (...)
```
# HTTP API Overview

The following API methods are available for 3D Object scene layer:

|Resource|Description|URL example
|------|-------|-----------------|
|To query scene layer document| The layer ID needs to be a number. Default is 0.|http://my.server.com/3DObjectSceneLayer/SceneServer/0|
|To query statistics|Statistics is listed at  scenelayer.statisticsInfo[].key.|http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/statistics/f_1/0} |
|To query  node  document|Uses the node ID to find a specific node. (e.g. root, 1) |http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/root|
|To query  geometry  |Geometry of the node.|http://my.server.com/layers/3DObjectSceneLayer/0/nodes/root/geometries/0 |
|To query  attribute |Attribute is listed at  scenelayer.attributeStorageInfo[].key .|http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/root/attributes/f_1/0 |
|To query shared resources|The shared resource such as textures.|http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/shared/sharedResource|
