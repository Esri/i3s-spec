/**
	Example I3S 1.5 Shared Data Resource with Material Definitions and Texture Definitions.
*/
{
	"materialDefinitions": { // a Map of all Material Definitions needed by features of this node.
		"Mat01": { // a material definition for a standard material
			"name": "Standard_Material", // original name of the Material in the authoring application/source data
			"type": "standard", // material/shader type, options: {*standard*, water, billboard, leafcard}
			"params" : {
				"vertexColors" : false, // {*false*, true} Indicates whether this Material uses Vertex Colors.
				"reflectivity" : 0, // [*0*..1] reflectivity for the shader, 0 is min, 1 is max (full environment reflectivity)
				"transparency" : 0, // [*0*..1]transparency for the shader, 0 is opaque, 1 is fully transparent
				"ambient" : [0, 0, 0], // [*0*..1], [*0*..1], [*0*..1]
				"diffuse" : [1, 1, 1], // [0..*1*], [0..*1*], [0..*1*]
				"specular" : [0.1, 0.1, 0.1], // [0..*1*], [0..*1*], [0..*1*]
				"shininess" : 1, // [0..*1*], amount of specular highlights, 0 is none, 1 is max (for shader)
				"renderMode": "solid", // options: {*solid*, untextured, wireframe}
				"castShadows": true, // I3S 1.2
				"receiveShadows": true // I3S 1.2
				"renderMode": "solid",
				"cullFace": "none" // indicates if the face culling property of the geometry asssoicated with this material {*"none"*, "back", "front"}  this material
			}
		}
	},
	"textureDefinitions": { // a Map of texture map definitions
		"38572918": {
			"encoding" : ["image/jpeg", "image/vnd-ms.dds"], // a list with the encoding types that available for the images in this map.
			"wrap" : ["repeat","repeat"], // texture wrapping/tiling mode; options: {*none*, repeat, mirror}
			"atlas": true, // indicates whether this map (set of images) are texture atlases or not. options: {*false*, true}
			"uvSet": "uv0", // indicates the set of UV coordinates to use for this map.
			"channels": ["rgba"], // indicates which channels are stored in which channel of this map. Possible values: h=brightness, r=red, g=green, b=blue, a=alpha, n=bump, d=displacement, ...
			"images": [ // an array of images that represent the same content in different resolutions.
				{
					"id" : "8448757298993561619", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
					"size": 2048, // x size of this image.
					"pixelInWorldUnits": 0.211, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
					"href": ["../textures/0_0"], // href to the texture set in which this texture image resides. The resource ID (here 0_0) follows this pattern: <featureDatatexture setID>_<textureLoDID>.
					"byteOffset": [0], // byte offset of this image in the texture set in which this texture image resides.
					"length": [245631] // length in bytes of this image.
				}
			]
		}
	}
}
