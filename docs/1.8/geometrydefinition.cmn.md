# Mesh definition



### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| topology | string | <div>Must be:<ul><li>`triangle`</li></ul></div> |
| **geometryBuffers** | [geometrybuffer](geometrybuffer.cmn.md)[1:2] | Array of geometry representation(s) for this class of mesh. When multiple representations are listed, Clients should select the most compact one (e.g. Draco compressed mesh) they support. Length must be 1 or 2 |

*Note: properties in **bold** are required*

### Examples 

#### Example: Definition for a v1.6-equivalent geometry buffer and draco compressed geometry buffer 

```json
 {
  "topology": "triangle",
  "geometryBuffers": [
    {
      "id": 0,
      "offset": 4,
      "position": {
        "type": "Float32",
        "component": 3,
        "binding": "per-vertex"
      },
      "normal": {
        "type": "Float32",
        "component": 3,
        "binding": "per-vertex"
      },
      "uv0": {
        "type": "Float32",
        "component": 2,
        "binding": "per-vertex"
      },
      "featureId": {
        "type": "UInt32",
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
      "id": 1,
      "featureId": {
        "type": "UInt32",
        "component": 1,
        "binding": "per-feature"
      },
      "compressedAttributes": {
        "encoding": "draco",
        "attributes": [
          "position",
          "normal",
          "uv0",
          "featureIndex"
        ]
      }
    }
  ]
} 
```

