# Normal attribute

Normals

### Related:

[meshv2::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | <div>Possible values are:<ul><li>`Float32`</li><li>`Int16`</li></ul></div> |
| **component** | integer | Number of coordinates per vertex position. Must be 2 or 3. If 2, then `encoding` **must** be `normal-compression` with `type`=`Int16` |
| encoding | string | Encoding<div>Possible values are:<ul><li>`none`: default</li><li>`normal-compression`: Normal are compressed to 2x16bit using [this technique](https://knarkowicz.wordpress.com/2014/04/16/octahedron-normal-vector-encoding). `type` must be`Int16`, `component` must be 2</li></ul></div> |
| binding | string | binding for the normals<div>Possible values are:<ul><li>`per-vertex`: default.</li><li>`per-face`: `topology` must be `triangle`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: 2x 16-bit compressed normals. One normal per face (flat-shading) 

```json
 {
  "type": "UInt16",
  "component": 2,
  "encoding": "normal-compression",
  "binding": "per-face"
} 
```

#### Example: Float32 x,y,z  **per-vertex** normals  

```json
 {
  "type": "Float32",
  "component": 3
} 
```

