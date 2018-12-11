# What's new in v1.7

## Improved performances:
- Add paged-access to node (see `nodepages` documents)
- Remove `sharedResource` 
  - use `material` and `textureSetDefinition` instead
- Add Draco Compressed geometry support (`meshDefinition`)
- Texture transparency hints (`alphaMode`, `alphaCutoff`). _Avoid "disappearing" semi-transparent object in WSV when alpha < 0.33 and alpha-mask is *not* intended. Avoid scanning all texels for alpha values in Pro)_

### Forward-compatibility
- 1.7 is forward/backward compatible with 1.6 which means that all 1.6 resources are present and new 1.7 resources have been added.
- Publishing 1.7 SLPK  on 1.6 capable servers still works. In this case,  new resources will be **ignored/dropped by older servers** so 3D client must be prepare to handle this. For example:
	1. Check if "extended" capabilities are present in 3DSceneLayer.json
	2. YES: request the first page `layers/0/nodepages/{rootIndex}`. 
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
+-- statistics 
```

## Resources:

Updated 1.6 resources with additional 1.7 fields: 
- [Layer document](3DSceneLayer.cmn.md)

Retained 1.6 resources:
- [attribute statistics document](stats.cmn.md)
- Texture buffers
- Uncompressed geometry buffers

Deprecated 1.6 resources:
- [node index document](3DSNodeIndexDocument.cmn.md)
- [feature Data documents](featureData.cmn.md) 

New 1.7 resources:
- [Node pages documents](nodes.cmn.md)
- Draco compressed geometry buffers

 
