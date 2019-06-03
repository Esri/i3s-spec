# LOD selection

A client needs information to determine whether a node's contents are "good enough" to render in the current 3D view under constraints such as resolution, screen size, bandwidth and available memory and target minimum quality goals. Multiple LoD selection metrics can be included. These metrics are used by clients to determine the optimal resource access patterns. Each I3S profile definition provides additional details on LoD Selection. maxScreenThreshold the default lodSelection metric used for meshpyramids profile, is a per-node value for the maximum pixel size as measured in screen pixels. This value indicates the upper limit for the screen size of the diameter of the node's minimum bounding sphere (MBS). In other words, the content referenced by this node will qualify to be rendered only when the screen size is below the maximum screen threshold value.

### Related:

[cmn::3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **metricType** | string | The name of the error metric, one of {maxScreenThreshold, screenSpaceRelative, distanceRangeFromDefaultCamera} |
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

