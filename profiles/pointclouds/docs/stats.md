# I3S point cloud scene layer: stats

Contains statistics about each attribute. Statistics are useful to estimate attribute distribution and range.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **min** | number | Minimum attribute value for the entire layer. |
| **max** | number | Maximum attribute value for the entire layer. |
| **count** | number | Count for the entire layer. |
| **sum** | number | Sum of the attribute values over the entire layer. |
| **avg** | number | Representing average or mean value. For example, sum/count. |
| stddev | number | Representing the standard deviation. |
| variance  | number | Representing variance. For example, stats.stddev *stats.stddev. |
| histogram | [pointcloud::histogram](histogram.md) | Represents the histogram. |
| labels | [pointcloud::label](label.md) |  The statistics document may contain labeling information for the attribute values. |

*Note: properties in **bold** are required*

### Examples 

#### Example: stats 

```json
 {
  "stats": {
    "min": 1567.597046,
    "max": 1649.043945,
    "avg": 1593.811809,
    "stddev": 12.722517,
    "count": 3799022.0,
    "sum": 6054926127.557739,
    "variance": 161.862445,
    "histogram": {
      "minimum": 1567.596482,
      "maximum": 1644.937967,
      "counts": [
        1,
        1,
        0,
        0,
        0,
        1,
        3,
        123,
        1852
      ]
    }
  }
} 
````

