// example for analytics data added as an overlay to an i3s featureData resource
{
	"featureData": [
		{ // a feature from a different cache
			"id": 309432971018, // id is a long value.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"params": { 
						"type": "AnalyticOverlay", // types are: AnalyticOverlay
						"faces": { // Per-face analytic values
							"stormwater_area": { // texture coordinates index array buffer view
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Float",
								"valuesPerElement": 1
							},
							"stormwater_cubicMetersYear": { // texture coordinates index array buffer view
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Float",
								"valuesPerElement": 1
							}
						}
					}
				}
			]
		},
		{ // another feature from a different cache
			"id": 309432971019, // id is a long value.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"params": { 
						"type": "AnalyticOverlayWithRegions", // types are: {*AnalyticOverlay*, AnalyticOverlayWithRegions}
						"faces": { // Per-face analytic values
							"solar_energy": { // texture coordinates index array buffer view
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Float",
								"valuesPerElement": 1
							}
						}
					}
				}
			]
		}
	]
}