# Oriented Bounding Box (OBB)

Definition of an oriented bounding box

### Related:

[pcsl::node](node.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **center** | number[3] | The center point of the oriented bounding box. For a global scene, such as the XY coordinate system in WGS1984, the center is specified in latitude/longitude in decimal degrees, elevation (Z) in meters. |
| **halfSize** | number[3] | Half size of the oriented bounding box in units of the CRS. For a global scene, such as the XY coordinate system in WGS1984, the center is specified in latitude/longitude in decimal degrees, elevation (Z) in meters. |
| **quaternion** | number[4] | Orientation of the oriented bounding box as a 4-component quaternion. For a global scene, the quaternion is in an Earth-Centric-Earth-Fixed (ECEF) Cartesian space. ( Z+ : North, Y+ : East, X+: lon=lat=0.0). Note: A quaternion is a four-element vector that can be used to encode any rotation in a 3D coordinate system. |

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

