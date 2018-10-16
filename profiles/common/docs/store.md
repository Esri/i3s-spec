# store

The Class Store object describes the exact physical storage of a Layer and enables the client to detect when multiple Layers are served from the same Store. Storing multiple layers in a single store - and thus having them share resources - enables efficient serving of many layers of the same content type, but with different attribute schemas or different symbology applied.

### Related:

[common::3DSceneLayer](3DSceneLayer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | A Store ID, unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any. {meshes, polygons, points, lines, analytics, meshpyramids, pointclouds, symbols} |
| profile | string | Indicates which profile this scene store fulfills. |
| resourcePattern | string[] | Indicates the resources needed for rendering and the required order in which the client should load them.  |
| rootNode | string | Relative URL to root node resource |
| version | string | Format version of this resource; used here again if this store hasn't been served by a 3D Scene Server. |
| extent | number[] | The 2D spatial extent (xmin, ymin, xmax, ymax) of this store, in the horizontal indexCRS. |
| indexCRS | string | The horizontal CRS used for all minimum bounding spheres (mbs) in this store, identified by an OGC URL. |
| vertexCRS | string | The horizontal CRS used for all 'vertex positions' in this store, identified by an OGC URL. |
| normalReferenceFrame | string | Describes the coordinate reference frame used for storing normals. Can be one of the following values: east-north-up, earth-centered, or vertex-reference-frame. A value of *east-north-up* indicates that normals are stored in a node local reference frame defined by the easting, northing and up directions at the MBS center, and is only valid for geographic (WGS84) vertexCRS. A value of *earth-centered* indicates that normals are stored in a global earth-centered, earth-fixed (ECEF) reference frame where the x-axis points towards Prime meridian (lon = 0°) and Equator (lat = 0°), the y-axis points East towards lon = +90 and lat = 0 and the z-axis points North. It is only valid for geographic vertexCRS. A value of *vertex-reference-frame* indicates that normals are stored in the same reference frame as vertices and is only valid for projected vertexCRS. |
| nidEncoding | string | MIME type for the encoding used for the Node Index Documents. Example: application/vnd.esri.I3S.json+gzip; version=1.6 |
| featureEncoding | string | MIME type for the encoding used for the Feature Data Resources. For example: application/vnd.esri.I3S.json+gzip; version=1.6 |
| geometryEncoding | string | MIME type for the encoding used for the Geometry Resources. For example: application/octet-stream; version=1.6 |
| textureEncoding | string[] | MIME type(s) for the encoding used for the Texture Resources. |
| lodType | string | Optional field to indicate which LoD Generation Scheme is used in this store. One of <code> {*MeshPyramid*, Thinning, Clustering, Generalizing} |
| lodModel | string | Optional field to indicate which LoD Switching mode clients have to use. One of <code>{*node-switching*, none} |
| indexingScheme | string | Information on the Indexing Scheme (QuadTree, R-Tree, Octree, ...) used. |
| defaultGeometrySchema | [common::defaultGeometrySchema](defaultGeometrySchema.md) | A common, global ArrayBufferView definition that can be used if the schema of vertex attributes and face attributes is consistent in an entire cache; this is a requirement for meshpyramids caches. |
| defaultTextureDefinition | [common::textureDefinition](textureDefinition.md) | A common, global TextureDefinition to be used for all textures in this store. The default texture definition uses a reduced profile of the full TextureDefinition, with the following attributes being mandatory: encoding, uvSet, wrap and channels. |
| defaultMaterialDefinition | [common::textureDefinition](textureDefinition.md) | If a store uses only one material, it can be defined here entirely as a MaterialDefinition. |

*Note: properties in **bold** are required*

