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