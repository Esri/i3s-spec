# Point Cloud Scene Layer

Point cloud scene layers quickly display large volumes of symbolized and filtered point cloud data. They are optimized for the displaying and sharing a variety of sensor data, including LiDAR.  

Point cloud scene layers are scalable, which allows for efficiency when working with large datasets.  While rendering very large point cloud datasets can be slow and limited by hardware, point cloud scene layers are efficient because they are rendered at an optimized point resolution for the specified area. 

Point cloud scene layers also support caching attributes like RGB, Intensity, Flags, Class Code, Returns, User Data, Point Source ID, GPS Time, Scan Angle and Near Infrared.  This allows client applications to update the symbology as well as query point information.

An example schema can be found below and a point cloud scene layer can be downloaded from [this story map](<http://3dcities.maps.arcgis.com/apps/MapSeries/index.html?appid=444de19a88764d58885ea8e211e96ae8>).

*Example of point cloud rendering*

![Point Cloud Scene Layer](../img/point-cloud-scene-layer.png)

## Point Cloud Scene Layer Structure
The point cloud scene layer is structured into a tree of multiple JSON files.  Point cloud scene layers can be used to create a scene layer package (*.slpk) or a I3S service. Since an *.slpk file can contain millions of documents, an [SLPK hash table](slpk_hash_table.pcsl.md) improves performance when scanning the slpk. A point cloud scene layer contains the following:

- [Layer description](layer.pcsl.md)
- Nodes containing [Geometry](defaultGeometrySchema.pcsl.md) and [Attributes](attributeInfo.pcsl.md)
- [Node pages](nodepage.pcsl.md)
- [Statistics](statistics.pcsl.md)

*Example of point cloud layer structure*

```
.<host>/SceneServer/layers
	+--0 // scene layer document
	+-- nodepages
	|  +-- 0
	|  +-- 1   
	|  +-- 2  
	|  +-- (...)
	+-- nodes
	|  +--0
	|  |  +-- attributes
	|  |  |  +--2 
	|  |  |  +--4
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
	+-- (...) 
	+--statistics
	|  +-- 2
	|  +-- 4
	|  +-- (...)
```
# HTTP API Overview

The following API methods are available for point cloud scene layer:

| Resource             | Type   | Description                                                  | URL Template                         |
| -------------------- | ------ | ------------------------------------------------------------ | ------------------------------------ |
| Scene Layer Document | `JSON` | This is the root document for the service that will contain properties common to the entire layer. | `http://serviceURL/layers/{layerID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.

Example: http://my.server.com/PointCloudSceneLayer/SceneServer/layers/0



| Resource  | Type   | Description      | URL Template                                                 |
| --------- | ------ | ---------------- | ------------------------------------------------------------ |
| Node Page | `JSON` | A page of nodes. | `http://serviceURL/layers/{layerID}/nodepages/{nodePageID}/` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `nodePageID`: Integer. ID of the associated node page.

Example: http://my.server.com/PointCloudSceneLayer/SceneServer/layers/0/nodepages/8



| Resource   | Type    | Description                                  | URL Template                                                 |
| ---------- | ------- | -------------------------------------------- | ------------------------------------------------------------ |
| Geometries | `lepcc` | The point coordinate values within the node. | `http://serviceURL/layers/{layerID}/nodes/{resourceID}/geometries/0` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `resourceID`: Integer. ID of the associated node.

Example: http://my.server.com/PointCloudSceneLayer/SceneServer/layers/0/nodes/98/geometries/0



| Resource   | Type  | Description                                        | URL Template                                                 |
| ---------- | ----- | -------------------------------------------------- | ------------------------------------------------------------ |
| Attributes | `bin` | The value for a specific  attribute within a node. | `http://serviceURL/layers/{layerID}/attributes/{attributeID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `attributeID`: Integer.  ID of the specific attribute for the layer.

Example: http://my.server.com/PointCloudSceneLayer/SceneServer/layers/0/attributes/64



| Resource   | Type   | Description                                                  | URL Template                                                 |
| ---------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Statistics | `JSON` | The statistics for the entire layer for a specific attribute. | `http://serviceURL/layers/{layerID}/statistics/{attributeID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `attributeID`: Integer.  ID of the specific attribute for the layer.

Example: http://my.server.com/PointCloudSceneLayer/SceneServer/layers/0/statistics/64 
