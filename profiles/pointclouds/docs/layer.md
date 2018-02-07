# I3S point cloud scene layer definition

Describes the point cloud scene layer.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | number | A unique identifying string for the layer. For point cloud scene layer, only a single layer is supported, therefore, id is always 0. |
| **layerType** | string | String indicating the layer type. |
| **name** | string | Represents the layer name. |
| alias | string | Represents the alias layer name. |
| desc | string | Description for the layer. |
| copyrightText | string | Copyright information to be displayed with this layer. |
| capabilities | string[] | Capabilities supported by this layer. |
| **spatialReference** | [common::spatialReference](../../common/docs/spatialReference.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry. |
| heightModelInfo | [common::heightModelInfo](../../common/docs/heightModelInfo.md) | An object containing the vertical coordinate system information. |
| **store** | [pointcloud::store](store.md) | The storage for the layer. |
| **fields** | [pointcloud::field](field.md)[] | List of attributes described as field. |
| **attributeStorageInfo** | [pointcloud::attributeInfo](attributeInfo.md)[] | List of attributes included for this layer. |
| drawingInfo | [pointcloud::drawingInfo](drawingInfo.md) | An object containing drawing information. |
| elevationInfo | [pointcloud::elevationInfo](elevationInfo.md) | An object containing elevation information. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Point cloud layer 

```json
{
	"id": 0,
	"layerType": "PointCloud",
	"name": "philly",
	"alias": "",
	"desc": "",
	"copyrightText": "",
	"capabilities": ["View"],
	"spatialReference": {
		"wkid": 103142,
		"latestWkid": 6565,
		"vcsWkid": 105703,
		"latestVcsWkid": 6360
	},
	"store": {
		"id": "",
		"profile": "PointCloud",
		"version": "2.0",
		"extent": [2690584.17,
		238213.85,
		2693979.04,
		240815.11],
		"index": {
			"nodeVersion": 1,
			"boundingVolumeType": "obb",
			"nodesPerPage": 64,
			"lodSelectionMetricType": "density-threshold"
		},
		"defaultGeometrySchema": {
			"geometryType": "points",
			"header": [],
			"topology": "PerAttributeArray",
			"encoding": "lepcc-xyz",
			"vertexAttributes": {
				"position": {
					"valueType": "Float64",
					"valuesPerElement": 3
				}
			},
			"ordering": ["position"]
		}
	},
	"attributeStorageInfo": [{
		"key": "1",
		"name": "ELEVATION",
		"encoding": "embedded-elevation"
	},
	{
		"key": "2",
		"name": "INTENSITY",
		"ordering": ["attributeValues"],
		"attributeValues": {
			"valueType": "UInt16",
			"valuesPerElement": 1
		},
		"encoding": "lepcc-intensity"
	},
	{
		"key": "8",
		"name": "CLASS_CODE",
		"ordering": ["attributeValues"],
		"attributeValues": {
			"valueType": "UInt8",
			"valuesPerElement": 1
		}
	},
	{
		"key": "16",
		"name": "FLAGS",
		"ordering": ["attributeValues"],
		"attributeValues": {
			"valueType": "UInt8",
			"valuesPerElement": 1
		}
	},
	{
		"key": "32",
		"name": "RETURNS",
		"ordering": ["attributeValues"],
		"attributeValues": {
			"valueType": "UInt8",
			"valuesPerElement": 1
		}
	},
	{
		"key": "1024",
		"name": "SCAN_ANGLE",
		"ordering": ["attributeValues"],
		"attributeValues": {
			"valueType": "Int16",
			"valuesPerElement": 1
		}
	}],
	"drawingInfo": {
		"renderer": {
			"pointSizeAlgorithm": {
				"type": "pointCloudSplatAlgorithm",
				"scaleFactor": 0.532883
			},
			"pointsPerInch": 15.0,
			"field": "SCAN_ANGLE",
			"fieldTransformType": "none",
			"type": "pointCloudStretchRenderer",
			"stops": [{
				"value": -11.0,
				"color": [230,
				0,
				0,
				255]
			},
			{
				"value": 0.0,
				"color": [76,
				230,
				0,
				255]
			},
			{
				"value": 11.0,
				"color": [230,
				0,
				0,
				255]
			}]
		}
	},
	"elevationInfo": {
		"mode": "absoluteHeight",
		"offset": 0.0
	},
	"heightModelInfo": {
		"heightModel": "gravity_related_height",
		"vertCRS": "NAVD88_height_(ftUS)",
		"heightUnit": "us-foot"
	}
}
```

