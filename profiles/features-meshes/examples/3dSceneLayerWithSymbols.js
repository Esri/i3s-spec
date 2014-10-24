/**
	Example i3s 1.2 Symbology & Schema-only 3d Scene Layer.
*/
{
	"id": 0, // the ID of this layer, unique within a 3dSceneService.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the newest version (store update session ID) of this layer.
	"name": "Tanks", // the name of this layer.
	"description" : "This layer is a template to be used for Tanks.", // Cache description 
	"copyrightText" : "The Peaceful People of Esri R&D Zurich AG", // copyright/usage information
	"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"version": "1.2", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"geometryType": "FeatureMesh", // the geometry type of the cache; selected from {FeatureMesh, IntegratedMesh, RasterTerrain, TINTerrain, Point, Line, Polygon, PointCloud}.
		"extent": [-180.0, -90.0, 180.0, 90.0], // the spatial extent of this store, in the horizontal indexCRS 
		"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/5806", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. Here: Local cartesian without Datum.
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.2", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.2",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream; version=1.2", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": "image/jpeg" // MIME type for the encoding used for the Texture Resources
	},
	"fields" :	[ // schema definition for this layer with the minimum fields expected to have symbology work
		{
		  "name" : "tankType", 
		  "type" : "esriFieldTypeString", 
		  "domain": "TankType", // Howitzer, Battle Tank, ...
		  "alias" : "Tank type"
		}, 
		{
		  "name" : "tonnage", 
		  "type" : "esriFieldTypeFloat", 
		  "alias" : "Tonnage"
		}
	],
	"drawingInfo": { // The default symbology to use on this layer.
		"renderer": {
			"type": "ScaleDependentRenderer", // renderer definition
			"renderers": [
				{
				
					"type": "SimpleRenderer",
					"minScale": 50000, // to be interpreted as a Marker-type lodSelection Metric
					"maxScale": 10000000, // to be interpreted as a Marker-type lodSelection Metric
					"symbol": {
						"type": "MarkerSymbol", 
						"elevationMode": "relativeToGround",
						"elevationOffset": 1,	// in meters
						"placement": "top",	// center | left | ... 
						"rotate" : [0, 0, 0], // in degrees
						"resource": "http://static.arcgis.com/arcgis/rest/services/zurich/SceneServer/layers/1/symbols/14", // directly points to the Geometry definition of the Model to be used. In this case: 100 polys tank taken from a global portal library.
						"proportionalSizeInfo": { // There are also proportionalHeight/Width/Depth if only one scale dimension is to be made dependent to the layer field
							"field": "tonnage",
							"minSize": 5,
							"maxSize": 15,
							"minDataValue": 10,
							"maxDataValue": 100
						}
					}
				},
				{
					"type": "SimpleRenderer",
					"minScale": 1, // to be interpreted as a Marker-type lodSelection Metric
					"maxScale": 49999, // to be interpreted as a Marker-type lodSelection Metric
					"symbol": {
						"type": "MarkerSymbol", 
						"elevationMode": "relativeToGround",
						"elevationOffset": 1,	// in meters
						"placement"	: "top",	// center | left | ... 
						"rotate" : [0, 0, 0], // in degrees
						"resource" : "./symbols/15", // directly points to the Geometry definition of the Model to be used. In this case: 10.000 polys tank provided by service author and published as part of this (symology only) service.
						"proportionalSizeInfo": {
							"field": "tonnage",
							"minSize": 5,
							"maxSize": 15,
							"minDataValue": 10,
							"maxDataValue": 100
						}
					}
				},
			]
		}
	}
}