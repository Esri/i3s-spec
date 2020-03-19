Mesh Geometry Description

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
- Attribute that are present are stored continuously in the corresponding geometry buffers.
- All vertex attributes ( **except** `compressedAttributes`) have a fixed size that may be computed as:
      `#component * sizeof( type ) * {# of vertices or #features}`
      where `#component` is the number of components such as `position`,`normal`, etc.  Furthermore,`type` is the datatype of the variable used and `sizeof` returns the size of the datatype in bytes.

