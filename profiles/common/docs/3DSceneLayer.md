# 3DSceneLayerInfo

The object 3dSceneLayerInfo describes the properties of a layer in a store. Every scene layer contains 3dSceneLayerInfo. For feature based scene layer such as 3D objects or point scene layer it may include the default symbology, as specified in the [drawingInfo](drawingInfo.md), which contains stylization information for a feature layer.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Unique numeric ID of the layer. |
| href | string | The relative URL to the 3DSceneLayerResource. Only presnt as part of the SceneServiceInfo resource. |
| layerType | string | The user-visible type of this layer, one of {Point, Line, Polygon, 3DObject, IntegratedMesh, Pointcloud}. |
| spatialReference | [common::spatialReference](../../common/docs/spatialReference.md) | The spatialReference of the layer including the vertical coordinate system. Wkt is included to support custom spatial references. |
| heightModelInfo | [common::heightModelInfo](../../common/docs/heightModelInfo.md) | Enables consuming clients to perform quick test to determine whether this layer is compatible (with respect to its horizontal and vertical CRS) with existing content. |
| version | string | The ID of the last update session in which any resource belonging to this layer has been updated. |
| name | string | The name of this layer. |
| alias | string[] | The display alias to be used for this layer. |
| description | string[] | Description string for this layer. |
| copyrightText | string[] | Copyright and usage information for the data in this layer. |
| capabilities | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li></ul></div> |
| ZFactor | number | should we not document this or is it still needed? |
| cachedDrawingInfo | [common::cachedDrawingInfo](cachedDrawingInfo.md) | Indicates if any stylization infomraton represented as drawingInfo is addtionally captured as part of the binnary mesh representation for optimal client side access. Currently color component of the drawingInfo is supported. |
| drawingInfo | [common::drawingInfo](drawingInfo.md) | An object containing drawing information. |
| elevationInfo | [common::elevationInfo](elevationInfo.md) | An object containing elevation information drawing information. If absent any content of the scene layer is drawn at its z coordinate. |
| popupInfo | [common::popupInfo](popupInfo.md) | PopupInfo of the scene layer. |
| disablePopup | boolean | Indicates if client application will show the popup information. |
| store | [common::store](store.md) | The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. |
| fields | [common::field](field.md) | A collection of objects that describe each attribute field regarding its field name, datatype and a user friendly name {name,type,alias}. It includes all fields that are included as part of the I3S layer as derived from a source input feature layer. |
| attributeStorageInfo | [common::attributeStorageInfo](attributeStorageInfo.md) | Provides the schema and layout used for storing attribute content in binary format in I3S. |
| statisticsInfo | [common::statisticsInfo](statisticsInfo.md) | Containing the statistical information for a layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 {} 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {} 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {} 
```

