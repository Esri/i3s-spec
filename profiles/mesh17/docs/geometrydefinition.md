# Mesh definition



Having multiple `geometryDefinition`allows for meshes to:

- have different vertex attributes within a single layer 
- include both compressed and uncompressed geometry buffers for forward compatibility. 


This approach also solve a short-coming in I3S 1.6 for `uvRegions` attribute. This attribute is only needed for nodes using _repeated_ texture so to save space, current implementations silently omits it in some binary buffers *despite being listed in the `defaultGeometryDescription` json object*. This can break clients unexpectedly-.  With the `extended`

### Related:

[mesh17::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| topology | string | <div>Must be:<ul><li>`triangle`</li></ul></div> |
| **geometryBuffers** | [mesh17::geometrybuffer](geometrybuffer.md)[1:2] | Array of geometry representation(s) for this class of mesh. When multiple representations are listed, Clients should select the most compact one (e.g. Draco compressed mesh) they support. Length must be 1 or 2 |

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

