# defaultGeometrySchema

Used in stores where all ArrayBufferView geometry declarations use the same pattern for face and vertex elements. Reduces redundancies of ArrayBufferView geometry declarations in a store. Reuses the GeometryAttribute type from FeatureData; however, only valueType and valuesPerElement are mandatory.

### Related:

[common::store](store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| geometryType | string | Low-level default geometry type, one of {triangles, lines, points}. If defined, all geometries in the store are expected to have this type. |
| topology | string[] |   |
| header | [common::headerAttribute](headerAttribute.md) | Defines header fields in the Geometry resources of this store that precede the vertex (and index) data. |
| vertexAttributes | [common::geometryAttribute](geometryAttribute.md) | Declaration of the attributes per vertex in the geometry, such as position, normals or texture coordinates. |
| faces | [common::geometryAttribute](geometryAttribute.md) | Declaration of the indices into vertex attributes that define faces in the geometry, such as position, normals or texture coordinates. |
| featureAttributeOrder | string[] | Provides the order of the keys in featureAttributes, if present. |
| featureAttributes | [common::geometryAttribute](geometryAttribute.md) | Declaration of the attributes per feature in the geometry, such as feature ID or face range. |

*Note: properties in **bold** are required*

