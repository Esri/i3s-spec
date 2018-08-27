# UV region for repeated textures



  UV regions are required to properly wrap UV coordinates of repeated-texture in texture atlases.
  In addition, the texture must have been written in the atlas with extra border texels to reduce texture sampling artifacts. 
  UV regions are defined as a four-component array per vertex : [u_min, v_min, u_max, v_max ], where each component is in the range [0,1] encoded using `normalized UInt16`.
  
  UV could be "wrapped" in the shader as follow:
  ``` hlsl
  // UV for this texel is uv in [0, n]
  uv = frac(uv) * (region.zw - region.xy) + region.xy;
  ```
  
  

### Related:

[meshv2::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | color channel values<div>Possible values are:<ul><li>`UINT16`</li></ul></div> |
| **component** | integer | `default =4`, must be 4. |
| encoding | string | Encoding<div>Possible values are:<ul><li>`normalized`: default and only value supported.</li></ul></div> |
| binding | string | binding<div>Possible values are:<ul><li>`per-vertex`: default and only value supported</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: UV region for repeated textures in atlas 

```json
 {
  "uvRegion": {
    "type": "UInt16",
    "component": 4
  }
} 
```

