# geometryColor

Color vertex attribute.  Assumed to be sRGB space.

### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | The color channel values.<div>Must be:<ul><li>`UInt8`</li></ul></div> |
| **component** | integer | Number of colors. Must be `1` (opaque grayscale: `{R,R,R,255}`),`3`(opaque color `{R,G,B,255}`) or `4` ( transparent color `{R,G,B,A}`). |
| encoding | string | Encoding of the vertex attribute.<div>Must be:<ul><li>`normalized`: Default. Assumes 8-bit unsigned color per channel [0,255] -> [0,1].</li></ul></div> |
| binding | string | <div>Must be:<ul><li>`per-vertex`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: RGB colors per vertex 

```json
 {
  "type": "UInt8",
  "component": 3
} 
```

