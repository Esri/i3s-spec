{
	"id": 0, // the ID of this layer. Unique only within a cache and to be used by accessing <cacheurl>/layers/<layerID>/nodes/...
	"name": "Public buildings", // the alias used for this layer. Access to resources by layer can also be done using the URL-encoded name: <cacheurl>/layers/Public%20buildings/nodes/...
	"typeName": "BuildingShell", // the feature class name behind this layer.
	"defaultVisibility" : true, 
	"pickable": true,
	"capabilities" : "View,Query,Edit", // capabilities possible on this layer. If not served by a 3D Scene Server (e.g. exported by CE), "View" only.
	"fields" :	[ // schema definition for this layer.
		{
		  "name" : "ObjectID", 
		  "type" : "esriFieldTypeOID", 
		  "alias" : "ObjectID"
		}, 
		{
		  "name" : "type", 
		  "type" : "esriFieldTypeString", 
		  "alias" : "Building Type"
		}, 
		{
		  "name" : "usage", 
		  "type" : "esriFieldTypeString", 
		  "alias" : "Building usage"
		}, 
		{
		  "name" : "totalHeight", 
		  "type" : "esriFieldTypeFloat", 
		  "alias" : "Total Height"
		}, 
		{
		  "name" : "eaveHeight", 
		  "type" : "esriFieldTypeFloat", 
		  "alias" : "Eave Height"
		}
	],
	"drawingInfo": { // The default symbology to use on this layer; the symbology defined here will override any material definitions existing on features in the cache.
		"renderer": {
			"symbol" : {
				"type" : "CIMSymbolReference",
				"symbolName": "example_123", // SymbolReference/SymbolLayer property
				"symbol": {
					"type": "CIMPointSymbol",
					"symbolLayers": 
					[
						{ // Circle Symbol in place of the 3D Point feature (CIM IMarker Serialization)
							"type": "CIMSimpleMarker", // name of implementation class in CIM: SimpleMarker
							"name": "MyFirstCircleSymbol", // SymbolLayer property
							"enable": true, // SymbolLayer property
							"colorLocked": true, // SymbolLayer property, only in drawingInfo
							"elevation": { // ILayerDefinition property
								"elevationMode": "FloatOnSurface", // enum {None, FloatOnSurface, FeatureHeights}; note that no hard link is made to an elevation surface, as that will reside in a different cache. 
								"zOffset": 0.0, // ILayerElevation property
								"zConversionFactor": 1.0 // ILayerElevation property
							},
							"depthVis": "drawAlways", // Style of how the symbol is drawn; Enum: {drawAlways, drawAlternate, normal}
							"angleX": 0.0, // rotation in degrees around x world axis
							"angleY": 0.0, // rotation in degrees around y world axis
							"rotation": 0.0, // rotation of the symbol in degrees around z world axis
							"offsetX": 0.0, // offset of the symbol to the location of the feature, in world space & units
							"offsetY": 0.0, // offset of the symbol to the location of the feature, in world space & units
							"offsetZ": 0.0, // offset of the symbol to the location of the feature, in world space & units
							"scaleStrokesAndFills": true, // scale symbol to perspectively correct real-world size
							"size": 10.09, // Absolute size of the symbol, in world units
							"dominantSizeAxis3D": "Z", // The axis of the Symbol affected by size, if not uniform
							"marker": { // ISimpleMarker serialization
								"fillColor": { // ISimpleMarkerProperty
									[255, 179, 0, 255]
								}, // ISimpleMarkerProperty
								"outlineColor": {
									[255, 255, 255, 255]
								},
								"outlineWidth": 0.4, // ISimpleMarkerProperty
								"type": "Circle" // SimpleMarkerType, choice: {}
							}
						},
						{	// leader line to next symbol
							"type": "CIMSimpleMarker", // name of implementation class in CIM: SimpleMarker
							"name": "ConnectionLine", // SymbolLayer property
							"enable": true, // SymbolLayer property
							"colorLocked": true, // SymbolLayer property, only in drawingInfo
							"elevationBase": { // ILayerDefinition property
								"elevationMode": "CustomSurface", // ILayerElevation property, enum {BaseGlobeSurface, CustomSurface, None}
								"baseSurfaces": [ IDataConnection ], // ILayerElevation property, ??? - Can we just use a layername to ref?
								"zOffset": 0.0, // ILayerElevation property
								"zConversionFactor": 1.0 // ILayerElevation property
							},
							"depthVis": "drawAlways", // new. didin't find such a directive. Enum: {drawAlways, drawAlternate, normal}
							"anchorPoint": { // IMarker property, ???
								[0, 0, 0]	
							}
							"anchorPointUnits": "Points", // uses CIM SymbolUnits Enum {Points,Relative}
							"angleX": 0.0, // IMarker property, rotation in degrees around x world axis
							"angleY": 0.0, // IMarker property, rotation in degrees around y world axis
							"offsetX": 0.0, // IMarker property, in world space & units
							"offsetY": 0.0, // IMarker property, in world space & units
							"offsetZ": 0.0, // IMarker property, in world space & units
							"rotation": 0.0, // IMarker property, in degrees around z world axis
							"scaleStrokesAndFills": true, // IMarker property, ???
							"size": 20, // IMarker property, ???
							"rotateClockwise": false, // IMarker property, ???
							"dominantSizeAxis3D": "Z", // IMarker property, ???
							"marker": { // ISimpleMarker serialization
								"outlineColor": {
									[255, 255, 255, 255]
								},
								"outlineWidth": 1.0, // ISimpleMarkerProperty
								"type": "Circle" // ISimpleMarkerProperty, collides with class type!!!! -- structure problem?
							}
							
						},
						{
							"type": "CIMPictureMarker", // name of implementation class in CIM: SimpleMarker
							"enable": true, // not in CIM, only in drawingInfo
							"colorLocked": true, // not in CIM, only in drawingInfo
							"AnchorPoint": { // IMarker property, ???
								[0, 0, 0]	
							}
							"AnchorPointUnits": "Points", // uses CIM SymbolUnits Enum {Points,Relative}
							"AngleX": 0.0, // IMarker property, rotation in degrees around x world axis
							"AngleY": 0.0, // IMarker property, rotation in degrees around y world axis
							"OffsetX": 0.0, // IMarker property, in world space & units
							"OffsetY": 0.0, // IMarker property, in world space & units
							"OffsetZ": 30.0, // IMarker property, in world space & units
							"Rotation": 0.0, // IMarker property, in degrees around z world axis
							"ScaleStrokesAndFills": true, // IMarker property, ???
							"Size": 10.09, // IMarker property, ???
							"RotateClockwise": false, // IMarker property, ???
							"DominantSizeAxis3D": "Z", // IMarker property, ???
							"marker": {
								"URL": "http://path/to/symbol.", // IPictureMarkerProperty
								"TextureFilter": "Draft", // IPictureMarkerProperty, uses TextureFilter Enum {Draft, Picture,Text}
								"colorSubstitutions": [
									{
									   "type": "CIMColorSubstitution",
									   "oldColor": [
										255,
										255,
										255,
										255
									   ],
									   "newColor": [
										255,
										255,
										255,
										0
									   ]
									}
								],
								"ScaleX": 0.4, // IPictureMarkerProperty
								"InvertBackfaceTexture": true // IPictureMarkerProperty
							}
						}
					]
				},
				"label" : "",
			}
		}
	}
}