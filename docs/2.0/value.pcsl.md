# value [point cloud profile]

A scalar or vector value.

### Related:

[pcsl::attributeInfo](attributeInfo.pcsl.md), [pcsl::vertexAttributes](vertexAttributes.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **valueType** | string | Type of the attribute values after decompression, if applicable. Please note that `string` is not supported for point cloud scene layer attributes.<div>Possible values are:<ul><li>`Int8`</li><li>`UInt8`</li><li>`Int16`</li><li>`UInt16`</li><li>`Int32`</li><li>`UInt32`</li><li>`Float32`</li><li>`Float64`</li></ul></div> |
| **valuesPerElement** | number | Number of components. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Scalar value definition 

An unsigned 16 bit value. 

```json
 {
  "valueType": "UInt16",
  "valuesPerElement": 1
} 
```

#### Example: Vector value definition 

The vector value can only be RGB-8 value. 

```json
 {
  "valueType": "UInt8",
  "valuesPerElement": 3
} 
```

