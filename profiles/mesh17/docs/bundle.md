# Bundled texture





Bundle are binary resources with the following header:

**Binary bundle layout** 

|name|type|note|
|--|--|--|
|FourCC identifier | uint32|  `0x42444c30` i.e. `"BDL0"`|
|Number of slots | uint32| `n` |
|Slot `0` offset | uint32| from the beginning of the buffer |
|Slot `0` size | uint32| in bytes |
| ... | ... | |
|Slot `n-1` offset | uint32| from the beginning of the buffer |
|Slot `n-1` size | uint32| in bytes |

Binary data follows this header.

Bundle allows to store multiple textures independently of their format within a single binary resource (i.e single request). This could be advantagous when many bundled textures will be needed. 

In SLPK bundle have the extension `.bdl`


### Related:

[mesh17::texturesetdefinitionformat](texturesetdefinitionformat.md)
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

