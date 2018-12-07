# I3S point cloud scene layer: drawingInfo

The drawingInfo object contains drawing information for a point cloud scene layer. 

### Related:

[pcsl::layer](layer.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **renderer** |  | An object defining the symbology for the layer. [See more](https://developers.arcgis.com/web-scene-specification/objects/pointCloudRenderer/) information on supported renderer types in ArcGIS clients. |

*Note: properties in **bold** are required*

### Examples 

#### Example: drawingInfo 

```json
 {
  "drawingInfo": {
    "pointSizeAlgorithm": {
      "type": "pointCloudSplatAlgorithm",
      "scaleFactor": 1.0
    },
    "pointsPerInch": 15.0,
    "field": "ELEVATION",
    "fieldTransformType": "none",
    "type": "pointCloudStretchRenderer",
    "stops": [
      {
        "value": 1.496083,
        "color": [
          88,
          19,
          252,
          255
        ]
      },
      {
        "value": 51.650686,
        "color": [
          8,
          252,
          253,
          255
        ]
      },
      {
        "value": 101.805289,
        "color": [
          242,
          254,
          42,
          255
        ]
      },
      {
        "value": 151.959892,
        "color": [
          255,
          43,
          24,
          255
        ]
      }
    ]
  }
} 
```

