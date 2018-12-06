# Attribute buffer definition



### Related:

[attributesetdefinition](attributesetdefinition.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Id used to query attribute buffers from nodes e.g. `layers/0/nodes/{resource_id}/attributes/{id}` |
| **name** | string | name of the field/attribute. Must be unique per the layer.  |
| alias | string | name for presentation purposes (UI).  |
| **type** | string | Type of the attribute. _(TBD: uint64?)_   <div>Possible values are:<ul><li>`Int8`</li><li>`Uint8`</li><li>`Int16`</li><li>`UInt16`</li><li>`Int32`</li><li>`Uint32`</li><li>`Float32`</li><li>`Float64`</li><li>`String`</li></ul></div> |
| encoding | string | Encoding of the attribute. <div>Possible values are:<ul><li>`none`: default, if `type=string` then `string-utf8` is implied</li><li>`string-utf8`: Attribute buffer will contains a binary header (little-endian) `{ _string_count_: UInt32, _sum_of_all_strings_size_in_bytes_:Uint32}` follow by an array of UInt32 string sizes (in bytes). Each string data follows. (i.e. identical to I3S v1.6)</li><li>`indexed-string-utf8`: Attribute buffer contains a binary header (little-endian) { `string_count`: UInt32,`sum_of_all_strings_size_in_bytes`:Uint32 } followed by a `uint` array of `string_count` _offsets_. The _offset_ of the first string stored after the index is `0`. Please note that this layout avoid string duplication since identical strings may be stored only once and referenced multiple times. Also, string may be found by index in constant time. _TBD: is this needed?_</li></ul></div> |
| **binding** | string | Binding for attribute values. (`per-face` is valid if topology is `triangle` only)<div>Possible values are:<ul><li>`per-vertex`: _TBD: support this at 1.7?_</li><li>`per-feature`</li></ul></div> |
| offset | integer | number of bytes to skip from the beginning of the binary buffer (e.g. useful to describe 'legacy' buffer that have a header). Default=`0` |
| hasNullMask | boolean | **Integer types ONLY** (default=`false`). A 1-bit mask to indicate `null` integer values (`1`->masked, `0`->not-masked). The buffer must be 4-bytes-aligned and its size must be a multiple-of-4 bytes. Floating point buffer should use IEEE Not-a-Number and string _zero-length_ string |

*Note: properties in **bold** are required*

### Examples 

#### Example: Declaration for per-feature string attribute buffers. Url: `layers/0/nodes/{resource_id}/attributes/12` 

```json
 {
  "id": 12,
  "name": "street_name",
  "alias": "Nom de rue",
  "type": "String",
  "binding": "per-feature",
  "encoding": "indexed-string-utf8"
} 
```

#### Example: Declaration for per-vertex integer attribute buffers.  Url: `layers/0/nodes/{resource_id}/attributes/14` 

```json
 {
  "id": 14,
  "name": "class_code",
  "alias": "Classification",
  "type": "UInt8",
  "binding": "per-vertex",
  "hasNullMask": false
} 
```

