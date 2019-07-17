# headerValue

Value for attributeByteCount, attributeValues and objectIds.

### Related:

[cmn::attributeStorageInfo](attributeStorageInfo.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **valueType** | string | Defines the value type.<div>Possible values are:<ul><li>`Int8`</li><li>`UInt8`</li><li>`Int16`</li><li>`UInt16`</li><li>`Int32`</li><li>`UInt32`</li><li>`Float32`</li><li>`Float64`</li><li>`String`</li></ul></div> |
| **property** | string | Encoding method for the value.<div>Possible values are:<ul><li>`count`: Should always be present and indicates the count of features in the attribute storage.</li><li>`attributeValuesByteCount`</li></ul></div> |

*Note: properties in **bold** are required*

