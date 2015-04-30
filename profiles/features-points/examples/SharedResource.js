/**
	Example i3s 1.3 Shared Data Resource with Material Definitions, Texture Definitions and an embedded symbol geometry.
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
				"receiveShadows": true, // I3S 1.2
				"doubleSided": true
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
	},
	"symbols": { // a map of all the Symbols (geometries to be instanced) in this Shared Bundle.
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