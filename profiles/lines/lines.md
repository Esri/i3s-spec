# i3s profile: Features-Lines (FL)

## Summary

*What this profile is for:* Support for polylines (no multilines) with symbolisation and feature-tree-based LoD. 
Uses embedded geometries or ArrayBuffer views - encoders are encouraged to optimize for size (small lines go to Embedded, larger one to ArrayBufferViews).

## Access Pattern

<p>The access pattern is identical to that of the Features-Meshes profile.</p>

## Schema

The features-meshes profile makes use of all 7 main resource types and restricts properties a little.

### SceneServiceInfo

No specific profile.

### 3dSceneLayer

[features-lines 3dSceneLayer](./rules/docs/3dSceneLayerRules.md)

### 3dNodeIndexDocument

[features-lines 3dNodeIndexDocument](./rules/docs/3dNodeIndexDocumentRules.md)

### FeatureData

[features-lines FeatureData](./rules/docs/FeatureDataRules.md)

### SharedResources

[features-lines SharedResources](./rules/docs/SharedResourceRules.md)