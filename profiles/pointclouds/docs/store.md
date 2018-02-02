# I3S point cloud scene layer: store

Describes storage for the layer.

### Related:

[pointcloud::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | Id for the store. Not currently used by the point cloud scene layer. |
| **profile** | string | Defines the profile type of the scene layer as point cloud scene layer. |
| **version** | string | Point cloud scene layer specification version. |
| **extent** | number[4] | 2D extent of the layer in the layer spatial reference units. |
| **index** | [pointcloud::index](index.md) | Describes the index (i.e. bounding volume tree) of the layer. |
| attributeEncoding | string | DEPRECATED |
| geometryEncoding | string | DEPRECATED |
| **defaultGeometrySchema** | [pointcloud::defaultGeometrySchema](defaultGeometrySchema.md) | Attribute description as field. |

*Note: properties in **bold** are required*

