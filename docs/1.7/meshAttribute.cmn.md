# meshAttribute

Mesh attributes for a node.

### Related:

[cmn::mesh](mesh.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **resource** | integer | The resource identifier to be used to locate attribute resources of this mesh. i.e. `layers/0/nodes/{resource_id}/attributes/{key}` where `key` is a unique field identifier key i.e. `f_0`.  For more information on attribute keys see [cmn::attributeStorageInfo](attributeStorageInfo.cmn.md) |

*Note: properties in **bold** are required*

### Examples 

#### Attribute buffer(s) will be at /layers/0/nodes/6/attributes/{key}

```json
 {
  "resource": 6
} 
```

