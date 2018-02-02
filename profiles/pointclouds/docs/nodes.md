# I3S point cloud scene layer: nodes

Nodes represent the spatial extent of the data subdivided into regions. Nodes are organized in bounding volumes and define the tree hierarchy. Children must be contiguous, in index range, so they may be located using  firstChild  and  childrenCount  fields.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| resourceID | integer | Index of the first child of this node. The resourceId  must be used to query node resources, like geometry buffer (XYZ)  /nodes/<resourceId>/geometry/0  and attribute buffers. One buffer can have one attribute. Available attributes are declared in the  SceneLayer  document. /nodes/<resourceId>/attributes/<attrib_key>. |
| firstChild | integer | Index of the first child of this node. |
| childCount | integer | Number of children for this node. Value is 0 if node is a leaf node. |
| pointCount  | integer | Number of points for this node. |
| effectiveArea  | number | Estimation of the area covered by this node. Used to estimate LOD switching based on density. |
| obb | [pointcloud::value](value.md) | Oriented bounding boxes (OBB) are the only supported bounding volumes. |
| lodThreshold |  | Hint to the client for LOD switching. The switching strategy is declared globally at the layer level. If the layer defines  store.index.lodSelectionMetricType : densityThreshold , then  nodes[i].lodThreshold  stores a effectiveArea for the node. This metric may be used as a threshold to split a parent node into its children. This estimation works best when the point cloud represent a surface and is not volumetric in nature. World space density would be  Dw = node.pointCount / node.effectiveArea  which we call  Ds  once converted to screen space. Client would switch LOD when  Ds  is less/greater than a threshold defined by the client. For example, 0.1 point per pixel square. Note for PCSL creation: If each point footprint is assumed to be identical (say 0.1x0.1 unit), then the  lodThreshold  may be computed as  number_of_point * point_footprint  for a leaf node and  sum( children[i].effective_area)  for inner nodes. |

*Note: properties in **bold** are required*

