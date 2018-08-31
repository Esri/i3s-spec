# Color vertex attribute

Colors for geometry .TBD: Assumed to be sRGB ??

### Related:

[meshv2::geometrybuffer](geometrybuffer.md), [meshv2::instancebuffer](instancebuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | color channel values<div>Must be:<ul><li>`UINT8`</li></ul></div> |
| **component** | integer | Number of colors. Must be `1` (opaque grayscale: `{R,R,R,255}`),`3`(opaque color `{R,G,B,255}`) or `4` ( transparent color `{R,G,B,A}`). |
| encoding | string | Encoding<div>Must be:<ul><li>`normalized`: default. Assume 8-bit unsigned color per channel [0,255] -> [0,1]</li></ul></div> |
| binding | string | <div>Possible values are:<ul><li>`per-vertex`: default.</li><li>`per-face`: color is per face (`topology` must be `triangle`)</li><li>`per-feature`: color is per feature. **TBD: useful ? should we suppport this?**</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: RGB colors per vertex 

```json
 {
  "color": {
    "type": "UInt8",
    "component": 3
  }
} 
```

#### Example: RGBA colors per face. `triangle` topology is required 

```json
 {
  "color": {
    "type": "UInt8",
    "component": 4,
    "binding": "per-face"
  }
} 
```

