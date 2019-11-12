# histogram [point cloud profile]

The histogram of the point cloud scene layer. The bin size may be computed as (max-min)/bin count. Please note that stats.histo.min/max is not equivalent to stats.min/max since values smaller than stats.histo.min and greater than stats.histo.max are counted in the first and last bin respectively. The values stats.min and stats.max may be conservative estimates.

### Related:

[pcsl::stats](stats.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **minimum** | number | Minimum attribute value for the entire layer. |
| **maximum** | number | Maximum attribute value for the entire layer. Maximum array size for stats.histo.counts is 256. |
| **counts** | number[:256] | Count for the entire layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: histogram 

```json
 {
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
```

