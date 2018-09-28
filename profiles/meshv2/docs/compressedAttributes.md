# Compressed attributes



### Related:

[meshv2::geometrybuffer](geometrybuffer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string | TBD: Lepcc is only supported when `topology` is `point`<div>Possible values are:<ul><li>`draco`</li><li>`lepcc`</li></ul></div> |
| **attributes** | string[] | <div>Possible values for each array string:<ul><li>`position`: `Draco` meta-data `scale_x`, `scale_y` (if present) must be apply to `x` and `y` coordinates since vertices may be scaled before compression to preserve `XY`/`Z` ratio and avoid quantization issue (i.e. `XY` in degress, `Z` in meters)</li><li>`normal`</li><li>`uv0`</li><li>`uv1`</li><li>`color`</li><li>`uvRegionIndex`: index in the `uvRegion` attribute array. [`uvRegion`](geometryuvregion.md) attribute **must** be present and `uvRegion.binding` **must** be `per-uvregion`</li><li>`featureIndex`: index in the [`featureId`](geometryfeatureid.md) attribute array. `featureId` attribute **must** be present and `featureId.binding` **must** be `per-feature`</li></ul></div> |

*Note: properties in **bold** are required*

