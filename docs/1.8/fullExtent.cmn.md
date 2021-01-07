# fullExtent

This object allows the definition of the full extent of a scene layer.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [psl::3DSceneLayer](3DSceneLayer.psl.md), [bld::layer](layer.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| spatialReference | [spatialReference](spatialReference.cmn.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry. |
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
  "zmax": 50.0
} 
```

