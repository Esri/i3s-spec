# header

The header definition provides the name of each field and the value type. Headers to geometry resources must be uniform across a cache and may only contain fixed-width, single element fields.

### Related:

[common::defaultGeometrySchema](defaultGeometrySchema.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **property** | string | The name of the property in the header.  |
| **type** | string | The element type of the header property.<div>Possible values are:<ul><li>`UInt8`</li><li>`UInt16`</li><li>`UInt32`</li><li>`UInt64`</li><li>`Int16`</li><li>`Int32`</li><li>`Int64`</li><li>`Float32`</li><li>`Float64`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Header 3D Object and integrated mesh scene layer 

```json
 {
  "header": [
    {
      "property": "vertexCount",
      "type": "UInt32"
    },
    {
      "property": "featureCount",
      "type": "UInt32"
    }
  ]
} 
```

