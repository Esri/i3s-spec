# Instance object

Instancing applies to all geometries in the node

### Related:

[meshv2::node](node.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **instanceDefinitionId** | integer | array index in [layer.instanceBufferDefinitions](layer.md) array in the layer document |
| **resourceId** | integer | location of the instance buffer `layers/0/nodes/{resourceId}/{instanceBufferDefinitions[this.instanceDefinitionId].index}`) |
| **instanceCount** | integer | Number of instances to read from the instance buffer |

*Note: properties in **bold** are required*

### Examples 

#### Example: all meshes of this node will be instanced 142 using instance buffer at `layers/0/nodes/1014/{instanceBufferDefinitions[3].index}` 

```json
 {
  "instanceDefinitionId": 3,
  "resourceId": 1014,
  "instanceCount": 142
} 
```

