# Position vertex attribute

Relative the center of oriented-bounded box of the node

### Related:

[mesh17::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Vertex positions relative to Oriented-bounding-box center<div>Must be:<ul><li>`Float32`</li></ul></div> |
| **component** | integer | Number of coordinates per vertex position. Must be 3 |
| encoding | string | Encoding. <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-vertex`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: {x,y,z} position as float32 

```json
 {
  "position": {
    "type": "Float32",
    "component": 3
  }
} 
```

