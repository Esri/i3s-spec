# textureSetDefinitionFormat



### Related:

[cmn::textureSetDefinition](textureSetDefinition.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | The location ID for the resource (last segment of the URL path). Must be `"0"` for jpg/png, `"0_0_1"` for DDS, `"0_0_2"` for KTX, and `"1"` for KTX2. |
| **format** | string | The texture format.<div>Possible values are:<ul><li>`jpg`: JPEG compression. No mipmaps. Please note that alpha channel may have been added after the JPEG stream. This alpha channel is alwasy 8bit and zlib compressed. Last 4 bytes of the entire stream are the 32 bit offset to the beginning of the alpha stream (little-endian).</li><li>`png`: PNG format, no mipmaps</li><li>`dds`: The DDS header will specify the type of compression and number of mipmaps. **WARNING:** Only DXT1 (no alpha) and DXT5 (alpha channel) are supported.</li><li>`ktx-etc2`: Khronos group container for ETC2 compressed texture. Mipmap may be available.</li><li>`ktx2`: Basis Universal Supercompressed GPU Texture.</li>Note: KTX (Khronos Texture) is an efficient, lightweight container format for reliably distributing GPU textures to diverse platforms and applications. [KTX2](https://www.khronos.org/registry/KTX/specs/2.0/ktxspec_v2.html) is the container format that supports Basis Universal SuperCompressed GPU texture.</ul></div> |

*Note: properties in **bold** are required*

### Examples

#### Example: JPEG texture at `/layers/0/nodes/{resource_id}/textures/0`

```json
 {
  "name": "0",
  "format": "jpg"
}
```

#### Example: PNG texture at `/layers/0/nodes/{resource_id}/textures/0`

```json
 {
  "name": "0",
  "format": "png"
}
```

#### Example: DDS texture at `/layers/0/nodes/{resource_id}/textures/0_0_1`

```json
 {
  "name": "0_0_1",
  "format": "dds"
}
```

#### Example: KTX texture at `/layers/0/nodes/{resource_id}/textures/0_0_2`

```json
 {
  "name": "0_0_2",
  "format": "ktx-etc2"
}
```

#### Example: KTX2 texture at `/layers/0/nodes/{resource_id}/textures/1`

```json
 {
  "name": "1",
  "format": "ktx2"
}
```
