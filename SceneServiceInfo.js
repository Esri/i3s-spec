{
	"serviceName": "3dSceneService",
	"serviceVersion": "1.0",
	"supportedBindings": ["REST"],
	"supportedOperationsProfile": ["Base", "Dynamic", "Editing"],
	"servedCaches": [
		{
			"cacheName": "ZurichBuildings",
			"geometryType": "FeatureMesh",
			"classes": [ 
				{
					"name": "Building"
				}
			],
			"SRS": 4326,
			"extent": [47.385, 8.54, 47.455, 8.72], 
			"nidEncoding": "application/json+gzip",
			"featureEncoding": "application/json+gzip",
			"geometryEncoding": "application/glTF+gzip",
			"textureEncoding": "image/ASTC",
			"rootNode": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/ZurichBuildings/nodes/0",
			"indexingScheme": "esriRTree"
		},
		{
			"cacheName": "Zurich-OperationalFeatures",
			"geometryType": 6,
			"classes": [ 
				{
					"name": "StreetFurniture"
				},
				{
					"name": "VegetationObject"
				}
			],
			"SRS": 4326,
			"extent": [48.282221, 11.091123, 48.400291, 11.457102], 
			"nidEncoding": "application/json+gzip",
			"featureEncoding": "application/json+gzip",
			"geometryEncoding": "application/esriGeomTA+gzip",
			"textureEncoding": "image/ASTC",
			"rootNode": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Zurich-OperationalFeatures/nodes/0",
			"indexingScheme": "esriRTree"
		},
		{
			"cacheName": "Zurich-Elevation",
			"geometryType": 1,
			"classes": [ 
				{
					"name": "Elevation"
				}
			],
			"SRS": 4326,
			"extent": [48.282221, 11.091123, 48.400291, 11.457102], 
			"nidEncoding": "application/json+gzip",
			"featureEncoding": "application/json+gzip",
			"geometryEncoding": "application/glTF+gzip",
			"textureEncoding": "image/PNG",
			"rootNode": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Zurich-Elevation/nodes/0",
			"indexingScheme": "AGOLTilingScheme"
		}
	]
}