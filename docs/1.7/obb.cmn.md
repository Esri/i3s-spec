# Oriented Bounding Box (OBB)

The Oriented Bounding Box (OBB) should be in the same Coordinate Reference System (CRS) as the layer. The units for both center and halfsize components of the OBB should be in the units of the CRS.

For a layer in WGS84 geographic CRS, refered to as a global scene layer and is identified by the wkid values of 4326 and 4490 (see [spatial reference](/spatialReference.cmn.md) in [3DSceneLayer](/3DSceneLayer.cmn.md) resoruce), the OBB is specified as follows:
- the center component is specified as longitude, latitude (in decimal degrees) and the elevation (z) in meters. 
- the halfsize component is specified in meters and the quaternion is in reference to an ECEF coordinate system.


### Related:

[cmn::3DNodeIndexDocument](3DNodeIndexDocument.cmn.md), [cmn::node](node.cmn.md), [cmn::nodeReference](nodeReference.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **center** | number[3] | The center point of the oriented bounding box specified in CRS units. For a global scene layer, the center is specified as longitude and latitude (in decimal degrees), and the elevation (in meters). |
| **halfSize** | number[3] | Half size of the oriented bounding box in CRS units. For a global scene layer, the half size is specified in meters. |
| **quaternion** | number[4] | Orientation of the oriented bounding box as a 4-component quaternion. For a global scene, the quaternion is in an Earth-Centric-Earth-Fixed (ECEF) Cartesian space. ( Z+ : North, Y+ : East, X+: lon=lat=0.0). Note: A quaternion is a four-element vector that can be used to encode any rotation in a 3D coordinate system. The quaternion components are in the order x, y, z, w.  |

*Note: properties in **bold** are required*

### Examples 

#### Example: Global scene (WSG84) oriented-bounding box 

```json
 {
  "center": [
    -105.01482,
    39.747244,
    1596.040551
  ],
  "halfSize": [
    29.421873,
    29.539055,
    22.082193
  ],
  "quaternion": [
    0.420972,
    -0.055513,
    -0.118217,
    0.897622
  ]
} 
```

