/**
	Example i3s 1.3 Feature Data Resource for the features-points profile.
*/
{
	"featureData": [
		{ // a single point feature doesn't require geometry or a minimum bounding box. If these are not present, it will be treated as a single point feature.
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27], // the x,y[,z] offset used by all vertex positions in this feature. Add these values to the feature geometry vertex positions to get absolute projected coordinates in the positionCRS.
			"layer": "Boreholes" // links this feature to a defined layer.
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
		},
		{ // a multipoint feature does require a geometry and an mbb.
			"id": 309432971019, // id is a long value.
			"position": [537218.344, 5328647.27], // the x,y offset used by all vertex positions in this feature. Add these values to the feature geometry vertex positions to get absolute projected coordinates in the positionCRS.
			"mbb": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "Trees", // links this feature to a defined layer.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"id": 2412332,
					"type": "Embedded", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": { 
						"type": "points",
						"vertexAttributes": {
							"position": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821]
						}
					}
				}
			],
			"attributes": [
				{
					"name": "standType",
					"value": "Dense"
				},
				{
					"name": "averageCrownDiameter",
					"value": 12.1
				}
			]
		}
	]
}