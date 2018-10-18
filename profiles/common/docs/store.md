# store

The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. Storing multiple layers in a single store - and thus having them share resources - enables efficient serving of many layers of the same content type, but with different attribute schemas or different symbology applied.

### Related:

[common::3DSceneLayer](3DSceneLayer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | A store ID, unique across a SceneServer. Enables the client to discover which layers are part of a common store, if any. {meshes, polygons, points, lines, analytics, meshpyramids, pointclouds, symbols} |
| profile | string | Indicates which profile this scene store fulfills. |
| resourcePattern | string[] | Indicates the resources needed for rendering and the required order in which the client should load them. <div>Possible values for each array string:<ul><li>`3dNodeIndexDocument`: JSON file describes a single index node within a store, with links to other nodes (children, sibling, and parent), links to feature data, geometry data and texture data resources, metadata such as metrics used for LoD selection, its spatial extent.</li><li>`SharedResource`: Shared resources are models or textures that can be shared among features within the same layer.</li><li>`FeatureData`: The FeatureData JSON file(s) contain geographical features with a set of attributes, accessors to geometry attributes and other references to styling or materials.</li><li>`Geometry`: Each geometry resource is an array of geometries.</li><li>`Texture`: The texture resource for a node contains the images that are used as textures for the features stored in the node.</li></ul></div> |
| rootNode | string | Relative URL to root node resource. |
| version | string | Format version of this resource; used here again if this store hasn't been served by a 3D Scene Server. |
| extent | number[] | The 2D spatial extent (xmin, ymin, xmax, ymax) of this store, in the horizontal indexCRS. |
| indexCRS | string | The horizontal CRS used for all minimum bounding spheres (mbs) in this store, identified by an OGC URL. |
| vertexCRS | string | The horizontal CRS used for all 'vertex positions' in this store, identified by an OGC URL. |
| normalReferenceFrame | string | Describes the coordinate reference frame used for storing normals.  <div>Possible values are:<ul><li>`east-north-up`: A value of *east-north-up* indicates that normals are stored in a node local reference frame defined by the easting, northing and up directions at the MBS center, and is only valid for geographic (WGS84) vertexCRS.</li><li>`earth-centered`: A value of *earth-centered* indicates that normals are stored in a global earth-centered, earth-fixed (ECEF) reference frame where the x-axis points towards Prime meridian (lon = 0°) and Equator (lat = 0°), the y-axis points East towards lon = +90 and lat = 0 and the z-axis points North. It is only valid for geographic vertexCRS.</li><li>`vertex-reference-frame`: A value of *vertex-reference-frame* indicates that normals are stored in the same reference frame as vertices and is only valid for projected vertexCRS.</li></ul></div> |
| nidEncoding | string | MIME type for the encoding used for the Node Index Documents. Example: application/vnd.esri.I3S.json+gzip; version=1.6. |
| featureEncoding | string | MIME type for the encoding used for the Feature Data Resources. For example: application/vnd.esri.I3S.json+gzip; version=1.6. |
| geometryEncoding | string | MIME type for the encoding used for the Geometry Resources. For example: application/octet-stream; version=1.6. |
| textureEncoding | string[] | MIME type(s) for the encoding used for the Texture Resources. |
| lodType | string | Optional field to indicate which LoD generation scheme is used in this store.<div>Possible values are:<ul><li>`MeshPyramid`: Used for integrated mesh and 3D scene layer.</li><li>`Thinning`: Use for point scene layer.</li><li>`Clustering`: Fill in which profile types are using this lodType</li><li>`Generalizing`: Fill in which profile types are using this lodType</li></ul></div> |
| lodModel | string | Optional field to indicate which LoD switching mode clients have to use.<div>Possible values are:<ul><li>`node-switching`: Definition missing!</li><li>`none`: Definition missing!</li></ul></div> |
| indexingScheme | string | Information on the Indexing Scheme (QuadTree, R-Tree, Octree, ...) used. |
| defaultGeometrySchema | [common::defaultGeometrySchema](defaultGeometrySchema.md) | A common, global ArrayBufferView definition that can be used if the schema of vertex attributes and face attributes is consistent in an entire cache; this is a requirement for meshpyramids caches. |
| defaultTextureDefinition | [common::texture](texture.md) | A common, global TextureDefinition to be used for all textures in this store. The default texture definition uses a reduced profile of the full TextureDefinition, with the following attributes being mandatory: encoding, uvSet, wrap and channels. |
| defaultMaterialDefinition | [common::material](material.md) | If a store uses only one material, it can be defined here entirely as a MaterialDefinition. |

*Note: properties in **bold** are required*

