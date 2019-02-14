# Integrated Mesh Scene Layer

Integrated mesh scene layers are generally created for citywide 3D mapping.  Integrated mesh scene layers include an entire surface and cannot be restyled.  Three-dimensional mesh data are typically captured by an automated process (e.g. drone) for constructing 3D objects out of large sets of overlapping imagery. The result integrates the original input image information as a textured mesh including 3D objects, such as buildings and trees, and elevation information.

*Example of integrated mesh scene layer*

![Integrated Mesh Scene Layer](img/IM.PNG)

## Integrated Mesh Scene Layer Structure
The Integrated Mesh scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. Integrated mesh scene layers can be used to create a scene layer package (*.slpk) or a I3S service. A Integrated Mesh scene layer contains the following:

- [Layer description](3DSceneLayer.cmn.md)
- Nodes containing [Geometry](geometry.cmn.md) 

*Example of integrated mesh scene layer structure*

```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodes
	 +--0
	 |  +-- geometries
	 |  |  +-- 0
	 |  +--1 
	 |  |  (...) //same structure for all nodes
	 |  +--...
	 |  +-- 259
	 |  |  (...) //same structure for all nodes
	
```


# HTTP API Overview

The following API methods are available for Integrated Mesh Scene Layer:

|Method|Example|
|------|-------|
|To query SceneLayer document|http://my.server.com/layers/{layerId}|
|To query attribute, statistics, documents|http://my.server.com/layers/{layerId}/statistics/{AttribKey} |
|To query  NodePage  document|http://my.server.com/layers/{layerId}/nodepages/{firstNodeIdInPage} |
|To query  Geometry  Buffer|http://my.server.com/layers/{layerId}/nodes/{resourceID}/geometries/0 |
|To query  Attribute  |Buffer|http://my.server.com/layers/{layerId}/nodes/{resourceID}/attributes/{AttribKey}  Node:  {AttribKey}  is listed at  scenelayer.attributeStorageInfo[].key |