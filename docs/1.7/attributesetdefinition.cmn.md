# Mesh definition

Statistics for the attribute will be at `statistics/{attribute_set_index}/{attribute_index_in_set}`

### Related:

[3DSceneLayer.cmn](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **attributeBuffers** | [attributebuffer](attributebuffer.cmn.md)[] | define the binary attribute buffers available for this class of meshes |

*Note: properties in **bold** are required*

### Examples 

#### Example:  

```json
 {
  "attributeBuffers": [
    {
      "name": "street_name",
      "alias": "Nom de rue",
      "type": "String",
      "binding": "per-feature",
      "encoding": "indexed-string-utf8"
    },
    {
      "name": "class_code",
      "alias": "Classification",
      "type": "UInt8",
      "binding": "per-vertex"
    }
  ]
} 
```

