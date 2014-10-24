/**
	Example i3s 1.3 Feature Data Resource for the features-lines profile.
*/
{
	"featureData": [
		{ // a feature with a Line geometry
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27], // the x,y offset used by all vertex positions in this feature. Add these values to the feature geometry vertex positions to get absolute projected coordinates in the positionCRS.
			"mbb": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "TramwayLines", // links this feature to a defined layer.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"id": 2412332,
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": { 
						"type": "line", // types are: triangle_strip, triangles, line, point
						"vertexAttributes": {
							"position": {	// the name of the vertex attribute; here: vertex positions in the vertexCRS used in this cache
								"byteOffset": 18371, // the starting byte position where the required bytes begin.
								"count": 1211, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32, Int16, Int32, Int64 or Float32, Float64
								"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
							}
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
					"name": "width",
					"value": 130.0
				}
			]
		}
	]
}