# textureSetDefinition

The set of available textures.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **formats** | [textureSetDefinitionFormat](textureSetDefinitionFormat.cmn.md)[] | List of formats that are available for this texture set. |
| atlas | boolean | Set to `true` if this texture is a texture atlas. It is expected that geometries that use this texture have uv regions to specify the subtexture in the atlas. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Texture set definition (desktop: jpg+dds) 

For a mesh with `material.resource=888`, JPEG will be at `/layers/0/nodes/888/textures/0` and DDS at `/layers/0/nodes/888/textures/0_0_1` 

```json
 {
  "formats": [
    {
      "name": "0",
      "format": "jpg"
    },
    {
      "name": "0_0_1",
      "format": "dds"
    }
  ]
} 
```

#### Example: Texture set definition with ETC2 compresses image (Mobile: jpg+ktx-etc2) 

JPEG texture will be at `/layers/0/nodes/{nodes[i].material.resource}/textures/0`. Same texture in KTX format will be at  `/layers/0/nodes/{nodes[i].material.resource}/textures/0_0_2` 

```json
 {
  "formats": [
    {
      "name": "0",
      "format": "jpg"
    },
    {
      "name": "0_0_2",
      "format": "ktx-etc2"
    }
  ]
} 
```

#### Example: Texture set definition with atlas 

```json
 {
  "formats": [
    {
      "name": "0",
      "format": "jpg"
    },
    {
      "name": "0_0_1",
      "format": "dds"
    },
    {
      "name": "0_0_2",
      "format": "ktx-etc2"
    }
  ],
  "atlas": true
} 
```

