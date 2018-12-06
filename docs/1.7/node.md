# Node object



### Related:

[common::layer](common/docs/1.7/layer.md), [nodes](nodes.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **index** | integer | index in the node array. may be **different than** [`mesh[0].resourceId`](mesh.md) |
| lodThreshold | number | When to swith LOD. See [`nodepages[i].lodSelectionMetricType`](nodepages.md)  |
| **obb** | [obb](obb.md) | Oriented bounding box for this node.  |
| children | integer[] | index of the children nodes indices |
| meshes | [mesh](mesh.md)[0:1] | WARNING: only **SINGLE** mesh is supported at version 1.7. (i.e. `length` **must** be 0 or 1) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Leaf node 

#### Example: Node with un-textured mesh and two children nodes 

