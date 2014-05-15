/**
	Example i3s 1.3 Feature Data Resource for the Meshpyramids profile.
*/
{
	"featureData": [
		{ // a normal feature without an explicit geometry definition (Reference is backwards only from the Geometry)
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27, 0.0], // the position of this feature's minimum bounding sphere center, in the projectedCRS.
			"mbb": [537218.283, 5328647.902, 29.821, 5328647.100, 537218.098, 34.155], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "Public Building", // links this feature to a defined layer.
			"attributes": [
				{
					"metadata": [ // Special group for default attributes and other metadata.
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
					"reports": [ // attributes can be grouped!
						{
							"name": "GFA",
							"value": 30000
						}
					]
				}
			]
		}
	]
}