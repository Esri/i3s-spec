# Oriented Bounding Box (OBB)



An Oriented Bounding Box (OBB) is a compact bounding volume representation, tightly fitting the geometries it represents. An OBBs' invariance to translation and rotation, makes it ideal as the optimal and default bounding volume representation in I3S. 

When constructing an OBB for I3S use, there are two considerations an implementer needs to be make based on the Coordinate Reference System (CRS) of the layer:

## Constructing OBB for a global scene layer

For an I3S layer in WGS84 geographic coordinate system, referred to as a *global scene layer* and identified by the wkid value of 4326 (see [spatial reference](/spatialReference.cmn.md) in [3DSceneLayer](/3DSceneLayer.cmn.md) resource): 
- the OBB should be constructed in an earth-centered, earth-fixed (ECEF) coordinate system equivalent to the layers' CRS. 
- the center component of the OBB is specified as longitude, latitude (in decimal degrees) and the elevation (z) in meters.
- the halfSize component of the OBB is specified in meters.
- the quaternion component is in reference to an ECEF coordinate system.

When constructing an OBB for a global scene layer, the following steps must occur:
- project vertices of interests to ECEF.
- Compute OBB in ECEF.
- Convert only the center of the OBB from ECEF back to the CRS of the layer.

## Constructing OBB for a local scene layer

For an I3S layer, with a CRS *other* than wkid value of 4326, referred to as a *local scene layer*:
- the OBB should be constructed in the same CRS as the layer. 
- the units for the center and halfSize components of the OBB should be in the unit of the CRS. 
- both center and quaternion are specified in reference to the CRS of the layer. 

The OBB construction steps described in the global scene layer use case above apply here also. However, for a local scene layer, vertices, OBB computation and the resultant OBB components all remain in the CRS of the layer. The units of the OBB components are in the same unit as the layers'.

### Related:

[pcsl::node](node.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **center** | number[3] | The center point of the oriented bounding box. For a global scene, such as the XY coordinate system in WGS1984, the center is specified in latitude/longitude in decimal degrees, elevation (Z) in meters. |
| **halfSize** | number[3] | Half size of the oriented bounding box in units of the CRS. For a global scene, such as the XY coordinate system in WGS1984, the center is specified in latitude/longitude in decimal degrees, elevation (Z) in meters. |
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

