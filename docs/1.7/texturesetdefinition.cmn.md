# Texture set definition 



### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **formats** | [texturesetdefinitionformat](texturesetdefinitionformat.cmn.md)[] | List of formats that are available for this texture set |
| atlas | boolean | `true` is texture contains an atlas and vertexRegions in sharedResource.materialDefinitions is `true`. Viewer should turn off anisotropic filtering for atlases to avoid sampling artifacts. default=`False` |

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

