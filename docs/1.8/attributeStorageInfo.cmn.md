# I3S Scene Layer: attributeStorageInfo

An object that describes the structure of the binary attribute data resource of a node.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **key** | string | The unique field identifier key. |
| **name** | string | The name of the field. |
| **header** | [headerValue](headerValue.cmn.md)[] |  |
| ordering | string[] | <div>Possible values for each array string:<ul><li>`attributeByteCounts`: Should only be present when working with string data types.</li><li>`attributeValues`: Should always be present. </li><li>`ObjectIds`</li></ul></div> |
| attributeValues | [value](value.cmn.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| attributeByteCounts | [value](value.cmn.md) | Represents the description for value encoding. For example: scalar or vector encoding. |
| objectIds | [value](value.cmn.md) | Stores the object-id values of each feature within the node. |

*Note: properties in **bold** are required*

### Examples 

#### Example: attributeStorageInfo for 3d object scene layer 

```json
 "attributeStorageInfo": [
{
""key"": "f_0",
""name"": "OBJECTID_1",
""header"": [
{
""propery"": "count",
""valueType"": "UInt32"
}
],
""ordering"": [
"ObjectIds"
],
"objectIds": {
""valueType"": "UInt32",
""valuesPerElement"": 1
}
},
{
""key"": "f_1",
""name"": "Category",
""header"": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_2",
"name": "Family",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_3",
"name": "FamilyType",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_4",
"name": "ObjectId",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_5",
"name": "BldgLevel",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Int32",
"valuesPerElement": 1
}
},
{
"key": "f_6",
"name": "BldgLevel_Elev",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Float64",
"valuesPerElement": 1
}
},
{
"key": "f_7",
"name": "BldgLevel_IsBuildingStory",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Int16",
"valuesPerElement": 1
}
},
{
"key": "f_8",
"name": "BldgLevel_RoomOffset",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Float64",
"valuesPerElement": 1
}
},
{
"key": "f_9",
"name": "CreatedPhase",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Int32",
"valuesPerElement": 1
}
},
{
"key": "f_10",
"name": "DemolishedPhase",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Int32",
"valuesPerElement": 1
}
},
{
"key": "f_11",
"name": "ElementType",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_12",
"name": "Discipline",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_13",
"name": "Function",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Int32",
"valuesPerElement": 1
}
},
{
"key": "f_14",
"name": "DocPath",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_15",
"name": "DocVer",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_16",
"name": "DocUpdate",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_17",
"name": "Transparency",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Float64",
"valuesPerElement": 1
}
},
{
"key": "f_18",
"name": "BaseCategory",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_19",
"name": "AssemblyCode",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_20",
"name": "AssemblyDesc",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_21",
"name": "OmniClass",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_22",
"name": "OmniClassDescription",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_23",
"name": "Mark",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_24",
"name": "Typ_Mark",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_25",
"name": "Doc'name'",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_26",
"name": "WidthDiameter",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Float64",
"valuesPerElement": 1
}
},
{
"key": "f_27",
"name": "SystemId",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_28",
"name": "System'name'",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_29",
"name": "SystemType",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_30",
"name": "SystemClass",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Int32",
"valuesPerElement": 1
}
},
{
"key": "f_31",
"name": "CalculatedSize",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_32",
"name": "Comments",
"header": [
{
"propery": "count",
"valueType": "UInt32"
},
{
"propery": "ByteCount",
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
"valuesPerElement": 1
}
},
{
"key": "f_33",
"name": "Flow",
"header": [
{
"propery": "count",
"valueType": "UInt32"
}
],
"ordering": [
"attributeValues"
],
"attributeValues": {
"valueType": "Float64",
"valuesPerElement": 1
}
}
] 
```

