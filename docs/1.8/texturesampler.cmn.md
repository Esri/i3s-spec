# Texture sampler

Texture sampler

### Related:

[cmn::texturesetdefinition](texturesetdefinition.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| magFilter | string | Magnification filter for the texture. If omitted, viewer is free to choose<div>Possible values are:<ul><li>`nearest`</li><li>`linear`</li><li>`nearest-mipmap-nearest`</li><li>`linear-mipmap-nearest`</li><li>`nearest-mipmap-linear`</li><li>`linear-mipmap-linear`</li></ul></div> |
| minFilter | string | Minification filter for the texture. If omitted, viewer is free to choose<div>Possible values are:<ul><li>`nearest`</li><li>`linear`</li></ul></div> |
| wrapU | string | Texture coordinate wrapping (horizontal). Default =`repeat`<div>Possible values are:<ul><li>`clamp`</li><li>`repeat`</li></ul></div> |
| wrapV | string | Texture coordinate wrapping (vertical). Default =`repeat`<div>Possible values are:<ul><li>`clamp`</li><li>`repeat`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Non-repeated tri-linear texture filtering 

```json
 {
  "magFilter": "linear-mipmap-linear",
  "minFiler": "nearest",
  "wrapU": "clamp",
  "wrapV": "clamp"
} 
```

