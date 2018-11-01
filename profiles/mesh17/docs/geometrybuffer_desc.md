**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing:
```
1.compressedAttributes [ONLY!]

OR

1.position
2.normal
3.uv0
4.color
5.uvRegion
6.featureId
7.faceRange

```
 
 **Important:**
- **cannot** mix `compressedAttributes` and "standard" attributes in the same definition .
- Attribute that are present are stored contiguously. (_TBD: memory alignment requirement ?_)
- All vertex attributes ( **except** `compressedAttributes`) have a fixed size that may be computed as:
      `#component * sizeof( type ) * {#vertices or #features}`

 **Notes**:
 - Only one UV set in v1.7. (2.0 may support multiple)
