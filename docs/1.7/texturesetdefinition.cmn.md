# Texture set definition 



### Related:

[3DSceneLayer.cmn](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **formats** | [texturesetdefinitionformat](texturesetdefinitionformat.cmn.md)[] | List of formats that are available for this texture set |
| sampler | [texturesampler](texturesampler.cmn.md) | Optional texture sampler (_TBD_) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Texture set definition (desktop: jpg+dds) 

For a mesh with `material.resource=888`, JPEG will be at `/layers/0/nodes/888/textures/0` and DDS at `/layers/0/nodes/888/textures/1` 

```json
 {
  "formats": [
    {
      "index": 0,
      "format": "jpeg"
    },
    {
      "index": 1,
      "format": "dds"
    }
  ]
} 
```

#### Example: Texture set definition with ETC2 compresses image (Mobile: jpg+ktx) 

JPEG texture will be at `/layers/0/nodes/{nodes[i].material.resource}/textures/10`. Same texture in KTX format will be at  `/layers/0/nodes/{nodes[i].material.resource}/textures/11` 

```json
 {
  "formats": [
    {
      "index": 10,
      "format": "jpg"
    },
    {
      "index": 11,
      "format": "ktx"
    }
  ]
} 
```

#### Example: PNG bundled texture on 3rd slot of bundle at  `/layers/0/nodes/{resource}/textures/1` 

```json
 {
  "formats": [
    {
      "index": 1,
      "format": "bundle",
      "bundle": {
        "slot": 2,
        "format": "png"
      }
    }
  ]
} 
```

#### Example: Advanced material definition where all textures are part of the same bundles (so 1 texture query per node) 

```json
 {
  "textureSetDefinitions": [
    {
      "formats": [
        {
          "index": 0,
          "format": "bundle",
          "bundle": {
            "slot": 0,
            "format": "jpg"
          }
        }
      ]
    },
    {
      "formats": [
        {
          "index": 0,
          "format": "bundle",
          "bundle": {
            "slot": 1,
            "format": "png"
          }
        }
      ]
    },
    {
      "formats": [
        {
          "index": 0,
          "format": "bundle",
          "bundle": {
            "slot": 2,
            "format": "png"
          }
        }
      ]
    }
  ],
  "materialDefinitions": [
    {
      "alphaMode": "mask",
      "alphaCutoff": 0.25,
      "pbrMetallicRoughness": {
        "baseColorFactor": [
          0.5,
          0.5,
          0.5,
          1.0
        ],
        "baseColorTexture": {
          "textureSetDefinitionId": 0,
          "texCoord": 0
        },
        "metallicFactor": 1,
        "roughnessFactor": 1,
        "metallicRoughnessTexture": {
          "textureSetDefinitionId": 1,
          "texCoord": 1
        }
      },
      "normalTexture": {
        "textureSetDefinitionId": 2,
        "factor": 2.0,
        "texCoord": 1
      }
    }
  ]
} 
```

