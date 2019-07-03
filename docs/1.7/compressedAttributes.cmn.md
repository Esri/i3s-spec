# Compressed attributes

 I3S version 1.7 allows compressing the geometryBuffer of an Integrated Mesh and 3D Object Layers using [Draco](https://github.com/google/draco) compression, which is optimized for compressing and decompressing 3D geometric meshes and point clouds.

Draco reduces the size of an the geometryBuffer payload, reducing storage size and transmission rate.

All *vertexAttributes* of a Meshpyramids profile can be compressed with Draco.

*The ArcGIS platform currently is compatible with version 1.3.5 of [Draco](https://github.com/google/draco/blob/master/README.md#version-135-release).*

### Related:

[cmn::geometryBuffer](geometryBuffer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string | <div>Must be:<ul><li>`draco`</li></ul></div> |
| **attributes** | string[] | <div>Possible values for each array string:<ul><li>`position`: `Draco` _double_ meta-data `i3s-scale_x`, `i3s-scale_y`. If present, must be applied to `x` and `y` coordinates to reverse `XY`/`Z` ratio preserving scaling that may have been applied before encoding. (i.e.avoid quantization issue when `XY` is in degrees and `Z` is in meters)</li><li>`normal`</li><li>`uv0`</li><li>`color`</li><li>`uv-region`: Uses `draco::GeometryAttribute::Type::GENERIC` with type `4xUINT16`. The attribute meta-data key `i3s-attribute-type` *must* be set to `"uv-region"` (string).</li><li>`feature-index`: Uses `draco::GeometryAttribute::Type::GENERIC` with type `1xUINT32`. The attribute meta-data key `i3s-attribute-type` *must* be set to `"feature-index"` (string). The `feature-ids` values must be stored in the `feature-index` attribute meta-data with `key:"i3s-feature-ids" ` (metata data entry type is array of int32)</li></ul></div> |

*Note: properties in **bold** are required*

