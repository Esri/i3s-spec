# Instance buffer definition

Describes the layout of an instance buffer

### Related:

[meshv2::layer](layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| scale | [meshv2::geometryposition](geometryposition.md) | Scaling on the local mesh `X`, `Y` and `Z` axis respectively |
| rotation | [meshv2::geometryquaternion](geometryquaternion.md) | Unit 4-component quaternion defining the local mesh rotation.  _TBD_ ? |
| translation | [meshv2::geometryposition](geometryposition.md) | local mesh offset. the absolute position will be `vertex_xyz+instanceBuffer[i].translation+node[j].obb.center` |
| color | [meshv2::geometrycolor](geometrycolor.md) | `color.binding` is ignored. Instance colors will be used in place of `materialDefinitions[].pbrMetallicRoughness.baseColorFactor` for _all meshes_ of the geometry to be instanciated |
| featureId | [meshv2::geometryfeatureid](geometryfeatureid.md) | `featureId.binding` is ignored. Each instance will have a single `featureID`. (i.e. primitive are assigned _one_ featureId per instance) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Instance buffer with scale/rotation/translation transformation ( e.g. url: `layers/0/nodes/{resource_id}/instances/0`) 

```json
 {
  "scale": {
    "type": "Float32",
    "component": 3
  },
  "rotation": {
    "type": "Float32",
    "component": 4
  },
  "translation": {
    "type": "Float32",
    "component": 3
  },
  "featureId": {
    "type": "Uint32",
    "component": 1
  }
} 
```

