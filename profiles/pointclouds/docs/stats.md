# I3S point cloud scene layer: stats

Contains statistics about each attribute. Statistics are useful to estimate attribute distribution and range.

### Related:

[pointcloud::statistics](statistics.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **min** | number | Minimum attribute value for the entire layer. |
| **max** | number | Maximum attribute value for the entire layer. |
| **count** | number | Count for the entire layer. |
| sum | number | Sum of the attribute values over the entire layer. |
| avg | number | Representing average or mean value. For example, sum/count. |
| stddev | number | Representing the standard deviation. |
| variance  | number | Representing variance. For example, stats.stddev *stats.stddev. |
| histogram | [pointcloud::histogram](histogram.md) | Represents the histogram. |
| mostFrequentValues | [pointcloud::valuecount](valuecount.md)[] |  |
| labels | [pointcloud::labels](labels.md) |  The statistics document may contain labeling information for the attribute values. |

*Note: properties in **bold** are required*

