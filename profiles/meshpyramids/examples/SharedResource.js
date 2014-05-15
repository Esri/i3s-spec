/**
	Example i3s 1.3 Shared Data Resource with Material Definitions and Texture Definitions.
*/
{
	"materialDefinitions": { // a Map of all Material Definitions needed by features of this node.
		"Mat01": { // a full material definition for a standard material
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
			}
		},
		"Mat02": { // a full material definition for a water material
			"name": "Water_Material", // original name of the Material in the authoring application/source data
			"type": "water", // material/shader type, options: {*standard*, water, billboard, leafcard}
			"params" : {
				"reflectivity" : 0, // [*0*..1] reflectivity for the shader, 0 is min, 1 is max (full environment reflectivity)
				"transparency" : 0, // [*0*..1]transparency for the shader, 0 is opaque, 1 is fully transparent
				"waveSpeed" : 6.2, // [*0*..255]
				"waveAmplitude" : 1.2, // [*0*..255]
				"ambient" : [0, 0, 0], // [*0*..1], [*0*..1], [*0*..1]
				"diffuse" : [1, 1, 1], // [0..*1*], [0..*1*], [0..*1*]
				"specular" : [0.1, 0.1, 0.1], // [0..*1*], [0..*1*], [0..*1*]
				"shininess" : 1 // [0..*1*], amount of specular highlights, 0 is none, 1 is max (for shader)
			}
		},
		"Mat09": { // A material definition that is contained in an ancestor node's shared resource
			"href":"../0/shared" // the href that resolves to the shared resource bundle in which the material defintion is contained.
		}
	},
	"textureDefinitions": { // a Map of texture map definitions
		"38572918": {
			"encoding" : "data:image/png", // the encoding/content type that is used by all images in this map. If alpha maps are declared in the channels attribute, encoding has to be image/png.
			"wrap" : ["repeat","repeat"], // texture wrapping/tiling mode; options: {*none*, repeat, mirror}
			"atlas": true, // indicates whether this map (set of images) are texture atlases or not. options: {*false*, true}
			"uvSet": "uv0", // indicates the set of UV coordinates to use for this map.
			"channels": "rgba", // indicates which channels are stored in which channel of this map. Possible values: h=brightness, r=red, g=green, b=blue, a=alpha, n=bump, d=displacement, ...
			"regions": [
				{
					"id": 1,
					"subimageRegion":[0, 0, 0.5, 0.5] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
				},
				{
					"id": 2,
					"subimageRegion":[0.5, 0, 1.0, 0.5] // required if "atlas": true. Indicates the region of the image that is to be tiled/wrapped.
				}
			],
			"images": [ // an array of images that represent the same content in different resolutions.
				{
					"id" : "8448757298993561619", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
					"size": 2048, // x size of this image.
					"pixelInWorldUnits": 0.211, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
					"href": "../textures/0_0", // href to the texture set in which this texture image resides. The resource ID (here 0_0) follows this pattern: <featureDatatexture setID>_<textureLoDID>.
					"byteOffset": 0, // byte offset of this image in the texture set in which this texture image resides.
					"length": 245631 // length in bytes of this image.
				},
				{
					"id" : "8448757298993561620", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
					"size": 1024, // x size of this image.
					"pixelInWorldUnits": 0.422, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
					"href": "../textures/0_1", // href to the texture set in which this texture image resides. The resource ID (here 0_1) follows this pattern: <featureDatatexture setID>_<textureLoDID>.
					"byteOffset": 0, // byte offset of this image in the texture set in which this texture image resides.
					"length": 120123 // length in bytes of this image.
				},
				{
					"id" : "8448757298993561621", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
					"size": 512, // x size of this image.
					"pixelInWorldUnits": 0.844, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
					"href": "../textures/0_2", // href to the texture set in which this texture image resides. The resource ID (here 0_2) follows this pattern: <featureDatatexture setID>_<textureLoDID>.
					"byteOffset": 0, // byte offset of this image in the texture set in which this texture image resides.
					"length": 65932 // length in bytes of this image.
				}
			]
		}
	}
}