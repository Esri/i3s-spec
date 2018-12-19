# nodeReference

A NodeReference is a pointer to another node - the parent, a child or a neighbor. A nodeReference contains a relative URL to the referenced NID, and a set of meta information which helps determines if a client loads the data and maintains store consistency.

### Related:

[cmn::3DSNodeIndexDocument](3DSNodeIndexDocument.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID (e.g. '1-3-0-5') of the referenced node. |
| mbs | number[] | An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node. |
| href | string | Number of values per element. |
| version | string | Version (store update session ID) of the referenced node. |
| featureCount | number | Number of features in the referenced node and its descendants, down to the leaf nodes. |
| obb | [obb](obb.cmn.md) | Describes oriented bounding box. |

*Note: properties in **bold** are required*

### Examples 

#### Example: cachedDrawingInfo for 3D Object scene layer. 

```json
 {
  "id": "2-0-0-0",
  "href": "../2-0-0-0",
  "mbs": [
    0.027173397137801203,
    0.0049950922109050205,
    139.15166463702917,
    133.9973907470703
  ]
} 
```

