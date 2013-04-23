{
	"featureData": [
		{ // a normal feature using a unique geometry
			"id": 309432971018, // id is a long value.
			"mbb": [1222178.283, 83371.902, 54758.098, 2242.100, 34.155, 29.821], // the mbb refines the mbs information that the client already has from the NodeIndexDocument.
			"classname": "Building", // links this feature to a defined layer.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"type": "triangles", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
					"components": [ // a single geometry can have multiple components if different materials are used (i.e. glass for windows, brick texture for walls, ...)
						{
							"material": {
								"id": "Mat01", // ID of the Material, as defined in the shared resources bundle
							}
						},
						{
							"material": {
								"id": "Mat02", // ID of the Material, as defined in the shared resources bundle
							}
						},
						{
							"material": {
								"id": "Mat03", // ID of the Material, as defined in the shared resources bundle
							}
						}
					],
					"attributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
						"position": { 
							"bufferEntry": 3, // the data block that the required bytes are in.
							"byteOffset": 254976, // the starting byte position where the required bytes begin.
							"count": 345, // the number of elements. Multiply by byteStride to know how many bytes need to be read.
							"valueType": "Float32", // the element type, either UInt8, UInt16, Int16, Int32, Int64 or Float32, Float64
							"valuesPerElement": 3 
						},
						"normal": { }, // normals
						"uv0": { }, // texture coordinates (optional)
						"classification": { }, // per-vertex classification/color/... attributes (optional)
						"faces": { // indices for positions, normals, texture coordinates to build faces
							"position": {
								"bufferEntry": 3,
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Int16",
								"valuesPerElement": 1,
								"componentIndices": [ // array index where the component starts.
									0,
									36,
									246
								]
							},
							"normal": {
								"bufferEntry": 3,
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Int16",
								"valuesPerElement": 1
							},
							"uv0": {
								"bufferEntry": 3,
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Int16",
								"valuesPerElement": 1
							}
						}
					},
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]
				}
			],
			"attributes": [
				{
					"metadata": [ // Special group for default attributes and other metadata.
						{
							"name": "OID",
							"type": "esriFieldTypeOID",
							"value": 34983
						},
						{
							"name": "area",
							"type": "esriFieldTypeDouble",
							"value": 101131.1435
						},
						{
							"name": "length",
							"type": "esriFieldTypeDouble",
							"value": 390.73893
						}
					]
				},
				{
					"name": "type",
					"type": "esriFieldTypeString",
					"value": "Business (Group B)"
				},
				{
					"name": "subtype",
					"type": "esriFieldTypeString",
					"value": "Office Building"
				},
				{
					"name": "name",
					"type": "esriFieldTypeString",
					"value": "Technopark"
				},
				{
					"name": "description",
					"type": "esriFieldTypeString",
					"value": "An office center for high-tech companies and spin-offs"
				},
				{
					"name": "attribution",
					"type": "esriFieldTypeString",
					"value": "Stadt Zürich"
				},
				{
					"name": "totalHeight",
					"type": "esriFieldTypeDouble",
					"value": 30.88
				},
				{
					"name": "eaveHeight",
					"type": "esriFieldTypeDouble",
					"value": 24.35
				},
				{
					"name": "levelsAboveGround",
					"type": "esriFieldTypeInteger",
					"value": 5
				},
				{
					"name": "levelsBelowGround",
					"type": "esriFieldTypeInteger",
					"value": 2
				},
				{
					"name": "status",
					"type": "esriFieldTypeString",
					"value": "built"
				},
				{
					"name": "beginLifespan",
					"type": "esriFieldTypeDate",
					"value": "1993-03-12 00:00:00"
				},
				{
					"name": "endLifespan",
					"type": "esriFieldTypeDate",
					"value": ""
				},
				{
					"reports": [ // attributes can be grouped!
						{
							"name": "GFA",
							"type": "esriFieldTypeDouble",
							"value": 30000
						}
					]
				}
			]
		},
		{ // a Feature using an instance geometry
			"id": 309432971019,
			"mbb": [1222178.283, 83371.902, 54758.098, 2242.100, 34.155, 29.821],
			"classname": "Building", 
			"geometries": [ 
				{
					"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/shared#SimpleSharedGeom01"
				}
			],
			"attributes": [
				{
					"metadata": [ // Special group for default attributes and other metadata.
						{
							"name": "OID",
							"type": "esriFieldTypeOID",
							"value": 34984
						},
						{
							"name": "area",
							"type": "esriFieldTypeDouble",
							"value": 47472.123
						},
						{
							"name": "length",
							"type": "esriFieldTypeDouble",
							"value": 120.73893
						}
					]
				},
				{
					"name": "type",
					"type": "esriFieldTypeString",
					"value": "Business (Group B)"
				},
				{
					"name": "subtype",
					"type": "esriFieldTypeString",
					"value": "Office Building"
				},
				{
					"name": "name",
					"type": "esriFieldTypeString",
					"value": "Technopark Erweiterung"
				}
			]
		}
	]
}