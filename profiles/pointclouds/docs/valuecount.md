# I3S point cloud scene layer: Values

A scalar or vector value.

### Related:

[pointcloud::stats](stats.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **value** | number | Type of the attribute values after decompression, if applicable. Please note that `string` is not supported for point cloud scene layer attributes. |
| **count** | number | count the number of values. May exceed 32 bit. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Scalar value definition 

```json
 {
  "value": 145,
  "count": 14789654
} 
````

