# textureDefinition

A texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.

### Related:

[cmn::sharedResource](sharedResource.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **(identifier)** | [textureDefinitionInfo](textureDefinitionInfo.cmn.md) | A texture is a set of images, with some parameters specific to the texture/uv mapping to geometries. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: textureDefinition 

```json
 {
  "44": {
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
    ],
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

