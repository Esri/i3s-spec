# Building Scene Layer

Id-> Feature-service mapping

### Related:

[bim::layer](../../bim/docs/layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **spatialReference** | [common::spatialReference](spatialReference.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry. |
| **xmin** | number | left |
| **xmax** | number | right |
| **ymin** | number | bottom |
| **ymax** | number | top |
| **zmin** | number | lowest elevation |
| **zmax** | number | highest elevation |

*Note: properties in **bold** are required*

### Examples 

#### Example: Building Scene Layer 

```json
 {
  "xmin": -117.855689264791,
  "ymin": 32.5702577626442,
  "xmax": -116.87086222794,
  "ymax": 34.1460567673275,
  "zmin": 0.1,
  "zmax": 50.0,
  "spatialReference": {
    "wkid": 4326,
    "latestWkid": 4326
  }
} 
```

