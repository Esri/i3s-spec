# i3s profile: Pointclouds (PC)

## Summary

*What this profile is for:* Support masssive point cloud data sets, with per-point numeric attributes. The profile uses only 3dNodeIndexDocuments, FeatureData and GeometryData resources.

## Access Pattern

<p>This section describes how a client is expected to load and handle resources from an Indexed 3D Scene using this profile. 
The general pattern consists of these phases:</p>

1.	Handshake & capabilities negotiation – ensure that the service has the expected resources, that client and server have a common set of formats for these that can be used and inform the client which capabilities can be used, such as editing. Within this phase, the client utilizes the following resources:
    1.	SceneServiceInfo: General service information
    1.	3dSceneLayer: Information on available layers, including symbology and encoding
2.	Identify suitable entry points into the Indexed 3D Scene data – in this optional phase, the client asks a service to identify the node covering the clients’ Area of interest best. In this phase, none of the i3s resources are utilized, only an operation that the scene server provides:
    1.	FindNode – Find the Node that best matches the client’s AOI.
3.	Retrieve index – either starting from the root node or from the identified node, the client retrieves Node Index Documents and decides – based on properties such as the precision value and the feature locations in the node – whether it wants to download and render their attached resources. Within this phase, the client utilizes the following resource:
    1.	NodeIndexDocument: Summary of the content of a single node of the index, references children, parent and neighbor nodes, indicating what can be found there
4.	Retrieve resources – when a client has decided that it wants to render the content of a node, it starts to retrieve the attached resources:
    1.	FeatureData: Attributes of GIS features, accessors to GeometryData and TextureData
    1.	GeometryData: Geometry attributes such as positions and vertex attributes

<p>LoD switching is supported following a similiar approach as in meshpyramid caches - the switching happens per node. However, loading the FeatureData resource is not optional compared to meshpyramids.</p>


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
<tr><td><code> store.indexCRS</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.vertexCRS</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.nidEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.featureEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.geometryEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.textureEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.lodType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
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
<tr><td><code> lodSelection.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.metricType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.maxError</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.avgError</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> transform</code></td><td> </td><td>16</td><td>16</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> transform.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData</code></td><td>True</td><td>0</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> geometryData</code></td><td>True</td><td>0</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> parentNode</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td>/level NOT 1<br/></td></tr>
<tr><td><code> parentNode.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> parentNode.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> parentNode.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> parentNode.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> parentNode.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> children</code></td><td>True</td><td>0</td><td>99</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> children.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> children.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> children.*.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> children.*.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> children.*.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> children.*.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> neighbors</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td>/level NOT 1<br/></td></tr>
<tr><td><code> neighbors.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> neighbors.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/NodeID</td><td> </td></tr>
<tr><td><code> neighbors.*.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> neighbors.*.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> neighbors.*.mbs</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> neighbors.*.mbs.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
</table>

### FeatureData

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> featureData</code></td><td>True</td><td>1</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> featureData.*.position</code></td><td>True</td><td>2</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.position.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.pivotOffset</code></td><td> </td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.pivotOffset.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
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

This profile doesn't use SharedResources.

