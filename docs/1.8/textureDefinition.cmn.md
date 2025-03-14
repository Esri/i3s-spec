# textureDefinition

A texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.

Part of [sharedResource](sharedResource.cmn.md) that is deprecated with 1.7.

### Related:

[cmn::sharedResource](sharedResource.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **(identifier)** | [textureDefinitionInfo](textureDefinitionInfo.cmn.md) | A texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.  Part of [sharedResource](sharedResource.cmn.md) that is deprecated with 1.7. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique identifier*

### Examples

#### Example: textureDefinition

```json
 {
  "44":  {
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
}
```
