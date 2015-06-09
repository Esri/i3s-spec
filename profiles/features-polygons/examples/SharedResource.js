/**
	Example i3s 1.4 Shared Data Resource with Material Definitions, Texture Definitions and an embedded symbol geometry .
*/
{
	"materialDefinitions": { // a Map of all Material Definitions needed by features of this node.
		"Mat01": { // a full material definition for a standard material
			"name": "Standard_Material", // original name of the Material in the authoring application/source data
			"type": "standard", // material/shader type, options: {*standard*, water, billboard, leafcard, reference}
			"params" : {
				"vertexColors" : false, // {*false*, true} Indicates whether this Material uses Vertex Colors.
				"reflectivity" : 0, // [*0*..1] reflectivity for the shader, 0 is min, 1 is max (full environment reflectivity)
				"transparency" : 0, // [*0*..1]transparency for the shader, 0 is opaque, 1 is fully transparent
				"ambient" : [0, 0, 0], // [*0*..1], [*0*..1], [*0*..1]
				"diffuse" : [1, 1, 1], // [0..*1*], [0..*1*], [0..*1*]
				"specular" : [0.1, 0.1, 0.1], // [0..*1*], [0..*1*], [0..*1*]
				"shininess" : 1, // [0..*1*], amount of specular highlights, 0 is none, 1 is max (for shader)
				"renderMode": "solid", // options: {*solid*, untextured, wireframe}
				"castShadows": true, // options: {*true*, false}
				"receiveShadows": true, // options: {*true*, false}
				"doubleSided": true // options: {*true*, false}
			}
		},
		"Mat02": { // a full material definition for a water material
			"name": "Water_Material", // original name of the Material in the authoring application/source data
			"type": "water", // material/shader type, options: {*standard*, water, billboard, leafcard, reference}
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
			"type": "reference", // material/shader type, options: {*standard*, water, billboard, leafcard, reference}
			"$ref":"../0/shared" // the href that resolves to the shared resource bundle in which the material defintion is contained.
		}
	}
}