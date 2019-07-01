# 3D Object Scene Layer (1.7)

A 3D object scene layer is used to visualize 3D objects.  3D object scene layers are often created from GIS data with attributes and explicitly modeled in 3D.  These attributes allow definition queries to specify symbology and other properties in lieu of setting properties for each object individually.  A 3D object scene layer can efficiently create and share just a few buildings or an entire city.

*Realistic 3D Object Scene Layer with textures*

![Realistic 3D Object Scene Layer with textures](../img/LyonTextured.png)

*Thematic 3D Object Scene Layer without textures*

![Thematic 3D Object Scene Layer without textures](../img/LyonThematic.png)

## 3D Object Scene Layer Structure
The 3D object scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. A 3D object scene layer can be used to create a scene layer package (*.slpk) or a I3S service. A 3D object scene layer contains the following:

- [Layer description](3DSceneLayer.cmn.md)
- [Node Pages](nodePages.cmn.md)
- [Nodes](nodes.cmn.md) containing [Geometry](geometry.cmn.md) and [Attributes](attributeStorageInfo.cmn.md)
- [Node Index Document](3DNodeIndexDocument.cmn.md)
- [Statistics](statsInfo.cmn.md)
- [Shared Resources](sharedResource.cmn.md)
  

*Shared resources are deprecated as of version 1.7 and are only included for backwards compatibility.*

*Example of 3DObject layer structure*

```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodePages
	|  +-- 0
	|  +-- (...)
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
# HTTP API Overview 1.7

Spec version 1.7 is backwards compatible with 1.6.  For all of our clients to be able to read 1.7, sharedResrouces and nodeDocument are included but not used in 1.7.

The following API methods are available for 3D Object scene layer:

| Resource             | Type   | Description                                                  | URL Template                         |
| -------------------- | ------ | ------------------------------------------------------------ | ------------------------------------ |
| Scene Layer Document | `JSON` | This is the root document for the service that will contain properties common to the entire layer. | `http://serviceURL/layers/{layerID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0



| Resource  | Type   | Description                                         | URL Template                                                 |
| --------- | ------ | --------------------------------------------------- | ------------------------------------------------------------ |
| Node Page | `JSON` | Uses the node page ID to find a specific node page. | `http://serviceURL/layers/{layerID}/nodepages/{nodePageID}/` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `nodePageID`: Integer. ID of the associated node page.

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodepages/8



| Resource | Type                       | Description                   | URL Template                                                 |
| -------- | -------------------------- | ----------------------------- | ------------------------------------------------------------ |
| Textures | `JPG`, `PNG`, `DDS`, `KTX` | The texture resource  (image) | `http://serviceURL/layers/{layerID}/nodes/{resourceID}/textures/{texture ID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `resourceID`: Integer. ID of the associated node.
- `textureID`: String. This ID returns one of the textures available for this node. The same texture may be available in different formats. 

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/textures/1



| Resource   | Type           | Description                              | URL Template                                                 |
| ---------- | -------------- | ---------------------------------------- | ------------------------------------------------------------ |
| Geometries | `bin`, `draco` | The geometry resource (mesh information) | `http://serviceURL/layers/{layerID}/nodes/{resourceID}/geometries/{geometry ID}` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `resourceID`: Integer. ID of the associated node.
- `geometryID`: Integer. This ID returns one of the geometries available for this node. The same geometry may be available in a different format. 

Example: http://my.server.com/layers/3DObjectSceneLayer/0/nodes/98/geometries/1 



| Resource             | Type   | Description                                                  | URL Template                                                 |
| -------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Attribute Statistics | `JSON` | The statistics for a the entire layer for a specific attribute. | `http://serviceURL/layers/{layerID}/statistics/f_{attributeID}/0` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `attributeID`: Integer.  ID of the specific attribute for the layer.

Example: http://my.server.com/layers/3DObjectSceneLayer/0/statistics/f_48/0 



**Shared Resources must be included for backwards compatibility with 1.6, but is only used by 1.6 clients.**

| Resource         | Type   | Description                                                  | URL Template                                                 |
| ---------------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Shared Resources | `JSON` | Legacy texture and material description. **Not used in 1.7.** | `http://serviceURL/layers/{layerID}/nodes/{resourceID}/shared` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `resourceID`: Integer. ID of the associated node. 

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/shared



**Node Document must be included for backwards compatibility with 1.6, but is only used by 1.6 clients.**

| Resource      | Type   | Description                                   | URL Template                                            |
| ------------- | ------ | --------------------------------------------- | ------------------------------------------------------- |
| Node Document | `JSON` | Description of the node. **Not used in 1.7.** | `http://serviceURL/layers/{layerID}/nodes/{resourceID}` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `resourceID`: Integer. ID of the associated resource. 

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98
