# SharedResources

Shared resources are models or textures that can be shared among features within the same layer. They are stored as a JSON file. Each node has a shared resource that is used by other features in the node or by features in the subtree of the current node. This approach ensures an optimal distribution of shared resources across nodes, while maintaining the node-based updating process. The SharedResource class collects Material definitions, Texture definitions, Shader definitions and geometry symbols that need to be instanced.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **materialDefinitions** | [materialDefinition](materialDefinition.cmn.md) | Materials describe how a Feature or a set of Features is to be rendered. |
| textureDefinitions | [textureDefinition](textureDefinition.cmn.md) | A Texture is a set of images, with some parameters specific to the texture/uv mapping to geometries. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {
  "materialDefinitions": {
    "Mat525": {
      "type": "standard",
      "name": "standard",
      "params": {
        "vertexRegions": false,
        "vertexColors": true,
        "reflectivity": 0,
        "useVertexColorAlpha": false,
        "ambient": [
          0,
          0,
          0
        ],
        "diffuse": [
          1,
          1,
          1
        ],
        "specular": [
          0.09803921568627451,
          0.09803921568627451,
          0.09803921568627451
        ],
        "shininess": 1,
        "renderMode": "solid",
        "cullFace": "none"
      }
    }
  },
  "textureDefinitions": {
    "525": {
      "encoding": [
        "image/jpeg",
        "image/vnd-ms.dds"
      ],
      "wrap": [
        "none",
        "none"
      ],
      "atlas": false,
      "uvSet": "uv0",
      "channels": "rgb",
      "images": [
        {
          "id": "525",
          "size": 64,
          "pixelInWorldUnits": 0,
          "href": [
            "../textures/0_0",
            "../textures/0_0_1"
          ],
          "byteOffset": [
            0,
            0
          ],
          "length": [
            737,
            400
          ]
        }
      ]
    }
  }
} 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {
  "materialDefinitions": {
    "Mat87040": {
      "type": "standard",
      "name": "standard",
      "params": {
        "vertexRegions": false,
        "vertexColors": false,
        "reflectivity": 0,
        "useVertexColorAlpha": false,
        "ambient": [
          0,
          0,
          0
        ],
        "diffuse": [
          1,
          1,
          1
        ],
        "specular": [
          0.098,
          0.098,
          0.098
        ],
        "shininess": 1,
        "renderMode": "solid",
        "cullFace": "none"
      }
    }
  },
  "textureDefinitions": {
    "87040": {
      "encoding": [
        "image/jpeg",
        "image/vnd-ms.dds"
      ],
      "wrap": [
        "none",
        "none"
      ],
      "atlas": false,
      "uvSet": "uv0",
      "channels": "rgb",
      "images": [
        {
          "id": "1170940301162927104",
          "size": 1024,
          "pixelInWorldUnits": 0,
          "href": [
            "../textures/0_0",
            "../textures/0_0_1"
          ],
          "byteOffset": [
            0,
            0
          ],
          "length": [
            207385,
            699192
          ]
        }
      ]
    }
  }
} 
```

