# textureDefinition

Materials describe how a feature or a set of features is to be rendered. This includes which shading and which colors to use. The following table provides the set of attributes and params for the `type`: `standard` material.

### Related:

[cmn::sharedResource](sharedResource.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| (identifier) | [textureDefinitionInfo](textureDefinitionInfo.cmn.md) | Materials describe how a feature or a set of features is to be rendered. This includes which shading and which colors to use. The following table provides the set of attributes and params for the `type`: `standard` material. |

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

