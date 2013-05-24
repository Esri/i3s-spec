{
	"serviceName": "3dSceneService", // type of the service; always 3dSceneService.
	"serviceVersion": "1.0", // the version of the service protocol/REST endpoint.
	"supportedBindings": ["REST"], // the list of bindings, should we ever need to add new bindings
	"supportedOperationsProfile": ["Base", "Dynamic", "Editing"], // supported profiles of the service
	"layers": [ // list of layers served by this service, with basic store info.
		{
			"id": 0, // the ID of this layer, unique within a 3dSceneService.
			"name": "PublicBuildings", // the name of this layer.
			"alias": "Public Buildings", // the display alias to be used for this layer.
			"href": "./layers/PublicBuildings", // relative URL to the Layer resource giving full information on the Layer's schema and drawing info. 
			"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
				"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
				"rootNode": "./nodes/0", // relative URL to root node resource.
				"version": "1.0", // format version of this resource; used here again if this cache hasn't been served by a 3D Scene Server.
				"geometryType": "FeatureMesh", // the geometry type of the cache; selected from {FeatureMesh, IntegratedMesh, RasterTerrain, TINTerrain, Point, Line, Polygon, PointCloud}.
				"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS 
				"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
				"positionCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
				"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0", // MIME type for the encoding used for the Node Index Documents
				"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.0",  // MIME type for the encoding used for the Feature Data Resources
				"geometryEncoding": "application/octet-stream; version=1.0", // MIME type for the encoding used for the Geometry Resources
				"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
				"indexingScheme": "esriRTree", // Indexing Scheme used; selected from {esriRTree, QuadTree, AGOLTilingScheme}
				"featureOrdering": ["Layer", "Prominence"] // Ordered list of keywords indicating the ordering scheme applied to sort features within a node; selected from {ID, Prominence, Layer}
			},
			"sourceDataConnection": { // the information where the original data for this layer came from. This layer came from the CE exporter
				"type": "CEproject", // the type of the source data this layer was generated from. Options: { SDE, FileGDB, Raster, Shapefile, CEProject
				"dataset": "PortlandBuildableVolumes", // the name of the Feature class/dataset in the source to select the correct data in the source workspace. 
				"workspaceConnectionString": "D:\ceworkspace\PortlandBuildableVolumes" // URL connection string pointing to the workspace from which this layer originates
			}
		},
		{
			"id": 1, // the ID of this layer, unique within a 3dSceneService.
			"name": "BuildingShellTransport", // the name of this layer.
			"alias": "Transport buildings", // the display alias used for this layer.
			"href": "./layers/Transport%20Buildings", // relative URL to the Layer resource giving full information on the Layer's schema and drawing info. 
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
			},
			"sourceDataConnection": { // the information where the original data for this layer came from.
				"type": "FileGDB",
				"dataset": "BuildingShellTransport",
				"workspaceConnectionString": "C:\Users\username\Documents\ArcGIS\Default.gdb"
			}
		}
	]
}