# Mesh definition



### Related:

[mesh17::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **attributeBuffers** | [mesh17::attributebuffer](attributebuffer.md)[] | define the binary attribute buffers available for this class of meshes |

*Note: properties in **bold** are required*

### Examples 

#### Example:  

```json
 {
  "attributeBuffers": [
    {
      "id": 12,
      "name": "street_name",
      "alias": "Nom de rue",
      "type": "String",
      "binding": "per-feature",
      "encoding": "indexed-string-utf8"
    },
    {
      "id": 14,
      "name": "class_code",
      "alias": "Classification",
      "type": "UInt8",
      "binding": "per-vertex"
    }
  ]
} 
```

