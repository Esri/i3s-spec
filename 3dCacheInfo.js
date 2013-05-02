{
	"id" : 0, // cache ID - unique across a SceneServer.
	"baseURL": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/ZurichBuildings/", // base URL for all parts of this cache. If the cache is hosted, this is an absolute URL.
	"rootNode": "./nodes/0", // relative URL to root node resource.
	"cacheName" : "ZurichBuildings", // name of this cache.
	"description" : "This cache contains textured Building features for the City of Zurich.\n", // Cache description 
	"copyrightText" : "Vermessungsamt der Stadt Zürich", // copyright/usage information
	"version": "1.0", // format version of this resource; used here again if this cahce hasn't been served by a 3D Scene Server.
	"geometryType": "FeatureMesh", // the geometry type of the cache; selected from {FeatureMesh, IntegratedMesh, RasterTerrain, TINTerrain, Point, Line, Polygon, PointCloud}.
	"srs": "urn:ogc:def:crs:EPSG::3857", // the horizontal SRS used for all "metadata" in this cache, identified by a OGC URN. Just a number often leaves many ambiguities (is it SRID, WKIF, EPSG, ...?).
	"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent, in the horizontal SRS 
	"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0", // MIME type for the encoding used for the Node Index Documents
	"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",  // MIME type for the encoding used for the Feature Data Resources
	"geometryEncoding": "application/octet-stream; version=1.0", // MIME type for the encoding used for the Geometry Resources
	"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
	"indexingScheme": "esriRTree", // Indexing Scheme used; selected from {esriRTree, QuadTree, AGOLTilingScheme}
	"featureOrdering": "Prominence", // Ordering scheme applied to sort features within a node; selected from {ID, Prominence, Layer}
    "layers" : [ // the list of layers contained in this cache.
		{
			"id": 0, // the ID of this layer. Unique only within a cache.
			"typeName": "BuildingShellPublic", // the feature class name behind this layer.
			"alias": "Public buildings", // the alias used for this layer.
			"href" : "./layers/Public%20Buildings", // relative URL to the Layer resource giving full information on the Layer's schema and drawing info. 
		},
		{
			"id": 1, // the ID of this layer. Unique only within a cache.
			"typeName": "BuildingShellTransport", // the feature class name behind this layer.
			"alias": "Transport buildings", // the alias used for this layer.
			"href" : "./layers/Transport%20Buildings", // relative URL to the Layer resource giving full information on the Layer's schema and drawing info. 
		},
    ]
}