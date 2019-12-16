# meshAttribute

Mesh attributes for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **resource** | integer | The resource identifier to be used to locate attribute resources of this mesh. i.e. `layers/0/nodes/<resource id>/attributes/...` |

*Note: properties in **bold** are required*

### Examples 

#### Example: Attribute buffer(s) will be at `/layers/0/nodes/6/attributes/(...) 

```json
 {
  "resource": 6
} 
```

