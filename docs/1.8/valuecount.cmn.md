# valueCount [common profiles]

A string or numeric value.

### Related:

[cmn::statsInfo](statsInfo.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **value** | string, number | Type of the attribute values after decompression, if applicable. Please note that `string` is not supported for point cloud scene layer attributes. |
| **count** | number | Count of the number of values. May exceed 32 bits. |

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

