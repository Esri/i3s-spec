# I3S point cloud scene layer: stats

Contains statistics about each attribute. Statistics are useful to estimate attribute distribution and range.

### Related:

[cmn::stats](stats.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| totalValuesCount | number | Represents the count of the value |
| min | number | Minimum attribute value for the entire layer. |
| max | number | Maximum attribute value for the entire layer. |
| count | number | Count for the entire layer. |
| sum | number | Sum of the attribute values over the entire layer. |
| avg | number | Representing average or mean value. For example, sum/count. |
| stddev | number | Representing the standard deviation. |
| variance | number | Representing variance. For example, stats.stddev *stats.stddev. |
| histogram | [histogram](histogram.cmn.md) | Represents the histogram. |
| mostFrequentValues | [valuecount](valuecount.cmn.md)[] | An array of most frequently used values within the point cloud scene layer. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

