{
	"globalMap": "..textures/global.jpg", // href to a low-resolution texture atlas that contains downsampled textures for all features in the node. To be used if the node is relatively small on the screen to preserve client resources.
	"MaterialDefinitions": { // a Map of all Material Definitions needed by features of this node.
		"Mat01": { // a full material definition
			"name": "Building12541_Material", // original name of the Material in the authoring application/source data
			"parameters" : {
				"vertexColors" : false, // Indicates whether this Material uses Vertex Colors.
				"reflectivity" : 0, // reflectivity for the shader, 0 is min, 1 is max (full environment reflectivity)
				"transparency" : 1, // transparency for the shader, 0 is opaque, 1 is fully transparent
				"ambient" : "0x000000", // ambient color
				"diffuse" : "0xffffff", // diffuse color
				"specular" : "0x000000", // specular color
				"shininess" : 1, // amount of specular highlights, 0 is none, 1 is max (for shader)
				"renderMode": "solid", // options: solid, untextured, wireframe
				"type" : "lambert", // options: ?
				"maps" : [ // the list of maps for this material
					{
						"encoding" : "data:image/jpeg", // the encoding/content type that is used by all images in this map. 
						"wrap" : ["repeat","repeat"], // texture wrapping/tiling mode; options: {}
						"atlas": true, // indicates whether this map (set of images) are texture atlases or not.
						"uvSet": "uv0", // indicates the set of UV coordinates to use for this map.
						"channels": "rgba", // indicates which channels are stored in which channel of this map. Possible values: r=red, g=green, b=blue, a=alpha, r=bump, d=displacement, ...
						"images": [ // an array of images that represent the same content in different resolutions.
							{
								"id" : 8448757298993561619, // a UINT64 unique ID for each image. Generated using the BuildID function that is documented in the spec.
								"size": 2048, // x size of this image.
								"pixelInWorldUnits": 0.211, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
								"href": "../textures/0_0", // href to the block in which this texture image resides. The resource ID (here 0_0) follows this pattern: <featureDataBlockID>_<textureLoDID>.
								"byteOffset": 0, // byte offset of this image in the block in which this texture image resides.
								"length": 245631, // length in bytes of this image.
								"subimageRegion":[0, 0, 256, 256] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
							},
							{
								"id" : 8448757298993561620, // a UINT64 unique ID for each image. Generated using the BuildID function that is documented in the spec.
								"size": 1024, // x size of this image.
								"pixelInWorldUnits": 0.422, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
								"href": "../textures/0_1", // href to the block in which this texture image resides. The resource ID (here 0_1) follows this pattern: <featureDataBlockID>_<textureLoDID>.
								"byteOffset": 0, // byte offset of this image in the block in which this texture image resides.
								"length": 120123, // length in bytes of this image.
								"subimageRegion":[0, 0, 128, 128] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
							},
							{
								"id" : 8448757298993561621, // a UINT64 unique ID for each image. Generated using the BuildID function that is documented in the spec.
								"size": 512, // x size of this image.
								"pixelInWorldUnits": 0.844, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
								"href": "../textures/0_2", // href to the block in which this texture image resides. The resource ID (here 0_2) follows this pattern: <featureDataBlockID>_<textureLoDID>.
								"byteOffset": 0, // byte offset of this image in the block in which this texture image resides.
								"length": 65932, // length in bytes of this image.
								"subimageRegion":[0, 0, 64, 64] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
							},
							{
								"id" : 8448757298993561622, // a UINT64 unique ID for each image. Generated using the BuildID function that is documented in the spec.
								"size": 256, // x size of this image.
								"pixelInWorldUnits": 1.688, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
								"href": "../textures/0_3", // href to the block in which this texture image resides. The resource ID (here 0_3) follows this pattern: <featureDataBlockID>_<textureLoDID>.
								"byteOffset": 0, // byte offset of this image in the block in which this texture image resides.
								"length": 34561, // length in bytes of this image.
								"subimageRegion":[0, 0, 32, 32] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
							},
							{
								"id" : 8448757298993561623, // a UINT64 unique ID for each image. Generated using the BuildID function that is documented in the spec.
								"size": 128, // x size of this image.
								"pixelInWorldUnits": 3.376, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
								"href": "../textures/0_4", // href to the block in which this texture image resides. The resource ID (here 0_4) follows this pattern: <featureDataBlockID>_<textureLoDID>.
								"byteOffset": 0, // byte offset of this image in the block in which this texture image resides.
								"length": 12011, // length in bytes of this image.
								"subimageRegion":[0, 0, 16, 16] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
							}
						]
					}
				]
			}
		},
		"Mat02": { // A material Definition that is contained in a parent shared node
			"href":"../0/shared" // the href that resolves to the shared resource bundle in which the material defintion is contained.
		},
		"Tree_123_Mat": { // 3WS-Style Material definition
			"name": "OakTree_12", // Original material name
			"parameters" : {
				"vertexColors" : false,
				"reflectivity" : 0,
				"transparency" : 1,
				"ambient" : "0x000000",
				"diffuse" : "0xffffff",
				"specular" : "0x000000",
				"shininess" : 1,
				"renderMode": "solid", // options: solid, untextured, wireframe
				"type" : "lambert", // options: 
				"maps" : [
					{
						"encoding" : "data:image/jpeg",
						"wrap" : ["none","none"],
						"channels": "rgba",
						"images": [
							{
								"size": 256, // x size of this image.
								"pixelInWorldUnits": 1.688, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
								"href": "../textures/0", // href to the block in which this texture image resides.
								"byteOffset": 34253, // byte offset of this image in the block in which this texture image resides.
								"length": 245631 // length in bytes of this image.
							}
						]
					}
				]
			}
		}
	},
	"ShaderDefinitions": {
	},
	"Symbols": { // a map of all the Symbols (geometries to be instanced) in this Shared Bundle.
		"Tree_123_Symbol": { // a shared geometry to be used to instantiate many features; here, all vertex data is in-line.
			"name": "Tree_123_Symbol",
			"geometries": [
				{
					"type": "Embedded", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
					"transformation" : [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
					"params": {
						"type": "triangles",
						"components": [
							{
								"material": {
									"id": "Tree_123_Mat" // ID of the material in the (this) shared resource bundle
								}
							}
						],
						"vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
							"position" : [737.569,2.26,-924.68,736.654,1.9,-894.219,756.466,3.032,-893.59,757.381,3.008,-924.07,735.695,22.068,-894.136,736.619,22.237,-924.598,735.768,22.084,-894.707,736.657,22.247,-924.023,755.516,23.009,-893.508,754.961,22.995,-894.099,756.422,23.177,-923.987,755.832,23.157,-923.432],
							"normal" : [0.048,-0.999,-0.004,-0.998,-0.047,-0.031,-0.22,0.975,-0.001,-0.031,-0.006,0.999,-0.048,0.999,0.022,0.998,0.047,0.03,-0.03,1,0.005,0.031,0.006,-1,-0.047,0.999,-0.013,-0.048,0.999,0.004]
						},
						"faces": { // indices for positions, normals, texture coordinates to build faces. This is an open list.
							"position" : [34,1,0,3,0,0,0,0,34,1,3,2,0,0,0,0,34,4,5,0,0,1,1,1,34,4,0,1,0,1,1,1,34,5,4,6,0,2,2,2,34,5,6,7,0,2,2,2,34,8,4,1,0,3,3,3,34,8,1,2,0,3,3,3,34,4,8,9,0,4,4,4,34,4,9,6,0,4,4,4,34,10,8,2,0,5,5,5,34,10,2,3,0,5,5,5,34,8,10,11,0,6,6,6,34,8,11,9,0,6,6,6,34,5,10,3,0,7,7,7,34,5,3,0,0,7,7,7,34,10,5,7,0,8,8,8,34,10,7,11,0,8,8,8,34,7,6,9,0,9,9,9,34,7,9,11,0,9,9,9]
						}
					}
				}
			]
		}
	}
}