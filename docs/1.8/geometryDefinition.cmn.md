# geometryDefinition

The geometry definitions used in I3S version 1.7.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| topology | string | Defines the topology type of the mesh.<div>Must be:<ul><li>`triangle`</li></ul></div> |
| **geometryBuffers** | [geometryBuffer](geometryBuffer.cmn.md)[1:2] | Array of geometry representation(s) for this class of meshes. When multiple representations are listed, Clients should select the most compact they support (e.g. Draco compressed mesh). For compatibility reasons, _uncompressed_ geometry buffer is always required and must be first (i.e. `geometryBuffers[0]`), so array length must be 1 or 2 |

*Note: properties in **bold** are required*

### Examples 

#### Example: Definition for a v1.6-equivalent geometry buffer (`geometryBuffers[0]`) and draco compressed geometry buffer (`geometryBuffers[1]`) 

```json
 {
  "geometryBuffers": [
    {
      "offset": 8,
      "position": {
        "type": "Float32",
        "component": 3
      },
      "normal": {
        "type": "Float32",
        "component": 3
      },
      "uv0": {
        "type": "Float32",
        "component": 2
      },
      "color": {
        "type": "UInt8",
        "component": 4
      },
      "featureId": {
        "type": "UInt64",
        "component": 1,
        "binding": "per-feature"
      },
      "faceRange": {
        "type": "UInt32",
        "component": 2,
        "binding": "per-feature"
      }
    },
    {
      "compressedAttributes": {
        "encoding": "draco",
        "attributes": [
          "position",
          "uv0",
          "color",
          "feature-index"
        ]
      }
    }
  ]
} 
```

