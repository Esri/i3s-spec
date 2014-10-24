/**
	Example i3s 1.3 3d Scene Layer Resource for the Analytics profile.
*/
{
	"id": 1, // the ID of this layer, unique within a 3dSceneService.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the newest version (store update session ID) of this layer.
	"name": "MeteoSensors", // the name of this layer.
	"alias": "WMO Meteorological Stations", // the display alias to be used for this layer.
	"capabilities" : ["View"], // capabilities possible on this layer.
	"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"profile": "analytics", // i3s 1.3. Indicates which profile this scene store fulfills. One of {features-meshes, features-polygons, features-points, features-lines, analytics, meshpyramids, pointclouds, symbols}.
		"rootNode": "./nodes/root", // relative URL to root node resource.
		"version": "1.3", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS 
		"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.3", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.3",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream+gzip; version=1.3", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
		"lodType": "None", // optional field to indicate which LoD Scheme is used in this store. Must be {None} for analytics caches.
		"indexingScheme": { // Indexing Scheme properties
			"name": "QuadTree", // name of the scheme, selected from {esriRTree, QuadTree, AGOLTilingScheme}
			"inclusive": true, // true indicates that the extent and mbs of all children nodes is fully within their parent nodes' extent/mbs 
			"dimensionality": 2, // number of dimensions in which this index differentiates. 
			"childrenCardinality": [0,4], // min/max number of children per node.
			"neighborCardinality": [0,8] // min/max number of neighbors per node.
		}
	},
	"fields" :	[ // schema definition for this layer, as with 2D Layers.
		{
		  "name" : "ObjectID", 
		  "type" : "esriFieldTypeOID", 
		  "alias" : "ObjectID"
		}, 
		{
		  "name" : "type", 
		  "type" : "esriFieldTypeString", 
		  "alias" : "Weather Station Type"
		}, 
		{
		  "name" : "temperature2m", 
		  "type" : "esriFieldTypeFloat", 
		  "seriesType": "IrregularInterval",
		  "alias" : "Temperature 2m (C°)"
		}, 
		{
		  "name" : "windDirection", 
		  "type" : "esriFieldTypeSmallInteger", 
		  "seriesType": "IrregularInterval",
		  "alias" : "Temperature 2m (C°)"
		}, 
		{
		  "name" : "precipitationDay", 
		  "type" : "esriFieldTypeFloat", 
		  "seriesType": "RegularInterval",
		  "alias" : "Precipitation (mm in UTC06:00 to UTC06:00 period)"
		}
	]
}