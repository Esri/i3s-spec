# Mesh geometry description



**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing:
```
index
position
normal
uv0
uv1
color
uvRegion
featureId
faceRange
```
 Attribute that are present are store contiguously. 

 **TBD**:
 - memory alignment requirement ?
 - support more that 2 UV sets?

### Related:

[meshv2::meshdefinition](meshdefinition.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| index | [meshv2::geometryindex](geometryindex.md) | Vertex index (index buffer) |
| **position** | [meshv2::geometryposition](geometryposition.md) | Vertex positions relative to Oriented-bounding-box center |
| normal | [meshv2::geometrynormal](geometrynormal.md) | Face/vertex normal  |
| uv0 | [meshv2::geometryuv](geometryuv.md) | First set of UV coordinates (textured mesh only) |
| uv1 | [meshv2::geometryuv](geometryuv.md) | Second set of UV coordinates (textured mesh only) |

*Note: properties in **bold** are required*

### Examples 

#### Example: Point cloud layer 

```json
 { // layers/0/nodepages/12.json
  "nodes": [
    {
      "index": 4352, //required: index of this node in the array of nodes.
      "lodThreshold": 3161.3, //optional: see 3dSceneLayer.json for the type ( i.e. : "lodSelectionMetricType" : "maxScreenThreshold")
      "obb": { //required: only support OBB (no MBS).
        "center": [ 2.82, 41.988, 76.56 ],
        "halfSize": [ 14.93, 11.4, 7.3150 ],
        "quaternion": [ -0.070, 0.0305, -0.0569, 0.9 ]
      },
      "children": [ 23, 7890, 253 ], //Optional: array of node index in the array of nodes.
      "meshes": [ //Optional : 'empty' nodes are okay.
        {
          "materialId": 0, //optional?: material definition ID
          "geometryDefinitionId": 0, // definition will contain the vertex buffer layout and available attribute buffers and their type+encoding.
          "resourceId": 12488, //required: de-couples index-id from buffer/resource ids
          // transformation order is 1) scale, 2) rotation and 3) translation
          "scale": [ 1.0, 1.0, 1.0 ], // optional, in local space (i.e. mesh space)
          "rotation": [ 0.0, 0.0, 0.0 ], // optional, in local space
          "translation": [ 0.0, 0.0, 0.0 ], // optional, in local space
          "texelCountHint": 1048576, //optional (default=0 ->untextured):  "color" texture size (for memory estimation)
          "vertexCount": 526, //required: needed to interpret geometry buffer correctly.
          "indexCount": 21750, //required (for indexed-mesh) needed to interpret geometry correctly.
          "featureCount": 26 //required: needed to interpret geometry buffer correctly.
        }
      ],
      "instances": //optional. Instancing applies to all geometries in this node.
      {
        "instanceDefinitionId": 3,
        "resourceId": 1014, //instance buffer at url: layers/0/nodes/1014/{instanceBufferDefinitions[3].index})
        "instanceCount": 142
      }
    }
    //...
  ]
} 
```

