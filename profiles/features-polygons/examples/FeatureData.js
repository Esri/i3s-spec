/**
	Example i3s 1.4 Feature Data Resource for the features-lines profile.
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
						"topology": "Indexed", // one of {*PerAttributeArray*, Indexed}. When "Indexed", the indices must also be declared in the geometry schema and precede the vertexAttribute data.
						"rings":[ // definition of rings in the polygon: every element in the first array is an outer ring, which can optionally have inner rings, which can be nested.
						  { // first outer ring.
							"id": 0, // geometry-local id of this ring.
							"start": 0, // offset in the positions array where this ring starts
							"segments": [2, 3, 0, 4], // descriptor for the outer ring. Each pair in the descriptor gives the ring segment type (outer ring (0), inner ring (1), cut (2)) and length, e.g. 2,3 means: 3 cut segments
							"inner": [{ // 1 inner ring
							  "start": 7, // offset in the positions array where this ring starts
							  "segments": [1, 5], // descriptor for the inner ring
							  "inner": [] // crater lake on volcano island in a crater lake ?
							}]
						  }, 
						  { // second outer ring.
							"id": 1, // geometry-local id of this ring.
							"start": 12, // offset in the positions array where this ring starts
							"segments": [0, 5, 2, 1, 1, 3, 2, 3], // descriptor for the outer ring
							"inner": [] // no inner rings, optional property
						  }
						],
						"vertexAttributes": {
							"position": {	// the name of the vertex attribute; here: vertex positions in the vertexCRS used in this cache
								"byteOffset": 0, // the starting byte position where the required bytes begin.
								"count": 24, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
								"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32, Int16, Int32, Int64 or Float32, Float64
								"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
							}
						},
						"faces": { // optional pre-calculated triangulation with individual triangles (no strips) for the polygon
						  "position": {  
							"byteOffset": 288,
							"count": 66,
							"valueType": "Int16",
							"valuesPerElement": 1
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
						"topology": "PerAttributeArray", // one of {*PerAttributeArray*, Indexed}. When "Indexed", the indices must also be declared in the geometry schema and precede the vertexAttribute data.
						"rings": [
							{ // single outer ring.
								"id": 0, // geometry-local id of this ring.
								"start": 0, // offset in the positions array where this ring starts
								"segments": [0, 495] // descriptor for the outer ring
							}
						], 
						"vertexAttributes": {
							"position": [537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821, 537218.344, 5328647.27, 29.821] //... and many, many more.
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