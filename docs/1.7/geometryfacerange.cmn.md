# Face Range



`faceRange` attribute provide a compact way to find which set of triangles below to a particular feature.  

For each feature, `faceRange` indicate its first and last triangles as a pair of integer index in the face list. 

**Notes**:
- [`featureID`](geometryfeatureid.md) attribute is required
- This attributes is only supported when topology is `triangle` 
- Vertices in the geometry buffer must be grouped by `feature_id`
- for _un-indexed triangle meshes_, `vertex_index = face_index * 3 `

### Related:

[cmn::geometrybuffer](geometrybuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | <div>Must be:<ul><li>`UINT32`</li></ul></div> |
| **component** | integer | must be `2`  |
| encoding | string | <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-feature`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: FaceRange 

```json
 {
  "faceRange": {
    "type": "UInt32",
    "component": 2
  }
} 
```

