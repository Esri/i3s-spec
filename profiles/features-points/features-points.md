# i3s profile: Features-Points (FP)

## Summary

*What this profile is for:* Support for points and multipoints with symbolisation and feature-tree-based LoD. Does not use external ArrayBufferGeometries. It is not recommended for massive multipoint features - these should use the pointclouds profile instead.

## Access Pattern

<p>The access pattern is identical to that of the Features-Meshes profile, only that no Geometry resources have to be loaded.</p>

## Schema

The features-points profile makes use of 6 main resource types and allows a restricted set of properties.

### SceneServiceInfo

No specific profile.

### 3dSceneLayer

[features-points 3dSceneLayer](./profiles/profiles/features-points/rules/docs/3dSceneLayerRules.html)

### 3dNodeIndexDocument

[features-points 3dNodeIndexDocument](./profiles/profiles/features-points/rules/docs/3dNodeIndexDocumentRules.html)

### FeatureData

[features-points FeatureData](./profiles/profiles/features-points/rules/docs/FeatureDataRules.html)

### SharedResources

[features-points SharedResources](./profiles/profiles/features-points/rules/docs/SharedResourceRules.html)