{
	"serviceName": "3dSceneService", // type of the service; always 3dSceneService.
	"serviceVersion": "1.0", // the version of the service protovol/REST endpoint.
	"supportedBindings": ["REST"], // the list of bindings, should we ever need to add new bindings
	"supportedOperationsProfile": ["Base", "Dynamic", "Editing"], // supported profiles of the service
	"servedCaches": [ // list of caches served by this service.
		{
			"id" : 0, // cache ID - unique across a SceneServer.
			"href": "./caches/ZurichBuildings", // relative URL from this resource to the cache resource 
			"cacheName": "ZurichBuildings", // the name of the cache; unique within this service.
			"geometryType": "FeatureMesh", // the geometry type of the cache; selected from {FeatureMesh, IntegratedMesh, RasterTerrain, TINTerrain, Point, Line, Polygon, PointCloud}.
			"layers": [ "BuildingShellPublic", "BuildingShellTransport"], // list of classes aka layers served through this cache
			"srs": "urn:ogc:def:crs:EPSG::3857", // the horizontal SRS used for all "metadata" in this cache, identified by a OGC URN. Just a number often leaves many ambiguities (is it SRID, WKIF, EPSG, ...?).
			"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent, in the horizontal SRS 
			"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0", // MIME type for the encoding used for the Node Index Documents
			"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",  // MIME type for the encoding used for the Feature Data Resources
			"geometryEncoding": "application/octet-stream; version=1.0", // MIME type for the encoding used for the Geometry Resources
			"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
			"indexingScheme": "esriRTree", // Indexing Scheme used; selected from {esriRTree, QuadTree, AGOLTilingScheme}
			"featureOrdering": "Prominence" // Ordering scheme applied to sort features within a node; selected from {ID, Prominence, Layer}
		},
		{
			"id" : 1, // cache ID - unique across a SceneServer.
			"cacheName": "Zurich_OperationalFeatures",
			"geometryType": "PointFeature",
			"layers": ["StreetFurniture", "VegetationObject"],
			"srs": "urn:ogc:def:crs:EPSG::3857",
			"extent": [48.282221, 11.091123, 48.400291, 11.457102], 
			"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"geometryEncoding": "application/octet-stream; version=1.0",
			"textureEncoding": "image/jpeg",
			"rootNode": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Zurich-OperationalFeatures/nodes/0",
			"indexingScheme": "esriRTree",
			"FeatureOrdering": "Layer" // picking "Layer" as ordering scheme is required if more than one Layer is in a single cache!
		},
		{
			"id" : 2, // cache ID - unique across a SceneServer.
			"cacheName": "Zurich_Elevation",
			"geometryType": "RasterTerrain",
			"layers": ["Elevation"],
			"srs": "urn:ogc:def:crs:EPSG::3857",
			"extent": [48.282221, 11.091123, 48.400291, 11.457102], 
			"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"geometryEncoding": "application/octet-stream; version=1.0",
			"textureEncoding": "image/jpeg",
			"rootNode": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Zurich-Elevation/nodes/0",
			"indexingScheme": "AGOLTilingScheme",
			"FeatureOrdering": "ID"
		}
	]
}