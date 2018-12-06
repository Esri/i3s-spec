# Mesh object

Mesh geometry for a node

### Related:

[node](node.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| material | [meshmaterial](meshmaterial.md) | material definition |
| geometry | [meshgeometry](meshgeometry.md) | geometry definition |
| attribute | [meshattribute](meshattribute.md) | attribute set definition |

*Note: properties in **bold** are required*

### Examples 

#### Example: Textured mesh with attributes and features 

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
    "definition": 0,
    "resource": 6
  }
} 
```

