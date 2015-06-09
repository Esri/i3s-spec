/**
	Example i3s 1.4 3d Node Index Document Resource for the Meshpyramids profile.
*/
{
	"id": "5-1", // Tree Key ID. This node is thus two levels below the root node. On the first level, it's the fifth node, on the second level, it's the first. The 0 is always the root node.
	"level": 3, // explicit level of this node within the index tree.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the version (store update session ID) of this node.
	"created": "2012-09-14T23:12:00.000Z", // creation date of this node; should always be in UTC.
	"expires": "2014-09-14T23:12:00.000Z", // expiration date of this node; should always be in UTC.
	"mbs": [122.2, 39.9, 429.8, 2334.5], // x,y,z,r of the mbs of this node. x,y are expressed as geographical coordinates in the indexCRS, z and r are in meters, with Z being relative to the wgs84 geoid.
	"lodSelection": [ // a list with lod selection metrics that are generated for LOD-enabled caches and that enable the client to pick the right LoD for rendering.
		{
			"metricType": "screenSpaceRelative", // name of the error metric, one of {removedFeatureDiameter, removedFaceDiameter, vertexMergeDistance, ...} 
			"maxError": 0.0034 // error relative to the diameter of the screen area rendered; This example would translate to ~7px on a FullHD screen.
		}
	],
	"transform": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // an optional, world-space transform applied to all elements in the node. Can be used to quantize vertex attributes.
	"sharedResource": { // an expandable, node-relative reference to the shared resource bundle belonging to this node.
		"href": "./shared"
	},
	"featureData": [ // an array of feature data bundles belonging to this node.
		{ 
			"href": "./features/0", // an expandable, node-relative references to the feature data bundle.
			"featureRange": [0, 189], // inclusive indices of the features list in this node that indicate which features of the node are located in this bundle
			"layerContent": ["Public Buildings"] // Indicates features of which layers have been encoded in this bundle. Allows the client to determine which bundles to load if only a subset of layers in store is to be laoded.
		}
	],
	"geometryData": [ // an array of expandable, node-relative references to the geometry bundles belonging to this node.
		{ 
				"href": "./geometries/0"
		}
	],
	"textureData": [  // an array of expandable, node-relative references to the texture atlas bundles belonging to this node. If texture LOD is activated, there will be multiple blocks following the pattern /textures/<blockID>_<LoDID> here.
		{ 
			"href": "./textures/0_0",
			"multiTextureBundle": false // true if the bundle contains multiple textures. Options: {*false*, true}
		}
	],
	"parentNode": {  // an expandable node-relative reference with some additional information to parent node of this node.
		"id": "5", // the ID of the parent node.
		"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
		"href": "../5", // the node-relative URL to the parent node.
		"mbs": [122.2, 39.9, 421.0, 5462.1], // the MBS of the parent node.
		"featureCount": 4 // the aggregated number of features whose extent overlaps with this node in the parent node or a further ancestor.
	},
	"children": [ // the list of child nodes of this node.
		{ 
			"id": "5-1-1", 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../5-1-1", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
			"featureCount": 3817 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}, 
		{ 
			"id": "5-1-2", 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../5-1-2", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
			"featureCount": 1210 // the aggregated number of features in this child node and any further descendants. Used to enable clients to quickly discovere where data is and to visualize the clusters.
		}
	],
	"neighbors": [ // neighbors are nodes on the same index level whose extent is close by to the extent of this NID. They are added during encoding when the index structure has been built.
		{ 
			"id": "5-2", 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../52", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		}, 
		{ 
			"id": "3-4", 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../3-4", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		},
		{ 
			"id": "5-3", 
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../5-3", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		}
	]
}