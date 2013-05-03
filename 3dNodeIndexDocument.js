{
	"id": 51, // Tree Key ID. This node is thus two level below the root node. On the first level, it's the sixth node, on the second level, it's the first. The 0 is always the root node.
	"level": 2, // explicit level of this node within the index tree.
	"href": "./nodes/51", // the relative URL to the Cache resource from which this NID comes.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the version (cache update session ID) of this node.
	"srs": "epsg:3857", // the srs used for all data in this node.
	"mbs": [122.2, 831.9, 34.5, 29.8], // the mbs of this node.
	"precision": 0.0000121, // the "epsilon" value for this node; i.e. the maximum error introduced through generalization of features, relative to the diameter of the MBS of this node. For all nodes/caches without LOD features, this value can be 0.0.
	"created": "2012-09-14T23:12:00.000Z", // creation date of this node; should always be in UTC.
	"expires": "2014-09-14T23:12:00.000Z", // expiration date of this node; should always be in UTC.
	"transform": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // an optional, world-space transform applied to all elements in the node. Can be used to quantize vertex attributes.
	"sharedResource": { // an expandable, node-relative reference to the shared resource bundle belonging to this node.
		"href": "./shared"
	},
	"featureData": [ // an array of expandable, node-relative references to the feature data bundles belonging to this node.
		{ 
				"href": "./features/0",
				"layerContent": ["Public Buildings", "Transport Buildings"]
		},
		{ 
				"href": "./features/1",
				"layerContent": ["Transport Buildings"]
		},
	],
	"geometryData": [ // an array of expandable, node-relative references to the geometry bundles belonging to this node.
		{ 
				"href": "./geometries/0"
		},
		{ 
				"href": "./geometries/1"
		},
	],
	"textureData": [  // an array of expandable, node-relative references to the texture atlas bundles belonging to this node. If texture LOD is activated, there will be multiple blocks following the pattern /textures/<blockID>_<LoDID> here.
		{ 
				"href": "./textures/0"
		},
		{ 
				"href": "./textures/1"
		},
	],
	"parentNode": {  // an expandable node-relative reference with some additional information to parent node of this node.
		"id": 5, // the ID of the parent node.
		"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
		"href": "../5", // the node-relative URL to the parent node.
		"mbs": [122.2, 831.9, 34.5, 29.8], // the MBS of the parent node.
		"featureCount": 4, // the aggregated number of features whose extent overlaps with this node in the parent node or a further ancestor.
	},
	"children": [ // the list of child nodes of this node.
		{ 
			"id": 511, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../511", // the node-relative URL to the child node.
			"mbs": [122.2, 831.9, 34.5, 29.8],
			"featureCount": 3817 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}, 
		{ 
			"id": 512, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../512", // the node-relative URL to the child node.
			"mbs": [120.3, 833.8, 32.5, 25.8],
			"featureCount": 1210 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}
	],
	"neighbors": [ // neighbors are nodes on the same index level whose extent is close by to the extent of this NID. They are added during encoding when the index structure has been built.
		{ 
			"id": 52, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../52", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 831.9, 34.5, 29.8] // the mbs of the neigbor node.
		}, 
		{ 
			"id": 34, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../34", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 831.9, 34.5, 29.8] // the mbs of the neigbor node.
		},
		{ 
			"id": 53, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (cache update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../53", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 831.9, 34.5, 29.8] // the mbs of the neigbor node.
		}
	],
	"features":[ // the list of features in this node.
		{
			"id": 309432971018, // long id, unique across the cache.
			"block:" 0, // the number of the feature data block this feature resides in.
			"mbs": [1222178.283, 83371.902, 34.155, 29.821]
		},
		{
			"id": 309432971019,
			"block:" 1,
			"mbs": [1222164.382, 83230.442, 33.005, 40.011],
			"lodChildren": [309432971021,309432971022], // List of LOD children IDs; only needed for features that participate in a LOD tree that have children.
			"rank": 1 // LOD rank; only needed for features that participate in a LOD tree.
		},
		{
			"id": 309432971020,
			"block:" 1, // the number of the feature data block this feature resides in.
			"mbs": [1223220.937, 83290.101, 30.625, 12.899],
			"rootFeature": 309432971019, // ID of the root Feature of this LOD child; only needed for non-root features that participate in a LOD tree. Used to tell the client which features represent a single feature.
			"rank": 2
		},
		{
			"id": 309432971021,
			"block:" 1, // the number of the feature data block this feature resides in.
			"mbs": [1222817.322, 83901.018, 37.833, 10.901],
			"rootFeature": 309432971019, // ID of the root Feature of this LOD child; only needed for non-root features that participate in a LOD tree. Used to tell the client which features represent a single feature.
			"rank": 2
		}
	]
}