/**
	Example i3s 1.3 Feature Data Resource for the features-meshes (FM) profile.
*/
{
	"featureData": [
		{ // a normal feature using a unique geometry
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27, 0.0], // the position of this feature's minimum bounding sphere center, in the vertexCRS.
			"pivotOffset": [0.0, 0.0, 14.9], // an optional, "semantic" pivot offset that can be used to e.g. correctly drape tree symbols.
			"mbb": [537218.283, 5328647.902, 29.821, 5328647.100, 537218.098, 34.155], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "Public Building", // links this feature to a defined layer.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"id": 34532534,
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], // linearized 4x4 transformation matrix. Elements 13-15 of the 16 indicate the translational component.
					"params": { 
						"topology": "PerAttributeArray", // one of {*PerAttributeArray*, InterleavedArray, Indexed}. When "Indexed", the indices must also be declared in the geometry schema and precede the vertexAttribute data.
						"type": "triangles", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
						"material": "[../shared]/materialDefinitions/Mat01", // JSON Pointer style reference to the material definition (property name) in this node's shared resource, from its root property.
						"texture": "[../shared]/textureDefinitions/44", // JSON Pointer style reference to the texture definition (position in the array) in this node's shared resource, from its root property.
						"vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
							"position": { // the name of the vertex attribute; here: vertex positions
								"byteOffset": 254976, // the starting byte position where the required bytes begin.
								"count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  Int16, Int32, Int64 or *Float32*, Float64
								"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
							},
							"normal": { // the name of the vertex attribute; here: vertex normals
								"byteOffset": 259116, // the starting byte position where the required bytes begin.
								"count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
								"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a normal vector)
							}, 
							"color": { // vertex colors; must be present if the material property "vertexColors" is set to true 
								"byteOffset": 263976, // the starting byte position where the required bytes begin.
								"count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "UInt8", // the element type, either UInt8, UInt16, UInt32,  Int16, Int32, Int64 or Float32, Float64
								"valuesPerElement": 3 // number of (UInt8) values need to make a valid element (here a RGB intensity)
							}
						},
						"faces": { // indices for positions, normals, texture coordinates to build faces. This is an open list.
							"position": { // position index array buffer view
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Int16",
								"valuesPerElement": 1
							},
							"normal": { // normals index array buffer view
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Int16",
								"valuesPerElement": 1
							},
							"uv0": { // texture coordinates index array buffer view
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Int16",
								"valuesPerElement": 1
							}
						}
					}
				},
								{
					"id": 34532534,
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], // linearized 4x4 transformation matrix. Elements 13-15 of the 16 indicate the translational component.
					"params": { 
						"topology": "PerAttributeArray", // one of {*PerAttributeArray*, InterleavedArray, Indexed}. When "Indexed", the indices must also be declared in the geometry schema and precede the vertexAttribute data.
						"type": "triangles", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
						"material": "[../shared]/materialDefinitions/Mat02", // JSON Pointer style reference to the material definition (property name) in this node's shared resource, from its root property.
						"texture": "[../shared]/textureDefinitions/45", // JSON Pointer style reference to the texture definition (position in the array) in this node's shared resource, from its root property.
						"vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
							"position": { // the name of the vertex attribute; here: vertex positions
								"byteOffset": 254976, // the starting byte position where the required bytes begin.
								"count": 121, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  Int16, Int32, Int64 or *Float32*, Float64
								"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
							},
							"normal": { // the name of the vertex attribute; here: vertex normals
								"byteOffset": 259116, // the starting byte position where the required bytes begin.
								"count": 121, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
								"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a normal vector)
							},
							"uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
								"byteOffset": 260496, // the starting byte position where the required bytes begin.
								"count": 121, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
								"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a texture coordinate that will be normalized)
							}
						},
						"faces": { // indices for positions, normals, texture coordinates to build faces. This is an open list.
							"position": { // position index array buffer view
								"byteOffset": 265349,
								"count": 121,
								"valueType": "Int16",
								"valuesPerElement": 1
							},
							"normal": { // normals index array buffer view
								"byteOffset": 265349,
								"count": 121,
								"valueType": "Int16",
								"valuesPerElement": 1
							},
							"uv0": { // texture coordinates index array buffer view
								"byteOffset": 265349,
								"count": 121,
								"valueType": "Int16",
								"valuesPerElement": 1
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
						},
						{
							"name": "area",
							"value": 101131.1435
						},
						{
							"name": "length",
							"value": 390.73893
						}
					]
				},
				{
					"name": "type",
					"value": "Business (Group B)"
				},
				{
					"name": "subtype",
					"value": "Office Building"
				},
				{
					"name": "name",
					"value": "Technopark"
				},
				{
					"name": "description",
					"value": "An office center for high-tech companies and spin-offs"
				},
				{
					"name": "attribution",
					"value": "Stadt Zürich"
				},
				{
					"name": "totalHeight",
					"value": 30.88
				},
				{
					"name": "eaveHeight",
					"value": 24.35
				},
				{
					"name": "levelsAboveGround",
					"value": 5
				},
				{
					"name": "levelsBelowGround",
					"value": 2
				},
				{
					"name": "status",
					"value": "built"
				},
				{
					"name": "beginLifespan",
					"value": "1993-03-12 00:00:00"
				},
				{
					"name": "endLifespan",
					"value": ""
				},
				{
					"name": "reports",
					"value": "reports-group",
					"group": [
						{
							"name": "GFA",
							"value": 30000
						}
					]
				}
			]
		},
		{ // a Feature using an instance geometry
			"id": 309432971019,
			"position": [537218.344, 5328647.27], // the x,y offset used by all vertex positions in this feature. Add these values to the feature geometry vertex positions to get absolute projected coordinates in the positionCRS.
			"mbb": [1222178.283, 83371.902, 54758.098, 2242.100, 34.155, 29.821],
			"layer": "Transport Building", 
			"geometries": [ 
				{
					"id": 34532535,
					"type": "GeometryReference", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared geometry in geometryData or in the shared resources (GeometryReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": {
						"$ref": "[../shared]/symbols/123" // in-document absolute reference to full geometry definition (in-line or view) using JSON pointer syntax
					}
				}
			],
			"attributes": [
				{
					"name": "metadata",
					"value": "metadata-group",
					"group": [ // Special group for default attributes and other metadata.
						{
							"name": "OID",
							"value": 34984
						},
						{
							"name": "area",
							"value": 47472.123
						},
						{
							"name": "length",
							"value": 120.73893
						}
					]
				},
				{
					"name": "type",
					"value": "Business (Group B)"
				},
				{
					"name": "subtype",
					"value": "Office Building"
				},
				{
					"name": "name",
					"value": "Technopark Erweiterung"
				}
			]
		}
	]
}