# textureDefinitionInfo

A texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.

Part of [sharedResource](sharedResource.cmn.md) that is deprecated with 1.7.

### Related:

[cmn::textureDefinition](textureDefinition.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string[] | MIMEtype - The encoding/content type that is used by all images in this map |
| wrap | string[] | UV wrapping modes, from {none, repeat, mirror}. |
| atlas | boolean | TRUE if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string | Indicates channels description.<div>Possible values are:<ul><li>`rgb`</li><li>`rgba`</li></ul></div> |
| images | [image](image.cmn.md)[] | An image is a binary resource, containing a single raster that can be used to texture a feature or symbol. |

*Note: properties in **bold** are required*

### Examples

#### Example: textureDefinition

```json
 {
  "encoding": [
    "image/jpeg",
    "image/vnd-ms.dds",
    "image/ktx2"
  ],
  "wrap": [
    "none",
    "none"
  ],
  "atlas": false,
  "uvSet": "uv0",
  "channels": "rgb",
  "images": [
    {
      "id": "296",
      "size": 2048,
      "pixelInWorldUnits": 0,
      "href": [
        "../textures/0",
        "../textures/0_0_1",
        "../textures/1"
      ],
      "byteOffset": [
        0,
        0,
        0
      ],
      "length": [
        408644,
        2796352,
        436451
      ]
    }
  ]
}
```
