# I3S building scene layer: histogram

The histogram of the point cloud scene layer. The bin size may be computed as (max-min)/bin count. Please note that stats.histo.min/max is not equivalent to stats.min/max since values smaller than stats.histo.min and greater than stats.histo.max are counted in the first and last bin respectively. The values stats.min and stats.max may be conservative estimates.

### Related:

[statsInfo](statsInfo.cmn.0106.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **minimum** | number | Minimum attribute value for the entire layer. |
| **maximum** | number | Maximum attribute value for the entire layer. Maximum array size for stats.histo.counts is 256. |
| **counts** | number[] | Count for the entire layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: histogram 

