# 3DNodeIndexDocument

The 3dNodeIndexDocument JSON file describes a single index node within a store. It includes links to other nodes (children, sibling, and parent), links to feature data, geometry data and texture data resources, metadata such as metrics used for LoD selection, its spatial extent. Depending on the geometry and lodModel used, a node document can be tuned towards being light-weight or more heavy-weight. Clients have to further decide which data to retrieve. The bounding volume information provided for the node, its parent, any neighbors and children present, already provides sufficient data for simple visualization by rendering the centroids as point features for example. The node is the root object in the 3dNodeIndexDocument. There is always exactly one Node object in a 3dNodeIndexDocument.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID, unique within the store. The root node is always 'root', all others follow the pattern '2-4-0-15-2'. At each level in a subtree, numbering starts at 0. |
| level | integer | Explicit level of this node within the index tree. The lowest level is 1. |
| version | number | The version (store update session ID) of this node. |
| mbs | number[] | An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node. |
| obb | [common::obb](obb.md) | Describes oriented bounding box. |
| created | number[] | Creation date of this node in UTC, presented as a string in the format YYYY-MM-DDThh:mm:ss.sTZD, with a fixed 'Z' timezone (see http://www.w3.org/TR/NOTE-datetime). |
| expires | number[] | Expiration date of this node in UTC, presented as a string in the format YYYY-MM-DDThh:mm:ss.sTZD, with a fixed 'Z' timezone (see http://www.w3.org/TR/NOTE-datetime). |
| transform | number[] | Optional, 3D (4x4) transformation matrix expressed as a linear array of 16 values. |
| parentNode | [common::nodeReference](../../common/docs/nodeReference.md) | Reference to the parent node of a node. |
| children | [common::nodeReference](../../common/docs/nodeReference.md) | Reference to the child nodes of a node. |
| neighbors | [common::nodeReference](../../common/docs/nodeReference.md) | Reference to the neighbor (same level, spatial proximity) nodes of a node. |
| sharedResource | [common::Resource](../../common/docs/Resource.md) | Resource reference describing a shared resource document. |
| featureData | [common::Resource](../../common/docs/Resource.md) | Resource reference describing a FeatureData document. |
| geometryData | [common::Resource](../../common/docs/Resource.md) | Resource reference describing a geometry resource. |
| textureData | [common::Resource](../../common/docs/Resource.md) | Resource reference describing a texture resource. |
| attributeData | [common::Resource](../../common/docs/Resource.md) | Resource reference describing a FeatureData document. |
| lodSelection | [common::LodSelection](../../common/docs/LodSelection.md) | Metrics for LoD Selection, to be evaluated by the client. |
| features | [common::LodSelection](../../common/docs/LodSelection.md) | A list of summary information on the features present in this node, used for pre-visualisation and LoD switching in featureTree LoD stores. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 None 
```

