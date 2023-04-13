# histogram [point cloud profile]

The histogram of the point cloud scene layer. The bin size may be computed as (max-min)/bin count. Please note that stats.histo.min/max is not equivalent to stats.min/max since values smaller than stats.histo.min and greater than stats.histo.max are counted in the first and last bin respectively. The values stats.min and stats.max may be conservative estimates. The bins would be distributed as follows:

```(-inf, stats.min + bin_size], (stats.min + bin_size, stats.min + 2 * bin_size], ... , (stats.min + (bin_count - 1) * bin_size], (stats.min + (bin_count - 1) * bin_size, +inf)```

### Related:

[pcsl::stats](stats.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **minimum** | number | Minimum value (i.e. left bound) of the first bin of the histogram. |
| **maximum** | number | Maximum value (i.e. right bound) of the last bin of the histogram. |
| **counts** | number[:256] | Array of binned value counts with up to ```n``` values, where ```n``` is the number of bins and **must be less or equal to 256**. |

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

