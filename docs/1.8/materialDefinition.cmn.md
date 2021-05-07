# materialDefinition

Materials describe how a feature or a set of features is to be rendered, including shading and color.

Part of [sharedResource](sharedResource.cmn.md) that is deprecated with 1.7.

### Related:

[cmn::sharedResource](sharedResource.cmn.md), [cmn::store](store.cmn.md), [psl::store](store.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **(identifier)** | [materialDefinitionInfo](materialDefinitionInfo.cmn.md) | Each material definition should be unique for the whole service. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique identifier*

### Examples 

#### Example: material definition 

```json
 {
  "Mat43": {
    "type": "standard",
    "name": "standard",
    "params": {
      "vertexRegions": false,
      "vertexColors": true,
      "reflectivity": 0,
      "useVertexColorAlpha": false,
      "ambient": [
        0,
        0,
        0
      ],
      "diffuse": [
        1,
        1,
        1
      ],
      "specular": [
        0.09803921568627451,
        0.09803921568627451,
        0.09803921568627451
      ],
      "shininess": 1,
      "renderMode": "solid",
      "cullFace": "none"
    }
  }
} 
```

