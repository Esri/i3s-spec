# node [common profiles]

The node object.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [cmn::nodePage](nodePage.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | integer | The index in the node array. May be **different than** material, geometry and attribute `resource` id. See [`mesh`](mesh.cmn.md) for more information. |
| parentIndex | integer | The index of the parent node in the node array. |
| lodThreshold | number | When to switch LoD. See [`nodepages[i].lodSelectionMetricType`](nodePageDefinition.cmn.md) for more information. |
| **obb** | [obb](obb.cmn.md) | Oriented bounding box for this node.  |
| children | integer[] | index of the children nodes indices. |
| mesh | [mesh](mesh.cmn.md) |  The mesh for this node. **WARNING:** only **SINGLE** mesh is supported at version 1.7 (i.e. `length` **must** be 0 or 1). |

*Note: properties in **bold** are required*

### Examples 

#### Example: Leaf node 

```json
 {
  "index": 16,
  "parentIndex": 11,
  "lodThreshold": 22968.8125,
  "obb": {
    "center": [
      0.0246379131849151,
      0.0055829490839741725,
      6.388948981650174
    ],
    "halfSize": [
      3.54935479,
      3.52569342,
      2.38895011
    ],
    "quaternion": [
      -0.500083148,
      0.499868125,
      -0.499916822,
      0.500131845
    ]
  },
  "mesh": {
    "material": {
      "definition": 0,
      "resource": 7,
      "texelCountHint": 262144
    },
    "geometry": {
      "definition": 1,
      "resource": 7,
      "vertexCount": 48,
      "featureCount": 1
    },
    "attribute": {
      "resource": 7
    }
  }
} 
```

#### Example: Textured node with two children nodes 

```json
 {
  "index": 9,
  "parentIndex": 7,
  "lodThreshold": 968831.9375,
  "obb": {
    "center": [
      0.02480438053003459,
      0.00533958737698042,
      14.604276076890528
    ],
    "halfSize": [
      48.7387047,
      11.6107492,
      24.8489189
    ],
    "quaternion": [
      -0.232766122,
      -0.20745486,
      0.675836384,
      -0.667852938
    ]
  },
  "mesh": {
    "material": {
      "definition": 0,
      "resource": 2,
      "texelCountHint": 524288
    },
    "geometry": {
      "definition": 0,
      "resource": 2,
      "vertexCount": 1032,
      "featureCount": 5
    },
    "attribute": {
      "resource": 2
    }
  },
  "children": [
    12,
    13
  ]
} 
```

