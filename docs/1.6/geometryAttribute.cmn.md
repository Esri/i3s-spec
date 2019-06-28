# geometryAttribute

Each geometryAttribute object is an accessor, i.e. a view, into an array buffer. There are two types of geometryAttributes - vertexAttributes and faceAttributes. The vertexAttributes describe valid properties for a single vertex, and faceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face.

### Related:

[cmn::vertexAttribute](vertexAttribute.cmn.md), [cmn::vestedGeometryParams](vestedGeometryParams.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| byteOffset | number | The starting byte position where the required bytes begin. Only used with the Geometry **arrayBufferView**. |
| **valueType** | string | The element type, from {UInt8, UInt16, Int16, Int32, Int64 or Float32, Float64}. |
| **valuesPerElement** | number | The short number of values need to make a valid element (such as 3 for a xyz position). |

*Note: properties in **bold** are required*

