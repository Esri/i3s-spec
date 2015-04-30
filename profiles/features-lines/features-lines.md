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

[features-lines 3dSceneLayer](./profiles/features-lines/rules/docs/3dSceneLayerRules.html)

### 3dNodeIndexDocument

[features-lines 3dNodeIndexDocument](./profiles/features-lines/rules/docs/3dNodeIndexDocumentRules.html)

### FeatureData

[features-lines FeatureData](./profiles/features-lines/rules/docs/FeatureDataRules.html)

### SharedResources

[features-lines SharedResources](./profiles/features-lines/rules/docs/SharedResourceRules.html)