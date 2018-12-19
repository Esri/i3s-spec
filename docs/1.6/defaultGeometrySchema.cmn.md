# defaultGeometrySchema

The defaultGeometry schema is used in stores where all ArrayBufferView geometry declarations use the same pattern for face and vertex elements. It reduces redundancies of ArrayBufferView geometry declarations in a store, and reuses the GeometryAttribute type from FeatureData. Only valueType and valuesPerElement are required.

### Related:

[cmn::store](store.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **geometryType** | string | Low-level default geometry type. If defined, all geometries in the store are expected to have this type.<div>Possible values are:<ul><li>`triangles`</li><li>`lines`</li><li>`points`</li></ul></div> |
| **topology** | string | Declares the topology of embedded geometry attributes. When 'Indexed', the indices must also be declared in the geometry schema ('faces') and precede the vertexAttribute data.<div>Possible values are:<ul><li>`PerAttributeArray`</li><li>`Indexed`: When Indexed, the indices must also be declared in the geometry schema (faces) and precede the vertexAttribute data.</li></ul></div> |
| **header** | [headerAttribute](headerAttribute.cmn.md)[] | Defines header fields in the geometry resources of this store that precede the vertex (and index) data. |
| **ordering** | string[] |  |
| **vertexAttributes** | [vertexAttribute](vertexAttribute.cmn.md) | Declaration of the attributes per vertex in the geometry, such as position, normals or texture coordinates. |
| faces | [vertexAttribute](vertexAttribute.cmn.md) | Declaration of the indices into vertex attributes that define faces in the geometry, such as position, normals or texture coordinates. |
| **featureAttributeOrder** | string[] | Provides the order of the keys in featureAttributes, if present. |
| **featureAttributes** | [geometryFeature](geometryFeature.cmn.md) | Declaration of the attributes per feature in the geometry, such as feature ID or face range. |

*Note: properties in **bold** are required*

### Examples 

#### Example: defaultGeometrySchema for 3D Object and integrated mesh scene layer 

```json
 {
  "geometryType": "triangles",
  "header": [
    {
      "property": "vertexCount",
      "type": "UInt32"
    },
    {
      "property": "featureCount",
      "type": "UInt32"
    }
  ],
  "topology": "PerAttributeArray",
  "ordering": [
    "position",
    "normal",
    "uv0",
    "color"
  ],
  "vertexAttributes": {
    "position": {
      "valueType": "Float32",
      "valuesPerElement": 3
    },
    "normal": {
      "valueType": "Float32",
      "valuesPerElement": 3
    },
    "uv0": {
      "valueType": "Float32",
      "valuesPerElement": 2
    },
    "color": {
      "valueType": "UInt8",
      "valuesPerElement": 4
    }
  },
  "featureAttributeOrder": [
    "id",
    "faceRange"
  ],
  "featureAttributes": {
    "id": {
      "valueType": "UInt64",
      "valuesPerElement": 1
    },
    "faceRange": {
      "valueType": "UInt32",
      "valuesPerElement": 2
    }
  }
} 
```

