# textureDefinition

Materials describe how a feature or a set of features is to be rendered. This includes which shading and which colors to use. The following table provides the set of attributes and params for the `type`: `standard` material.

### Related:

[sharedResource.cmn](sharedResource.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string[] | MIMEtype - The encoding/content type that is used by all images in this map |
| wrap | string[] | UV wrapping modes, from {none, repeat, mirror}. |
| atlas | boolean | TRUE if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string[] | Indicates which channels are stored in which channel of this map. Possible values: h=brightness, r=red, g=green, b=blue, a=alpha, n=bump, d=displacement,etc. |
| images | [image](image.cmn.md)[] | An image is a binary resource, containing a single raster that can be used to texture a feature or symbol. |

*Note: properties in **bold** are required*

### Examples 

#### Example: textureDefinition 

```json
 {
  "32": {
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
    "channels": "rgb",
    "images": [
      {
        "id": "1161930902884843552",
        "size": 512,
        "pixelInWorldUnits": 0,
        "href": [
          "../textures/0_0",
          "../textures/0_0_1"
        ],
        "byteOffset": [
          0,
          0
        ],
        "length": [
          7461,
          174904
        ]
      }
    ]
  }
} 
```

