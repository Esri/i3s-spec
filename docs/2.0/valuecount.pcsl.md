# I3S point cloud scene layer: Values

A scalar or vector value.

### Related:

[pcsl::stats](stats.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **value** | number | Type of the attribute values after decompression, if applicable. Please note that `string` is not supported for point cloud scene layer attributes. |
| **count** | number | Count the number of values. May exceed 32 bit. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Scalar value definition 

An unsigned 16 bit value. 

```json
 {
  "value": 145,
  "count": 14789654
} 
```

