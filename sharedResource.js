{
	"parentResources": [ // the list of reference parent shared resource bundles, as expandable URLs
		{
			"href":"http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/5/shared"
		}, 
		{
			"href":"http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/0/shared"
		}
	], 
	"sharedResources": [
		{ // 3WS-Style Material definition
			"type": "MaterialDefinition",
			"id": "Mat01", // a generated ID, unique within the node.
			"name": "TerrainMaterial_Topobasemap",
			"parameters" : {
				"vertexColors" : false,
				"transparent" : false,
				"map" : {
					"encoding" : "data:image/jpeg",
					"wrap" : ["repeat","repeat"],
					"inTextureBundle": { 
						"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/textures/3"
					}
				},
				"reflectivity" : 0,
				"transparency" : 1,
				"ambient" : "0x000000",
				"diffuse" : "0xffffff",
				"specular" : "0x000000",
				"shininess" : 1,
				"renderMode": "solid", // options: solid, untextured, wireframe
				"type" : "lambert" // options: 
			}
		},
		{ // 3WS-Style Material definition
			"type": "MaterialDefinition",
			"id": "Tree_123_Mat", // a generated ID, unique within the node.
			"name": "OakTree_12", // Original material name
			"parameters" : {
				"vertexColors" : false,
				"transparent" : false,
				"map" : {
					"encoding" : "data:image/jpeg",
					"wrap" : ["repeat","repeat"],
					"inTextureBundle": { 
						"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/textures/4"
					}
				},
				"reflectivity" : 0,
				"transparency" : 1,
				"ambient" : "0x000000",
				"diffuse" : "0xffffff",
				"specular" : "0x000000",
				"shininess" : 1,
				"renderMode": "solid", // options: solid, untextured, wireframe
				"type" : "lambert" // options: 
			}
		},
		{ // a shared geometry to be used to instantiate many features; here, all vertex data is in-line.
			"type": "Symbol",
			"id": "Tree_123_Symbol",	// a generated ID, unique within the node.
			"geometry": {
				"type": "triangles",
				"components": [
					{
						"id": 0, // geometry component ID; only locally valid.
						"material": {
							"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/shared#Tree_123_Mat", // fully qualified URL to access the material.
						}
					}
				],
				"attributes": {
					"faces" : [34,1,0,3,0,0,0,0,34,1,3,2,0,0,0,0,34,4,5,0,0,1,1,1,34,4,0,1,0,1,1,1,34,5,4,6,0,2,2,2,34,5,6,7,0,2,2,2,34,8,4,1,0,3,3,3,34,8,1,2,0,3,3,3,34,4,8,9,0,4,4,4,34,4,9,6,0,4,4,4,34,10,8,2,0,5,5,5,34,10,2,3,0,5,5,5,34,8,10,11,0,6,6,6,34,8,11,9,0,6,6,6,34,5,10,3,0,7,7,7,34,5,3,0,0,7,7,7,34,10,5,7,0,8,8,8,34,10,7,11,0,8,8,8,34,7,6,9,0,9,9,9,34,7,9,11,0,9,9,9],
					"uv0" : [[]],
					"normal" : [0.048,-0.999,-0.004,-0.998,-0.047,-0.031,-0.22,0.975,-0.001,-0.031,-0.006,0.999,-0.048,0.999,0.022,0.998,0.047,0.03,-0.03,1,0.005,0.031,0.006,-1,-0.047,0.999,-0.013,-0.048,0.999,0.004],
					"position" : [737.569,2.26,-924.68,736.654,1.9,-894.219,756.466,3.032,-893.59,757.381,3.008,-924.07,735.695,22.068,-894.136,736.619,22.237,-924.598,735.768,22.084,-894.707,736.657,22.247,-924.023,755.516,23.009,-893.508,754.961,22.995,-894.099,756.422,23.177,-923.987,755.832,23.157,-923.432]
				}
			}
		}
	]
}