# textureDefinition

A Texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.

### Related:

[common::store](store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| encoding | string | MIMEtype[1..*] The encoding/content type that is used by all images in this map |
| wrap | string[] | <div>Possible values for each array string:<ul><li>`none`</li><li>`repeat`: .</li><li>`mirror`</li></ul></div> |
| atlas | boolean | True if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string[] |  |

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

