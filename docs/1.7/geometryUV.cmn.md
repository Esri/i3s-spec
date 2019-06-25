# Texture coordinates



### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | <div>Must be:<ul><li>`Float32`</li></ul></div> |
| **component** | integer | Number of texture coordinates. Must be 2. |
| encoding | string | <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-vertex`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Float 32 UV 

```json
 {
  "type": "Float32",
  "component": 2
} 
```

