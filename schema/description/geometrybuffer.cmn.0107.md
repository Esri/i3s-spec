**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing:


```
position
normal
uv0
uv1
color
uvRegion
featureId
faceRange
```
or

```
compressedAttributes
```
 
 **Important:**
- Attribute that are present are store contiguously in the corresponding geometry buffers.
- All vertex attributes ( **except** `compressedAttributes`) have a fixed size that may be computed as:
      `#component * sizeof( type ) * {#vertices or #features}`

