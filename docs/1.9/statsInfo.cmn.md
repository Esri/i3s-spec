# statsInfo

Contains statistics about each attribute. Statistics are useful to estimate attribute distribution and range. The content depends on the [field types](field.cmn.md).

### Related:

[cmn::stats](stats.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| totalValuesCount | number | Represents the count of the value. |
| min | number | Minimum attribute value for the entire layer. |
| max | number | Maximum attribute value for the entire layer. |
| minTimeStr | string | Minimum time string represented according to [time encoding](value.cmn.md). Only used for esriFieldTypeDate i3s version 1.9 or newer. |
| maxTimeStr | string | Maximum time string represented according to [time encoding](value.cmn.md). Only used for esriFieldTypeDate i3s version 1.9 or newer. |
| count | number | Count for the entire layer. |
| sum | number | Sum of the attribute values over the entire layer. |
| avg | number | Representing average or mean value. For example, sum/count. |
| stddev | number | Representing the standard deviation. |
| variance | number | Representing variance. For example, stats.stddev *stats.stddev. |
| histogram | [histogram](histogram.cmn.md) | Represents the histogram. |
| mostFrequentValues | [valuecount](valuecount.cmn.md)[] | An array of most frequently used values within the point cloud scene layer. |

### Examples 

#### Example: Statistics for field type esriFieldTypeString 

```json
 {
  "totalValuesCount": 8,
  "mostFrequentValues": [
    {
      "value": "Bratislava",
      "count": 2
    },
    {
      "value": "Berlin",
      "count": 2
    },
    {
      "value": "Wien",
      "count": 24
    },
    {
      "value": "Paris",
      "count": 23
    }
  ]
} 
```

#### Example: Statistics for field type esriFieldTypeDate 

```json
 {
  "minTimeStr": "2020-06-21T11:03:10.565Z",
  "maxTimeStr": "2022-07-02T08:00:00.000Z",
  "totalValuesCount": 4,
  "mostFrequentValues": [
    {
      "value": "2020-06-21T11:03:10.565Z",
      "count": 1
    },
    {
      "value": "2022-06-02T08:00:00.000Z",
      "count": 1
    },
    {
      "value": "2022-07-02T08:00:00.000Z",
      "count": 1
    },
    {
      "value": "2022-06-08T08:00:00.000Z",
      "count": 1
    }
  ]
} 
```

#### Example: Statistics for field type esriFieldTypeDouble 

```json
 {
  "min": 0.5,
  "max": 44.67,
  "avg": 15.89,
  "count": 3,
  "sum": 47.67,
  "histogram": {
    "minimum": 0.5,
    "maximum": 44.67,
    "counts": [
      4
    ]
  }
} 
```

#### Example: Statistics for field type esriFieldTypeSingle, esriFieldTypeInteger, esriFieldTypeSmallInteger 

```json
 {
  "min": 2,
  "max": 10,
  "avg": 5.5,
  "stddev": 3.6968455,
  "count": 4,
  "sum": 22,
  "variance": 13.666667,
  "histogram": {
    "minimum": 2,
    "maximum": 10,
    "counts": [
      1,
      1,
      1,
      1
    ]
  },
  "mostFrequentValues": [
    {
      "value": 2,
      "count": 1
    },
    {
      "value": 3,
      "count": 1
    },
    {
      "value": 7,
      "count": 1
    },
    {
      "value": 10,
      "count": 1
    }
  ]
} 
```

