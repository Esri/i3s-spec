{
	"id": 0, // the ID of this layer, unique within a 3dSceneService.
	"name": "PublicBuildings", // the name of this layer.
	"alias": "Public Buildings", // the display alias to be used for this layer.
	"description" : "This layer contains textured Building features for the City of Zurich.\n", // Cache description 
	"copyrightText" : "Vermessungsamt der Stadt Zürich", // copyright/usage information
	"capabilities" : ["View", "Query", "Edit"], // capabilities possible on this layer. If not served by a 3D Scene Server (e.g. exported by CE), "View" only.
	"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"rootNode": "./nodes/0", // relative URL to root node resource.
		"version": "1.0", // format version of this resource; used here again if this cahce hasn't been served by a 3D Scene Server.
		"geometryType": "FeatureMesh", // the geometry type of the cache; selected from {FeatureMesh, IntegratedMesh, RasterTerrain, TINTerrain, Point, Line, Polygon, PointCloud}.
		"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS 
		"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"positionsCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream; version=1.0", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
		"indexingScheme": "esriRTree", // Indexing Scheme used; selected from {esriRTree, QuadTree, AGOLTilingScheme}
		"featureOrdering": ["Layer", "Prominence"] // Ordered list of keywords indicating the ordering scheme applied to sort features within a node; selected from {ID, Prominence, Layer}
	}
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