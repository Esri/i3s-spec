{
	"cacheId" : 0, // cache ID - unique across a SceneServer.
	"name" : "ZurichBuildings", // URL name of this cache.
	"geometryType" : "FeatureMesh", // Geometry type for the cache.
	"description" : "This cache contains textured Building features for the City of Zurich.\n", 
	"nidEncoding": "application/json+gzip",
	"featureEncoding": "application/json+gzip",
	"geometryEncoding": "application/glTF+gzip",
	"textureEncoding": "image/ASTC",
	"rootNode": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/ZurichBuildings/nodes/0",
	"indexingScheme": "esriRTree",
	"copyrightText" : "Vermessungsamt der Stadt Zürich", 
	"extent" : {
		"xmin" : 8.54,  
		"ymin" : 47.385,  
		"xmax" : 8.72,
		"ymax" : 47.455, 
		"spatialReference" : {
		  "wkid" : 4325
		}
	}, 
    "layers" : [
		{
			"id": 12, // the ID of this layer. Unique only within a cache.
			"name": "Public buildings", // the alias used for this layer.
			"typeName": "3duim.BuildingShell", // the feature class name behind this layer.
			"defaultVisibility" : true, 
			"capabilities" : "View,Query,Edit", // capabilities possible on this layer.
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
			"drawingInfo": { // symbology defined here will override any mateiral definitions existing on features in the cache.
				"renderer": {
					"symbol" : {
						"type" : "CIMSymbolReference",
						"symbolName": "example_123", // SymbolReference/SymbolLayer property
						"symbol": {
							"type": "CIMPointSymbol",
							"symbolLayers": 
							[
								{
									"type": "CIMSimpleMarker", // name of implementation class in CIM: SimpleMarker
									"name": "MyFirstCircleSymbol", // SymbolLayer property
									"enable": true, // SymbolLayer property
									"colorLocked": true, // SymbolLayer property, only in drawingInfo
									"effects": [
										{
											"type": "GeometricEffectMove", // 1. I didn't find a real PlacementEffect as in the Maplex Engine that integrates here.
											"xOffset": 0,
											"yOffset": 20
										}								
									],
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
									"size": 10.09, // IMarker property, ???
									"rotateClockwise": false, // IMarker property, ???
									"dominantSizeAxis3D": "Z", // IMarker property, ???
									"fillColor": { // ISimpleMarkerProperty
										[255, 179, 0, 255]
									}, // ISimpleMarkerProperty
									"outlineColor": {
										[255, 255, 255, 255]
									},
									"outlineWidth": 0.4, // ISimpleMarkerProperty
									"simpleMarkerType": "Circle" // ISimpleMarkerProperty, collides with class type!!!! -- structure problem?
									
								},
								{	// line to next symbol
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
									"fillColor": { // ISimpleMarkerProperty
										[255, 179, 0, 255]
									}, // ISimpleMarkerProperty
									"simpleMarkerType": "Rectangle" // ISimpleMarkerProperty, collides with class type!!!! -- structure problem?
									
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
							]
						},
						"label" : "",
					}
				}
			}
		}
    ]
}