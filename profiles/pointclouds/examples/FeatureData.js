/**
	Example i3s 1.3 3d Node Index Document Resource for the pointclouds profile. In a pointclouds i3s cache, each node contains a single feature, which has a multipoint type geometry.
*/
{ 
	"featureData": [
		{ // a normal feature using a unique geometry
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27], // the position of this feature's minimum bounding sphere center, in the vertexCRS.
			"mbb": [537218.283, 5328647.902, 29.821, 5328647.100, 537218.098, 34.155], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "PointCloud", // links this feature to a defined layer.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"id": 389572389,
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], // linearized 4x4 transformation matrix. Elements 13-15 of the 16 indicate the translational component.
					"params": { 
						"type": "points", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
						"topology": "PerAttributeArray", // one of {*PerAttributeArray*, InterleavedArray, Indexed}. When "Indexed", the indices must also be declared in the geometry schema and precede the vertexAttribute data.
						"vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
							"position": { // the name of the vertex attribute; here: vertex positions
								"byteOffset": 254976, // the starting byte position where the required bytes begin.
								"count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Float32", // the element type, either UInt8, UInt16, Int16, Int32, Int64 or *Float32*, Float64
								"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
							},
							"classification": { // the name of the vertex attribute; here: vertex classification/colors
								"byteOffset": 261876, // the starting byte position where the required bytes begin.
								"count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "UInt8", // the element type, either *UInt8*, UInt16, Int16, Int32, Int64 or Float32, Float64
								"valuesPerElement": 4 // number of (UInt8) values need to make a valid element (here a classification)
							},
							"color": { // vertex colors; must be present if the material property "vertexColors" is set to true 
								"byteOffset": 263976, // the starting byte position where the required bytes begin.
								"count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "UInt8", // the element type, either UInt8, UInt16, Int16, Int32, Int64 or Float32, Float64
								"valuesPerElement": 3 // number of (UInt8) values need to make a valid element (here a RGB intensity)
							}
						}
					}
				}
			],
			"attributes": [
				{ // Special group for default attributes and other metadata.
					"name": "metadata",
					"value": "metadata-group",
					"group": [ 
						{
							"name": "OID",
							"value": 34983
						}
					]
				},
				{
					"name": "someAttribute",
					"value": "someValue"
				}
			]
		}
	]
}