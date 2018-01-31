# I3S Point Cloud layer: store

Describes storage for the layer.

### Related:

[pcsl_layer](pcsl_layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | Id for the store. Not currently used by the point cloud scene layer. |
| **profile** | string | Defines the profile type of the scene layer as point cloud scene layer. |
| **version** | string | Point cloud scene layer specification version. |
| **extent** | number[4] | 2D extent of the layer in the layer spatial reference units. |
| **index** | [pcsl_index](pcsl_index.md) | Describes the index (i.e. bounding volume tree) of the layer. |
| attributeEncoding | string | DEPRECATED |
| geometryEncoding | string | DEPRECATED |
| **defaultGeometrySchema** | [pcsl_defaultGeometrySchema](pcsl_defaultGeometrySchema.md) | Attribute description as field. |
*Note: properties in **bold** are required*

