# Minimum Bounding Sphere

An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **mbs** | number[4] | The center point of the minimum bounding sphere. An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node. For a global scene, i.e. XY coordinate system in WGS1984, the values of the array correspond to longitude in decimal degrees, latitude of in decimal degrees, elevation in meters and radius in meters. For all other CRS, the values of x,y,z and r are in the same unit. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Global scene (WSG84) minimum-bounding sphere 

```json
"mbs": [
        0.027173397137801203,
        0.0049950922109050205,
        139.15166463702917,
        133.99739074707031
]
```

