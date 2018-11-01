# Mesh geometry description



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


### Related:

[mesh17::geometrydefinition](geometrydefinition.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| offset | integer | number of bytes to skip from the beginning of the binary buffer (e.g. useful to describe 'legacy' buffer that have a header. Default=`0`) |
| position | [mesh17::geometryposition](geometryposition.md) | Vertex positions relative to Oriented-bounding-box center |
| normal | [mesh17::geometrynormal](geometrynormal.md) | Face/vertex normal  |
| uv0 | [mesh17::geometryuv](geometryuv.md) | First set of UV coordinates (textured mesh only) |
| color | [mesh17::geometrycolor](geometrycolor.md) | Colors attribute  |
| uvRegion | [mesh17::geometryuvregion](geometryuvregion.md) | UV regions (for repeated textures in texture atlases) |
| featureId | [mesh17::geometryfeatureid](geometryfeatureid.md) | FeatureId attribute |
| faceRange | [mesh17::geometryfacerange](geometryfacerange.md) | Face range for feature |
| compressedAttributes | [mesh17::compressedAttributes](compressedAttributes.md) | Compressed attributes. **Cannot** be combined with any other attributes |
| normalReferenceFrame | string | Frame of reference for normals. default is `earth-centered` for GCS (geographic), and `vertex-reference-frame` for PCS (projected) <div>Possible values are:<ul><li>`east-north-up`: normals are stored in a node local reference frame defined by the easting, northing and up directions at the OBB/MBS center, and is only valid for geographic(WGS84)</li><li>`earth-centered`: normals are stored in a global earth-centered, earth-fixed (ECEF) reference frame where the x-axis points towards Prime meridian (lon = 0°) and Equator (lat = 0°), the y-axis points East towards lon = +90 and lat = 0 and the z-axis points North. It is only valid for geographic</li><li>`vertex-reference-frame`: normals are stored in the same reference frame as vertices and is only valid for projected spatial reference</li></ul></div> |

*Note: properties in **bold** are required*

### Examples 

#### Example: I3S v1.6 equivalent geometry buffer definition (without UV regions) 

```json
 {
  "id": 0,
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

#### Example: A compressed geometry buffer definition with featureId (without UV regions) 

```json
 {
  "id": 1,
  "featureId": {
    "type": "UInt32",
    "component": 1,
    "binding": "per-feature"
  },
  "compressedAttributes": {
    "encoding": "draco",
    "attributes": [
      "position",
      "normal",
      "uv0",
      "featureIndex"
    ]
  }
} 
```

