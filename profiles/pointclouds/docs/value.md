# I3S point cloud scene layer: Values

A scalar or vector value.

### Related:

[pointcloud::attributeInfo](attributeInfo.md), [pointcloud::vertexAttributes](vertexAttributes.md), [pointcloud::nodes](nodes.md)
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

