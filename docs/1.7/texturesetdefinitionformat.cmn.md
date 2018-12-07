# Texture set definition format

Describe the format(s) available for a texture set. Note: JPEG (or PNG) must always be provided

### Related:

[cmn::texturesetdefinition](texturesetdefinition.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | integer | location ID for the resource (last segment of the URL path) |
| **format** | string | Texture format<div>Possible values are:<ul><li>`jpg`: JPEG compression. no mipmaps. Please note that alpha channel may have been added after the JPEG stream. This alpha channel is alwasy 8bit and zlib compressed. Last 4 byte of the entire stream are the 32 bit offset to the beginning of the alpha stream (little-endian)</li><li>`png`: PNG format, no mipmaps</li><li>`dds`: The DDS header will specify the type of compression and number of mipmaps. **WARNING** only DXT1 (no alpha) and DXT5 (alpha channel) are supported</li><li>`ktx`: Kronos group container for ETC2 compressed texture. Mipmap may be available</li><li>`bundle`: A binary bundle of multiple images. `bundle` field must be present to indicate where to find the image inside the binary bundle</li></ul></div> |
| bundle | [bundle](bundle.cmn.md) | **Required** if `format="bundle"`, `null` or omitted otherwise |

*Note: properties in **bold** are required*

### Examples 

#### Example: JPEG texture at `/layers/0/nodes/{resource_id}/1` 

```json
 {
  "index": 1,
  "format": "jpg"
} 
```

#### Example: PNG texture in the 2nd slot of a bundle 

```json
 {
  "index": 3,
  "format": "bundle",
  "bundle": {
    "slot": 1,
    "format": "png"
  }
} 
```

