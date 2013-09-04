{
	"id": 51, // Tree Key ID. This node is thus two level below the root node. On the first level, it's the fifth node, on the second level, it's the first. The 0 is always the root node.
	"level": 2, // explicit level of this node within the index tree.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the version (store update session ID) of this node.
	"mbs": [122.2, 39.9, 429.8, 2334.5], // x,y,z,r of the mbs of this node. x,y are expressed as geographical coordinates in the indexCRS, z and r are in meters, with Z being relative to the wgs84 geoid.
	"precision": 1.021, // the "epsilon" value for this node; i.e. the absolute maximum error introduced through generalization of features. For all nodes/layers without LOD features, this value can be 0.0.
	"created": "2012-09-14T23:12:00.000Z", // creation date of this node; should always be in UTC.
	"expires": "2014-09-14T23:12:00.000Z", // expiration date of this node; should always be in UTC.
	"transform": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // an optional, world-space transform applied to all elements in the node. Can be used to quantize vertex attributes.
	"sharedResource": { // an expandable, node-relative reference to the shared resource bundle belonging to this node.
		"href": "./shared"
	},
	"featureData": [ // an array of feature data bundles belonging to this node.
		{ 
				"href": "./features/0", // an expandable, node-relative references to the feature data bundle.
				"layerContent": ["Public Buildings", "Transport Buildings"] // Indicates features of which layers have been encoded in this bundle. Allows the client to determine which bundles to load if only a subset of layers in store is to be laoded.
		},
		{ 
				"href": "./features/1",
				"layerContent": ["Transport Buildings"]
		}
	],
	"geometryData": [ // an array of expandable, node-relative references to the geometry bundles belonging to this node.
		{ 
				"href": "./geometries/0"
		},
		{ 
				"href": "./geometries/1"
		}
	],
	"textureData": [  // an array of expandable, node-relative references to the texture atlas bundles belonging to this node. If texture LOD is activated, there will be multiple blocks following the pattern /textures/<blockID>_<LoDID> here.
		{ 
				"href": "./textures/0"
		},
		{ 
				"href": "./textures/1"
		}
	],
	"parentNode": {  // an expandable node-relative reference with some additional information to parent node of this node.
		"id": 5, // the ID of the parent node.
		"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
		"href": "../5", // the node-relative URL to the parent node.
		"mbs": [122.2, 39.9, 421.0, 5462.1], // the MBS of the parent node.
		"featureCount": 4 // the aggregated number of features whose extent overlaps with this node in the parent node or a further ancestor.
	},
	"children": [ // the list of child nodes of this node.
		{ 
			"id": 511, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../511", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
			"featureCount": 3817 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}, 
		{ 
			"id": 512, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../512", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
			"featureCount": 1210 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}
	],
	"neighbors": [ // neighbors are nodes on the same index level whose extent is close by to the extent of this NID. They are added during encoding when the index structure has been built.
		{ 
			"id": 52, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../52", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		}, 
		{ 
			"id": 34, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../34", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		},
		{ 
			"id": 53, 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../53", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		}
	],
	"features":[ // the list of features in this node.
		{
			"id": 309432971018, // long id, unique across the store.
			"block": 0, // the number of the feature data block this feature resides in.
			"mbs": [122.41, 39.83452, 445.2, 24.5] // x,y,z,r of the mbs of this feature. x,y are expressed as geographical coordinates, z and r are in meters. Z is relative to the wgs84 geoid.
		},
		{
			"id": 309432971019,
			"block": 1,
			"mbs": [122.41, 39.83452, 445.2, 40.011], // x,y,z,r of the mbs of this feature. x,y are expressed as geographical coordinates, z and r are in meters. Z is relative to the wgs84 geoid.
			"lodChildren": [309432971021,309432971022], // List of LOD children IDs; only needed for features that participate in a LOD tree that have children.
			"rank": 1 // LOD rank; only needed for features that participate in a LOD tree.
		},
		{
			"id": 309432971020,
			"block": 1, // the number of the feature data block this feature resides in.
			"mbs": [122.41, 39.83452, 445.2, 12.899], // x,y,z,r of the mbs of this feature. x,y are expressed as geographical coordinates, z and r are in meters. Z is relative to the wgs84 geoid.
			"rootFeature": 309432971019, // ID of the root Feature of this LOD child; only needed for non-root features that participate in a LOD tree. Used to tell the client which features represent a single feature.
			"rank": 2
		},
		{
			"id": 309432971021,
			"block": 1, // the number of the feature data block this feature resides in.
			"mbs": [122.41, 39.83452, 445.2, 10.901], // x,y,z,r of the mbs of this feature. x,y are expressed as geographical coordinates, z and r are in meters. Z is relative to the wgs84 geoid.
			"rootFeature": 309432971019, // ID of the root Feature of this LOD child; only needed for non-root features that participate in a LOD tree. Used to tell the client which features represent a single feature.
			"rank": 2
		}
	]
}