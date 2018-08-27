# Mesh v2. Texture set definition

Texture set definition

### Related:

[meshv2::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **formats** | [meshv2::texturesetdefinitionformat](texturesetdefinitionformat.md)[] | List of formats that are available for this texture set |
| **binding** | string | texture binding<div>Possible values are:<ul><li>`per-node`: Textures are per-node and located at `/layers/0/nodes/{resource_id}/textures/{index}` where `{index}` is `this.formats[i].index`</li><li>`per-layer`: Texture is shared (i.e. 'global' for the layer) and located at `/layers/0/shared/textures/{index}` where `{index}` is `this.formats[i].index`</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: Per node texture set definition 

For a mesh with `resource_id=888`, JPEG will be at `/layers/0/nodes/888/textures/0` and DDS at `/layers/0/nodes/888/textures/1` 

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
  ],
  "binding": "per-node"
}
 
```

#### Example: Per-layer texture (shared) definition 

JEPG texture will be at `/layers/0/shared/textures/10` 

```json
 {
  "formats": [
    {
      "index": 10,
      "format": "jpeg"
    }
  ],
  "binding": "per-layer"
} 
```

