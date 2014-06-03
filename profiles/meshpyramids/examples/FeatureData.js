/**
	Example i3s 1.3 Feature Data Resource for the Meshpyramids profile.
*/
{
	"featureData": [
		{ // a normal feature with only a faceRange indicator in its geometry (Reference is imnplicit to the one Geometry object per tile; uses the defaultSchema)
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27, 0.0], // the position of this feature's minimum bounding sphere center, in the projectedCRS.
			"mbb": [537218.283, 5328647.902, 29.821, 5328647.100, 537218.098, 34.155], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "Public Building", // links this feature to a defined layer.
			"geometries": [ // In a meshpyramid, there is always a fixed geometry reference. lodGeometry is always true and may be omitted.
				{
					"id": 1,
					"type": "GeometryReference",
					"params": {
						"$ref": "/geometryData/0", // stand-in reference; always "/geometryData/0" in MeshPyramids
						"faceRange": [0,189] // inclusive range of faces in this geometry that belongs to this feature.
					}
				}
			],
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