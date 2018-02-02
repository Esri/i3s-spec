# I3S Point Cloud layer definition

Describes the point cloud layer.



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
| sourceHRef | string | DEPRECATED, do not use. |
| statsHRef | string | DEPRECATED, Implicit per scene layer specification. Statistics are always described in '/statistics'. |
| **spatialReference** | [common::spatialReference](../../common/docs/spatialReference.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry. |
| heightModelInfo | [common::heightModelInfo](../../common/docs/heightModelInfo.md) | An object containing the vertical coordinate system information. |
| **store** | [pointcloud::store](store.md) | The storage for the layer. |
| **fields** | [pointcloud::field](field.md)[] | List of attributes describe as field. |
| **attributeStorageInfo** | [pointcloud::attributeInfo](attributeInfo.md)[] | List of attributes included for this layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Point cloud layer 

```json
 {
    "id": 0,
    "layerType": "PointCloud",
    "name": "mile_high",
    "alias": "",
    "desc": "",
    "copyrightText": "",
    "capabilities": [
        "View"
    ],
    "sourceHRef": "./sources",
    "statsHRef": "./statistics",
    "spatialReference": {
        "wkid": 4326
    },
    "store": {
        "id": "",
        "profile": "PointCloud",
        "version": "1.6",
        "extent": [
            -105.023403,
            39.740089,
            -105.011746,
            39.757051
        ],
        "index": {
            "nodeVersion": 1,
            "nodePerIndexBlock": 64,
            "href": "./nodepages",
            "boundingVolumeType": "obb"
        },
        "attributeEncoding": "application/octet-stream+gzip",
        "geometryEncoding": "application/octet-stream",
        "defaultGeometrySchema": {
            "geometryType": "points",
            "header": [],
            "topology": "PerAttributeArray",
            "encoding": "lepcc-xyz",
            "vertexAttributes": {
                "position": {
                    "valueType": "Int32",
                    "valuesPerElement": 3
                }
            },
            "ordering": [
                "position"
            ]
        }
    },
    "fields": [
        {
            "name": "ELEVATION",
            "type": "esriFieldTypeDouble",
            "alias": "ELEVATION"
        },
        {
            "name": "INTENSITY",
            "type": "FieldTypeInteger",
            "alias": "INTENSITY"
        },
        {
            "name": "RGB",
            "type": "esriFieldTypeInteger",
            "alias": "RGB"
        },
        {
            "name": "CLASS_CODE",
            "type": "esriFieldTypeInteger",
            "alias": "CLASS_CODE"
        },
        {
            "name": "FLAGS",
            "type": "esriFieldTypeInteger",
            "alias": "FLAGS"
        },
        {
            "name": "RETURNS",
            "type": "esriFieldTypeInteger",
            "alias": "RETURNS"
        }
    ],
    "attributeStorageInfo": [
        {
            "key": "1",
            "name": "ELEVATION",
            "encoding": "embedded-elevation"
        },
        {
            "key": "2",
            "name": "INTENSITY",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt16",
                "valuesPerElement": 1
            },
            "encoding": "lepcc-intensity"
        },
        {
            "key": "4",
            "name": "RGB",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 3
            },
            "encoding": "lepcc-rgb"
        },
        {
            "key": "8",
            "name": "CLASS_CODE",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 1
            }
        },
        {
            "key": "16",
            "name": "FLAGS",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 1
            }
        },
        {
            "key": "32",
            "name": "RETURNS",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 1
            }
        }
    ],
    "drawingInfo": "",
    "elevationInfo": "",
    "heightModelInfo": ""
} 
````

