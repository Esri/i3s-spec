# i3s profile: Features-Lines (FL)

## Summary

*What this profile is for:* Support for polylines (no multilines) with symbolisation and feature-tree-based LoD. 
Uses embedded geometries or ArrayBuffer views - encoders are encouraged to optimize for size (small lines go to Embedded, larger one to ArrayBufferViews).

## Access Pattern

<p>The access pattern is identical to that of the Features-Meshes profile.</p>

## Schema

The features-meshes profile makes use of all 7 main resource types and restricts properties a little.

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

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> alias</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> description</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> copyrightText</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> capabilities</code></td><td>True</td><td>1</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> capabilities.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> store</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> store.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> store.profile</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.rootNode</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.extent</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.extent.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> store.geographicCRS</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.projectedCRS</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.nidEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.featureEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.geometryEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.textureEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.lodType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.featureOrdering</code></td><td> </td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.featureOrdering.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.indexingScheme</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> store.indexingScheme.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.indexingScheme.inclusive</code></td><td> </td><td> </td><td> </td><td>None</td><td>boolean/None</td><td> </td></tr>
<tr><td><code> store.indexingScheme.dimensionality</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> store.indexingScheme.childrenCardinality</code></td><td>True</td><td>2</td><td>2</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.indexingScheme.childrenCardinality.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> store.indexingScheme.neighborCardinality</code></td><td>True</td><td>2</td><td>2</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.indexingScheme.neighborCardinality.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.vertexAttributes</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.vertexAttributes.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.vertexAttributes.*.valueType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.vertexAttributes.*.valuesPerElement</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.faces</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.faces.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.faces.*.valueType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema.faces.*.valuesPerElement</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> fields</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> fields.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> fields.*.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> fields.*.type</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> fields.*.alias</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> drawingInfo</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
</table>

### 3dNodeIndexDocument

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td>/level NOT 1<br/></td></tr>
<tr><td><code> id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td>/level IS 1<br/></td></tr>
<tr><td><code> level</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> created</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/Date</td><td> </td></tr>
<tr><td><code> expires</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/Date</td><td> </td></tr>
<tr><td><code> mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> lodSelection</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td>[../../]/store/lodType IS FeatureTree<br/></td></tr>
<tr><td><code> lodSelection.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.metricType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.maxError</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.avgError</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> transform</code></td><td>True</td><td>16</td><td>16</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> transform.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> sharedResource</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> sharedResource.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> featureData</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> featureData.*.featureRange</code></td><td> </td><td>2</td><td>2</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.featureRange.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> featureData.*.layerContent</code></td><td> </td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.layerContent.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> geometryData</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> textureData</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> textureData.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> textureData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> textureData.*.multiTextureBundle</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>boolean/None</td><td> </td></tr>
<tr><td><code> parentNode</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td>/level NOT 1<br/></td></tr>
<tr><td><code> parentNode.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> parentNode.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> parentNode.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> parentNode.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> parentNode.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> parentNode.featureCount</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> children</code></td><td>True</td><td>0</td><td>99</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> children.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> children.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> children.*.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> children.*.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> children.*.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> children.*.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> children.*.featureCount</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> neighbors</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td>/level NOT 1<br/></td></tr>
<tr><td><code> neighbors.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> neighbors.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> neighbors.*.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> neighbors.*.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> neighbors.*.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> neighbors.*.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> neighbors.*.featureCount</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> features</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> features.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> features.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> features.*.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>number/None</td><td> </td></tr>
<tr><td><code> features.*.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> features.*.lodChildFeatures</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td>[../../]/store/lodType IS FeatureTree<br/></td></tr>
<tr><td><code> features.*.lodChildFeatures.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> features.*.lodChildNodes</code></td><td>True</td><td>0</td><td>9</td><td> </td><td>object/None</td><td>[../../]/store/lodType IS FeatureTree<br/>../lodChildFeatures NOT null<br/></td></tr>
<tr><td><code> features.*.lodChildNodes.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> features.*.rank</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td>[../../]/store/lodType IS FeatureTree<br/></td></tr>
<tr><td><code> features.*.rootFeature</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td>[../../]/store/lodType IS FeatureTree<br/>/level NOT 1<br/>../rank NOT 1<br/></td></tr>
</table>

### FeatureData

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> featureData</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> featureData.*.position</code></td><td>True</td><td>2</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.position.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.mbb</code></td><td>True</td><td>6</td><td>6</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.mbb.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.layer</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> featureData.*.geometries</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS ArrayBufferView<br/></td></tr>
<tr><td><code> featureData.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/NamedRuleset</td><td>type IS Embedded<br/></td></tr>
<tr><td><code> featureData.*.attributes</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*.value</code></td><td>True</td><td> </td><td> </td><td>None</td><td>Any/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*.group</code></td><td> </td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
</table>

### SharedResources

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> materialDefinitions</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.name</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.type</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.vertexColors</code></td><td> </td><td> </td><td> </td><td>None</td><td>boolean/None</td><td>/materialDefinitions/*/type IS standard<br/></td></tr>
<tr><td><code> materialDefinitions.*.params.reflectivity</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Float</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.transparency</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Float</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.ambient</code></td><td> </td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.ambient.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>number/Float</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.diffuse</code></td><td> </td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.diffuse.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>number/Float</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.specular</code></td><td> </td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.specular.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>number/Float</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.shininess</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Float</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.renderMode</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.castShadows</code></td><td> </td><td> </td><td> </td><td>None</td><td>boolean/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.receiveShadows</code></td><td> </td><td> </td><td> </td><td>None</td><td>boolean/None</td><td> </td></tr>
<tr><td><code> materialDefinitions.*.params.waveSpeed</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Float</td><td>/materialDefinitions/*/type IS water<br/></td></tr>
<tr><td><code> materialDefinitions.*.params.waveAmplitude</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Float</td><td>/materialDefinitions/*/type IS water<br/></td></tr>
<tr><td><code> materialDefinitions.*.href</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td>/materialDefinitions/*/type IS reference<br/></td></tr>
<tr><td><code> textureDefinitions</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.encoding</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.wrap</code></td><td>True</td><td>1</td><td>2</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.wrap.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.atlas</code></td><td>True</td><td> </td><td> </td><td>None</td><td>boolean/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.uvSet</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.channels</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.regions</code></td><td>True</td><td>1</td><td>4096</td><td> </td><td>object/None</td><td>/textureDefinitions/*/atlas IS true<br/></td></tr>
<tr><td><code> textureDefinitions.*.regions.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.regions.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.regions.subimageRegion</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.regions.subimageRegion</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/Float</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*.size</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*.pixelInWorldUnits</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*.byteOffset</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> textureDefinitions.*.images.*.length</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> shaderDefinitions</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> symbols</code></td><td> </td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> symbols.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> symbols.*.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> symbols.*.geometries</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> symbols.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS ArrayBufferView<br/></td></tr>
<tr><td><code> symbols.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS Embedded<br/></td></tr>
</table>

