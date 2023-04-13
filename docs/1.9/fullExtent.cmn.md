# fullExtent

The 3D spatial extent of the object it describes in the given spatial reference. The coordinates of the extent can span across the antemeridian (180th meridian). For example, scene layers in a geographic coordinate system covering New Zealand may have a larger xmin value than xmax value. The fullExtent is used by clients to zoom to a scene layer.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [psl::3DSceneLayer](3DSceneLayer.psl.md), [bld::layer](layer.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| spatialReference | [spatialReference](spatialReference.cmn.md) | An object containing the WKID or WKT identifying the spatial reference of the layer's geometry. |
| **xmin** | number | The most east x coordinate. |
| **ymin** | number | The most south y coordinate. |
| **xmax** | number | The most west x coordinate. |
| **ymax** | number | The most north y coordinate. |
| **zmin** | number | The minimum height z coordinate. |
| **zmax** | number | The maximum height z coordinate. |

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

