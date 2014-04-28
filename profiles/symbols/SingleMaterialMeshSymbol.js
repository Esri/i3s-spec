/**
	Example i3s 1.2 FeatureData Resource used to contain a single geometry for a symbol.
*/
{
	"featureData": [
	],
	"geometryData": [
		{
			"id": 14,
			"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
			"transformation" : [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], // linearized 4x4 transformation matrix. Elements 13-15 of the 16 indicate the translational component.
			"params": { 
				"type": "triangles", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
				"material": "./shared/Mat01", // JSON Pointer style reference to the material definition in the symbol shared resource. 
				"texture": "./shared/38572918", // JSON Pointer style reference to the texture definition in the symbol shared resource.
				"vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
					"position": { // the name of the vertex attribute; here: vertex positions
						"byteOffset": 254976, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32, Int16, Int32, Int64 or *Float32*, Float64
						"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
					},
					"normal": { // the name of the vertex attribute; here: vertex normals
						"byteOffset": 259116, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32, *Int16*, Int32, Int64 or Float32, Float64
						"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a normal vector)
					},
					"uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
						"byteOffset": 260496, // the starting byte position where the required bytes begin.
						"count": 398, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
						"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32, *Int16*, Int32, Int64 or Float32, Float64
						"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a texture coordinate that will be normalized)
					}
				},
				"faces": { // indices for positions, normals, texture coordinates to build faces. This is an open list.
					"position": { // position index array buffer view
						"byteOffset": 165349,
						"count": 398,
						"valueType": "Int16",
						"valuesPerElement": 1
					},
					"normal": { // normals index array buffer view
						"byteOffset": 165349,
						"count": 398,
						"valueType": "Int16",
						"valuesPerElement": 1
					},
					"uv0": { // texture coordinates index array buffer view
						"byteOffset": 165349,
						"count": 398,
						"valueType": "Int16",
						"valuesPerElement": 1
					}
				}
			}
		}
	]
}