# I3S Point Cloud layer: obb

Oriented bounding boxes organize nodes in a hierarchical tree.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| center | number | The center point of the oriented bounding box. For a global scene, i.e. XY coordinate system in WGS1984, center is in longitude of decimal degrees, latitude of decimal degrees, elevation in meters. |
| halfSize  | number | Half size of the oriented bounding box measured in meter. |
| orientation  | integer |  Orientation of the oriented bounding box. Measured in ECEF Cartesian space. ( Z+ : North, Y+ : East, X+: lon=lat=0.0). |
*Note: properties in **bold** are required*

