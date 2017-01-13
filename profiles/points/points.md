# i3s profile: Points

## Summary

*What this profile is for:* Support for points and multipoints with symbolization. Does not use external ArrayBufferGeometries.

## Access Pattern

<p>The access pattern is identical to that of the mesh-pyramids profile. The profile utilizes different Lod selection metrics (<code>screenSpaceRelative</code>, <code>distanceRangeFromDefaultCamera</code>).</p>

## Schema

The points profile makes use of 5 main resource types and allows a restricted set of properties.

### SceneServiceInfo

No specific profile.

### 3dSceneLayer

[points 3dSceneLayer](./rules/docs/3dSceneLayerRules.html)

### 3dNodeIndexDocument

[points 3dNodeIndexDocument](./rules/docs/3dNodeIndexDocumentRules.html)

### FeatureData

[points FeatureData](./rules/docs/FeatureDataRules.html)
