# I3S point cloud scene layer: defaultGeometrySchema

Attribute description as field.

### Related:

[pcsl::store](store.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **geometryType** | string | The type of primitive. Only points are supported for point cloud scene layer.<div>Must be:<ul><li>`points`</li></ul></div> |
| header | [] | The header in binary buffers. Currently not supported for point cloud scene layer. |
| **topology** | string | This property is currently IGNORED for point cloud scene layer since it only conatains geometry position and not the vertex attributes.<div>Must be:<ul><li>`PerAttributeArray`</li></ul></div> |
| **encoding** | string | Only 'lepcc-xyz' compression is currently supported.<div>Must be:<ul><li>`lepcc-xyz`</li></ul></div> |
| ordering | string[] | Currently the geometry contains XYZ only, so vertex attribute must only list 'position'.<div>Possible values for each array string:<ul><li>`position`: vertex coordinates</li></ul></div> |
| **vertexAttributes** | [vertexAttributes](vertexAttributes.pcsl.md) | The vertex buffer description. |

*Note: properties in **bold** are required*

### Examples 

#### Example: defaultGeometrySchema 

```json
 {
  "geometryType": "points",
  "header": [],
  "topology": "PerAttributeArray",
  "encoding": "lepcc-xyz",
  "vertexAttributes": {
    "position": {
      "valueType": "Float",
      "valuesPerElement": 3
    }
  },
  "ordering": [
    "position"
  ]
} 
```

