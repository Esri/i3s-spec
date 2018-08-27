# Extended mesh layer for high performances




## Design goals:
In order to improve I3S drawing/loading performances, the following changes have been identified:

### Performance improvements
1. Group (and streamline) `NodeIndex` object into page of `n` nodes
2. Drop `sharedResource` extra request per node   
3. More efficient mesh geometry (indexed-mesh, compressed normals, compressed positions)
4. Texture compression support. (already in progress. Not covered in this document)

### Forward-compatibility
Importantly, we would like to make these improvements "non-breaking" and preserve forward compatibility (i.e. "old" 3D clients would "ignore" new features and still be able to draw the data correctly).
This also implies that publishing "extended" SLPK to older server still works. In this case,  extended resources will be **ignored/dropped by older servers** so 3D client must be prepare to handle this. For example:
1. Check if "extended" capabilities are present in 3DSceneLayer.json
2. YES: request the first page `layers/0/nodepages/0`. 
3. 404: -> back to legacy mode. 200 -> Extended feature are **actually** present. 

With paged-access, nodes cannot be identified by `tree-key` anymore. Fortunately, existing clients do not require `node_ids`  to be `tree-keys`.  

### Feature/specs improvements 
We're also considering adding the following features to this new I3S extension:

- Support for multi-mesh nodes with "per-mesh" material (avoid node duplication /co-trees for different materials) 
- Advanced materials (i.e. PRB, glTF like: Improve visual appearance of 3D objects)
- Multi-texture per mesh ( to support IM textured-attribute)
- Mesh instancing (Potentially significant speed up for BIM instanced models) 
- Texture transparency hints (`alphaMode`, `alphaCutoff`). Avoid "disappearing" semi-transparent object in WSV when alpha < 0.33 and alpha-mask is *not* intended. Avoid scanning all texels for alpha values)
- Support for mixed topology (triangle, point, line) 
- support for "split" vertex buffers to reduce bandwidth (same geometry may be served "compressed" or "uncompressed") 

The structure of an _extended_ I3S service is shown below (`*`: extended resources):
```
+--3DSceneLayer.json (with added fields*) 
+--nodes 
|  +--0
|  |  +--3dNodeIndexDocument (deprecated)
|  |  +--features (deprecated?)
|  |  +--attributes
|  |  |  +--0 
|  |  |  +--(...) 
|  |  +--geometries
|  |  |  +--0
|  |  |  +--1*
|  |  +--shared (deprecated)
|  |  |  +--sharedResource 
|  |  +--textures   
|  |  |  +--0  (e.g. "jpeg")
|  |  |  +--1  (e.g. "dds")
|  |  |  +--(...) 
|  |  +--instances* (optional)
|  |  |  +--0* 
|  |  |  +--(...)* 
|  +--(...)
+--nodepages*
|  +--0*
|  +--1*
|  +--(...)*
+--shared*
|  +--textures*
|  |  +--0* 
|  |  +--(...)* 
+-- statistics 
```
For forward-compatibility, existing v1.6 fields/resources will be left unchanged, but new resource will be added:




### Related:

[meshv2::nodes](nodes.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| <legacy v1.6 layer description> |  | same as v1.6. not repeated in this document |
| nodePages | [meshv2::nodepages](nodepages.md) | paged-access index description |
| materialDefinitions | [meshv2::materialdefinitions](materialdefinitions.md)[] | List of materials classes used in this layer. _TBD_ use a separated JSON resource? |
| textureSetDefinitions | [meshv2::texturesetdefinition](texturesetdefinition.md)[] | define the set of textures that can be referenced by meshes |
| **meshDefinitions** | [meshv2::meshdefinition](meshdefinition.md)[] | Define the layouts of mesh geometry and its attributes |
| instanceBufferDefinitions | [meshv2::instancebuffer](instancebuffer.md)[] | Define the layouts of instance buffers that may be used by meshes in this layer. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Mesh layer 

```json
 {
  "nodePages": {
    "nodePerPage": 64,
    "lodSelectionMetricType": "maxScreenThresholdSQ"
  },
  "textureSetDefinitions": [
    {
      "formats": [
        {
          "index": 0,
          "format": "jpeg"
        },
        {
          "index": 1,
          "format": "dds"
        },
        {
          "index": 2,
          "format": "ktx"
        }
      ],
      "binding": "per-node"
    },
    {
      "formats": [
        {
          "index": 10,
          "format": "jpeg"
        }
      ],
      "binding": "per-layer"
    },
    {
      "formats": [
        {
          "index": 20,
          "format": "png"
        }
      ],
      "binding": "per-layer"
    }
  ],
  "materialDefinitions": [
    {
      "alphaMode": "mask",
      "alphaCutoff": 0.25,
      "pbrMetallicRoughness": {
        "baseColorFactor": [
          0.5,
          0.5,
          0.5,
          1.0
        ],
        "baseColorTexture": {
          "textureSetDefinitionId": 0,
          "texCoord": 0
        },
        "metallicFactor": 1,
        "roughnessFactor": 1,
        "metallicRoughnessTexture": {
          "textureSetDefinitionId": 2,
          "texCoord": 1
        }
      },
      "normalTexture": {
        "textureSetDefinitionId": 1,
        "factor": 2.0,
        "texCoord": 1
      }
    }
  ],
  "meshDefinitions": [
    {
      "topology": "triangle",
      "geometryBuffers": [
        {
          "position": {
            "type": "Float32",
            "component": 3,
            "binding": "per-vertex"
          },
          "normal": {
            "type": "Float32",
            "component": 3,
            "binding": "per-vertex"
          },
          "uv0": {
            "type": "Float32",
            "component": 2,
            "binding": "per-vertex"
          },
          "featureId": {
            "type": "UInt32",
            "component": 1,
            "binding": "per-feature"
          },
          "faceRange": {
            "type": "UInt32",
            "component": 2,
            "binding": "per-feature"
          }
        }
      ],
      "attributeBuffers": [
        {
          "id": 12,
          "name": "street_name",
          "alias": "Nom de rue",
          "type": "String",
          "binding": "per-feature",
          "encoding": "indexed-utf8-string"
        },
        {
          "id": 14,
          "name": "class_code",
          "alias": "Classification",
          "type": "UInt8",
          "binding": "per-vertex"
        }
      ]
    }
  ],
  "instanceBufferDefinitions": [
    {
      "scale": {
        "type": "Float32",
        "component": 3
      },
      "rotation": {
        "type": "Float32",
        "component": 4
      },
      "translation": {
        "type": "Float32",
        "component": 3
      },
      "featureId": {
        "type": "Uint32",
        "component": 1
      }
    }
  ]
}
 
```

