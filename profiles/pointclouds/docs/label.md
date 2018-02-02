# I3S point cloud scene layer: labels

Optionally, the statistics document may contain labeling information for the attribute values.

### Related:

[pointcloud::stats](stats.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| labels | string[] | Array of string label/value pairs. Used when attribute represents a set of values. For example, ClassCode. |
| bitfieldLabels | string[] | Array of string label/bitNumber pairs. This is useful when the attribute represent a bitfield. For example, FLAGS. |

*Note: properties in **bold** are required*

