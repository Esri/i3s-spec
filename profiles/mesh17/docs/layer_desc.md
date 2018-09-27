
## Design goals:
- Forward compatible with specs v1.6
- Improve mesh performances compare to 1.6 specs 
- Simplify specs to improve implementability 
- _TDB 1.7 as a subset of upcoming v2.0 specs ?(Note: 2.0 may not be forward-compatible, the 1.7 changes should be "free-standing")_

### Technical changes:
- Add `nodepages` documents
- Remove `sharedResource` 
  - use `material` and `textureSetDefinition` instead
- Add Draco Compressed geometry support (`meshDefinition`)
- Texture transparency hints (`alphaMode`, `alphaCutoff`). _Avoid "disappearing" semi-transparent object in WSV when alpha < 0.33 and alpha-mask is *not* intended. Avoid scanning all texels for alpha values in Pro)_


With paged-access, nodes cannot be identified by `tree-key` anymore. Fortunately, existing clients do not require `node_ids`  to be `tree-keys`.  

### Forward-compatibility
 "old" 3D clients would "ignore" new features and still be able to draw the data correctly
This also implies that publishing 1.7 SLPK  on 1.6 capable servers still works. In this case,  new resources will be **ignored/dropped by older servers** so 3D client must be prepare to handle this. For example:
1. Check if "extended" capabilities are present in 3DSceneLayer.json
2. YES: request the first page `layers/0/nodepages/0`. 
3. 404: -> back to legacy mode. 200 -> Extended feature are **actually** present. 


The structure of an _extended_ I3S service is shown below (`*`: extended resources):
```
+--3DSceneLayer.json (with added fields*) 
+--nodes 
|  +--0
|  |  +--3dNodeIndexDocument (deprecated)
|  |  +--features (deprecated?)
|  |  +--attributes
|  |  |  +--0 
|  |  |  +--(...) 
|  |  +--geometries
|  |  |  +--0
|  |  |  +--1*
|  |  +--shared (deprecated)
|  |  |  +--sharedResource 
|  |  +--textures   
|  |  |  +--0  (e.g. "jpeg")
|  |  |  +--1  (e.g. "dds")
|  |  |  +--(...) 
|  +--(...)
+--nodepages*
|  +--0*
|  +--1*
|  +--(...)*
+--shared*
|  +--textures*
|  |  +--0* 
|  |  +--(...)* 
+-- statistics 
```
For forward-compatibility, existing v1.6 fields/resources will be left unchanged, but new resource will be added:


