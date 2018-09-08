# vertex index buffer

Index are useful to reduce the number of vertices to be transmitted

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Vertex positions relative to Oriented-bounding-box center<div>Possible values are:<ul><li>`UInt32`</li><li>`UInt16`</li></ul></div> |
| component | integer | Default =1, must be 1 |

*Note: properties in **bold** are required*

### Examples 

#### Example: index buffer 

```json
 {
  "indice": {
    "type": "UInt32"
  }
} 
```

