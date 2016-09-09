/**
	Example i3s 1.5 3d Scene Layer Resource for the Meshpyramids profile.
*/
{
	"id": 0, // the ID of this layer, unique within a 3dSceneService.
	"layerType": "3DObject", // the type of this layer, one of {Point, Line, Polygon, *3DObject*, Pointcloud}
	"version": "ee4fbf04-e882-444e-854d-cd519b68594a", // the newest version (store update session ID) of this layer.
	"ZFactor": 1.0, // Multiplier for z ordinate to arrive at meters.
	"name": "PublicBuildings", // the name of this layer.
	"spatialReference": {"wkid": 4326, "latestWkid": 4326}, // The spatialReference of the layer
	"alias": "Public Buildings", // the display alias to be used for this layer.
	"description" : "This layer contains textured Building features for the City of Zurich.\n", // Cache description
	"copyrightText" : "Vermessungsamt der Stadt Z�rich", // copyright/usage information
	"capabilities" : ["View","Query"], // capabilities possible on this layer.,
	"cachedDrawingInfo": {"color":  //cachedDrawingInfo.color - a true value indicates that the drawingInfo color is captured/cached as vertex colors. The drawingInfo used to generate the color cache is saved and present in scene service layer cache.
	false}, //A false value (or abscene of the object) indicates that the scene cache for the layer does not include a cached representation of the symbology for color.The client applies standard behavior where material/meshcolors are interpreted and any drawinginfo present at the WebScene Layer or Map is rendered over it.
	"drawingInfo": {"renderer":{"type":"simple","symbol":{"type":"MeshSymbol3D","symbolLayers":[{"type":"Fill","material":{"color":[255,255,255],"transparency":0}}]},"label":"","description":""}} // the layer drawingInfo. Refrer to https://developers.arcgis.com/web-map-specification/objects/renderer/
	"store": { // information on the store
		"id" : "9f62cd8f-0ab7-451e-917a-65ec8e10a432", // store ID - unique across a SceneServer. Enables the client to discover which layers a part of a common store, if any.
		"profile": "meshpyramids", // Indicates which profile this scene store fulfills. One of {features-meshes, features-polygons, features-points, features-lines, analytics, meshpyramids, pointclouds, symbols}.
		"resourcePattern": ["3dNodeIndexDocument", "Geometry", "Texture"], // The resources need for rendering and the required order in which the client should load them.
		"rootNode": "./nodes/root", // relative URL to root node resource.
		"version": "1.5", // format version of this resource; used here again if this store hasn't been served by a 3D Scene Server.
		"extent": [47.385, 8.54, 47.455, 8.72], // the spatial extent of this store, in the horizontal indexCRS
		"indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all minimum bounding spheres (mbs) in this cache, identified by a OGC URL.
		"vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326", // the horizontal CRS used for all "vertex positions" in this cache, identified by a OGC URL.
		"nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.5", // MIME type for the encoding used for the Node Index Documents
		"featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.5",  // MIME type for the encoding used for the Feature Data Resources
		"geometryEncoding": "application/octet-stream+gzip; version=1.5", // MIME type for the encoding used for the Geometry Resources
		"textureEncoding": ["image/jpeg", "image/vnd-ms.dds"], // MIME types for the encoding used for the Texture Resources
		"lodType": "MeshPyramid", // optional field to indicate which LoD Generation Scheme is used in this store. Selected from {*MeshPyramid*, FeatureTree, Thinning, Clustering, Generalizing}.
		"lodModel": "node-switching", // optional field to indicate which LoD Switching mode clients have to use. One of {*node-switching*, feature-switching, none}.
		"defaultGeometrySchema": { // geometry resource layout for nodes that declare the use of defaultGeometrySchema in the node index.
			"geometryType": "triangles", // Low-level default geometry type, one of {triangle_strip, triangles, lines, points}; if defined, all geometries in the store are expected to have this type.
			"header": [	// header fields that precede the vertex data
				{
					"property": "vertexCount", // vertex count
					"type": "UInt32" // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
				},
				{
					"property": "faceCount", // face count
					"type": "UInt32" // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
				},
				{
					"property": "featureCount", // feature count
					"type": "UInt32" // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
				}
			],
			"topology": "PerAttributeArray", // one of ["PerAttributeArray", "Indexed"]. When "Indexed", the indices must also be declared in the geometry schema ("faces") and precede the vertexAttribute data.
			"ordering": ["position", "normal", "uv0", "region"], // provides the order of the keys in vertexAttributes and faceAttributes, if present.
			"vertexAttributes": { // the vertex attributes must appear in the order that they are declared here.
				"position": { // the name of the vertex attribute; here: vertex positions
					"valueType": "Float32", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
					"valuesPerElement": 3  // number of (Float32) values need to make a valid element (here a xyz position)
				},
				"normal": { // the name of the vertex attribute; here: vertex normals
					"valueType": "Float32", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
					"valuesPerElement": 3 // number of (Float32) values need to make a valid element (here a normal vector)
				},
				"uv0": { // the name of the vertex attribute; here: 1st texture coordinates, must be present if a textureID is referenced
					"valueType": "Float32", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
					"valuesPerElement": 2 // number of (Float32) values need to make a valid element (here a texture coordinate that will be normalized)
				},
				"region": { // per-vertex region info. analogous to textureDefinitions.regions in sharedResource. Values define uv-coordinates of region borders: [umin, vmin, umax, vmax]
					"valueType": "UInt16", // the element type, always UInt16 for region info
					"valuesPerElement": 4 // number of (UInt16) values need to make a valid element (here a region info)
				}
			},
			"featureAttributeOrder": ["id", "faceRange"], // provides the order of the keys in featureAttributes object, if present.
			"featureAttributes": {
				"id": {
					"valueType": "UInt64", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
					"valuesPerElement": 1 // number of (UInt64) values need to make a valid element (here a feature ID)
				},
				"faceRange": {
					"valueType": "UInt32", // the element type, from {UInt8, UInt16, UInt32, UInt64, Int16, Int32, Int64, *Float32*, Float64}
					"valuesPerElement": 2 // number of (UInt32) values need to make a valid element (here a faceRange with minIndex/length)
				}
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
		  "name" : "totalHeight",
		  "type" : "esriFieldTypeFloat",
		  "alias" : "Total Height"
		},
		{
		  "name" : "eaveHeight",
		  "type" : "esriFieldTypeDouble",
		  "alias" : "Eave Height"
		}
	],
	"attributeStorageInfo":[ // see AttributeData section in spec
	{
	"key": "f_0",
	"name": "objectid",
	"header": [{
		"property": "count",
		"valueType": "UInt32"
	}],
	"ordering": ["ObjectIds"],
	"objectIds": {
		"valueType": "UInt32",
		"valuesPerElement": 1
	  }
  },
  {
	"key": "f_1",
	"name": "type",
	"header": [{
		"property": "count",
		"valueType": "UInt32"
	}, {
		"property": "attributeValuesByteCount",
		"valueType": "UInt32"
	}],
	"ordering": ["attributeByteCounts", "attributeValues"],
	"attributeByteCounts": {
		"valueType": "UInt32",
		"valuesPerElement": 1
	},
	"attributeValues": {
		"valueType": "String",
		"encoding": "UTF-8",
		"valuesPerElement": 1
	}
  },
	{
	"key": "f_2",
	"name": "totalHeight",
	"header": [{
		"property": "count",
		"valueType": "UInt32"
	}],
	"ordering": ["attributeValues"],
	"attributeValues": {
		"valueType": "Float32",
		"valuesPerElement": 1
	 }
  },
	{
	"key": "f_3",
	"name": "totalHeight",
	"header": [{
		"property": "count",
		"valueType": "UInt32"
	}],
	"ordering": ["attributeValues"],
	"attributeValues": {
		"valueType": "Float64",
		"valuesPerElement": 1
	  }
   }
 ]
}
