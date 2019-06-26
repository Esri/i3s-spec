# Point Scene Layer

Point scene layers contain point features and their attributes. Point scene layers are often used to visualize large amounts of 3D data like trees or buildings.  Most phenomena that can be visualized by 3D symbols can be displayed with a point scene layers.

*Example of a point scene layer*

![Point Scene Layer](img/PointSceneLayer.png)

## Point Scene Layer Structure
The point scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. Point scene layers can be used to create a scene layer package (*.slpk) or a I3S service. A point scene layer contains the following:

- [Layer description](3DSceneLayer.psl.md)
- Nodes containing [feature](feature.cmn.md) and [Attributes](attributeStorageInfo.cmn.md)
- [Node Index Document](3DNodeIndexDocument.cmn.md)
- [Statistics](statisticsInfo.cmn.md)

*Example of point scene layer structure*

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
	|  |  +-- features
	|  |  |  +-- 0
	+--statistics
	|  +-- f_1
	|  | +--0
	|  +-- f_4
	|  | +--0
	|  +-- f_8
	|  | +--0
	|  +-- (...)
	+--resources
	    +-- styles
	 	| +-- root
	 	| +-- web 

```
# HTTP API Overview

The following API methods are available for Point Scene Layer:

|Resource|Description|URL example
|------|-------|-----------------|
|To query scene layer document| The layer ID needs to be a number. Default is 0.|http://my.server.com/PointSceneLayer/SceneServer/0|
|To query statistics|Statistics is listed at  scenelayer.statisticsInfo[].key.|http://my.server.com/PointSceneLayer/SceneServer/layers/0/statistics/f_1/0} |
|To query  node  document|Uses the node ID to find a specific node. (e.g. root, 1) |http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/root|
|To query  feature  |Feature as listed in nodes.featureData.href.|http://my.server.com/layers/PointSceneLayer/0/nodes/root/features/0 |
|To query  attribute |Attribute is listed at  scenelayer.attributeStorageInfo[].key .|http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/root/attributes/f_1/0 |
|To query resources|Symbol resources for the point features.|http://my.server.com/PointSceneLayer/SceneServer/layers/0/resources/styles/root|
