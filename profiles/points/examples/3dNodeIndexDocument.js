/**
	Example i3s 1.5 3d Node Index Document Resource for the points profile.
*/
{
	"id": "5-1", // Tree Key ID. This node is thus two level below the root node. On the first level, it's the fifth node, on the second level, it's the first. The 0 is always the root node.
	"level": 2, // explicit level of this node within the index tree.
	"mbs": [122.2, 39.9, 429.8, 2334.5], // x,y,z,r of the mbs of this node. x,y are expressed as geographical coordinates in the indexCRS, z and r are in meters, with Z being relative to the wgs84 geoid.
	"lodSelection": [ // a list with lod selection metrics that are generated for LOD-enabled caches and that enable the client to pick the right LoD for rendering.
			{
				"metricType": "screenSpaceRelative", // name of the error metric, one of {removedFeatureDiameter, removedFaceDiameter, vertexMergeDistance, ...}
				"maxError": 0.0034 // error relative to the diameter of the screen area rendered; This example would translate to ~7px on a FullHD screen.
			}
	],
	"transform": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // an optional, world-space transform applied to all elements in the node. Can be used to quantize vertex attributes.
	"featureData": [ // an array of feature data bundles belonging to this node.
		{
				"href": "./features/0", // an expandable, node-relative references to the feature data bundle.
				"featureRange": [0, 189], // inclusive indices of the features list in this node that indicate which features of the node are located in this bundle
		}
	]
	],
	"parentNode": {  // an expandable node-relative reference with some additional information to parent node of this node.
		"id": "5", // the ID of the parent node.
		"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
		"href": "../5", // the node-relative URL to the parent node.
		"mbs": [122.2, 39.9, 421.0, 5462.1], // the MBS of the parent node.
	},
	"children": [ // the list of child nodes of this node.
		{
			"id": "5-1-1",
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../5-1-1", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
		},
		{
			"id": "5-1-2",
			"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // version (store update session ID) in which the linked node is consistent with this node. If the node is loaded but the version is not identical, the client should perform FindNode.
			"href": "../5-1-2", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
		}
	],
	"attributeData":[ // the list of features in this node. To find which feature livers in bundle i, check /featureData[i]/featureRange.
		{
			"href": "./attributes/f_0/0", // long id, unique across the store.
		},
		{
			"href": "./attributes/f_0/1", // long id, unique across the store.
		}
	]
}
