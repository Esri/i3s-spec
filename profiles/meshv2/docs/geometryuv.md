# Texture coordinates



### Related:

[meshv2::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | For `Uint16` `encoding=normalized` is implied<div>Possible values are:<ul><li>`Float32`</li><li>`UInt16`</li></ul></div> |
| **component** | integer | Number of texture coordinates. Must be 2. |
| encoding | string | Encoding. <div>Possible values are:<ul><li>`none`: default</li><li>`normalized`: `type` must be `UInt16`. [0,65k] will be mapped to [0,1]. Cannot be used with repeated-textures since UV could be in[0,n]</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-vertex`: default. only mode supported</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: 16-bit per coordinate UV.  

```json
 {
  "type": "UInt16",
  "component": 2,
  "encoding": "normalized"
} 
```

#### Example: Float 32 UV 

```json
 {
  "type": "Float32",
  "component": 2
} 
```

