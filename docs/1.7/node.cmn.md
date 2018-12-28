# Node object



### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [cmn::nodes](nodes.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | integer | index in the node array. may be **different than** [`mesh.resourceId`](mesh.cmn.md) |
| lodThreshold | number | When to swith LOD. See [`nodepages[i].lodSelectionMetricType`](nodepages.cmn.md)  |
| **obb** | [obb](obb.cmn.md) | Oriented bounding box for this node.  |
| children | integer[] | index of the children nodes indices |
| mesh | [mesh](mesh.cmn.md) | WARNING: only **SINGLE** mesh is supported at version 1.7. (i.e. `length` **must** be 0 or 1) |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: Leaf node 

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
  "mesh": {
    "material": {
      "definition": 0,
      "resource": 6
    },
    "geometry": {
      "definition": 0,
      "resource": 6,
      "vertexCount": 1092,
      "featureCount": 7
    },
    "attribute": {
      "resource": 6
    }
  }
} 
```

#### Example: Node with un-textured mesh and two children nodes 

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
  "mesh": {
    "material": {
      "definition": 0,
      "resource": 6
    },
    "geometry": {
      "definition": 0,
      "resource": 6,
      "vertexCount": 1092,
      "featureCount": 7
    },
    "attribute": {
      "resource": 6
    }
  }
} 
```

