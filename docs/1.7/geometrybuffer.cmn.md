# Mesh geometry description



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



### Related:

[cmn::geometrydefinition](geometrydefinition.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| offset | integer | number of bytes to skip from the beginning of the binary buffer (e.g. useful to describe 'legacy' buffer that have a header. Default=`0`) |
| position | [geometryposition](geometryposition.cmn.md) | Vertex positions relative to Oriented-bounding-box center |
| normal | [geometrynormal](geometrynormal.cmn.md) | Face/vertex normal  |
| uv0 | [geometryuv](geometryuv.cmn.md) | First set of UV coordinates (textured mesh only) |
| color | [geometrycolor](geometrycolor.cmn.md) | Colors attribute  |
| uvRegion | [geometryuvregion](geometryuvregion.cmn.md) | UV regions (for repeated textures in texture atlases) |
| featureId | [geometryfeatureid](geometryfeatureid.cmn.md) | FeatureId attribute |
| faceRange | [geometryfacerange](geometryfacerange.cmn.md) | Face range for feature |
| compressedAttributes | [compressedAttributes](compressedAttributes.cmn.md) | Compressed attributes. **Cannot** be combined with any other attributes |

### Examples 

#### Example: I3S v1.6 equivalent geometry buffer definition (with UV regions) 

```json
 {
  "offset": 8,
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
  "color": {
    "type": "UInt8",
    "component": 4
  },
  "uvRegion": {
    "type": "UInt16",
    "component": 4
  },
  "featureId": {
    "type": "UInt64",
    "component": 1,
    "binding": "per-feature"
  },
  "faceRange": {
    "type": "UInt32",
    "component": 2,
    "binding": "per-feature"
  }
} 
```

#### Example: A compressed geometry buffer definition with featureId (without normal, with UV regions) 

```json
 {
  "compressedAttributes": {
    "encoding": "draco",
    "attributes": [
      "position",
      "uv0",
      "color",
      "feature-index",
      "uv-region"
    ]
  }
} 
```

