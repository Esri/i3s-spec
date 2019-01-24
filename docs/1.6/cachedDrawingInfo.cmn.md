# I3S Scene Layer: cachedDrawingInfo

 The cachedDrawingInfo object indicates if the *drawingInfo* object is captured as part of the binary scene layer representation. This object is used for 3dObject and integrated mesh scene layer.

### Related:

[psl::3DSceneLayer](3DSceneLayer.psl.md), [cmn::3DSceneLayer](3DSceneLayer.cmn.md)
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

