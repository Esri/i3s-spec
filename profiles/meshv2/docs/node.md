# Node object



### Related:

[meshv2::layer](layer.md), [meshv2::nodes](nodes.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | integer | index in the node array. may be *different that `resourceId`* |
| lodThreshold | number | When to swith LOD |
| **obb** | [common::obb](../../common/docs/obb.md) | Oriented bounding box for this node. Includes all meshes. |
| children | integer[] | index of the children nodes |
| meshes | [meshv2::mesh](mesh.md)[] | array of meshes |
| instances | [meshv2::instance](instance.md) | Geometry instancing |

*Note: properties in **bold** are required*

### Examples 

#### Example: Leaf node with the same geometry repeated twice with a different transformation 

```json
 {
  "index": 12,
  "lodThreshold": 50.43,
  "obb": {
    "center": [
      20.82,
      41.988,
      76.56
    ],
    "halfSize": [
      64.93,
      11.4,
      70.315
    ],
    "quaternion": [
      -0.0,
      0.03,
      -0.20569,
      10.9
    ]
  },
  "meshes": [
    {
      "materialId": 0,
      "geometryDefinitionId": 0,
      "resourceId": 478,
      "vertexCount": 526,
      "featureCount": 0,
      "translation": [
        500.0,
        0.0,
        0.0
      ]
    },
    {
      "materialId": 0,
      "geometryDefinitionId": 0,
      "resourceId": 478,
      "vertexCount": 526,
      "featureCount": 0,
      "rotation": [
        0.0,
        90.0,
        0.0
      ],
      "translation": [
        100.0,
        200.0,
        0.0
      ]
    }
  ]
} 
```

#### Example: Node with a two un-indexed, un-textured meshes and two children nodes 

```json
 {
  "index": 1024,
  "lodThreshold": 50.43,
  "obb": {
    "center": [
      20.82,
      41.988,
      76.56
    ],
    "halfSize": [
      64.93,
      11.4,
      70.315
    ],
    "quaternion": [
      -0.0,
      0.03,
      -0.20569,
      10.9
    ]
  },
  "children": [
    1025,
    1026
  ],
  "meshes": [
    {
      "materialId": 0,
      "geometryDefinitionId": 0,
      "resourceId": 478,
      "vertexCount": 526,
      "featureCount": 26
    },
    {
      "materialId": 10,
      "geometryDefinitionId": 1,
      "resourceId": 478,
      "vertexCount": 106,
      "featureCount": 7
    }
  ]
} 
```

#### Example: Node with a single indexed/textured mesh instanced 142 times using the instance buffer at layers/0/nodes/1014/{instanceBufferDefinitions[3].index}  

```json
 {
  "index": 4352,
  "lodThreshold": 3161.3,
  "obb": {
    "center": [
      2.82,
      41.988,
      76.56
    ],
    "halfSize": [
      14.93,
      11.4,
      7.315
    ],
    "quaternion": [
      -0.07,
      0.0305,
      -0.0569,
      0.9
    ]
  },
  "children": [
    23,
    7890,
    253
  ],
  "meshes": [
    {
      "materialId": 0,
      "geometryDefinitionId": 0,
      "resourceId": 12488,
      "texelCountHint": 1048576,
      "vertexCount": 526,
      "indexCount": 21750,
      "featureCount": 26
    }
  ],
  "instances": {
    "instanceDefinitionId": 3,
    "resourceId": 1014,
    "instanceCount": 142
  }
} 
```

