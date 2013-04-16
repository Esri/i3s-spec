{
	"id": 511, // Tree Key ID. This node is thus two level below the root node. On the first level, it's the sixth node, on the second level, it's the first. The 0 is always the root node.
	"level": 2, // explicit level of this node within the index tree.
	"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/50", // the URL from which this NID comes.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the version (cache update session ID) of this node.
	"srs": "epsg:4326", // the srs used for all data in this node.
	"mbs": [122.2, 831.9, 34.5, 29.8], // the mbs of this node.
	"created": "2012-09-14T23:12:00.000Z", // creation date of this node; should always be in UTC.
	"expires": "2014-09-14T23:12:00.000Z", // expiration date of this node; should always be in UTC.
	"transform": { // a world-space transform applied to all elements in the node.
		"nodePosition" : [0.0,0.0,0.0],
		"nodeRotation" : [0.0,0.0,0.0],
		"nodeScale" : [1.0,1.0,1.0]
	},
	"sharedResources": { // an expandable reference to the shared resource bundle belonging to this node.
		"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/50/sharedResources"
	},
	"featureData": { // an expandable reference to the feature data bundle belonging to this node.
		"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/50/features"
	},
	"geometryData": { // an expandable reference to the geometries bundle belonging to this node.
		"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/50/geometries"
	},
	"textureData": {  // an expandable reference to the texture atlas bundle belonging to this node.
		"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/textures"
	},
	"parentNode": {  // an expandable reference with some additional information to parent node of this node.
		"id": 5, // the ID of the parent node.
		"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
		"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/5",
		"mbs": [122.2, 831.9, 34.5, 29.8], // the MBS of the parent node.
		"featureCount": 4, // the aggregated number of features whose extent overlaps with this node in the parent node or a further ancestor.
	},
	"children": [ // the list of child nodes of this node.
		{ 
			"id": 501, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/501",
			"mbs": [122.2, 831.9, 34.5, 29.8],
			"featureCount": 3817 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}, 
		{ 
			"id": 502, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/502",
			"mbs": [120.3, 833.8, 32.5, 25.8],
			"featureCount": 1210 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}
	],
	"neighbors": [ // neighbors are nodes on the same index level whose extent is close by to the extent of this NID. They are added during encoding when the index structure has been built.
		{ 
			"id": 51, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51",
			"mbs": [122.2, 831.9, 34.5, 29.8]
		}, 
		{ 
			"id": 52, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/52",
			"mbs": [122.2, 831.9, 34.5, 29.8]
		},
		{ 
			"id": 53, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/53",
			"mbs": [122.2, 831.9, 34.5, 29.8]
		}
	],
	"features":[ // the list of features in this node.
		{
			"id": 309432971018, // long id, unique across the cache.
			"mbs": [1222178.283, 83371.902, 34.155, 29.821]
		},
		{
			"id": 309432971019,
			"mbs": [1222164.382, 83230.442, 33.005, 40.011],
			"lodChildren": [309432971021,309432971022],
			"rank": 1 // LOD rank; only needed for features that participate in a LOD tree.
		},
		{
			"id": 309432971020,
			"mbs": [1223220.937, 83290.101, 30.625, 12.899],
			"rootFeature": 309432971019, // ID of the root Feature of this LOD child; only needed for non-root features that participate in a LOD tree. Used to tell the client which features represent a single feature.
			"rank": 2
		},
		{
			"id": 309432971021,
			"mbs": [1222817.322, 83901.018, 37.833, 10.901],
			"rootFeature": 309432971019, // ID of the root Feature of this LOD child; only needed for non-root features that participate in a LOD tree. Used to tell the client which features represent a single feature.
			"rank": 2
		}
	]
}