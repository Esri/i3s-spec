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
```
 Attribute that are present are store contiguously. 

 **TBD**:
 - memory alignment requirement ?
 - support more that 2 UV sets?

### Related:

[meshv2::meshdefinition](meshdefinition.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| index | [meshv2::geometryindex](geometryindex.md) | Vertex index (index buffer) |
| **position** | [meshv2::geometryposition](geometryposition.md) | Vertex positions relative to Oriented-bounding-box center |
| normal | [meshv2::geometrynormal](geometrynormal.md) | Face/vertex normal  |
| uv0 | [meshv2::geometryuv](geometryuv.md) | First set of UV coordinates (textured mesh only) |
| uv1 | [meshv2::geometryuv](geometryuv.md) | Second set of UV coordinates (textured mesh only) |
| color | [meshv2::geometrycolor](geometrycolor.md) | Colors attribute  |
| uvRegion | [meshv2::geometryuvregion](geometryuvregion.md) | UV regions (for repeated textures in texture atlases) |
| featureId | [meshv2::geometryfeatureid](geometryfeatureid.md) | FeatureId attribute |
| faceRange | [meshv2::geometryfacerange](geometryfacerange.md) | Face range for feature |

*Note: properties in **bold** are required*

### Examples 

#### Example: I3S v1.6 equivalent geometry buffer definition (without UV regions) 

```json
 {
  "position": {
    "type": "Float32",
    "component": 3,
    "binding": "per-vertex"
  },
  "normal": {
    "type": "Float32",
    "component": 3,
    "binding": "per-vertex"
  },
  "uv0": {
    "type": "Float32",
    "component": 2,
    "binding": "per-vertex"
  },
  "featureId": {
    "type": "UInt32",
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

#### Example: A compact mesh representation: indexed-geometry, 16-bit xyz, compressed-normals, no colors with UV regions 

```json
 {
  "indice": {
    "type": "UInt32"
  },
  "position": {
    "type": "UInt16",
    "component": 3,
    "encoding": "fixed-point",
    "scale": 100.0,
    "offset": 14500.0,
    "binding": "per-vertex"
  },
  "normal": {
    "type": "UInt16",
    "component": 2,
    "encoding": "normal-compression",
    "binding": "per-face"
  },
  "uv0": {
    "type": "UInt16",
    "component": 2,
    "encoding": "normalized",
    "binding": "per-vertex"
  },
  "color": {
    "type": "UInt8",
    "component": 3,
    "binding": "per-face"
  },
  "uvRegion": {
    "type": "UInt16",
    "component": 4,
    "encoding": "normalized",
    "binding": "per-vertex"
  }
} 
```

