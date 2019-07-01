# Integrated Mesh Scene Layer

Integrated mesh scene layers are generally created for citywide 3D mapping.  Integrated mesh scene layers include an entire surface and cannot be restyled.  Three-dimensional mesh data are typically captured by an automated process (e.g. drone) for constructing 3D objects out of large sets of overlapping imagery. The result integrates the original input image information as a textured mesh including 3D objects, such as buildings and trees, and elevation information.

*Example of integrated mesh scene layer*

![Integrated Mesh Scene Layer](../img/IM.PNG)

## Integrated Mesh Scene Layer Structure
The Integrated Mesh scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. Integrated mesh scene layers can be used to create a scene layer package (*.slpk) or a I3S service. A Integrated Mesh scene layer contains the following:

- [Layer description](3DSceneLayer.cmn.md)
- [Node Pages](nodesPages.cmn.md)
- [Nodes](nodes.cmn.md) containing [Geometry](geometry.cmn.md), [Feature Data](featureData.cmn.md]), and [Texture](texture.cmn.md)
- [Shared Resources](sharedResource.cmn.md)

*Shared resources and feature data are deprecated as of version 1.7 and are only included for backwards compatibility.*

*Example of integrated mesh scene layer structure*

```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodePages
	|  +-- 0
	|  +-- (...)
	+-- nodes
	 +--0
	 |  +-- features
	 |  |  +-- 0
	 |  +-- textures
	 |  |  +-- 0_0_1.bin.dds
	 |  |  +--0_0.jpg
	 |  +-- shared
	 |  |  +-- sharedResource
	 |  +-- geometries
	 |  |  +-- 0
	 |  +--1
	 |  |  (...) //same structure for all nodes
	 |  +--...
	 |  +-- 259
	 |  |  (...) //same structure for all nodes

```


# HTTP API Overview 1.7

Spec version 1.7 is backwards compatible with 1.6.  For all of our clients to be able to read 1.7, sharedResrouces are included but not used in 1.7.

The following API methods are available for Integrated Mesh Scene Layer:



| Resource             | Description                                                  | URL Template                                       |
| -------------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| Scene Layer Document | The layer ID needs to be a number. Default is 0, and Esri software expects this to be 0. | http://{servername}/{SceneLayerName}/SceneServer/0 |

Example: http://my.server.com/IntegratedMeshSceneLayer/SceneServer/0

| Resource     | Description                                                  | URL Template                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Node Page ID | Uses the node page ID to find a specific node page. Must be an integer. | http://{servername}/{SceneLayerName}/SceneServer/layers/0/**nodepages**/{node page ID} |

Example: http://my.server.com/IntegratedMeshSceneLayer/SceneServer/layers/0/nodepages/0

| Resource      | Description                                                  | URL Template                                                 |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Node Document | Uses the node ID to find a specific node.  Must be an integer. | http://{servername}/{SceneLayerName}/SceneServer/layers/0/**nodes**/{resource ID} |

Example: http://my.server.com/IntegratedMeshSceneLayer/SceneServer/layers/0/nodes/1

| Resource | Description                        | URL Template                                                 |
| -------- | ---------------------------------- | ------------------------------------------------------------ |
| Textures | Used to query textures for a node. | http://{servername}/{SceneLayerName}/SceneServer/layers/0/nodes/{node document}/**textures**/{resource ID} |

Example: http://my.server.com/IntegratedMeshSceneLayer/SceneServer/layers/0/nodes/0/textures/1

| Resource | Description           | URL Template                                                 |
| -------- | --------------------- | ------------------------------------------------------------ |
| Geometry | Geometry of the node. | http://{servername}/{SceneLayerName}/0/nodes/{node document}/**geometries**/{resource ID} |

Example: http://my.server.com/layers/IntegratedMeshSceneLayer/0/nodes/0/geometries/0 



# HTTP API Overview 1.6 Compatibility

| Resource         | Description                                                  | URL Template                                                 |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Shared Resources | Included for backward compatibility.  Must be an integer. **Not used in 1.7**. | http://{servername}/{SceneLayerName}/SceneServer/layers/0/**shared**/nodes/{resource ID} |

Example: http://my.server.com/IntegratedMeshSceneLayer/SceneServer/layers/0/shared/nodes/0