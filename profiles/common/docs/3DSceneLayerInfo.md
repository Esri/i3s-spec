# 3DSceneLayerInfo

The 3DSceneLayerInfo describes the properties of a single layer ina store.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | integer | Unique numeric ID of the layer. |
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
| cachedDrawingInfo | [common::cachedDrawingInfo](cachedDrawingInfo.md) | Indicates if any stylization infomraton represented as drawingInfo is addtionally captured as part of the binnary mesh representation for optimal client side access. Currently color component of the drawingInfo is supported. |
| drawingInfo | [common::drawingInfo](drawingInfo.md) | An object containing drawing information. |

*Note: properties in **bold** are required*

