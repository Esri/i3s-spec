# texture

A texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.

### Related:

[cmn::store](store.cmn.md), [psl::store](store.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| encoding | string[] | MIMEtype[1..*] The encoding/content type that is used by all images in this map |
| wrap | string[] | <div>Possible values for each array string:<ul><li>`none`</li><li>`repeat`</li><li>`mirror`</li></ul></div> |
| atlas | boolean | True if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string[] | Indicates which channels are stored in which channel of this map. Possible values: h=brightness, r=red, g=green, b=blue, a=alpha, n=bump, d=displacement. |

### Examples 

#### Example: textureDefinition 

```json
 {
  "encoding": [
    "image/jpeg",
    "image/vnd-ms.dds"
  ],
  "wrap": [
    "none",
    "none"
  ],
  "atlas": false,
  "uvSet": "uv0",
  "channels": [
    "r",
    "g",
    "b"
  ]
} 
```

