# Bundled texture



### Related:

[texturesetdefinitionformat.cmn](texturesetdefinitionformat.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **slot** | integer | Entry index in the bundle. first entry is at slot=`0` |
| **format** | string | Texture format. *Note*: nested bundles are **not** supported<div>Possible values are:<ul><li>`jpg`: JPEG compression. no mipmaps. Please note that alpha channel may have been added after the JPEG stream. This alpha channel is alwasy 8bit and zlib compressed. Last 4 byte of the entire stream are the 32 bit offset to the beginning of the alpha stream (little-endian)</li><li>`png`: PNG format, no mipmaps</li><li>`dds`: The DDS header will specify the type of compression and number of mipmaps. **WARNING** only DXT1 (no alpha) and DXT5 (alpha channel) are supported</li><li>`ktx`: Kronos group container for ETC2 compressed texture. Mipmap may be available</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: JPEG texture on second slot 

```json
 {
  "bundle": {
    "slot": 1,
    "format": "jpg"
  }
} 
```

#### Example: PNG texture on first slot 

```json
 {
  "bundle": {
    "slot": 0,
    "format": "png"
  }
} 
```

