# i3s profile: Mesh-pyramids (MP)

## Summary

*What this profile is for:* This profile is implemented by the 3D Object and Integrated Mesh layer types.

## Access Pattern

<p>This section describes how a client is expected to load and handle resources from an Indexed 3D Scene Layer using the Mesh-pyramids profile.
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
    1.	AttributeData: Attribute data of features used for attribute-based symbolization (as indicated by the DrawingInfo object in the 3dSceneLayer resource)
1.	Identify: Additional resources belonging to a node are accessed only if needed, e.g. for an Identify operation.
    1.	AttributeData: If the AttributeData resources of the node have not already been fetched (in step 3 above) client application can request the desired attribute data.

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

The meshp-yramids profile makes use of all 7 main resource types and allows a restricted set of properties. Note that the FeatureData resource is optional for this profile, hence the 3dSceneLayer resource must contain a DefaultGeometrySchema.

### SceneServiceInfo

No specific profile.

### 3dSceneLayer

Note that in this profile, the defaultGeometrySchema is mandatory.

[3dSceneLayer](./rules/docs/3dSceneLayerRules.md)

### 3dNodeIndexDocument

There is always exactly 1 geometry and texture resource per node.

[3dNodeIndexDocument](./rules/docs/3dNodeIndexDocumentRules.md)

### AttributeData

Attribute data for all features in a node is stored and made available as discrete, per field resource called **_attribute_**. The number of attribute resources correspond to the number of feature data <em>fields</em> that are chosen to be included along with the 3d Scene Layer cache.  

### FeatureData

The FeatureData is optional with this profile.

[FeatureData](./rules/docs/FeatureDataRules.md)

### SharedResources

[SharedResources](./rules/docs/SharedResourceRules.md)
