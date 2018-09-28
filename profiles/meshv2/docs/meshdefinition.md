# Mesh definition



Having multiple `meshDefinition` objects allows for more efficient geometry definition.
For instance, meshes may have different vertex attributes, topology and attributes within a single layer. 

This approach also solve a short-coming in legacy I3S for `uvRegions` attribute. This attribute is only needed for nodes using _repeated_ texture so to save space, current implementations silently omits it in some binary buffers *despite being listed in the `defaultGeometryDescription` json object*. This can break clients unexpectedly-.  With the `extended` specs, meshes with `uvRegion` would reference a different `meshDefinitionId` than meshes without them. 

### Related:

[meshv2::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| topology | string | Topology of the mesh. Default is `triangle`<div>Possible values are:<ul><li>`triangle`</li><li>`point`</li><li>`line`</li></ul></div> |
| **geometryBuffers** | [meshv2::geometrybuffer](geometrybuffer.md)[] | Array of geometry representation(s) for this class of mesh. When multiple representations are listed, Clients should select the most compact one (e.g. Draco compressed mesh) |
| attributeBuffers | [meshv2::attributebuffer](attributebuffer.md)[] | define the binary attribute buffers available for this class of meshes |

*Note: properties in **bold** are required*

### Examples 

#### Example:  

```json
 {
  "topology": "triangle",
  "geometryBuffers": [
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
  ],
  "attributeBuffers": [
    {
      "id": 12,
      "name": "street_name",
      "alias": "Nom de rue",
      "type": "String",
      "binding": "per-feature",
      "encoding": "indexed-string-utf8"
    },
    {
      "id": 14,
      "name": "class_code",
      "alias": "Classification",
      "type": "UInt8",
      "binding": "per-vertex"
    }
  ]
} 
```

