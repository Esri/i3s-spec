/**
	Example i3s 1.3 Feature Data Resource for the features-lines profile.
*/
{
	"featureData": [
		{ // a feature with a Polygon geometry
			"id": 309432971018, // id is a long value.
			"position": [537218.344, 5328647.27], // the x,y offset used by all vertex positions in this feature. Add these values to the feature geometry vertex positions to get absolute projected coordinates in the positionCRS.
			"mbb": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in the positionCRS, without offset.
			"layer": "AdministrativeDistricts", // links this feature to a defined layer.
			"geometries": [ // ArrayBufferView Geometry defintion
				{
					"id": 2412332,
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": { 
						"type": "polygon", // types are: triangle_strip, triangles, line, point, polygon
						"rings": [ // ring definitions. Outer rings are CCW, inner rings CW. An array of rings where each ring is an array of points. The first and last points of a ring must be the same.
							[124, 19, 17], // an outer ring with 124 elements. The next 19 elements declare an inner ring, follwed by another 17 elements declaring an additional inner ring.
							[290], // just a single outer ring.
							[700, 61] // an outer ring with 700 elements, follwed by another 61 elements declaring an inner ring.
						], 
						"vertexAttributes": {
							"position": {	// the name of the vertex attribute; here: vertex positions in the vertexCRS used in this cache
								"byteOffset": 18371, // the starting byte position where the required bytes begin.
								"count": 1211, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32, Int16, Int32, Int64 or Float32, Float64
								"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
							}
						}
					}
				},
				{
					"id": 2412332,
					"type": "Embedded", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": { 
						"type": "polygon", // types are: triangle_strip, triangles, line, point, polygon
						"rings": [ // ring definitions. Outer rings are CCW, inner rings CW. An array of rings where each ring is an array of points. The first and last points of a ring must be the same.
							[124, 19, 17], // an outer ring with 124 elements. The next 19 elements declare an inner ring, follwed by another 17 elements declaring an additional inner ring.
							[290], // just a single outer ring.
							[700, 61] // an outer ring with 700 elements, follwed by another 61 elements declaring an inner ring.
						], 
						"vertexAttributes": {
							"position": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821] //... and many, many more.
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