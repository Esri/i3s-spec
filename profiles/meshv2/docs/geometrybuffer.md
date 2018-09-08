# Mesh geometry description



**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing:
```
index
position
normal
uv0
uv1
color
uvRegion
featureId
faceRange
compressedAttributes
```
 
 **Important:**
- Each attribute must only be listed ONCE when `compressedAttributes` are present. (i.e. if `compressedAttributes` contains `position`, `geometryBuffer.position` **must not** be present )
- Attribute that are present are store contiguously. (_TBD: memory alignment requirement ?_)
- All vertex attributes ( **except** `compressedAttributes`) have a fixed size that may be computed as:
      `#component * sizeof( type ) * {#vertices or #features}`



 **TBD**:
 - support more that 2 UV sets? 
 - I've simplified "uncompressed" specs to march "legacy" buffers since we'll rely on Draco for mesh compression.

### Related:

[meshv2::meshdefinition](meshdefinition.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | integer | Index of this buffer in the resource URL: e.g. `/layers/0/nodes/{resourceId}/geometries/{this.id}` |
| offset | integer | number of bytes to skip from the beginning of the binary buffer (e.g. useful to describe 'legacy' buffer that have a header. Default=`0`) |
| position | [meshv2::geometryposition](geometryposition.md) | Vertex positions relative to Oriented-bounding-box center |
| normal | [meshv2::geometrynormal](geometrynormal.md) | Face/vertex normal  |
| uv0 | [meshv2::geometryuv](geometryuv.md) | First set of UV coordinates (textured mesh only) |
| uv1 | [meshv2::geometryuv](geometryuv.md) | Second set of UV coordinates (textured mesh only) |
| color | [meshv2::geometrycolor](geometrycolor.md) | Colors attribute  |
| uvRegion | [meshv2::geometryuvregion](geometryuvregion.md) | UV regions (for repeated textures in texture atlases) |
| featureId | [meshv2::geometryfeatureid](geometryfeatureid.md) | FeatureId attribute |
| faceRange | [meshv2::geometryfacerange](geometryfacerange.md) | Face range for feature |
| compressedAttributes | [meshv2::compressedAttributes](compressedAttributes.md) | Compressed attributes |

*Note: properties in **bold** are required*

### Examples 

#### Example: I3S v1.6 equivalent geometry buffer definition (without UV regions) 

```json
 {
  "offset": 4,
  "position": {
    "type": "Float32",
    "component": 3
  },
  "normal": {
    "type": "Float32",
    "component": 3
  },
  "uv0": {
    "type": "Float32",
    "component": 2
  },
  "featureId": {
    "type": "UInt32",
    "component": 1
  },
  "faceRange": {
    "type": "UInt32",
    "component": 2
  }
} 
```

