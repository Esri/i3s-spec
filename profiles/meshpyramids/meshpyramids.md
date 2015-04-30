# i3s profile: Meshpyramids (MP)

## Summary

*What this profile is for:* This profile implements the 3DObjects layer.

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

No specific profile.

### 3dSceneLayer

Note that in this profile, the defaultGeometrySchema is mandatory. Otherwise this resource is highly similar to the 3dSceneLayer in the FM profile.

[Meshpyramid 3dSceneLayer](./profiles/profiles/meshpyramids/rules/docs/3dSceneLayerRules.html)

### 3dNodeIndexDocument

The main difference in MP 3dNodeIndexDocuments to FM 3dNodeIndexDocument is that the features list is not part of the document. Furthermore, there is always exactly 1 geometry and texture resource per node.

[Meshpyramid 3dNodeIndexDocument](./profiles/profiles/meshpyramids/rules/docs/3dNodeIndexDocumentRules.html)

### FeatureData

The FeatureData profile is similar to features-meshes, only there is no geometryData definition and that features do not have geometry definitions inline either, as a default schema is used. There are only backward references from the geometry itself, embedded as a face attribute, to features.

[Meshpyramid FeatureData](./profiles/profiles/meshpyramids/rules/docs/FeatureDataRules.html)

### SharedResources

The Shared Resource profile is similar to features-meshes, only that symbols are not supported.

[Meshpyramid SharedResources](./profiles/profiles/meshpyramids/rules/docs/SharedResourceRules.html)