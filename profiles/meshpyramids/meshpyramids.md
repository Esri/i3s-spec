# i3s profile: Meshpyramids (MP)

## Summary

*What this profile is for:* Contextual geometry such as integrated meshes created with photogrammetric methods where where no symbology is to be applied and gis attributes are needed only on a case-by-case basis such as Idetify operations.

## Access Pattern

<p>This section describes how a client is expected to load and handle resources from an Indexed 3D Scene using the Meshpyramids profile. 
The general pattern consists of these phases:</p>

1.	Handshake & capabilities negotiation: The client ensures that the service has the expected resources and that client and server have a common set of capabilities. Within this phase, the client utilizes the following resources:
    1.	Retrieve SceneServiceInfo: General service information
    1.	Retrieve 3dSceneLayer: Information on available layers, including symbology and encoding
1.	Index exploration: The client retrieves Node Index Documents and decides – based on lodSelection properties – whether it wants to download and render their attached resources. Within this phase, the client utilizes the following resource:
    1.	NodeIndexDocument: Summary of the content of a single node of the index, references children, parent and neighbor nodes, indicating what can be found there
1.	Rendering: When a client has decided that it wants to render the content of a node, it retrieves the attached resources:
    1.	SharedData: Material defintions, shared geometries for instancing
    1.	GeometryData: Geometry attributes such as positions and indices
    1.	TextureData: Images used as texture maps
1.	Identify: Additional resoruces belonging to a node are accessed only if needed, e.g. for an Identify operation.
    1.	FeatureData: Attributes of GIS features, accessors to GeometryData and TextureData

A familiar access pattern  based on a single tree data structure is proposed for view frustum culling, level-of-detail selection, and rendering. The following pseudo code illustrates the recommended pattern when navigating an index tree using Mesh Pyramids.

Node traversal starts at the root node and recursively calls TraverseNodeTree(node):

    TraverseNodeTree(node)
    {
        if (node’s mbs is not visible) // see 1)
            // do nothing
        else if (node has no children or ScreenSize(mbs) < maxScreenThreshold) //see 2)
            // render the node // see 3) 
        else
            for each child in children(node) // see 4)
                TraverseNodeTree(child);
    }

Additional notes:

1. view frustum culling:
    1. visibility test can include the ‘entirely inside the viewing frustum’ result which can be used to optimize away all further frustum culling tests on the children of the node
    1. this step can also optionally incorporate a cutoff distance threshold test  if desired.
2. level-of-detail selection:
    1. test used to decide how deep to recurse is based on mbs‘ projected size (diameter) on the screen vs the per node provided  ‘maxScreenThreshold’.
3. Rendering:
    1. “render the node” potentially includes some, or all, of the following steps:
        1. Requesting the corresponding geometry and texture data if not already requested
        1. (asynchronously) accessing the corresponding geometry and texture data and loading it into GPU memory if not already loaded
        1. Binding, if loaded, the geometry VBO
        1. Binding, if loaded, the texture
        1. Making a draw() call if, at least, the geometry is loaded
1. optimized user experience:
    1. children should be sorted by the ascending distance from the observer…

## Schema

The meshpyramids profile makes use of all 7 main resource types and allows a restricted set of properties. It takes away some flexibility and features for a gain in performance, e.g. by making the FeatureData resource optional. Note that since the FeatureData resource is optional and loaded lazily for certain actions, the 3dSCeneLayer resource must contain a DefaultGeometrySchema. If that is not present, clients wouldn't now how to interpret the Geometry resources.

### SceneServiceInfo

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> serviceName</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> serviceVersion</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> supportedBindings</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> supportedBindings.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> supportedOperationsProfile</code></td><td>True</td><td>1</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
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

Note that in this profile, the defaultGeometrySchema is mandatory. Otherwise this resource is highly similar to the 3dSceneLayer in the FM profile.

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> alias</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> description</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> copyrightText</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> capabilities</code></td><td>True</td><td>1</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
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
<tr><td><code> store.defaultGeometrySchema</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
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

The main difference in MP 3dNodeIndexDocuments to FM 3dNodeIndexDocument is that the features list is not part of the document. Furthermore, there is always exactly 1 geometry and texture resource per node.

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
<tr><td><code> lodSelection</code></td><td>True</td><td>1</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> lodSelection.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.metric</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.maxError</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> lodSelection.*.avgError</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/None</td><td> </td></tr>
<tr><td><code> transform</code></td><td> </td><td>16</td><td>16</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> transform.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> sharedResource</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> sharedResource.href</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> featureData</code></td><td>True</td><td>0</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> featureData.*.featureRange</code></td><td> </td><td>2</td><td>2</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.featureRange.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> featureData.*.layerContent</code></td><td> </td><td>1</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.layerContent.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> geometryData</code></td><td>True</td><td>0</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> textureData</code></td><td>True</td><td>0</td><td>1</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> textureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> textureData.*.href</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/URL</td><td> </td></tr>
<tr><td><code> textureData.*.multiTexturedBundle</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>boolean/None</td><td> </td></tr>
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
</table>

### FeatureData

The FeatureData profile is similar to features-meshes, only there is no geometryData definition and that features do not have geometry definitions inline either, as a default schema is used. There are only backward references from the geometry itself, embedded as a face attribute, to features.

<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> featureData</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> featureData.*.position</code></td><td>True</td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.position.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.pivotOffset</code></td><td> </td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.pivotOffset.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.mbb</code></td><td>True</td><td>6</td><td>6</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.mbb.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.layer</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.0.metadata</code></td><td> </td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.0.metadata.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.0.metadata.*.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.0.metadata.*.value</code></td><td>True</td><td> </td><td> </td><td>None</td><td>Any/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*.name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*.value</code></td><td>True</td><td> </td><td> </td><td>None</td><td>Any/None</td><td> </td></tr>
</table>

### SharedResources

The Shared Resource profile is similar to features-meshes, only that symbols are not supported.

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
</table>