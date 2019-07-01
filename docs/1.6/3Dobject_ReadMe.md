# 3D Object Scene Layer (1.6)

A 3D object scene layer is used to visualize 3D objects.  3D object scene layers are often created from GIS data with attributes and explicitly modeled in 3D.  These attributes allow definition queries to specify symbology and other properties in lieu of setting properties for each object individually.  A 3D object scene layer can efficiently create and share just a few buildings or an entire city.

*Realistic 3D Object Scene Layer with textures*

![Realistic 3D Object Scene Layer with textures](../img/LyonTextured.png)

*Thematic 3D Object Scene Layer without textures*

![Thematic 3D Object Scene Layer without textures](../img/LyonThematic.png)

## 3D Object Scene Layer Structure
The 3D object scene layer is structured into a tree of multiple JSON files. Besides storing information in the JSON format, some are also provided as binary buffer. A 3D object scene layer can be used to create a scene layer package (*.slpk) or a I3S service. A 3D object scene layer contains the following:

- [Layer description](3DSceneLayer.cmn.md)
- Nodes containing [Geometry](defaultGeometrySchema.cmn.md) and [Attributes](attributeStorageInfo.cmn.md)
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
# HTTP API Overview 1.6

The following API methods are available for 3D Object scene layer:

| Resource             | Type   | Description                                                  | URL Template                         |
| -------------------- | ------ | ------------------------------------------------------------ | ------------------------------------ |
| Scene Layer Document | `JSON` | This is the root document for the service that will contain properties common to the entire layer. | `http://serviceURL/layers/{layerID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0



| Resource      | Type   | Description              | URL Template                                            |
| ------------- | ------ | ------------------------ | ------------------------------------------------------- |
| Node Document | `JSON` | Description of the node. | `http://serviceURL/layers/{layerID}/nodes/{resourceID}` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `resourceID`: Integer. ID of the associated resource. 

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98



| Resource | Type  | Description                              | URL Template                                                 |
| -------- | ----- | ---------------------------------------- | ------------------------------------------------------------ |
| Geometry | `bin` | The geometry resource (mesh information) | `http://serviceURL/layers/{layerID}/nodes/{resourceID}/geometries/{geometry ID}` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `resourceID`: Integer. ID of the associated node.
- `geometryID`: Integer. This ID return the geometry available for the node. 

Example: http://my.server.com/layers/3DObjectSceneLayer/0/nodes/98/geometries/1 



| Resource             | Type   | Description                                                  | URL Template                                                 |
| -------------------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Attribute Statistics | `JSON` | The statistics for a the entire layer for a specific attribute. | `http://serviceURL/layers/{layerID}/statistics/f_{attributeID}/0` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `attributeID`: Integer.  ID of the specific attribute for the layer.

Example: http://my.server.com/layers/3DObjectSceneLayer/0/statistics/f_48/0 



| Resource         | Type   | Description                        | URL Template                                                 |
| ---------------- | ------ | ---------------------------------- | ------------------------------------------------------------ |
| Shared Resources | `JSON` | Texture and material descriptions. | `http://serviceURL/layers/{layerID}/nodes/{resourceID}/shared` |

- `layerID`: Integer. ID of the associated layer. Esri clients expect this to be `0`.
- `resourceID`: Integer. ID of the associated node. 

Example: http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/shared


