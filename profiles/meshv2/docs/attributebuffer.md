# Attribute buffer



### Related:

[meshv2::meshdefinition](meshdefinition.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Id used to query attribute buffers from nodes e.g. `layers/0/nodes/145/attributes/{id}` |
| **name** | string | name of the field/attribute. Must be unique per the layer.  |
| alias | string | name for presentation purposes (UI).  |
| **type** | string | Type of the attribute. <div>Possible values are:<ul><li>`Int8`</li><li>`Uint8`</li><li>`Int16`</li><li>`UInt16`</li><li>`Int32`</li><li>`Uint32`</li><li>`Float32`</li><li>`String`</li></ul></div> |
| encoding | string | Encoding of the attribute. <div>Possible values are:<ul><li>`none`: default, if `type=string` then `indexed-utf8-string` is implied</li><li>`fixed-point`: **For integer format ONLY**. `scale` and `offset` will be applied: `X_float= (float)X_int * scale + offset`</li><li>`indexed-utf8-string`: Attribute buffer will contains a binary header (little-endian) { `string_count`: UInt32, `sum_of_all_strings_size_in_bytes`:Uint32} follow by an array of UInt32 string sizes (in bytes). Each string data follows.</li></ul></div> |
| **binding** | string | Binding for attribute values. (`per-face` is valid if topology is `triangle` only)<div>Possible values are:<ul><li>`per-feature`</li><li>`per-vertex`</li><li>`per-face`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: String attribute per feature 

```json
 {
  "id": 10,
  "name": "owner",
  "type": "String",
  "encoding": "indexed-utf8-string",
  "binding": "per-feature"
} 
```

