# 3DSceneLayer [Common Profiles]

The 3DSceneLayerInfo describes the properties of a layer in a store. The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. Every scene layer contains 3DSceneLayerInfo. If features based scene layers, such as 3D objects or point scene layers, may include the default symbology. This is as specified in the drawingInfo, which contains styling information for a feature layer.

When generating 3D Objects or Integrated Mesh scene layers, the root node never has any geometry. Any node's children represent a higher LoD quality than an ancestor node.  Nodes without geometry at the top of the tree are allowable since the lowest LoD of a feature/geometry is not to shown.

### Related:

[cmn::nodePage](nodePage.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Unique numeric ID of the layer. |
| href | string | The relative URL to the 3DSceneLayerResource. Only present as part of the SceneServiceInfo resource. |
| **layerType** | string | The user-visible layer type<div>Possible values are:<ul><li>`3DObject`</li><li>`IntegratedMesh`</li></ul></div> |
| spatialReference | [spatialReference](spatialReference.cmn.md) | The spatialReference of the layer including the vertical coordinate reference system (CRS). Well Known Text (WKT) for CRS is included to support custom CRS. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | Enables consuming clients to quickly determine whether this layer is compatible (with respect to its horizontal and vertical coordinate system) with existing content. |
| **version** | string | The ID of the last update session in which any resource belonging to this layer has been updated. |
| name | string | The name of this layer. |
| serviceUpdateTimeStamp | [serviceUpdateTimeStamp](serviceUpdateTimeStamp.cmn.md) | The time of the last update. |
| alias | string | The display alias to be used for this layer. |
| description | string | Description string for this layer. |
| copyrightText | string | Copyright and usage information for the data in this layer. |
| **capabilities** | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li><li>`Extract`: Extract is defined.</li></ul></div> |
| ZFactor | number | ZFactor to define conversion factor for elevation unit. |
| cachedDrawingInfo | [cachedDrawingInfo](cachedDrawingInfo.cmn.md) | Indicates if any styling information represented as drawingInfo is captured as part of the binary mesh representation.  This helps provide optimal client-side access. Currently the color component of the drawingInfo is supported. |
| drawingInfo | [drawingInfo](drawingInfo.cmn.md) | An object containing drawing information. |
| elevationInfo | [elevationInfo](elevationInfo.cmn.md) | An object containing elevation drawing information. If absent, any content of the scene layer is drawn at its z coordinate. |
| popupInfo | [popupInfo](popupInfo.cmn.md) | PopupInfo of the scene layer. |
| disablePopup | boolean | Indicates if client application will show the popup information. Default is FALSE. |
| **store** | [store](store.cmn.md) | The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. |
| fields | [field](field.cmn.md)[] | A collection of objects that describe each attribute field regarding its field name, datatype, and a user friendly name {name,type,alias}. It includes all fields that are included as part of the scene layer as derived from a source input feature layer. |
| attributeStorageInfo | [attributeStorageInfo](attributeStorageInfo.cmn.md)[] | Provides the schema and layout used for storing attribute content in binary format in I3S. |
| statisticsInfo | [statisticsInfo](statisticsInfo.cmn.md)[] | Contains the statistical information for a layer. |
| nodePages | [nodePageDefinition](nodePageDefinition.cmn.md) | The paged-access index description. |
| materialDefinitions | [materialDefinitions](materialDefinitions.cmn.md)[] | List of materials classes used in this layer. |
| textureSetDefinitions | [textureSetDefinition](textureSetDefinition.cmn.md)[] | Defines the set of textures that can be referenced by meshes. |
| **geometryDefinitions** | [geometryDefinition](geometryDefinition.cmn.md)[] | Define the layouts of mesh geometry and its attributes. |
| fullExtent | [fullExtent](fullExtent.cmn.md) | 3D extent. If ```layer.fullExtent.spatialReference``` is specified, it must match ```layer.spatialReference```. |

*Note: properties in **bold** are required*

