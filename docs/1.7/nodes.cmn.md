# Node page index document



### Related:

[cmn::nodepages](nodepages.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodes** | [node](node.cmn.md)[] | Array of nodes |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: FaceRange 

```json
 {
  "nodes": [
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
  ]
} 
```

