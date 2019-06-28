# Mesh Attribute

Mesh geometry for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **resource** | integer | The resource locator to be used attribute resources for this mesh. i.e. `layers/0/nodes/<resource id>/attributes/...` |

*Note: properties in **bold** are required*

### Examples 

#### Example: Attribute buffer(s) will be at `/layers/0/nodes/6/attributes/(...) 

```json
 {
  "resource": 6
} 
```

