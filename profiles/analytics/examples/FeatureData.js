/**
	Example i3s 1.3 Feature Data Resource for the Analytics profile.
*/
{
	"featureData": [
		{ // a partial feature (the client is expected to already have the base layer to this analytics overlay loaded) that receives an update to a single property
			"id": 309432971018, // the id of the feature that this data is to be merged with
			"attributes": [ 
				{
					"name": "temperature2m",
					"value": 30.88
				}
			]
		},
		{ // a partial feature that receives a regular time series update to a single property
			"id": 309432971019, // the id of the feature that this data is to be merged with
			"attributes": [ 
				{
					"name": "temperature2m",
					"value": {
						"start": "2014-09-14T23:12:00.000Z", // start ISO timestamp for the series; should always be in UTC.
						"interval": "1h", // interval between two data points, must match {/^[\d\.]*?[hmsDMY]/} (meaning: seconds, minutes, hours, Days, Weeks, Months, Years)
						"data": [17.1, 16.0, 14.2, 13.1, 15.0] // the array of data points for this time series
					}
				}
			]
		},
		{ // a partial feature that receives an irregular time series update to a single property
			"id": 309432971019, // the id of the feature that this data is to be merged with
			"attributes": [ 
				{
					"name": "temperature2m",
					"value": {
						"stops": [
							"2014-09-14T23:12:00.000Z", 
							"2014-09-14T00:13:00.000Z", 
							"2014-09-14T01:10:00.000Z", 
							"2014-09-14T02:07:00.000Z", 
							"2014-09-14T03:24:00.000Z"
						],
						"data": [ // KV pairs - Key is the timestamp, value the property value from the moment in time to the next key.
							17.1, 16.0, 14.2, 13.1, 15.0
						]
					}
				}
			]
		},
		{ // a partial feature that receives a position update // FIXME Time Series (Animation Path :))
			"id": 309432971020, // the id of the feature that this data is to be merged with
			"position": [537208.344, 5328607.27, 0.0] // NOTE: The client should recompute the bounding box property mbb if it is not delivered with the analytics data.
		},
		{ // a partial feature, i.e. the client is expected to already have the base layer to this overlay loaded
			"id": 309432971017, // the id of the feature that this data is to be merged with
			"geometries": [ // the geometry of this feature is updated with two vertex attributes (here: stormwater_area and stormwater_cubicMetersYear)
				{
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"params": { 
						"type": "AnalyticOverlay", // types are: {*AnalyticOverlay*, AnalyticOverlayWithRegions}. AnalyticOverlayWithRegions use texture coordinates instead of face indices.
						"faces": { // Per-face analytic values
							"stormwater_area": { // per-face values, using the same indexing as faces
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Float32",
								"valuesPerElement": 1
							},
							"stormwater_cubicMetersYear": { // per-face values, using the same indexing as faces
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Float32",
								"valuesPerElement": 1
							}
						}
					}
				}
			]
		},
		{ // another partial feature that receives a time series update to a face property
			"id": 309432971019, // id is a long value.
			"geometries": [ // Geometry defintion including materials; note that one Feature can have multiple geometries
				{
					"type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"params": { 
						"type": "AnalyticOverlayTimeSeries",
						"seriesType": "RegularInterval",
						"interval": "5m",
						"start": "2014-09-14T23:12:00.000Z",
						"faces": { // Per-face analytic values
							"solar_energy": { 
								"byteOffset": 165349,
								"count": 345,
								"valueType": "Float32",
								"valuesPerElement": 144 // there are 144 values for every face in the target geometry -> each 5 minutes apart from the previous.
							}
						}
					}
				}
			]
		}
	]
}