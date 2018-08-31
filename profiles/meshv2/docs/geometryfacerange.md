# Face Range



`faceRange` attribute provide a compact way to find which set of triangles below to a particular feature.  

For each feature, `faceRange` indicate its first and last triangles as a pair of integer index in the face list. 

**Notes**:
- This attributes is only supported when topology is `triangle` and geometry buffers are organized such as vertices are sorted by feature. 
- for _un-indexed triangle meshes_, `vertex_index = face_index * 3 `

### Related:

[meshv2::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Range id <div>Possible values are:<ul><li>`UINT8`</li><li>`UINT16`</li><li>`UINT32`</li></ul></div> |
| **component** | integer | must be `2`  |
| encoding | string | Encoding<div>Possible values are:<ul><li>`none`: default and only value supported</li></ul></div> |
| binding | string | building is always per-feature<div>Possible values are:<ul><li>`per-feature`: default and only value supported</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: FaceRange 

```json
 {
  "faceRange": {
    "type": "UInt16",
    "component": 2
  }
} 
```

