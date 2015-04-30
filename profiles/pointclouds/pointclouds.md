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

This profile doesn't use shared resources.

### SceneServiceInfo

No specific profile.

### 3dSceneLayer

[pointclouds 3dSceneLayer](./profiles/pointclouds/rules/docs/3dSceneLayerRules.html)

### 3dNodeIndexDocument

[pointclouds 3dNodeIndexDocument](./profiles/pointclouds/rules/docs/3dNodeIndexDocumentRules.html)

### FeatureData

[pointclouds FeatureData](./profiles/pointclouds/rules/docs/FeatureDataRules.html)