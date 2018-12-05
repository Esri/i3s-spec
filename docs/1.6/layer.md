# Building Scene Layer



### Related:

[statsummary](statsummary.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Identifier for the layer. Building scene layer id is not in the same namespace as sublayer id. **Important**: clients should **not** assume it will be `0`. |
| **name** | string | Layer name. |
| alias | string | Alias of the layer name. Can be empty if alias and name are identical. |
| **layerType** | string | <div>Must be:<ul><li>`Building`</li></ul></div> |
| description | string | Description for the layer. |
| copyrightText | string | Copyright information to be displayed. |
| **fullExtent** | [fullExtent](fullExtent.md) | 3d extent. If `layer.fullExtent.spatialReference` is specified, it **must** match `layer.spatialReference`. |
| **spatialReference** | [spatialReference](spatialReference.md) | The spatialReference of the layer including the vertical coordinate system. WKT is included to support custom spatial references. |
| heightModelInfo | [heightModelInfo](heightModelInfo.md) | An object containing the vertical coordinate system information. |
| **sublayers** | [sublayer](sublayer.md)[] | List of sublayers or group of sublayers. |
| filters | [filter](filter.md)[] | Array of filters defined for the building scene layer. |
| activeFilterID | string | Global ID, filter ID of the currently active filter for the building scene layer. |
| statisticsHRef | string | url to statistic summary for the BIM layer. [statistics/summary.json](statsummary.md) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

