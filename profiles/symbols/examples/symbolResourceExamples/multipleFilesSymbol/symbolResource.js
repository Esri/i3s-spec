{
  "model": {
    "name": "Park Bench",
    "thumbnail": "./thumb.png",
    "pivotOffset": [0.0, 0.0, -2.5], // an optional, "semantic" pivot offset that can be used to e.g. correctly align symbol to terrain
    "mbb": [-10.0, -20.0, 0.0, 10.0, 20.0, 5.0], // xmin, ymin, zmin, xmax, ymax, zmax of the feature's minimum bounding box, expressed in metric Cartesian coordinates, without offset.
    "geometryData": { // only used if any of the 'geometries' have type 'ArrayBufferView'
      "href": "./geometryData.bin"
    },
    "geometries": [ // Geometry defintion including materials; there can be multiple geometries in one symbol
      {
        "type": "ArrayBufferView", // type denotes whether the following geometry is defined by using array buffer views (ArrayBufferView), as a reference to a shared Resource (SharedResourceReference) or embedded (Embedded).
        "transformation": [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0], // linearized 4x4 transformation matrix. Elements 13-15 of the 16 indicate the translational component.
        "params": {
          "type": "triangles", // types are: triangle_strip, triangles, lines, points (i.e. GL render primitives)
          "material": "/materialDefinitions/Mat01", // JSON Pointer style reference to the material definition in this node's shared resource, from its root element. If present, used for the entire geometry.
          "texture": "/textureDefinitions/Tex01", // JSON Pointer style reference to the texture definition in this node's shared resource, from its root element. If present, used for the entire geometry.
          "vertexAttributes": { // these are the vertex attributes. Each attribute is described by an accessor to the geometry typed array. This is an open list.
            "position": { // the name of the vertex attribute; here: vertex positions
              "byteOffset": 0, // the starting byte position where the required bytes begin.
              "count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
              "valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  Int16, Int32, Int64 or *Float32*, Float64
              "valuesPerElement": 3 // number of (Float32) values need to make a valid element (here a xyz position)
            },
            "normal": { // the name of the vertex attribute; here: vertex normals
              "byteOffset": 1380, // the starting byte position where the required bytes begin.
              "count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
              "valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
              "valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a normal vector)
            },
            "uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
              "byteOffset": 2070, // the starting byte position where the required bytes begin.
              "count": 345, // the number of elements. Multiply by number of bytes used for valueType to know how many bytes need to be read.
              "valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
              "valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a texture coordinate that will be normalized)
            }
          },
          "faces": { // indices for positions, normals, texture coordinates to build faces. This is an open list.
            "position": { // position index array buffer view
              "byteOffset": 2760,
              "count": 345,
              "valueType": "Int16",
              "valuesPerElement": 1
            },
            "normal": { // normals index array buffer view
              "byteOffset": 3450,
              "count": 345,
              "valueType": "Int16",
              "valuesPerElement": 1
            },
            "uv0": { // texture coordinates index array buffer view
              "byteOffset": 4140,
              "count": 345,
              "valueType": "Int16",
              "valuesPerElement": 1
            }
          }
        }
      }
    ]
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
    "38572918": {
      "encoding": ["data:image/png"], // the encoding/content type that is used by all images in this map. If alpha maps are declared in the channels attribute, encoding has to be image/png.
      "wrap": ["none", "none"], // texture wrapping/tiling mode; options: {*none*, repeat, mirror}
      "atlas": true, // indicates whether this map (set of images) are texture atlases or not. options: {*false*, true}
      "uvSet": "uv0", // indicates the set of UV coordinates to use for this map.
      "channels": ["rgba"], // indicates which channels are stored in which channel of this map. Possible values: r=red, g=green, b=blue, a=alpha, r=bump, d=displacement, ...
      "images": [ // an array of images that represent the same content in different resolutions.
        {
          "id": "8448757298993561620", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
          "size": 1024, // x size of this image.
          "pixelInWorldUnits": 0.422, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
          "href": ["./textures0.bin"], // href to the texture set in which this texture image resides. The resource ID (here 0_1) follows this pattern: <featureDatatexture setID>_<textureLoDID>.
          "byteOffset": [0], // byte offset of this image in the texture set in which this texture image resides.
          "length": [120123] // length in bytes of this image.
        }, {
          "id": "8448757298993561621", // a string containing a UINt64 ID for each image. Generated using the BuildID function that is documented in the spec.
          "size": 512, // x size of this image.
          "pixelInWorldUnits": 0.844, // maximum size of a single pixel in world units (used by the renderer to pick the image to load/map)
          "href": ["./textures1.bin"], // href to the texture set in which this texture image resides. The resource ID (here 0_2) follows this pattern: <featureDatatexture setID>_<textureLoDID>.
          "byteOffset": [0], // byte offset of this image in the texture set in which this texture image resides.
          "length": [65932] // length in bytes of this image.
        }
      ]
    }
  }
}
