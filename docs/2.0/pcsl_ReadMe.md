# Point Cloud Scene Layer

Point cloud scene layers quickly display large volumes of symbolized and filtered point cloud data. They are optimized for the displaying and sharing a variety of sensor data, including LiDAR.  

Point cloud scene layers are scalable, which allows for efficiency when working with large datasets.  While rendering very large point cloud datasets can be slow and limited by hardware, point cloud scene layers are efficient because they are rendered at an optimized point resolution for the specified area. 

Point cloud scene layers also support caching attributes like RGB, Intensity, Flags, Class Code, Returns, User Data, Point Source ID, GPS Time, Scan Angle and Near Infrared.  This allows client applications to update the symbology as well as query point information.

An example schema can be found below and a point cloud scene layer can be downloaded from [this story map](<http://3dcities.maps.arcgis.com/apps/MapSeries/index.html?appid=444de19a88764d58885ea8e211e96ae8>).

*Example of point cloud rendering*

![Point Cloud Scene Layer](../img/point-cloud-scene-layer.png)

## Point Cloud Scene Layer Structure
The point cloud scene layer is structured into a tree of multiple JSON files. Beside storing information in the JSON format, some are also provided as binary buffer. Point cloud scene layers can be used to create a scene layer package (*.slpk) or a I3S service. Since an *.slpk file can contain millions of documents, an [SLPK hash table](slpk_hash_table.pcsl.md) improves performance when scanning the slpk. A point cloud scene layer contains the following:

- [Layer description](layer.pcsl.md)
- Nodes containing [Geometry](defaultGeometrySchema.pcsl.md) and [Attributes](attributeInfo.pcsl.md)
- [Node pages](nodepage.pcsl.md)
- [Statistics](statistics.pcsl.md)

*Example of point cloud layer structure*

```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodepages
	|  +-- 0
	|  +-- 1   
	|  +-- 2  
	|  +-- (...)
	|  +-- 4  
	+-- nodes
	|  +--0
	|  |  +-- attributes
	|  |  |  +--2 
	|  |  |  +--4
	|  |  |  +--8
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
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

The following API methods are available for point cloud scene layer:

|Method|Example|
|------|-------|
|To query SceneLayer document|http://my.server.com/layers/0|
|To query attribute, statistics, documents|http://my.server.com/layers/0/statistics/{AttribKey}|
|To query  NodePage  document|http://my.server.com/layers/0/nodepages/{firstNodeIdInPage} 
|To query  Geometry  Buffer|http://my.server.com/layers/0/nodes/{resourceID}/geometries/0 
|To query  Attribute  Buffer|http://my.server.com/layers/0/nodes/{resourceID}/attributes/{AttribKey}  _Note:  {AttribKey}  is listed in  `layer.attributeStorageInfo[].key`_ 
