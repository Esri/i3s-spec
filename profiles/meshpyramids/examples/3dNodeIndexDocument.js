/**
	Example I3S 1.6 3d Node Index Document Resource for the Meshpyramids profile.
*/
{
	"id": "5-1", // Tree Key ID. This node is thus is 3 levels below the root node (root node is at level 1).
	"level": 3, // explicit level of this node within the index tree.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the version (store update session ID) of this node.
	"mbs": [122.2, 39.9, 429.8, 2334.5], // x,y,z,r of the mbs of this node. x,y are expressed as geographical coordinates in the indexCRS, z and r are in meters, with Z being relative to the wgs84 geoid.
	"lodSelection": [ // a list with lod selection metrics that are generated for LOD-enabled caches and that enable the client to pick the right LoD for rendering.
		{
			"metricType": "maxScreenThreshold", // name of the error metric, one of {maxScreenThreshold}
			"maxError": 2468.686279296875 // error relative to the diameter of the screen area rendered; This example would translate to ~7px on a FullHD screen.
		}
	],
	"sharedResource": { // an expandable, node-relative reference to the shared resource bundle belonging to this node.
		"href": "./shared"
	},
	"featureData": [ // an optional array of feature data bundles belonging to this node.Note mesh-pyramids profile do not depend on this resoruce
		{
			"href": "./features/0", // **optional** an expandable, optional node-relative references to the feature data bundle.
		}
	],
	"geometryData": [ // an array of expandable, node-relative references to the geometry bundles belonging to this node.
		{
				"href": "./geometries/0"
		}
	],
	"textureData": [  // an array of expandable, node-relative references to the texture atlas bundles belonging to this node. Texture type indicated by the ordered array value of store.textureEncoding in the 3dSceneLayer or by the ordered array value of textureDefinitions.encoding of the sharedResrouce of the same node.
		{
			"href": "./textures/0_0"
		},
		{
			"href": "./textures/0_0_1"
		}
	],
	"parentNode": {  // an expandable node-relative reference with some additional information to parent node of this node.
		"id": "5", // the ID of the parent node.
		"href": "../5", // the node-relative URL to the parent node.
		"mbs": [122.2, 39.9, 421.0, 5462.1], // the MBS of the parent node.
	},
	"children": [ // the list of child nodes of this node.
		{
			"id": "5-1-1",
			"href": "../5-1-1", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
		},
		{
			"id": "5-1-2",
			"href": "../5-1-2", // the node-relative URL to the child node.
			"mbs": [122.2, 39.9, 429.8, 2334.5],
		}
	],
	"neighbors": [ // neighbors are nodes on the same index level whose extent is close by to the extent of this NID. They are added during encoding when the index structure has been built.
		{
			"id": "5-2",
			"href": "../52", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		},
		{
			"id": "3-4",
			"href": "../3-4", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		},
		{
			"id": "5-3",
			"href": "../5-3", // the node-relative URL to the neighbor node.
			"mbs": [122.2, 39.9, 429.8, 2334.5] // the mbs of the neigbor node.
		}
	]
}
