# defaultGeometrySchema [common profiles]



The defaultGeometry schema is used in stores where all arrayBufferView geometry declarations use the same pattern for face and vertex elements. It reduces redundancies of arrayBufferView geometry declarations in a store, and reuses the geometryAttribute type from featureData. Only valueType and valuesPerElement are required.

# Geometry buffer 

|fieldName|type|description|
----|------------|----|
|vertexCount|UINT32|Number of vertices|
|featureCount|UINT32|Number of features.|
|position|Float32[3*vertex count]|Vertex x,y,z positions.|
|normal|Float32[3*vertex count]|Normals x,y,z vectors.|
|uv0|Float32[2*vertex count]|Texture coordinates.|
|color|UInt8[4*vertex count|RGBA colors.
|id|UInt64[feature count]|Feature IDs.|
|faceRange|UInt32[2*feature count|Inclusive [range](../1.7/geometryFaceRange.cmn.md) of the mesh triangles belonging to each feature in the featureID array.|
|region|UINT16[4*vertex count]|UV [region](../1.7/geometryUVRegion.cmn.md) for repeated textures.|




### Related:

[cmn::store](store.cmn.md), [cmn::store](store.cmn.md), [psl::store](store.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| geometryType | string | Low-level default geometry type. If defined, all geometries in the store are expected to have this type.<div>Must be:<ul><li>`triangles`</li></ul></div> |
| **topology** | string | Declares the topology of embedded geometry attributes. When 'Indexed', the indices must also be declared in the geometry schema ('faces') and precede the vertexAttribute data.<div>Possible values are:<ul><li>`PerAttributeArray`</li><li>`Indexed`: When Indexed, the indices must also be declared in the geometry schema (faces) and precede the vertexAttribute data.</li></ul></div> |
| **header** | [headerAttribute](headerAttribute.cmn.md)[] | Defines header fields in the geometry resources of this store that precede the vertex (and index) data. |
| **ordering** | string[] | Defines the ordering of the vertex Attributes. |
| **vertexAttributes** | [vertexAttribute](vertexAttribute.cmn.md) | Declaration of the attributes per vertex in the geometry, such as position, normals or texture coordinates. |
| faces | [vertexAttribute](vertexAttribute.cmn.md) | Declaration of the indices into vertex attributes that define faces in the geometry, such as position, normals or texture coordinates. |
| **featureAttributeOrder** | string[] | Provides the order of the keys in featureAttributes, if present. |
| **featureAttributes** | [featureAttribute](featureAttribute.cmn.md) | Declaration of the attributes per feature in the geometry, such as feature ID or face range. |

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

