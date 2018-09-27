# Compressed attributes

See [libdraco](https://github.com/google/draco) for more details

### Related:

[mesh17::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string | <div>Must be:<ul><li>`draco`</li></ul></div> |
| **attributes** | string[] | <div>Possible values for each array string:<ul><li>`position`: `Draco` meta-data `scale_x`, `scale_y` (if present) must be applied to `x` and `y` coordinates to reverse `XY`/`Z` ratio preserving scaling that may have been applied before encoding. (i.e.avoid quantization issue when `XY` is in degrees and `Z` is in meters)</li><li>`normal`</li><li>`uv0`</li><li>`uv1`</li><li>`color`</li><li>`uvRegionIndex`: index in the `uvRegion` attribute array. [`uvRegion`](geometryuvregion.md) attribute **must** be present and `uvRegion.binding` **must** be `per-uvregion`</li><li>`featureIndex`: index in the [`featureId`](geometryfeatureid.md) attribute array. `featureId` attribute **must** be present and `featureId.binding` **must** be `per-feature`</li></ul></div> |

*Note: properties in **bold** are required*

