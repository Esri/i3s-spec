# i3s profile: Features-Points (FP)

## Summary

*What this profile is for:* Support for points and multipoints with symbolisation and feature-tree-based LoD. Does not use external ArrayBufferGeometries. It is not recommended for massive multipoint features - these should use the pointclouds profile instead.

## Access Pattern

<p>The access pattern is identical to that of the Features-Meshes profile, only that no Geometry resources have to be loaded.</p>

## Schema

The features-meshes profile makes use of all 7 main resource types and allows most properties.

### SceneServiceInfo

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> serviceName</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> serviceVersion</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> supportedBindings</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> supportedBindings.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> supportedOperationsProfile</code></td><td>True</td><td>1</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> supportedOperationsProfile.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> layers</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> layers.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> layers.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> layers.*.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> layers.*.alias</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> layers.*.lodType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> layers.*.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
</table>

### 3dSceneLayer



### 3dNodeIndexDocument



### FeatureData



### SharedResources



