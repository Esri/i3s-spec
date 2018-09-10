# I3S point cloud scene layer: attributeInfo

List of attributes included for this layer.

### Related:

[pointcloud::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | Represents the attribute key. Key is the same as `id' used in the resource URL to fetch the binary buffers. |
| **name** | string | The attribute name. Must be unique for this layer. |
| ordering | string[] | Mapping between attribute to point. Only 1-to-1 is currently supported.<div>Possible values for each array string:<ul><li>`attributeValues`</li></ul></div> |
| encoding | string | Encoding (i.e. compression) for the attribute binary buffer if different from GZIP or no-compression.<div>Possible values are:<ul><li>`embedded-elevation`: No binary buffer but stats for this pseudo attribute will be available. For example, point.z from the geometry should be used.</li><li>`lepcc-intensity`: LEPCC compression for scaled integral type.</li><li>`lepcc-rgb`: LEPCC color compression for 3-channel RGB 8 bit.</li></ul></div> |
| attributeValues | [pointcloud::value](value.md) | Represents the description for value encoding, for example scalar or vector encoding. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Elevation pseudo-attribute 

```json
 {
  "key": "1",
  "name": "ELEVATION",
  "encoding": "embedded-elevation"
} 
```

#### Example: Color attribute 

```json
 {
  "key": "4",
  "name": "RGB",
  "ordering": [
    "attributeValues"
  ],
  "attributeValues": {
    "valueType": "UInt8",
    "valuesPerElement": 3
  },
  "encoding": "lepcc-rgb"
} 
```

#### Example: 8-bit uncompressed/GZIP compressed class-codes 

```json
 {
  "key": "8",
  "name": "CLASS_CODE",
  "ordering": [
    "attributeValues"
  ],
  "attributeValues": {
    "valueType": "UInt8",
    "valuesPerElement": 1
  }
} 
```

