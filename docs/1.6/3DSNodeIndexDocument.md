# 3DNodeIndexDocument

The 3dNodeIndexDocument JSON file describes a single index node within a store. It includes links to other nodes (e.g. children, sibling, and parent), links to feature data, geometry data, texture data resources, metadata (e.g. metrics used for LoD selection), and spatial extent. The node is the root object in the 3dNodeIndexDocument. There is always exactly one Node object in a 3dNodeIndexDocument. 

Depending on the geometry and LoD Model, a node document can be tuned towards being light-weight or heavy-weight. Clients decide which data to retrieve. The bounding volume information for the node, its parent, neighbors, and children provide sufficient data for a simple visualization.  For example, the centroids could be rendered as point features. 

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID, unique within the store. The root node is always 'root', all others follow the pattern '2-4-0-15-2'. At each level in a subtree, numbering starts at 0. |
| level | integer | Explicit level of this node within the index tree. The lowest level is 1. |
| version | string | The version (store update session ID) of this node. |
| mbs | number[4] | An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node. |
| obb | [obb](obb.md) | Describes oriented bounding box. |
| created | string | Creation date of this node in UTC, presented as a string in the format YYYY-MM-DDThh:mm:ss.sTZD, with a fixed 'Z' time zone (see http://www.w3.org/TR/NOTE-datetime). |
| expires | string | Expiration date of this node in UTC, presented as a string in the format YYYY-MM-DDThh:mm:ss.sTZD, with a fixed 'Z' time zone (see http://www.w3.org/TR/NOTE-datetime). |
| transform | number[16] | Optional, 3D (4x4) transformation matrix expressed as a linear array of 16 values. |
| parentNode | [nodeReference](nodeReference.md) | Reference to the parent node of a node. |
| children | [nodeReference](nodeReference.md)[] | Reference to the child nodes of a node. |
| neighbors | [nodeReference](nodeReference.md)[] | Reference to the neighbor (same level, spatial proximity) nodes of a node. |
| sharedResource | [resource](resource.md) | Resource reference describing a shared resource document. |
| featureData | [resource](resource.md)[] | Resource reference describing a FeatureData document. |
| geometryData | [resource](resource.md)[] | Resource reference describing a geometry resource. |
| textureData | [resource](resource.md)[] | Resource reference describing a texture resource. |
| attributeData | [resource](resource.md)[] | Resource reference describing a FeatureData document. |
| lodSelection | [lodSelection](lodSelection.md)[] | Metrics for LoD Selection, to be evaluated by the client. |
| features | [lodSelection](lodSelection.md)[] | A list of summary information on the features present in this node, used for pre-visualisation and LoD switching in featureTree LoD stores. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

#### Example: 3D Scene Layer info for 3D object scene layer 

#### Example: 3D Scene Layer info for integrated mesh scene layer 

