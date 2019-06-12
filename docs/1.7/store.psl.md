# store [Point Profile]

The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. Storing multiple layers in a single store - and thus having them share resources - enables efficient serving of many layers of the same content type, but with different attribute schemas or different symbology applied.

### Related:

[psl::3DSceneLayer](3DSceneLayer.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | string | A store ID, unique across a SceneServer. Enables the client to discover which layers are part of a common store, if any. {meshes, polygons, points, lines, analytics, meshpyramids, pointclouds, symbols} |
| **profile** | string | Indicates which profile this scene store fulfills. |
| resourcePattern | string[] | Indicates the resources needed for rendering and the required order in which the client should load them. <div>Possible values for each array string:<ul><li>`3dNodeIndexDocument`: JSON file describes a single index node within a store, with links to other nodes (children, sibling, and parent), links to feature data, geometry data and texture data resources, metadata such as metrics used for LoD selection, its spatial extent. [Read more](docs/1.6/3DNodeIndexDocument.cmn.md)</li><li>`SharedResource`: Shared resources are models or textures that can be shared among features within the same layer.</li><li>`featureData`: The FeatureData JSON file(s) contain geographical features with a set of attributes, accessors to geometry attributes and other references to styling or materials.</li><li>`Geometry`: Each geometry resource is an array of geometries.</li><li>`Texture`: The texture resource for a node contains the images that are used as textures for the features stored in the node.</li><li>`Attributes`: Attribute resource for node containing feature data attributes</li></ul></div> |
| rootNode | string | Relative URL to root node resource. |
| **version** | string | Format version of this resource; used here again if this store hasn't been served by a 3D Scene Server. |
| extent | number[4] | The 2D spatial extent (xmin, ymin, xmax, ymax) of this store, in the horizontal indexCRS. |
| indexCRS | string | The horizontal CRS used for all minimum bounding spheres (mbs) in this store, identified by an OGC URL. |
| vertexCRS | string | The horizontal CRS used for all 'vertex positions' in this store, identified by an OGC URL. |
| normalReferenceFrame | string | Describes the coordinate reference frame used for storing normals.  <div>Possible values are:<ul><li>`east-north-up`: Normals are stored in a node local reference frame defined by the easting, northing and up directions at the MBS center, and is only valid for geographic (WGS84) vertexCRS.</li><li>`earth-centered`: Normals are stored in a global earth-centered, earth-fixed (ECEF) reference frame where the x-axis points towards Prime meridian (lon = 0°) and Equator (lat = 0°), the y-axis points East towards lon = +90 and lat = 0 and the z-axis points North. It is only valid for geographic vertexCRS.  Default value for OGC.</li><li>`vertex-reference-frame`: Normals are stored in the same reference frame as vertices and is only valid for projected vertexCRS.</li></ul></div> |
| nidEncoding | string | MIME type for the encoding used for the Node Index Documents. Example: application/vnd.esri.I3S.json+gzip; version=1.6. |
| featureEncoding | string | MIME type for the encoding used for the Feature Data Resources. For example: application/vnd.esri.I3S.json+gzip; version=1.6. |
| geometryEncoding | string | MIME type for the encoding used for the Geometry Resources. For example: application/octet-stream; version=1.6. |
| attributeEncoding | string | MIME type for the encoding used for the Attribute Resources. For example: application/octet-stream; version=1.6. |
| textureEncoding | string[] | MIME type(s) for the encoding used for the Texture Resources. |
| lodType | string | Optional field to indicate which LoD generation scheme is used in this store.<div>Possible values are:<ul><li>`MeshPyramid`: Used for integrated mesh and 3D scene layer.</li><li>`AutoThinning`: Use for point scene layer.</li><li>`Clustering`: Fill in which profile types are using this lodType</li><li>`Generalizing`: Fill in which profile types are using this lodType</li></ul></div> |
| lodModel | string | Optional field to indicate the [LoD switching](docs/1.6/lodSelection.cmn.md) mode.<div>Possible values are:<ul><li>`node-switching`: A parent node is substituted for its children nodes when its lod threshold is exceeded. This implies that: parent and children are never shown at the same time.  The bounding volumne of the parent has to enclose the features of all grandchildren. Nodes have a single parent, except the root node that have no parent.</li><li>`none`: No switching model.</li></ul></div> |
| indexingScheme | string | Information on the Indexing Scheme (QuadTree, R-Tree, Octree, ...) used. |
| defaultGeometrySchema | [defaultGeometrySchema](defaultGeometrySchema.cmn.md) | A common, global ArrayBufferView definition that can be used if the schema of vertex attributes and face attributes is consistent in an entire cache; this is a requirement for meshpyramids caches. |
| defaultTextureDefinition | [texture](texture.cmn.md) | A common, global TextureDefinition to be used for all textures in this store. The default texture definition uses a reduced profile of the full TextureDefinition, with the following attributes being mandatory: encoding, uvSet, wrap and channels. |
| defaultMaterialDefinition | [material](material.cmn.md) | If a store uses only one material, it can be defined here entirely as a MaterialDefinition. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Store example 

```json
 {
  "id": "e9ecfade-0d85-4dd7-abb5-a3b0a07b9fd7",
  "profile": "meshpyramids",
  "resourcePattern": [
    "3dNodeIndexDocument",
    "SharedResource",
    "Geometry",
    "Attributes"
  ],
  "rootNode": "./nodes/root",
  "version": "1.6",
  "extent": [
    -106.5054122583675,
    38.99467780548919,
    -103.99630101552692,
    39.99697134061471
  ],
  "indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326",
  "vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326",
  "nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.4",
  "featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.4",
  "geometryEncoding": "application/octet-stream; version=1.4",
  "attributeEncoding": "application/octet-stream; version=1.4",
  "textureEncoding": [
    "image/jpeg",
    "image/vnd-ms.dds"
  ],
  "lodType": "MeshPyramid",
  "lodModel": "node-switching",
  "defaultGeometrySchema": {
    "geometryType": "triangles",
    "header": [
      {
        "property": "vertexCount",
        "type": "UInt32"
      },
      {
        "property": "featureCount",
        "type": "UInt32"
      }
    ],
    "topology": "PerAttributeArray",
    "ordering": [
      "position",
      "normal",
      "uv0",
      "color"
    ],
    "vertexAttributes": {
      "position": {
        "valueType": "Float32",
        "valuesPerElement": 3
      },
      "normal": {
        "valueType": "Float32",
        "valuesPerElement": 3
      },
      "uv0": {
        "valueType": "Float32",
        "valuesPerElement": 2
      },
      "color": {
        "valueType": "UInt8",
        "valuesPerElement": 4
      }
    },
    "featureAttributeOrder": [
      "id",
      "faceRange"
    ],
    "featureAttributes": {
      "id": {
        "valueType": "UInt64",
        "valuesPerElement": 1
      },
      "faceRange": {
        "valueType": "UInt32",
        "valuesPerElement": 2
      }
    }
  }
} 
```

