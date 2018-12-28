# Mesh object

Mesh geometry for a node

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **resource** | integer | resource locator to be used attribute resources for this mesh. i.e. `layers/0/nodes/attributes/{this.resource}/...` |

*Note: properties in **bold** are required*

### Examples 

#### Example: Attribute buffer(s) will be at `/layers/0/nodes/attributes/6/(...) 

```json
 {
  "resource": 6
} 
```

