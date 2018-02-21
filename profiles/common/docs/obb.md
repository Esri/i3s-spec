# I3S point cloud scene layer: obb

Oriented bounding boxes

### Related:

[pointcloud::node](../../pointclouds/docs/node.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **center** | number[3] | The center point of the oriented bounding box. For a global scene, i.e. XY coordinate system in WGS1984, center is in longitude of decimal degrees, latitude of decimal degrees, elevation in meters. |
| **halfSize ** | number[3] | Half size of the oriented bounding box in spatial reference units (or meter for global scenes). |
| **orientation ** | number[4] | Orientation of the oriented bounding box as a 4-component quaternion. For global scene, quaternion is in Earth-Centric-Earth-Fixed (ECEF) Cartesian space. ( Z+ : North, Y+ : East, X+: lon=lat=0.0). |

*Note: properties in **bold** are required*

### Examples 

#### Example: Global scene (WSG84) oriented-bounding box 

```json
 {
    "obb": {
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
} 
````

