# Point Cloud Scene Layer

Point cloud scene layers quickly display large volumes of symbolized and filtered point cloud data. They are optimized for the display and sharing of many kinds of sensor data, including LiDAR. Point cloud scene layers are scalable, allowing you to work with large point cloud datasets efficiently. Rendering very large point sets is generally slow, partially due to hardware limitations. Point cloud scene layers are efficient because they are rendered at an optimized point resolution for the areas you need to visualize. Point cloud scene layers also support caching attributes such as RGB, Intensity, Flags, Class Code, Returns, User Data, Point Source ID, GPS Time, Scan Angle and Near Infrared. This allows client applications to update the symbology as well as query point information.

![Point Cloud Scene Layer](img/point-cloud-scene-layer.png)

## Point cloud scene layer structure
The point cloud scene layer is structured into a tree of multiple json files. Beside storing information in the json format, some are also provided as binary buffer. You can create a scene layer package (*.slpk) or a I3S service. Since a *.slpk file can contain millions of documents, an [SLPK hash table](slpk_hash_table.pcsl.md) improves performance when scanning the slpk. A point cloud scene layer contains the following:

- [Layer description](layer.pcsl.md)
- Nodes containing [Geometry](defaultGeometrySchema.pcsl.md) and [Attributes](attributeInfo.pcsl.md)
- [Node pages](nodepage.pcsl.md)
- [Statistics](statistics.pcsl.md)

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
*Example of point cloud scene layer structure.*

# HTTP API Overview

The following api methods are available for point cloud scene layer:

|Method|Example|
|------|-------|
|To query SceneLayer document|http://my.server.com/layers/{layerId}|
|To query attribute, statistics, documents|http://my.server.com/layers/{layerId}/statistics/{AttribKey}|
|To query  NodePage  document|http://my.server.com/layers/{layerId}/nodepages/{firstNodeIdInPage} 
|To query  Geometry  Buffer|http://my.server.com/layers/{layerId}/nodes/{resourceID}/geometries/0 
|To query  Attribute  Buffer|http://my.server.com/layers/{layerId}/nodes/{resourceID}/attributes/{AttribKey}  Node:  {AttribKey}  is listed at  scenelayer.attributeStorageInfo[].key 
