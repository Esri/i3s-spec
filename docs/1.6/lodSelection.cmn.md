# LOD selection

A client needs information to determine whether a node's contents are "good enough" to render in the current 3D view under constraints such as resolution, screen size, bandwidth and available memory and target minimum quality goals. Multiple LoD selection metrics can be included. 

These metrics are used by clients to determine the optimal resource access patterns. Each I3S profile definition provides additional details on LoD Selection.

### Related:

[cmn::3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **metricType** | string | <div>Possible values are:<ul><li>`maxScreenThreshold`: A per-node value for the maximum pixel size as measured in screen pixels. This value indicates the upper limit for the screen size of the diameter of the node's minimum bounding sphere (MBS). In other words, the content referenced by this node will qualify to be rendered only when the screen size is below the maximum screen threshold value. Used with the mesh pyramid profile.</li><li>`maxScreenThresholdSQ`: A per-node value for the maximum area of the projected bounding volume on screen in pixel squared. 3D Viewers may implement **look-angle dependent** node switching by comparing this metric with the area of the 2D outline of the oriented-bounding box (OBB) on screen. ( see [_"Fast Projected Area Computation for Three-Dimensional Bounding Boxes", Dieter Schmalstieg and Robert F. Tobler_](https://pdfs.semanticscholar.org/1f59/8266e387cf367702d16acf5a4e02cc72cb99.pdf) for an efficient algorithm) . If a **look-angle independent** LOD switching is desired, viewers may use the area of minimum bounding-sphere (MBS) of the node if available or the MBS of the OBB otherwise. 
Note:  `maxScreenThresholdSQ` may be related to `maxScreenThreshold` as follow:  `maxScreenThresholdSQ = PI * 0.25 * maxScreenThreshold * maxScreenThreshold`</li><li>`screenSpaceRelative`: The scale of the node's minimum bounding volume. Used by the point profile.</li><li>`distanceRangeFromDefaultCamera`: Normalized distance of the node's minimum bounding volume from the camera. Used by the point profile.</li><li>`effectiveDensity`: Estimation of the point density covered by the node.  Used by the point cloud profile.</li></ul></div> |
| **maxError** | number | Maximum metric value, expressed in the CRS of the vertex coordinates or in reference to other constants such as screen size. |

*Note: properties in **bold** are required*

### Examples 

#### Example: LOD Selection example 

```json
 {
  "metricType": "maxScreenThreshold",
  "maxError": 34.87550189480981
} 
```

