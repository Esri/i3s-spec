# Mesh object

Mesh geometry for a node

### Related:

[mesh17::node](node.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| material | [mesh17::meshmaterial](meshmaterial.md) | material definition |
| geometry | [mesh17::meshgeometry](meshgeometry.md) | geometry definition |
| attribute | [mesh17::meshattribute](meshattribute.md) | attribute set definition |

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

