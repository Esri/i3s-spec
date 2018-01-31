# I3S Point Cloud layer: Values

A scalar or vector value.

### Related:

[pcsl_vertexAttributes](pcsl_vertexAttributes.md), [pcsl_attributeInfo](pcsl_attributeInfo.md), [pcsl_nodes](pcsl_nodes.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **valueType** | string | Type of the attribute values after decompression, if applicable. Please note that `string` is not supported for point cloud scene layer attributes. |
| **valuesPerElement** | number | Number of components. |
*Note: properties in **bold** are required*

### Examples 

#### Example: Scalar value definition 

```json
 {
  "attributeValues": {
    "valueType": "UInt16",
    "valuesPerElement": 1
  }
} 
````

#### Example: Vector value definition 

```json
 {
  "attributeValues": {
    "valueType": "UInt8",
    "valuesPerElement": 3
  }
} 
````

