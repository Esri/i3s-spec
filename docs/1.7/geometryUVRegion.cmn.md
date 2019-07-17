# geometryUVRegion



UV region for repeated textures. UV regions are required to properly wrap UV coordinates of repeated-texture in texture atlases.  The texture must be written in the atlas with extra border texels to reduce texture sampling artifacts. 

UV regions are defined as a four-component array per vertex : [u_min, v_min, u_max, v_max ], where each component is in the range [0,1] encoded using `normalized UInt16`.

 UV could be "wrapped" in the shader like the following:
  ``` hlsl
  // UV for this texel is uv in [0, n]
  uv = frac(uv) * (region.zw - region.xy) + region.xy;
  ```





### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md), [cmn::geometryCompressedAttribute](geometryCompressedAttribute.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **type** | string | Color channel values.<div>Must be:<ul><li>`UInt16`</li></ul></div> |
| **component** | integer | The `default =4`, must be 4. |
| encoding | string | Encoding<div>Must be:<ul><li>`normalized`</li></ul></div> |
| binding | string | binding<div>Possible values are:<ul><li>`per-vertex`: default</li><li>`per-uvregion`: Only valid in conjonction with [`compressedAttributes`](geometryCompressedAttribute.md) when `uvRegionIndex` attribute is present.</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: UV region for repeated textures in atlas 

```json
 {
  "type": "UInt16",
  "component": 4
} 
```

