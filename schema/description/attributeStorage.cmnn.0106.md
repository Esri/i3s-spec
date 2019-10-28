AttributeStorageInfo describes the structure of the binary attribute data resource of a node. The following examples show how different attribute types are represented as binary buffer.

# Examples of attribute resources 

## String

|Field|Type|Description|
|-------|-------|-------|
|String count n|UINT32|Number of strings in the attribute buffer.|
|Total number of byte|UINT32|Total number of bytes in all the stings including NULL terminating character.
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
|Padding*|bytes[4]|Padding to preserve 8 byte alignement for double values.|
|value|Double [count]|Double values.|

Represneding double values `2.5`, `44.67`,`0.5` .

|3|-|2.5|44.67|0.5|
|---|---|---|---|---|

## Short Integer

|Field|Type|Description|
|------|-----|---------|
|Count|UINT32|Number of values in the buffer.|
|value|UINT16 [count]|16 bit integer values.|

Integer value of 3,10,7.
|3|3|10|7|
|---|---|---|---|

