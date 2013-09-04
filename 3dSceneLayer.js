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
		"version": "1.0", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"geometryType": "FeatureMesh", // the geometry type of the cache; selected from {FeatureMesh, IntegratedMesh, RasterTerrain, TINTerrain, Point, Line, Polygon, PointCloud}.
		"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS 
		"geographicCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"projectedCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.1", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.1",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream; version=1.1", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
		"indexingScheme": { // Indexing Scheme properties
			"name": "esriRTree", // name of the scheme, selected from {esriRTree, QuadTree, AGOLTilingScheme}
			"inclusive": true, // true indicates that the extent and mbs of all children nodes is fully within their parent nodes' extent/mbs 
			"dimensonality": 3, // number of dimension sin which this index differentiates. 
			"childrenCardinality": [0,9], // min/max number of children per node.
			"neighborCardinality": [0,9] // min/max number of neighbors per node.
		}
		"esriRTree", 
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
	"drawingInfo": { // The default symbology to use on this layer. Specification will be identical to WebCIM.
	}
}