{
	"featureData": [
		{ // a feature with a point geometry
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27], // the x,y offset used by all vertex positions in this feature. Add these values to the feature geometry vertex positions to get absolute projected coordinates in the positionCRS.
			"mbb": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "Boreholes", // links this feature to a defined layer.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"type": "Embedded", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": { 
						"type": "point", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
						"vertexAttributes": {
							"position": [537218.344, 5328647.27, 29.821]
						}
					}
				}
			],
			"attributes": [
				{
					"metadata": [ // Special group for default attributes and other metadata.
						{
							"name": "OID",
							"value": 12332
						}
					]
				},
				{
					"name": "type",
					"value": "vertical"
				},
				{
					"name": "depth",
					"value": 390.73893
				}
			]
		}
	]
}