# I3S point cloud scene layer definition

Describes the point cloud scene layer.

### Related:

[pcsl::nodepage](nodepage.pcsl.md), [pcsl::statistics](statistics.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | A unique identifying number for the layer. For point cloud scene layer, only a single layer is supported, therefore, id is always 0. |
| **layerType** | string | String indicating the layer type<div>Must be:<ul><li>`PointCloud`</li></ul></div> |
| **name** | string | Represents the layer name. |
| alias | string | Represents the alias layer name. |
| desc | string | Description for the layer. |
| copyrightText | string | Copyright information to be displayed with this layer. |
| capabilities | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li></ul></div> |
| **spatialReference** | [spatialReference](spatialReference.cmn.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | An object containing the vertical coordinate system information. |
| serviceUpdateTimeStamp | [serviceUpdateTimeStamp](serviceUpdateTimeStamp.cmn.md) | Object to provide time stamp when the I3S service or the source of the service was created or updated. |
| **store** | [store](store.pcsl.md) | The storage for the layer. |
| **attributeStorageInfo** | [attributeInfo](attributeInfo.pcsl.md)[] | List of attributes included for this layer. |
| drawingInfo | [drawingInfo](drawingInfo.pcsl.md) | An object containing drawing information. |
| elevationInfo | [elevationInfo](elevationInfo.pcsl.md) | An object containing elevation information. |
| sourceHRef | string |  |
| statsHRef | string |  |
| fields | [field](field.cmn.md)[] |  |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: Point cloud layer 

```json
 {
    "id": 0, 
    "layerType": "PointCloud", 
    "name": "mile-high", 
    "alias": "mile-high", 
    "desc": "mile-high.lasd", 
    "copyrightText": "", 
    "capabilities": ["View"], 
    "spatialReference": 
    {
        "wkid": 4326, 
        "latestWkid": 4326, 
        "vcsWkid": 5703, 
        "latestVcsWkid": 5703
        },
    "store": 
    {
        "id": "", 
        "profile": "PointCloud", 
        "version": "2.0", 
        "extent": [-105.023403, 39.740089, -105.011746, 39.757051], 
        "index": 
        {
            "nodeVersion": 1, 
            "boundingVolumeType": "obb", 
            "nodePerIndexBlock": 64, 
            "lodSelectionMetricType": "density-threshold"
            }, 
        "defaultGeometrySchema": 
        {
            "geometryType": "points", 
            "header": [], 
            "topology": "PerAttributeArray", 
            "encoding": "lepcc-xyz", 
            "vertexAttributes": 
            {
                "position": 
                {
                    "valueType": "Float", 
                    "valuesPerElement": 3
                    }
                }, "ordering": ["position"]
            }
        }, 
    "attributeStorageInfo": [
    {
        "key": "1", 
        "name": "ELEVATION", 
        "encoding": "embedded-elevation"
        }, 
    {
        "key": "2", 
        "name": "INTENSITY", 
        "ordering": ["attributeValues"], 
        "attributeValues": 
        {
            "valueType": "UInt16", 
            "valuesPerElement": 1
            }, 
            "encoding": "lepcc-intensity"
        }, 
    {
        "key": "4", 
        "name": "RGB", 
        "ordering": ["attributeValues"], 
        "attributeValues": 
        {
            "valueType": "UInt8", 
            "valuesPerElement": 3
            }, 
            "encoding": "lepcc-rgb"
        },
    {
        "key": "8",
        "name": "CLASS_CODE", 
        "ordering": ["attributeValues"], 
        "attributeValues": 
        {
            "valueType": "UInt8"
            , "valuesPerElement": 1
            }
        }, 
    {
        "key": "32", 
        "name": "RETURNS", 
        "ordering": ["attributeValues"], 
        "attributeValues": 
        {
            "valueType": "UInt8", 
            "valuesPerElement": 1
            }
        }
    ], 
    "drawingInfo": 
    {
        "renderer": 
        {
            "pointSizeAlgorithm": 
            {
                "type": "pointCloudSplatAlgorithm", 
                "scaleFactor": 1.0
                }, 
            "pointsPerInch": 15.0, 
            "field": "ELEVATION", 
            "fieldTransformType": "none", 
            "type": "pointCloudStretchRenderer", 
            "stops": [
                {
                    "value": 1568.366778, 
                    "color": [88, 19, 252, 255]
                    }, 
                {
                    "value": 1585.330132, 
                    "color": [8, 252, 253, 255]
                    }, 
                {
                    "value": 1602.293486, 
                    "color": [242, 254, 42, 255]
                    }, 
                {
                    "value": 1619.25684, 
                    "color": [255, 43, 24, 255]
                    }
                ]
            }
        }, 
    "elevationInfo": 
    {
        "mode": "absoluteHeight", 
        "offset": 0.0
        }, 
    "heightModelInfo": 
    {
        "heightModel": "gravity_related_height", 
        "vertCRS": "NAVD_1988", 
        "heightUnit": "meter"
        }
} 
```

