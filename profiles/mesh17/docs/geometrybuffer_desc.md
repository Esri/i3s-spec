**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing:
```
compressedAttributes
position
normal
uv0
color
uvRegion
featureId
faceRange
```
 
 **Important:**
- Each attribute must only be listed ONCE when `compressedAttributes` are present. (i.e. if `compressedAttributes` contains `position`, `geometryBuffer.position` **must not** be present )
- Attribute that are present are store contiguously. (_TBD: memory alignment requirement ?_)
- All vertex attributes ( **except** `compressedAttributes`) have a fixed size that may be computed as:
      `#component * sizeof( type ) * {#vertices or #features}`


 **TBD**:
 - `compressedAttributes` is listed first in the hope that 3rd party Draco readers would ignore the rest of the binary stream. If this prove to not be the case, we should probably move it to last.
 - Only one UV set in v1.7. (2.0 may support multiple)
 - I've simplified "uncompressed" specs to match "legacy" buffers since we'll rely on Draco for mesh compression.