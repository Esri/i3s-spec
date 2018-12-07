# I3S point cloud scene layer: node

A single bounding volume hierarchy node

### Related:

[nodepage.pcsl](nodepage.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **resourceId** | integer | Index of the first child of this node. The resourceID must be used to query node resources, like geometry buffer (XYZ)  /nodes/<resourceId>/geometry/0  and attribute buffers. One buffer can have one attribute. Available attributes are declared in the SceneLayer document. /nodes/<resourceId>/attributes/<attrib_key>. |
| **firstChild** | integer | Index of the first child of this node. |
| **childCount** | integer | Number of children for this node. Value is 0 if node is a leaf node. |
| vertexCount | integer | Number of points for this node. |
| **obb** | [obb](obb.cmn.md) | Oriented bounding boxes (OBB) are the only supported bounding volumes. |
| lodThreshold | number | This metric may be used as a threshold to split a parent node into its children. See [layer.store.index.lodSelectionMetricType](index.md) |
| effectiveArea | number |  |
| pointCount | number |  |

*Note: properties in **bold** are required*

### Examples 

#### Example: Global scene (WSG84) 

```json
 {
    "resourceId": 704,
    "obb": {
        "center": [
            -105.01482,
            39.747244,
            1596.040551
        ],
        "halfSize": [
            29.421873,
            29.539055,
            22.082193
        ],
        "quaternion": [
            0.420972,
            -0.055513,
            -0.118217,
            0.897622
        ]
    },
    "firstChild": 0,
    "childCount": 0,
    "vertexCount": 7872,
    "lodThreshold": 8979.959961
} 
```

