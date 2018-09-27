# Extended mesh layer for high performances




## Design goals:
- Forward compatible with specs v1.6
- Improve mesh performances compare to 1.6 specs 
- Simplify specs to improve implementability 
- _TDB 1.7 as a subset of upcoming v2.0 specs ?(Note: 2.0 may not be forward-compatible, the 1.7 changes should be "free-standing")_

### Technical changes:
- Add `nodepages` documents
- Remove `sharedResource` 
  - use `material` and `textureSetDefinition` instead
- Add Draco Compressed geometry support (`meshDefinition`)
- Texture transparency hints (`alphaMode`, `alphaCutoff`). _Avoid "disappearing" semi-transparent object in WSV when alpha < 0.33 and alpha-mask is *not* intended. Avoid scanning all texels for alpha values in Pro)_


With paged-access, nodes cannot be identified by `tree-key` anymore. Fortunately, existing clients do not require `node_ids`  to be `tree-keys`.  

### Forward-compatibility
 "old" 3D clients would "ignore" new features and still be able to draw the data correctly
This also implies that publishing 1.7 SLPK  on 1.6 capable servers still works. In this case,  new resources will be **ignored/dropped by older servers** so 3D client must be prepare to handle this. For example:
1. Check if "extended" capabilities are present in 3DSceneLayer.json
2. YES: request the first page `layers/0/nodepages/0`. 
3. 404: -> back to legacy mode. 200 -> Extended feature are **actually** present. 


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

[mesh17::nodes](nodes.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| <legacy v1.6 layer description> |  | same as v1.6. not repeated in this document |
| **nodePages** | [mesh17::nodepages](nodepages.md) | paged-access index description |
| materialDefinitions | [mesh17::materialdefinitions](materialdefinitions.md)[] | List of materials classes used in this layer. _TBD_ use a separated JSON resource? |
| textureSetDefinitions | [mesh17::texturesetdefinition](texturesetdefinition.md)[] | define the set of textures that can be referenced by meshes |
| **geometryDefinitions** | [mesh17::geometrydefinition](geometrydefinition.md)[] | Define the layouts of mesh geometry and its attributes |
| attributeSetDefinitions | [mesh17::attributesetdefinition](attributesetdefinition.md)[0:1] | Define the layouts of mesh geometry and its attributes. WARNING: only **SINGLE** definition is supported at v1.7. length must 0 or 1 |

*Note: properties in **bold** are required*

### Examples 

#### Example: Mesh layer 

```json
 {
  "nodePages": {
    "nodePerPage": 64,
    "rootIndex": 0,
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
  "geometryDefinitions": [
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
      ]
    }
  ],
  "attributeDefinitions": [
    {
      "attributeBuffers": [
        {
          "id": 12,
          "name": "street_name",
          "alias": "Nom de rue",
          "type": "String",
          "binding": "per-feature",
          "encoding": "string-utf8"
        },
        {
          "id": 14,
          "name": "class_code",
          "alias": "Classification",
          "type": "UInt8",
          "binding": "per-feature"
        }
      ]
    }
  ]
} 
```

