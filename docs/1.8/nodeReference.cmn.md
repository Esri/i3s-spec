# nodeReference

A nodeReference is a pointer to another node - the parent, a child or a neighbor. A nodeReference contains a relative URL to the referenced NID, and a set of meta information which helps determines if a client loads the data and maintains store consistency.

### Related:

[cmn::3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID of the referenced node represented as string. |
| mbs | number[4] | An array of four doubles, corresponding to x, y, z and radius of the [minimum bounding sphere](mbs.cmn.md) of a node. |
| href | string | Number of values per element. |
| version | string | Version (store update session ID) of the referenced node. |
| featureCount | number | Number of features in the referenced node and its descendants, down to the leaf nodes. |
| obb | [obb](obb.cmn.md) | Describes oriented bounding box. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Node reference for integrated mesh scene layer. 

```json
 {
  "id": "18",
  "href": "../18",
  "mbs": [
    138.59974403386326,
    -34.929125554424836,
    77.7917739925906,
    245.39599377770242
  ],
  "obb": {
    "center": [
      138.59974403386326,
      -34.929125554424836,
      77.7917739925906
    ],
    "halfSize": [
      186.775208,
      31.6982021,
      158.549973
    ],
    "quaternion": [
      -0.116017461,
      0.276839644,
      0.871147692,
      -0.388588935
    ]
  }
} 
```

