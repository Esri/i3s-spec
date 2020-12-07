# geometryNormal

Normal attribute. Defines the normals of the geometry.

### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | <div>Must be:<ul><li>`Float32`</li></ul></div> |
| **component** | integer | Number of coordinates per vertex position. Must be 3. |
| encoding | string | Encoding<div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-vertex`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Float32 x,y,z  **per-vertex** normals  

```json
 {
  "type": "Float32",
  "component": 3
} 
```

