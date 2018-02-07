# I3S point cloud scene layer: drawingInfo

The drawingInfo object contains drawing information for a point cloud scene layer. 

### Related:

[pointcloud::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **renderer** |  | An object defined which provides the symbology for the layer. [For more](https://developers.arcgis.com/web-scene-specification/objects/pointCloudRenderer/) information on supported renderer types in ArcGIS clients. |

*Note: properties in **bold** are required*

```json
	"drawingInfo": {
		"renderer": {
			"pointSizeAlgorithm": {
				"type": "pointCloudSplatAlgorithm",
				"scaleFactor": 1.0
			},
			"pointsPerInch": 15.0,
			"field": "POINT_SRC_ID",
			"fieldTransformType": "moduloTen",
			"type": "pointCloudUniqueValueRenderer",
			"colorUniqueValueInfos": [{
				"values": ["0"],
				"label": "0, 10, 20, ...",
				"description": "",
				"color": [166,
				206,
				227]
			},
			{
				"values": ["1"],
				"label": "1, 11, 21, ...",
				"description": "",
				"color": [38,
				115,
				0]
			},
			{
				"values": ["2"],
				"label": "2, 12, 22, ...",
				"description": "",
				"color": [178,
				223,
				138]
			},
			{
				"values": ["3"],
				"label": "3, 13, 23, ...",
				"description": "",
				"color": [169,
				0,
				230]
			},
			{
				"values": ["4"],
				"label": "4, 14, 24, ...",
				"description": "",
				"color": [251,
				154,
				153]
			},
			{
				"values": ["5"],
				"label": "5, 15, 25, ...",
				"description": "",
				"color": [227,
				26,
				28]
			},
			{
				"values": ["6"],
				"label": "6, 16, 26, ...",
				"description": "",
				"color": [0,
				77,
				168]
			},
			{
				"values": ["7"],
				"label": "7, 17, 27, ...",
				"description": "",
				"color": [253,
				191,
				111]
			},
			{
				"values": ["8"],
				"label": "8, 18, 28, ...",
				"description": "",
				"color": [255,
				127,
				0]
			},
			{
				"values": ["9"],
				"label": "9, 19, 29, ...",
				"description": "",
				"color": [202,
				178,
				214]
			}]
		}
```