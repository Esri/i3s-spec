/**
	Example i3s 1.3 3d Scene Layer Resource for the Meshpyramids profile.
*/
{
	"id": 0, // the ID of this layer, unique within a 3dSceneService.
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the newest version (store update session ID) of this layer.
	"name": "PublicBuildings", // the name of this layer.
	"alias": "Public Buildings", // the display alias to be used for this layer.
	"description" : "This layer contains textured Building features for the City of Zurich.\n", // Cache description 
	"copyrightText" : "Vermessungsamt der Stadt Zürich", // copyright/usage information
	"capabilities" : ["View"], // capabilities possible on this layer.
	"store": { // information on the store (a grouping of 1..* layers to a shared index and resource set) of which this layer is a part.
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"profile": "meshpyramids", // i3s 1.3. Indicates which profile this scene store fulfills. One of {features-meshes, features-polygons, features-points, features-lines, analytics, meshpyramids, pointclouds, symbols}.
		"rootNode": "./nodes/root", // relative URL to root node resource.
		"version": "1.3", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS 
		"geographicCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"projectedCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL. 
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.3", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.3",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream+gzip; version=1.3", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": "image/jpeg", // MIME type for the encoding used for the Texture Resources
		"lodType": "MeshPyramid", // optional field to indicate which LoD Scheme is used in this store. Selected from {MeshPyramid, FeatureTree}.
		"knownVertexOrder": true, // optional vertex order indicator field to tell clients whether they can safely use backface culling.
		"indexingScheme": { // Indexing Scheme properties
			"name": "QuadTree", // name of the scheme, selected from {esriRTree, QuadTree, AGOLTilingScheme}
			"inclusive": true, // true indicates that the extent and mbs of all children nodes is fully within their parent nodes' extent/mbs 
			"dimensionality": 2, // number of dimensions in which this index differentiates. 
			"childrenCardinality": [0,9], // min/max number of children per node.
			"neighborCardinality": [0,9] // min/max number of neighbors per node.
		},
		"defaultGeometrySchema": { // since i3s 1.3: geometry resource layout for nodes that declare the use of defaultGeometrySchema in the node index.
			"header": [	// header fields that precede the vertex data
				{
					"property": "vertexCount", // vertex count 
					"type": "UInt32"
				}
			],
			"topology": "PerAttributeArray", // one of ["PerAttributeArray", "InterleavedArray", "Indexed"]. When "Indexed", the indices must also be declared in the geometry schema and precede the vertexAttribute data.
			"vertexAttributes": [ // the vertex attributes must appear in the order that they are declared here. 
				"position": { // the name of the vertex attribute; here: vertex positions
					"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  Int16, Int32, Int64 or *Float32*, Float64
					"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
				},
				"normal": { // the name of the vertex attribute; here: vertex normals
					"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
					"valuesPerElement": 3 // number of (Int16) values need to make a valid element (here a normal vector)
				},
				"uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
					"valueType": "Float32", // the element type, either UInt8, UInt16, UInt32,  *Int16*, Int32, Int64 or Float32, Float64
					"valuesPerElement": 2 // number of (Int16) values need to make a valid element (here a texture coordinate that will be normalized)
				}
			]
		},
		"defaultTextureDefinition": {
			"encoding" : ["image/jpeg", "image/dxt5"],
			"uvSet": "uv0", 
			"channels": "rgba", 
		},
		"defaultMaterialDefinition": {
			"type": "standard",
			"params" : {
				"vertexColors" : false, // {*false*, true} Indicates whether this Material uses Vertex Colors.
				"reflectivity" : 0, // [*0*..1] reflectivity for the shader, 0 is min, 1 is max (full environment reflectivity)
				"transparency" : 0, // [*0*..1]transparency for the shader, 0 is opaque, 1 is fully transparent
				"ambient" : [0, 0, 0], // [*0*..1], [*0*..1], [*0*..1]
				"diffuse" : [1, 1, 1], // [0..*1*], [0..*1*], [0..*1*]
				"specular" : [0.1, 0.1, 0.1], // [0..*1*], [0..*1*], [0..*1*]
				"shininess" : 1, // [0..*1*], amount of specular highlights, 0 is none, 1 is max (for shader)
				"renderMode": "solid", // options: {*solid*, untextured, wireframe}
				"castShadows": true, // I3S 1.2
				"receiveShadows": true // I3S 1.2
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
	]
}