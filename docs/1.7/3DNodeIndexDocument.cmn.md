# 3D Node Index Document

The 3dNodeIndexDocument JSON file describes a single index node within a store. It includes links to other nodes (e.g. children, sibling, and parent), links to feature data, geometry data, texture data resources, metadata (e.g. metrics used for LoD selection), and spatial extent. The node is the root object in the 3dNodeIndexDocument. There is always exactly one node object in a 3dNodeIndexDocument. 

Depending on the geometry and LoD model, a node document can be tuned towards being light-weight or heavy-weight. Clients decide which data to retrieve. The bounding volume information for the node, its parent, siblings, and children provide sufficient data for a simple visualization.  For example, the centroids could be rendered as point features. 

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID, unique within the store. At 1.7 the tree-key is the integer id of the node represented as a string. |
| href | string | The relative URL to the 3DSceneLayerResource. Only present as part of the SceneServiceInfo resource. |
| layerType | string | The user-visible layer type<div>Possible values are:<ul><li>`3DObject`</li><li>`IntegratedMesh`</li></ul></div> |
| spatialReference | [spatialReference](spatialReference.cmn.md) | The spatialReference of the layer including the vertical coordinate system. WKT is included to support custom spatial references. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | Enables consuming clients to quickly determine whether this layer is compatible (with respect to its horizontal and vertical coordinate system) with existing content. |
| version | string | The ID of the last update session in which any resource belonging to this layer has been updated. |
| name | string | The name of this layer. |
| serviceUpdateTimeStamp | [serviceUpdateTimeStamp](serviceUpdateTimeStamp.cmn.md) | The time of the last update. |
| alias | string | The display alias to be used for this layer. |
| description | string | Description string for this layer. |
| copyrightText | string | Copyright and usage information for the data in this layer. |
| capabilities | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li></ul></div> |
| ZFactor | number | ZFactor to define conversion factor for elevation unit. |
| cachedDrawingInfo | [cachedDrawingInfo](cachedDrawingInfo.cmn.md) | Indicates if any stylization information represented as drawingInfo is captured as part of the binary mesh representation.  This helps provide optimal client-side access. Currently the color component of the drawingInfo is supported. |
| drawingInfo | [drawingInfo](drawingInfo.cmn.md) | An object containing drawing information. |
| elevationInfo | [elevationInfo](elevationInfo.cmn.md) | An object containing elevation drawing information. If absent, any content of the scene layer is drawn at its z coordinate. |
| popupInfo | [popupInfo](popupInfo.cmn.md) | PopupInfo of the scene layer. |
| disablePopup | boolean | Indicates if client application will show the popup information. Default is FALSE. |
| store | [store](store.cmn.md) | The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. |
| fields | [field](field.cmn.md)[] | A collection of objects that describe each attribute field regarding its field name, datatype, and a user friendly name {name,type,alias}. It includes all fields that are included as part of the scene layer as derived from a source input feature layer. |
| attributeStorageInfo | [attributeStorageInfo](attributeStorageInfo.cmn.md)[] | Provides the schema and layout used for storing attribute content in binary format in I3S. |
| statisticsInfo | [statisticsInfo](statisticsInfo.cmn.md)[] | Contains the statistical information for a layer. |

*Note: properties in **bold** are required*

