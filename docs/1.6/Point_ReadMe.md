# Point Scene Layer

Point scene layers contain point features and their attributes. Point scene layers are often used to visualized large amount of 3D data such as trees or other phenomena that can be visualized by 3D symbols.

![Point Scene Layer](img/PointSceneLayer.png)

## Point Scene Layer Structure
The point scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. You can create a scene layer package (*.slpk) or a I3S service. A point scene layer contains the following:

- [Layer description](3dSceneLayer.cmn.md)
- Nodes containing [Geometry](geometry.cmn.md) and [Attributes](attributeStats.md)
- [Node Index Document](3DSNodeIndexDocument.cmn.md)
- [Statistics](statInfo.cmn.md)

```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodes
	|  +--root
	|  |  +-- attributes
	|  |  |  +--2 
	|  |  |  +--4
	|  |  |  +--8
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
	+--statistics
	|  +-- 2
	|  +-- 4
	|  +-- 8
	|  +-- (...)
```
*Example of point scene layer structure.*

# HTTP API Overview

The following API methods are available for Point Scene Layer:

|Method|Example|
|------|-------|
|To query SceneLayer document|http://my.server.com/layers/{layerId}|
|To query attribute, statistics, documents|http://my.server.com/layers/{layerId}/statistics/{AttribKey} |
|To query  NodePage  document|http://my.server.com/layers/{layerId}/nodepages/{firstNodeIdInPage} |
|To query  Geometry  |Buffer|http://my.server.com/layers/{layerId}/nodes/{resourceID}/geometries/0 |
|To query  Attribute  Buffer|http://my.server.com/layers/{layerId}/nodes/{resourceID}/attributes/{AttribKey}  Node:  {AttribKey}  is listed at  scenelayer.attributeStorageInfo[].key |
