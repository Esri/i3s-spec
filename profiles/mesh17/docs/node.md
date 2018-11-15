# Node object



### Related:

[mesh17::nodes](nodes.md), [mesh17::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | integer | index in the node array. may be **different than** [`mesh[0].resourceId`](mesh.md) |
| lodThreshold | number | When to swith LOD. See [`nodepages[i].lodSelectionMetricType`](nodepages.md)  |
| **obb** | [common::obb](../../common/docs/obb.md) | Oriented bounding box for this node.  |
| children | integer[] | index of the children nodes indices |
| meshes | [mesh17::mesh](mesh.md)[0:1] | WARNING: only **SINGLE** mesh is supported at version 1.7. (i.e. `length` **must** be 0 or 1) |

*Note: properties in **bold** are required*

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
  "meshes": [
    {
      "materialId": 0,
      "geometryDefinitionId": 0,
      "attributeDefinitionId": 0,
      "resourceId": 478,
      "vertexCount": 526,
      "featureCount": 0
    }
  ]
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
  "meshes": [
    {
      "materialId": 0,
      "geometryDefinitionId": 0,
      "attributeDefinitionId": 0,
      "resourceId": 478,
      "vertexCount": 526,
      "featureCount": 26
    }
  ]
} 
```

