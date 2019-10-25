The defaultGeometry schema is used in stores where all arrayBufferView geometry declarations use the same pattern for face and vertex elements. It reduces redundancies of arrayBufferView geometry declarations in a store, and reuses the geometryAttribute type from featureData. Only valueType and valuesPerElement are required.

# Geomtry buffer 

|fieldName|type|description|
----|------------|----|
|vertexCount|UINT32|Number of vertices|
|featureCount|UINT32|Number of features.|
|position|Float32[3*vertex count]|Vertex x,y,z positions.|
|normal|Float32[3*vertex count]|Normals x,y,z vectors.|
|uv0|Float32[2*vertex count]|Texture coordinates.|
|color|UInt8[4*vertex count|RGBA colors.
|id|UInt64[feature count]|Feature IDs.|
|faceRange|UInt32[2*feature count|Inclusive [range](../1.7/geometryFaceRange.cmn.md) of the mesh triangles belonging to each feature in the featureID array.|
|region|UINT16[4*vertex count]|UV [region](../1.7/geometryUVRegion.cmn.md) for repeated textures.|


