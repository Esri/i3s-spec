/**
	Example i3s 1.5 FeatureData Resource using the meshpyramids Profile.
*/
{
	"featureData": [
		{
			"id": 309432971018,
			"position": [537218.344, 5328647.27, 0.0],
			"pivotOffset": [0.0, 0.0, 14.9],
			"mbb": [537218.283, 5328647.902, 29.821, 5328647.100, 537218.098, 34.155],
			"layer": "PublicBuildings",
			"geometries": [ // geometries may not just be aggregated, but also referenced using the GeometryReference type.
				{
					"id": 1,
					"type": "GeometryReference",
					"params": {
						"$ref": "/geometryData/123", // in-document absolute reference to full geometry definition (in-line or view) using JSON pointer syntax
						"faceRange": [0,189] // inclusive range of faces in this geometry that belongs to this feature.
					}
				}
			],
			"attributes": [
				{
					"name": "type",
					"value": "Business (Group B)"
				}
			]
		}
	],
	"geometryData": [
		{
			"id": 123,
			"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
			"transformation" : [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], // linearized 4x4 transformation matrix. Elements 13-15 of the 16 indicate the translational component.
			"params": {
				"type": "triangles", // Low-level geometry type, one of {triangle_strip, triangles, lines, points}
				"topology": "PerAttributeArray", // one of [{PerAttributeArray, Indexed}. When "Indexed", the indices must also be declared.
				"material": "[../shared]/materialDefinitions/Mat01", // JSON Pointer style reference to the material definition in this node's shared resource, from its root element.
				"texture": "[../shared]/textureDefinitions/38572918", // JSON Pointer style reference to the texture definition in this node's shared resource, from its root element.
				"vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
					"position": { // the name of the vertex attribute; here: vertex positions
						"byteOffset": 254976, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Float32", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
						"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
					},
					"normal": { // the name of the vertex attribute; here: vertex normals
						"byteOffset": 259116, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Int16", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
						"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a normal vector)
					},
					"uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
						"byteOffset": 260496, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Int16", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
						"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a texture coordinate that will be normalized)
					},
					"classification": { // the name of the vertex attribute; here: vertex classification/colors
						"byteOffset": 261876, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "UInt8", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
						"valuesPerElement": 1 // number of (UInt8) values need to make a valid element (here a classification)
					},
					"color": { // vertex colors; must be present if the material property "vertexColors" is set to true
						"byteOffset": 263976, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "UInt8", // the element type, either UInt8, UInt16, UInt32, Int16, Int32, Int64 or Float32, Float64
						"valuesPerElement": 3 // number of (UInt8) values need to make a valid element (here a RGB intensity)
					},
					"uv0region": { // region info for the 1st texture coordinates vertex attribue; must be present if the material property "vertexRegions" is set to true
						"byteOffset": 265170, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Int16", // the element type, must be Int16
						"valuesPerElement": 4 // number of (Int16) values need to make a valid element (here a region info)
					}
				},
				"featureAttributes": {//optional. An array  af feature ids and faceRanges of the features that make up this geometry.
					"id": {
						"byteOffset": 268354, // the starting byte position where the required bytes begin.
						"count": 1, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "UInt64", // the element type, must be UInt64
						"valuesPerElement": 1  // number of (UInt64) values need to make a valid element ( it represents a unique feature id)
					},
					"faceRange": {
						"byteOffset": 268362, // the starting byte position where the required bytes begin.
						"count": 1, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "UInt32", // the element type, must be UInt32
						"valuesPerElement": 2 // number of (UInt32) values need to make a valid element (inclusive range of faces in this geometry that belongs to this feature)
					}
				}
			}
		}
	]
}
