# Level of Detail

Scene Layers include Levels of Detail (LoD) that apply to the whole layer and serve to generalize the layer. Scene Layers support LoD in a manner that preserves the identity of the individual features that are retained within any LoD. 

## Discrete Level of Detail

Discrete LoD provide multiple models to display the same object. A specific detail level is bound to certain levels of the bounding volume hierarchy tree. Leaf nodes typically contain the original feature representation with the most detail. The closer a node is to the root of the bounding volume hierarchy tree, the lower the LoD. The detail is reduced by texture down-sampling, feature reduction/generalization, mesh reduction/generalization, clustering or thinning in order to ensure inner nodes have a balanced weight. The number of discrete LoD for the layer corresponds to the number of levels in the bounding volume hierarchy tree.

By using the bounding volume and LoD selection metrics, a client traversing an I3S tree can readily decide if it needs to:
•	Stop traversal to the node's children if the current node bounding volume is not visible.
•	Use the data in the node if the quality is appropriate, and then stop traversal to children.
•	Continue traversal until nodes with higher quality are found.

I3S supports multiple LoD selection metrics and switching level of detail models. Details about the LoD generation process can be optionally included in the Scene Layer's metadata.


## Node switching

Node switching lets clients focus on the display of a node. A node switch occurs when the content from a node's children is used to replace the content of the current node. Node switching can be helpful when the user needs to see more detailed information.

Each parent node in the I3S tree has a set of features that represent the reduced LoD. This includes the details for all features covered by the node. Due to generalization at lower Levels of Detail, not all features are present in reduced LoD nodes.

The feature IDs link the reduced LoD feature and a parent node, as well as the children nodes. Applications can determine the visual quality by using the I3S tree to display all the features in a parent node or use the features found in its children nodes.


## Level of Detail Generation

Integrated Mesh layer types typically come with pre-authored Levels of Detail.  If the desired LoD does not exist, it can be generated.

For example, 3D Object Layers based on the meshpyramids profile can create a LoD pyramid for all features based on generalizing, reducing and fusing the geometries of individual features while preserving feature identity. The same approach can also be used with Integrated Mesh Layers based on the meshpyramid profile.  In this case, there are no features, and each node contains a generalized version of the mesh covered by its descendants.

The bounding volume hierarchy tree is built based on the spatial distribution of the features.  The method used to create the levels depends on the Scene Layer type.

| &nbsp;         |Integrated Mesh  | 3D Object                    | Points                       | Point Clouds                 | Building Scene Layer         |
| -------------- | ----------------|---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| meshpyramids   | ![yes](images/checkmark.png) |![yes](images/checkmark.png) | &nbsp;                       | &nbsp;                       | ![yes](images/checkmark.png) |
| Thinning       | ![yes](images/checkmark.png) |![yes](images/checkmark.png) | ![yes](images/checkmark.png) | ![yes](images/checkmark.png) | ![yes](images/checkmark.png) |
| Clustering     | ![yes](images/checkmark.png) |![yes](images/checkmark.png) | ![yes](images/checkmark.png) | ![yes](images/checkmark.png) | ![yes](images/checkmark.png) |
| Generalization | ![yes](images/checkmark.png) |![yes](images/checkmark.png) | &nbsp;                       | &nbsp;                       | ![yes](images/checkmark.png) |

*Example LoD generation methods based on Scene Layer type*

### Selection Metrics

Selection metrics help clients determine which LoD to render.  For example, clients need to weigh the options of screen size, resolution, bandwidth, and memory to reach the target quality. Publishers can add as many LodSelection objects as desired but must provide one if the layer's lodType is not null. Of the three min/avg/max values, typically only one or two are used.

For more details regarding Integrated Mesh, 3D objects and point scene layer, see the [LoD selection](../docs/1.7/lodSelection.cmn.md).