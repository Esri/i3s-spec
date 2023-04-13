# attributeStorageInfo



The attributeStorageInfo object describes the structure of the binary attribute data resource of a layer, which is the same for every node in the layer. The following examples show how different attribute types are represented as a binary buffer.

# Examples of attribute resources 

## String

|Field|Type|Description|
|-------|-------|-------|
|String count|UINT32|Number of strings in the buffer.|
|Total number of bytes|UINT32|Total number of bytes for all the stings, including NULL terminating character.
|String size|UINT32[n]|Size of each string in bytes.|
|String data|byte[m]|String values. All strings are UTF8 encoded and NULL terminated.|

A string object contains the following:
{
    "Bratislava",
    "Berlin",
    "Wien",
    `<empty>`,
    ""
}

|5|24|11|7|5|0|1|Bratislava\0|Berlin\0|Wien\0||\0|
|---|----|---|---|---|---|---|------------|--------|------|---|---|

## Double

|Field|Type|Description|
|------|-----|---------|
|Count|UINT32|Number of values in the buffer.|
|Padding*|bytes[4]|Padding to preserve 8 byte alignment for double values.|
|value|Double [count]|Double values.|

Representing double values `2.5`, `44.67`,`0.5` .

|3|-|2.5|44.67|0.5|
|---|---|---|---|---|

## Short Integer

|Field|Type|Description|
|------|-----|---------|
|Count|UINT32|Number of values in the buffer.|
|value|UINT16 [count]|16 bit integer values.|

Integer values of 3,10,7.  

|3|3|10|7|
|---|---|---|---|


### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [psl::3DSceneLayer](3DSceneLayer.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | The unique field identifier key. |
| **name** | string | The name of the field. |
| **header** | [headerValue](headerValue.cmn.md)[] | Declares the headers of the binary attribute data. |
| ordering | string[] | <div>Possible values for each array string:<ul><li>`attributeByteCounts`: Should only be present when working with string data types.</li><li>`attributeValues`: Should always be present. </li><li>`ObjectIds`</li></ul></div> |
| attributeValues | [value](value.cmn.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| attributeByteCounts | [value](value.cmn.md) | For string types only. Represents the byte count of the string, including the null character. |
| objectIds | [value](value.cmn.md) | Stores the object-id values of each feature within the node. |

*Note: properties in **bold** are required*

### Examples 

#### Example: attributeStorageInfo for 3d object scene layer 

```json
 {
    "key": "f_2",
    "name": "Family",
    "header": [
        {
            "property": "count",
            "valueType": "UInt32"
        },
        {
            "property": "attributeValuesByteCount",
            "valueType": "UInt32"
        }
    ],
    "ordering": [
        "attributeByteCounts",
        "attributeValues"
    ],
    "attributeByteCounts": {
        "valueType": "UInt32",
        "valuesPerElement": 1
    },
    "attributeValues": {
        "valueType": "String",
        "encoding": "UTF-8",
        "timeEncoding": "ECMA_ISO8601",
        "valuesPerElement": 1
    }
} 
```

