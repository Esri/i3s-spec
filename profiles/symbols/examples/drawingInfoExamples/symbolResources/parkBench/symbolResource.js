{
  "model": {
    "name": "Park Bench",
    "thumbnail": "./thumb.png",
    "pivotOffset": [0.0, 0.0, -2.5], // an optional, "semantic" pivot offset that can be used to e.g. correctly align symbol to terrain. 
    "mbb": [-10.0, -20.0, 0.0, 10.0, 20.0, 5.0], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in metric Cartesian coordinates, without offset.
    "geometryData": null,
    "geometries": [{
      "type": "Embedded", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
      "transformation": [1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, -0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0],
      "params": {
        "topology": "Indexed", // one of ["PerAttributeArray", "Indexed"]. When "Indexed", the indices must also be provided (in "faces"). Otherwise, indices should be left away.
        "material": "/materialDefinitions/Mat01", // JSON Pointer style reference to the material definition in this node's shared resource, from its root element. If present, used for the entire geometry.
        "texture": "/textureDefinitions/Tex01", // JSON Pointer style reference to the texture definition in this node's shared resource, from its root element. If present, used for the entire geometry.
        "vertexAttributes": { // this is the embedded geometry vertex data.
          "position": [737.569, 2.26, -924.68, 736.654, 1.9, -894.219, 756.466, 3.032, -893.59, 757.381, 3.008, -924.07, 735.695, 22.068, -894.136, 736.619, 22.237, -924.598, 735.768, 22.084, -894.707, 736.657, 22.247, -924.023, 755.516, 23.009, -893.508, 754.961, 22.995, -894.099, 756.422, 23.177, -923.987, 755.832, 23.157, -923.432],
          "normal": [0.048, -0.999, -0.004, -0.998, -0.047, -0.031, -0.22, 0.975, -0.001, -0.031, -0.006, 0.999, -0.048, 0.999, 0.022, 0.998, 0.047, 0.03, -0.03, 1, 0.005, 0.031, 0.006, -1, -0.047, 0.999, -0.013, -0.048, 0.999, 0.004],
          "uv0": [0, 1, 0.1, 0.9, 0.2, 0.8, 0.3, 0.7, 0.4, 0.6, 0.5, 0.5, 0.6, 0.4, 0.7, 0.3, 0.8, 0.1, 0.9, 0.1]
        },
        "faces": { // indices for positions, normals, texture coordinates to build faces.
          "position": [34, 1, 0, 3, 0, 0, 0, 0, 34, 1, 3, 2, 0, 0, 0, 0, 34, 4, 5, 0, 0, 1, 1, 1, 34, 4, 0, 1, 0, 1, 1, 1, 34, 5, 4, 6, 0, 2, 2, 2, 34, 5, 6, 7, 0, 2, 2, 2, 34, 8, 4, 1, 0, 3, 3, 3, 34, 8, 1, 2, 0, 3, 3, 3, 34, 4, 8, 9, 0, 4, 4, 4, 34, 4, 9, 6, 0, 4, 4, 4, 34, 10, 8, 2, 0, 5, 5, 5, 34, 10, 2, 3, 0, 5, 5, 5, 34, 8, 10, 11, 0, 6, 6, 6, 34, 8, 11, 9, 0, 6, 6, 6, 34, 5, 10, 3, 0, 7, 7, 7, 34, 5, 3, 0, 0, 7, 7, 7, 34, 10, 5, 7, 0, 8, 8, 8, 34, 10, 7, 11, 0, 8, 8, 8, 34, 7, 6, 9, 0, 9, 9, 9, 34, 7, 9, 11, 0, 9, 9, 9],
          "normal": [34, 1, 0, 3, 0, 0, 0, 0, 34, 1, 3, 2, 0, 0, 0, 0, 34, 4, 5, 0, 0, 1, 1, 1, 34, 4, 0, 1, 0, 1, 1, 1, 34, 5, 4, 6, 0, 2, 2, 2, 34, 5, 6, 7, 0, 2, 2, 2, 34, 8, 4, 1, 0, 3, 3, 3, 34, 8, 1, 2, 0, 3, 3, 3, 34, 4, 8, 9, 0, 4, 4, 4, 34, 4, 9, 6, 0, 4, 4, 4, 34, 10, 8, 2, 0, 5, 5, 5, 34, 10, 2, 3, 0, 5, 5, 5, 34, 8, 10, 11, 0, 6, 6, 6, 34, 8, 11, 9, 0, 6, 6, 6, 34, 5, 10, 3, 0, 7, 7, 7, 34, 5, 3, 0, 0, 7, 7, 7, 34, 10, 5, 7, 0, 8, 8, 8, 34, 10, 7, 11, 0, 8, 8, 8, 34, 7, 6, 9, 0, 9, 9, 9, 34, 7, 9, 11, 0, 9, 9, 9],
          "uv0": [34, 1, 0, 3, 0, 0, 0, 0, 34, 1, 3, 2, 0, 0, 0, 0, 34, 4, 5, 0, 0, 1, 1, 1, 34, 4, 0, 1, 0, 1, 1, 1, 34, 5, 4, 6, 0, 2, 2, 2, 34, 5, 6, 7, 0, 2, 2, 2, 34, 8, 4, 1, 0, 3, 3, 3, 34, 8, 1, 2, 0, 3, 3, 3, 34, 4, 8, 9, 0, 4, 4, 4, 34, 4, 9, 6, 0, 4, 4, 4, 34, 10, 8, 2, 0, 5, 5, 5, 34, 10, 2, 3, 0, 5, 5, 5, 34, 8, 10, 11, 0, 6, 6, 6, 34, 8, 11, 9, 0, 6, 6, 6, 34, 5, 10, 3, 0, 7, 7, 7, 34, 5, 3, 0, 0, 7, 7, 7, 34, 10, 5, 7, 0, 8, 8, 8, 34, 10, 7, 11, 0, 8, 8, 8, 34, 7, 6, 9, 0, 9, 9, 9, 34, 7, 9, 11, 0, 9, 9, 9],
        }
      }
    }]
  },
  "materialDefinitions": { // a Map of all Material Definitions needed by features of this node. (same as sharedResource.json)
    "Mat01": { // a full material definition for a standard material
      "name": "Standard_Material", // original name of the Material in the authoring application/source data
      "type": "standard", // material/shader type, options: {*standard*, water, billboard, leafcard}
      "params": {
        "vertexColors": false, // {*false*, true} Indicates whether this Material uses Vertex Colors.
        "reflectivity": 0, // [*0*..1] reflectivity for the shader, 0 is min, 1 is max (full environment reflectivity)
        "transparency": 0, // [*0*..1]transparency for the shader, 0 is opaque, 1 is fully transparent
        "ambient": [0, 0, 0], // [*0*..1], [*0*..1], [*0*..1]
        "diffuse": [1, 1, 1], // [0..*1*], [0..*1*], [0..*1*]
        "specular": [0.1, 0.1, 0.1], // [0..*1*], [0..*1*], [0..*1*]
        "shininess": 1, // [0..*1*], amount of specular highlights, 0 is none, 1 is max (for shader)
        "renderMode": "solid", // options: {*solid*, untextured, wireframe}
        "castShadows": true, // I3S 1.2
        "receiveShadows": true // I3S 1.2
      }
    }
  },
  "textureDefinitions": { // a Map of texture map definitions (same as sharedResource.json)
    "Tex01": {
      "encoding": "data:image/png", // the encoding/content type that is used by all images in this map. If alpha maps are declared in the channels attribute, encoding has to be image/png.
      "wrap": ["none", "none"], // texture wrapping/tiling mode; options: {*none*, repeat, mirror}
      "atlas": false, // indicates whether this map (set of images) are texture atlases or not. options: {*false*, true}
      "uvSet": "uv0", // indicates the set of UV coordinates to use for this map.
      "channels": "rgba", // indicates which channels are stored in which channel of this map. Possible values: r=red, g=green, b=blue, a=alpha, r=bump, d=displacement, ...
      "images": [ // an array of images that represent the same content in different resolutions.
                  // if all symbol data resides in a single file, there should not be more than one image per texture.
        {
          "id": "8448757298993561619", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
          "size": 1024, // x size of this image.
          "pixelInWorldUnits": 0.211, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
          "data": "cXdlZnF3ZWZxd2VmcXdlZ..." // base 64 encoded image data (in the format denoted by "encoding" above)
        }
      ]
    }
  }
}
