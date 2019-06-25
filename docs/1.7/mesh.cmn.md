# Mesh object

Mesh geometry for a node.

### Related:

[cmn::node](node.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| material | [meshMaterial](meshMaterial.cmn.md) | The material definition. |
| geometry | [meshGeometry](meshGeometry.cmn.md) | The geometry definition. |
| attribute | [meshAttribute](meshAttribute.cmn.md) | The attribute set definition. |

### Examples 

#### Example: Textured mesh with attributes and features. 

```json
 {
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
```

