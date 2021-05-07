# cachedDrawingInfo

 The cachedDrawingInfo object indicates if the *drawingInfo* object is captured as part of the binary scene layer representation. This object is used for the 3D Object and Integrated Mesh scene layer if no [drawingInfo](drawingInfo.cmn.md) is defined.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [psl::3DSceneLayer](3DSceneLayer.psl.md), [psl::3DSceneLayer](3DSceneLayer.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **color** | boolean | If true, the drawingInfo is captured as part of the binary scene layer representation. |

*Note: properties in **bold** are required*

### Examples 

#### Example: cachedDrawingInfo for 3D Object scene layer. 

```json
 {
  "color": true
} 
```

