/**
	Example i3s 1.6 3d Scene Layer Resource for the points profile.
*/
{
	"id": 0, // the ID of this layer, unique within a 3dSceneService.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the newest version (store update session ID) of this layer.
	"name": "BusStops", // the name of this layer.
	"spatialReference": // The spatialReference of the layer including the vertical coordinate system. wkt is included to support custom spatial references
	{
	"wkid": 4326,
	"latestWkid": 4326,
	"vcsWkid": 3855,
	"latestVcsWkid": 3855,
	"wkt": "GEOGCS[\"GCS_WGS_1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137,298.257223563]],PRIMEM[\"Greenwich\",0],UNIT[\"Degree\",0.017453292519943295]],VERTCS[\"EGM2008_Geoid\",VDATUM[\"EGM2008_Geoid\"],PARAMETER[\"Vertical_Shift\",0.0],PARAMETER[\"Direction\",1.0],UNIT[\"Meter\",1.0]]}"
  },
	"heightModelInfo": { //enables consuming clients to perform quick test whether this layer is mashable or not with exisitng content they have.
			"heightModel": "orthometric", //one of {*"orthometric"*, "ellipsoidal"};
			"ellipsoid": "wgs84 (G1674)/", //datum realization
			"heightUnit": "meter" //units
	},
	"alias": "Bus Stops", // the display alias to be used for this layer.
	"description" : "This layer contains Bus Stop features for the City of Zurich.\n", // Cache description
	"copyrightText" : "ZVV", // copyright/usage information
	"capabilities" : ["View"], // capabilities possible on this layer. If not served by a 3D Scene Server (e.g. exported by CityEngine), "View" only.
	"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"profile": "points", // Indicates which profile this scene store fulfills. One of {polygons, points, lines, meshpyramids, pointclouds}.
		"rootNode": "./nodes/0", // relative URL to root node resource.
		"version": "1.6", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"extent": [8.54, 47.385, 8.72, 47.455], // the spatial extent of this store, in the horizontal indexCRS (xmin, ymin, xmax, ymax)
		"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL.
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.6", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.6",  // MIME type for the encoding used for the Feature Data Resources
		"attributeEncoding": "application/octet-stream+gzip; version=1.6", // MIME type for the encoding used for the binnary Attribute Resources
		"lodType": "autoThinning", //indicates which LoD Scheme is used in this store.
		lodModel: "node-switching",//indicates which LoD switching Scheme is used in this store.
		"resourcePattern": ["3dNodeIndexDocument", //the minimum resource documents required for the scene layer
			"featureDataDocument",
			"Attributes"]
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
		},
		{	// Special attributes that are stored per geometry component are also declared here.
		  "name" : "classification", // name of the vertex attribute as also defined in FeatureData/Geometries
		  "type" : "esriFieldTypeVertexAttribute", // specific field type constant to indicate this is a vertex attribute. options: {esriFieldTypeVertexAttribute, esriFieldTypeFaceAttribute}
		  "alias" : "Point Classification"
		},
		{	//
		  "name" : "color",
		  "type" : "esriFieldTypeVertexAttribute",
		  "alias" : "Color"
		}
	],
	"drawingInfo": { // The default symbology to use on this layer. Refrer to https://developers.arcgis.com/web-map-specification/objects/renderer
		"renderer": {
			"type": "simple",
			"symbol": {
				"type": "PointSymbol3D",
				"symbolLayers": [{
					"size": 12,
					"resource": {
						"href": "../symbols/myPushPointIcon/iconPushPoint.png" // link to a symbolResource that is shared across the service
					},
					"type": "Icon",
					"material": {
					"color": [128, 128, 255]
					}
				}]
			}
		}
	},
	"attributeStorageInfo" :[
			{
			"key": "f_0",
			"name": "objectid",
			"header": [{
				"property": "count",
				"valueType": "UInt32"
			}],
			"ordering": ["ObjectIds"],
			"objectIds": {
				"valueType": "UInt32",
				"valuesPerElement": 1
			 }
		  },
		{
			"key": "f_1",
			"name": "spot",
			"header": [{
				"property": "count",
				"valueType": "UInt32"
			}],
			"ordering": ["attributeValues"],
			"attributeValues": {
				"valueType": "Float64",
				"valuesPerElement": 1
			}
     }
    ]
}
