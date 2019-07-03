# Face Range



`faceRange` is an inclusive range of faces in this geometry that belongs to this feature.

For each feature, `faceRange` indicates its first and last triangles as a pair of integer indices in the face list. 

**Notes**:
- [`featureID`](geometryfeatureid.md) attribute is required
- This attributes is only supported when topology is `triangle` 
- Vertices in the geometry buffer must be grouped by `feature_id`
- for _un-indexed triangle meshes_, `vertex_index = face_index * 3 `



### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Data type for the index range<div>Must be:<ul><li>`UInt32`</li></ul></div> |
| **component** | integer | Pair of indices marking first and last triangles for a feature. |
| encoding | string | <div>Must be:<ul><li>`none`</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-feature`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: FaceRange 

```json
 {
  "type": "UInt32",
  "component": 2
} 
```

