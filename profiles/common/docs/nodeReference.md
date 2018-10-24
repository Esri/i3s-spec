# nodeReference

A NodeReference is a pointer to another node - the parent, a child or a neighbor. NodeReferences contain a relative URL pointing to the referenced NID, as well as a set of meta information that can be used by the client to determine whether to load that node or not, as well as maintaining store consistency.

### Related:

[common::3DSNodeIndexDocument](3DSNodeIndexDocument.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID (e.g. '1-3-0-5') of the referenced node. |
| mbs | number[] | An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node. |
| href | string | Number of values per element. |
| version | number | Version (store update session ID) of the referenced node. |
| featureCount | number | Number of features in the referenced node and its descendants, down to the leaf nodes. |

*Note: properties in **bold** are required*

### Examples 

#### Example: cachedDrawingInfo for 3D Object scene layer. 

```json
 {
  "children": [
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
  ]
} 
```

