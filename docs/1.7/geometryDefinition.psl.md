# geometryDefinition [1.7 PSL]

The geometry definitions used in [Point Scene Layer]() I3S version 1.7.

### Related:

[psl::3DSceneLayer](3DSceneLayer.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| topology | string | Defines the topology type of the point.<div>Must be:<ul><li>`point`</li></ul></div> |
| **geometryBuffers** | [geometryBuffer](geometryBuffer.psl.md)[1] | Array of geometry representation(s) for this class of points.  Must be compressed. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Definition for a v1.6-equivalent geometry buffer (`geometryBuffers[0]`) and draco compressed geometry buffer (`geometryBuffers[1]`) 

```json
 {
  "geometryBuffers": [
    {
      "compressedAttributes": {
        "encoding": "draco",
        "attributes": [
          "position",
          "feature-index"
        ]
      }
    }
  ]
} 
```

