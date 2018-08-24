# Color vertex attribute

Colors for geometry .TBD: Assumed to be sRGB ??

### Related:

[meshv2::geometrybuffer](geometrybuffer.md), [meshv2::instancebuffer](instancebuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | color channel values<div>Possible values are:<ul><li>`UINT8`</li></ul></div> |
| **component** | integer | Number of colors. Must be in [1,4] i.e. Assumes: 0=red, 1=green, 2=blue, 3=alpha |
| encoding | string | Encoding<div>Possible values are:<ul><li>`normalized`: default. Assume 8-bit unsigned color per channel [0,255] -> [0,1]</li></ul></div> |
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

