# I3S Point Cloud layer: attributeInfo

List of attributes included for this layer.

### Related:

[pcsl_layer](pcsl_layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | Represents the attribute key. Key is the same as `id' used in the resource URL to fetch the binary buffers. |
| **name** | string | The attribute name must match a `field` from the list. |
| ordering | string[] | Mapping between attribute to point. Only 1-to-1 is currently supported. |
| encoding | string | Encoding (i.e. compression) for the attribute binary buffer if different from GZIP or no-compression. |
| attributeValues | [pcsl_value](pcsl_value.md) | Represents the description for value encoding, for example scalar or vector encoding. |
*Note: properties in **bold** are required*

### Examples 

#### Example: Elevation pseudo-attribute 

```json
 {
  "key": "1",
  "name": "ELEVATION",
  "encoding": "embedded-elevation"
} 
````

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
````

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
````

