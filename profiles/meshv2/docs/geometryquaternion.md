# Unit quaternion (for rotation)

4-component quaternion rotation. See [quaternion in relation to rotation](http://run.usc.edu/cs520-s12/quaternions/quaternions-cs520.pdf) for details

### Related:

[meshv2::instancebuffer](instancebuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Support only float32 quaternion<div>Possible values are:<ul><li>`Float32`</li></ul></div> |
| **component** | integer | must be `4` |

*Note: properties in **bold** are required*

### Examples 

#### Example: Quaternion rotation 

```json
 {
  "rotation": {
    "type": "Float32",
    "component": 4
  }
} 
```

