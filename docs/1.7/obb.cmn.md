# Oriented Bounding Box (OBB)

An Oriented Bounding Box (OBB) is a compact bounding volume representation, tightly fitting the geometries it represents. An OBBs' invariance to translation and rotation, makes it ideal as the optimal and default bounding volume representation in I3S.

When constructing an OBB for I3S use, there are two considerations an implementer needs to be make based on the Coordinate Reference System (CRS) of the layer:

## Constructing OBB for a global scene layer

For an I3S layer in WGS84 geographic coordinate system, referred to as a *global scene layer* and identified by the wkid value of 4326 (see [spatial reference](/docs/1.7/spatialReference.cmn.md) in [3DSceneLayer](/docs/1.7/3DSceneLayer.cmn.md) resource): 
docs/1.7/3DSceneLayer.cmn.md
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

[cmn::3DNodeIndexDocument](3DNodeIndexDocument.cmn.md), [cmn::node](node.cmn.md), [cmn::nodeReference](nodeReference.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **center** | number[3] | The center point of the oriented bounding box specified in CRS units. For a global scene layer, the center is specified as longitude and latitude (in decimal degrees), and the elevation (in meters). |
| **halfSize** | number[3] | Half size of the oriented bounding box in CRS units. For a global scene layer, the values are all in meters.|
| **quaternion** | number[4] | Orientation of the oriented bounding box as a 4-component quaternion. For a global scene layer, the quaternion is in an earth-centered, earth-fixed (ECEF) Cartesian space. ( Z+ : North, Y+ : East, X+: lon=lat=0.0). Note: A quaternion is a four-element vector that can be used to encode any rotation in a 3D coordinate system. The quaternion components are in the order x, y, z, w.  |

*Note: properties in **bold** are required*

### Examples

Examples of oriented-bounding boxes. The OBB examples below enclose the same geometry, differing only in the CRS of the input layer, as indicated by the wkid values.

#### Example 1: an oriented-bounding box for a Global scene layer (WSG84, wkid: 4326)

```json
{
	"center": [
		-122.40277014424709,
		37.795204290863012,
		134.5439856108278
	],
	"halfSize": [
		30.701572418212891,
		27.71544075012207,
		129.72760009765625
	],
	"quaternion": [
		-0.50688880681991577,
		0.74475228786468506,
		0.1719556450843811,
		0.39854612946510315
	]
}
```

#### Example 2: an oriented-bounding box for Local scene layer (Lambert, Wkid: 2227)
```json
{
	"center": [
		6011913.2692229711,
		2117599.0498975096,
		441.1241036703866
	],
	"halfSize": [
		100.45386505126953,
		91.120384216308594,
		426.03338623046875
	],
	"quaternion": [
		0.64432936906814575,
		0.76474469900131226,
		-0.0020481476094573736,
		0.0010012148413807154
	]
}
 ```
