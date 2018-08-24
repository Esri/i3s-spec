# headerAttribute

Headers to Geometry resources must be uniform across a cache and may only contain fixed-width, single element fields. The HeaderDefinition provides the name of each field for later access and the valueType of that header field.

### Related:

[common::defaultGeometrySchema](defaultGeometrySchema.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| property | string | The name of the property in the header.  |
| type | string | The element type of the header property, from <code>{UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64 or Float32, Float64}. |

*Note: properties in **bold** are required*

