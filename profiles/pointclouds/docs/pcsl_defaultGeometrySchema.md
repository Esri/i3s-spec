# I3S Point Cloud layer: defaultGeometrySchema

Attribute description as field.

### Related:

[pcsl_store](pcsl_store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **geometryType** | string | The type of primitive. Only points are supported for point cloud scene layer. |
| header | [] | The header in binary buffers are not currently supported. |
| **topology** | string | This property is currently IGNORED for point cloud scene layer since it only conatains geometry position and not the vertex attributes. |
| **encoding** | string | Only 'lepcc-xyz' compression is currently supported. |
| **ordering** | string[] | Currently the geometry contains XYZ only, so vertex attribute must only list 'position'. |
| **vertexAttributes** | [pcsl_vertexAttributes](pcsl_vertexAttributes.md) | The vertex buffer description. |
*Note: properties in **bold** are required*

