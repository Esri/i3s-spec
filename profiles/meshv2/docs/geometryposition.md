# Position vertex attribute

Relative the center of oriented-bounded box of the node

### Related:

[meshv2::geometrybuffer](geometrybuffer.md), [meshv2::instancebuffer](instancebuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Vertex positions relative to Oriented-bounding-box center<div>Possible values are:<ul><li>`Float32`</li><li>`UInt16`</li></ul></div> |
| **component** | integer | Number of coordinates per vertex position. Must be 2 or 3. If 2, then `z=0.0` |
| encoding | string | Encoding. <div>Possible values are:<ul><li>`none`: default</li><li>`fixed-point`: **For integer format ONLY**. `scale` and `offset` will be applied: `XYZ_float= (float)XYZ_int * scale + offset`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-vertex`: default. only mode supported</li></ul></div> |
| scale | number | scale to be applied to **integer** type only (`encoding='fixed_point'`). ignored otherwise. `default=1` |
| offset | number | offset to be applied to **integer** type only (`encoding='fixed_point'`). ignored otherwise. `default=0` |

*Note: properties in **bold** are required*

### Examples 

#### Example: 16-bit per coordinate XYZ. [0,65k] coordinates will be multiply by 0.0001 and shift by 14.2 

```json
 {
  "position": {
    "type": "UInt16",
    "component": 3,
    "encoding": "fixed-point",
    "scale": 0.0001,
    "offset": 14.2,
    "binding": "per-vertex"
  }
} 
```

#### Example: {x,y} position as float32, z will be set to 0 

```json
 {
  "position": {
    "type": "Float32",
    "component": 2
  }
} 
```

