/**
	Example i3s 1.3 3d Scene Layer Resource for the features-lines profile.
*/
{
	"id": 0, // the ID of this layer, unique within a 3dSceneService.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the newest version (store update session ID) of this layer.
	"name": "TramwayLines", // the name of this layer.
	"alias": "Tramway Lines", // the display alias to be used for this layer.
	"description" : "This layer contains tram lines for the City of Zurich.\n", // Cache description 
	"copyrightText" : "ZVV", // copyright/usage information
	"capabilities" : ["View"], // capabilities possible on this layer. If not served by a 3D Scene Server (e.g. exported by CE), "View" only.
	"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"profile": "features-lines", // i3s 1.3. Indicates which profile this scene store fulfills. One of {features-meshes, features-polygons, features-points, features-lines, analytics, meshpyramids, pointclouds, symbols}.
		"rootNode": "./nodes/0", // relative URL to root node resource.
		"version": "1.3", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS 
		"geographicCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"projectedCRS": "http://www.opengis.net/def/crs/EPSG/0/32632", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.3", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.3",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream+gzip; version=1.3", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
		"lodType": "FeatureTree", // optional field to indicate which LoD Scheme is used in this store. Selected from {MeshPyramid, FeatureTree}.
		"indexingScheme": { // Indexing Scheme properties
			"name": "esriRTree", // name of the scheme, selected from {esriRTree, QuadTree, AGOLTilingScheme}
			"inclusive": true, // true indicates that the extent and mbs of all children nodes is fully within their parent nodes' extent/mbs 
			"dimensionality": 3, // number of dimensions in which this index differentiates. 
			"childrenCardinality": [0,9], // min/max number of children per node.
			"neighborCardinality": [0,9] // min/max number of neighbors per node.
		},
		"defaultGeometrySchema": { // since i3s 1.3: common properties of all geometry buffer views in this cache. Note: Per geometry resource, only 1 Geometry may be present when using the defaultGeometrySchema. This pattern is mostly used with MeshPyramids.
			"vertexAttributes": {
				"position": { // the name of the vertex attribute; here: vertex positions
					"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  Int16, Int32, Int64 or *Float32*, Float64
					"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
				},
				"normal": { // the name of the vertex attribute; here: vertex normals
					"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
					"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a normal vector)
				},
				"uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
					"valueType": "Int16", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
					"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a texture coordinate that will be normalized)
				}
			},
			"faces": { // indices for positions, normals, texture coordinates to build faces. This is an open list.
				"position": { // position index array buffer view
					"valueType": "Int16",
					"valuesPerElement": 1
				},
				"normal": { // normals index array buffer view
					"valueType": "Int16",
					"valuesPerElement": 1
				},
				"uv0": { // texture coordinates index array buffer view
					"valueType": "Int16",
					"valuesPerElement": 1
				}
			}
		}
	},
	"fields" :	[ // schema definition for this layer, as with 2D Layers.
		{
		  "name" : "ObjectID", 
		  "type" : "esriFieldTypeOID", 
		  "alias" : "ObjectID"
		}, 
		{
		  "name" : "type", 
		  "type" : "esriFieldTypeString", 
		  "alias" : "Building Type"
		}, 
		{
		  "name" : "usage", 
		  "type" : "esriFieldTypeString", 
		  "alias" : "Building usage"
		}, 
		{
		  "name" : "totalHeight", 
		  "type" : "esriFieldTypeFloat", 
		  "alias" : "Total Height"
		}, 
		{
		  "name" : "eaveHeight", 
		  "type" : "esriFieldTypeFloat", 
		  "alias" : "Eave Height"
		}, 
		{	// Special attributes that are stored per geometry component are also declared here.
		  "name" : "classification", // name of the vertex attribute as also defined in FeatureData/Geometries
		  "type" : "esriFieldTypeVertexAttribute", // specific field type constant to indicate this is a vertex attribute. options: {esriFieldTypeVertexAttribute, esriFieldTypeFaceAttribute} 
		  "alias" : "Point Classification"
		}, 
		{	// 
		  "name" : "color", 
		  "type" : "esriFieldTypeVertexAttribute", 
		  "alias" : "Color"
		}
	],
	"drawingInfo": { // The default symbology to use on this layer.
		"renderer": {
			"type": "simple", // renderer definition
			"symbol": {
				"type": "CIMSymbolReference", // indicates that below this item, the expected structure is identical to WebCIM.
				"symbolName": "Symbol_123",
				"symbol": {
					
				}
			}
		}
	}
}