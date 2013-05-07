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
			"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
			"positionsCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
			"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent, in the indexCRS 
			"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0", // MIME type for the encoding used for the Node Index Documents
			"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",  // MIME type for the encoding used for the Feature Data Resources
			"geometryEncoding": "application/octet-stream; version=1.0", // MIME type for the encoding used for the Geometry Resources
			"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
			"indexingScheme": "esriRTree", // Indexing Scheme used; selected from {esriRTree, QuadTree, AGOLTilingScheme}
			"featureOrdering": "Prominence" // Ordering scheme applied to sort features within a node; selected from {ID, Prominence, Layer}
		},
		{
			"id" : 1, // cache ID - unique across a SceneServer.
			"href": "./caches/Zurich_OperationalFeatures", // relative URL from this resource to the cache resource 
			"cacheName": "Zurich_OperationalFeatures",
			"geometryType": "PointFeature",
			"layers": ["StreetFurniture", "VegetationObject"],
			"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
			"positionsCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
			"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent, in the indexCRS  
			"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"geometryEncoding": "application/octet-stream; version=1.0",
			"textureEncoding": "image/jpeg",
			"indexingScheme": "esriRTree",
			"FeatureOrdering": "Layer" // picking "Layer" as ordering scheme is required if more than one Layer is in a single cache!
		},
		{
			"id" : 2, // cache ID - unique across a SceneServer.
			"href": "./caches/Zurich_Elevation", // relative URL from this resource to the cache resource
			"cacheName": "Zurich_Elevation",
			"geometryType": "RasterTerrain",
			"layers": ["Elevation"],
			"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
			"positionsCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
			"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent, in the indexCRS 
			"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",
			"geometryEncoding": "application/octet-stream; version=1.0",
			"textureEncoding": "image/jpeg",
			"indexingScheme": "AGOLTilingScheme",
			"FeatureOrdering": "ID"
		}
	]
}