# geometryAttribute

Each GeometryAttribute object is an accessor, i.e. a view, into an arraybuffer. There are two types of GeometryAttributes - VertexAttributes and FaceAttributes. VertexAttributes describe valid properties for a single vertex, and FaceAttributes describe faces and other structures by providing a set of indices. For example, the <code>faces.position</code> index attribute is used to define which vertex positions make up a face.

### Related:

[vestedGeometryParams.cmn](vestedGeometryParams.cmn.md), [vertexAttribute.cmn](vertexAttribute.cmn.md), [geometryFeature.cmn](geometryFeature.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| byteOffset | number | The starting byte position where the required bytes begin. Only used with the Geometry **ArrayBufferView**. |
| **valueType** | string | The element type, from {UInt8, UInt16, Int16, Int32, Int64 or Float32, Float64}. |
| **valuesPerElement** | number | The short number of values need to make a valid element (such as 3 for a xyz position). |

*Note: properties in **bold** are required*

