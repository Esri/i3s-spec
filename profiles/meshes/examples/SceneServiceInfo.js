{
	"serviceName": "SceneService", // type of the service; always SceneService.
	"serviceVersion": "1.3", // the version of the service protocol/REST endpoint.
	"supportedBindings": ["REST"], // the list of bindings, should we ever need to add new bindings
	"supportedOperationsProfile": ["Base", "Dynamic", "Editing"], // supported profiles of the service
	"layers": [ // list of layers served by this service
		{
			"id": 0, // the ID of this layer, unique within a 3dSceneService.
			"name": "PublicBuildings", // the name of this layer.
			"alias": "Public Buildings", // the display alias to be used for this layer.
			"lodType": "FeatureTree",	//Optional - The type of level of detail information present; selected from {None, FeatureTree, MeshPyramid}. The default is None.
			"href": "./layers/PublicBuildings" // relative URL to the Layer resource giving full information on the Layer's store, schema and drawing info. 
		},
		{
			"id": 1, // the ID of this layer, unique within a 3dSceneService.
			"name": "BuildingShellTransport", // the name of this layer.
			"alias": "Transport buildings", // the display alias used for this layer.
			"lodType": "FeatureTree",	//Optional - The type of level of detail information present; selected from {None, FeatureTree, MeshPyramid}. The default is None.
			"href": "./layers/Transport%20Buildings" // relative URL to the Layer resource giving full information on the Layer's schema and drawing info.
		}
	]
}
