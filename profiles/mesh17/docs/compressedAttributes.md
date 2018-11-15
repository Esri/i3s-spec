# Compressed attributes



Regular [libdraco](https://github.com/google/draco) compressed meshes are supported with the following restrictions:
- Position attribute must be present (with optional scaling - see comment for `attributes` field below -)
- `Feature_ids` and `feature_indices` are both stored in the mesh( see comment for `attributes` field below). Feature indices are required to lookup Feature-attribute buffers that have `per-feature` binding. *WARNING* `feature_id` are **per-face** ( i.e. `feature_index` **must** match for the 3 vertices of each triangle).

**Normals**
- Since including normal in Draco mesh greatly reduce the compression ratio, "trivial" normals (i.e. computed per-face) should be omitted to save space (3D Clients will recompute them on the fly). In addition, meshes with "natural" textured images (e.g. Integrated Mesh) should omit normals since artifical lightning conflits with the "natural" lightning already captured in aerial/satellite imagery.



### Related:

[mesh17::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string | <div>Must be:<ul><li>`draco`</li></ul></div> |
| **attributes** | string[] | <div>Possible values for each array string:<ul><li>`position`: `Draco` _double_ meta-data `i3s-scale_x`, `i3s-scale_y` (if present) must be applied to `x` and `y` coordinates to reverse `XY`/`Z` ratio preserving scaling that may have been applied before encoding. (i.e.avoid quantization issue when `XY` is in degrees and `Z` is in meters)</li><li>`normal`</li><li>`uv0`</li><li>`color`</li><li>`uv-region`: Uses `draco::GeometryAttribute::Type::GENERIC` with type `4xUINT16`. The attribute meta-data key `i3s-attribute-type` *must* be set to `"uv-region"` (string).</li><li>`feature-index`: Uses `draco::GeometryAttribute::Type::GENERIC` with type `1xUINT32`. The attribute meta-data key `i3s-attribute-type` *must* be set to `"feature-index"` (string). The `feature-ids` values must be stored in the `feature-index` attribute meta-data with `key:"i3s-feature-ids" ` (metata data entry type is array of int32)</li><li>`flag`: (TBD): bitfields (up to 8-bit wide) information about each vertex: `bit0:tile-border` (vertex is on the border of the tile/mesh), `bit1:tile-skirt` (vertex has been added to the mesh to hide cracks between tiles). _Note: this attribute is not available in 1.6 legacy mesh_</li></ul></div> |

*Note: properties in **bold** are required*

