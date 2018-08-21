# Extended I3S for high performance meshes

## Design goals:
In order to improve I3S drawing/loading performances, the following changes have been identified:

### Performance improvements
1. Group (and streamline) `NodeIndex` object into page of `n` nodes
2. Drop `sharedResource` extra request per node   
3. More efficient mesh geometry (indexed-mesh, compressed normals, compressed positions)
4. Texture compression support. (already in progress. Not covered in this document)

### Forward-compatibility
Importantly, we would like to make these improvements "non-breaking" and preserve forward compatibility (i.e. "old" 3D clients would "ignore" new features and still be able to draw the data correctly).
This also implies that publishing "extended" SLPK to older server still works. In this case,  extended resources will be **ignored/dropped by older servers** so 3D client must be prepare to handle this. For example:
1. Check if "extended" capabilities are present in 3DSceneLayer.json
2. YES: request the first page `layers/0/nodepages/0`. 
3. 404: -> back to legacy mode. 200 -> Extended feature are **actually** present. 

With paged-access, nodes cannot be identified by `tree-key` anymore. Fortunately, existing clients do not require `node_ids`  to be `tree-keys`.  

### Feature/specs improvements 
We're also considering adding the following features to this new I3S extension:

- Support for multi-mesh nodes with "per-mesh" material (avoid node duplication /co-trees for different materials) 
- Advanced materials (i.e. PRB, glTF like: Improve visual appearance of 3D objects)
- Multi-texture per mesh ( to support IM textured-attribute)
- Mesh instancing (Potentially significant speed up for BIM instanced models) 
- Texture transparency hints (`alphaMode`, `alphaCutoff`). Avoid "disappearing" semi-transparent object in WSV when alpha < 0.33 and alpha-mask is *not* intended. Avoid scanning all texels for alpha values)
- Support for mixed topology (triangle, point, line) 
- support for "split" vertex buffers to reduce bandwidth (same geometry may be served "compressed" or "uncompressed") 
 
## Proposed design 

For forward-compatibility, all existing resource will be left unchanged, but new resource will be added:


The structure of an _extended_ I3S service is shown below (`*`: extended resources):
```
+--3DSceneLayer.json (with added fields*) 
+--nodes 
|  +--0
|  |  +--3dNodeIndexDocument (deprecated)
|  |  +--features (deprecated?)
|  |  +--attributes
|  |  |  +--0 
|  |  |  +--(...) 
|  |  +--geometries
|  |  |  +--0
|  |  |  +--1*
|  |  +--shared (deprecated)
|  |  |  +--sharedResource 
|  |  +--textures   
|  |  |  +--0  (e.g. "jpeg")
|  |  |  +--1  (e.g. "dds")
|  |  |  +--(...) 
|  |  +--instances*
|  |  |  +--0* 
|  |  |  +--(...)* 
|  +--(...)
+--nodepages*
|  +--0*
|  +--1*
|  +--(...)*
+--shared*
|  +--textures*
|  |  +--0* 
|  |  +--(...)* 
+-- statistics 
```

and new fields will be added to `3DSceneLayer.json`:
``` js
{	//`3DSceneLayer.json`
	// ... unchanged "legacy" v1.6 content
	"nodePages" : 
	{
		"nodePerPage": 64,
		"lodSelectionMetricType": "maxScreenThreshold",
	}
	"textureSetDefinitions" : [ ... ] // see below
	"materialDefinitions" : [ ... ] // see below
	"instanceBufferDefinitions"  : [...] //see below
	"meshDefinitions": [ ... ] //see below.
}
```
 

## 1. Paged Access 
Since nodes are now packed into pages (i.e. 64 nodes per page), we have to use integer ID to map a node to its page as follow:

	page_id         = floor( node_id / node_per_page)
	node_id_in_page = modulo( node_id, node_per_page)


Having many nodes in a single json document impose to keep each node object as compact as possible. Below a _single_ node object from a page:
``` js
{ // layers/0/nodepages/12.json
    "nodes":[
        {
        "index": 4352, 				//required: index of this node in the array of nodes.
        "lodThreshold": 3161.3, //optional: see 3dSceneLayer.json for the type ( i.e. : "lodSelectionMetricType" : "maxScreenThreshold")
        "obb": {					//required: only support OBB (no MBS). 
            "center": [2.82,41.988,76.56],
            "halfSize": [14.93,11.4,7.3150],
            "quaternion": [-0.070,0.0305,-0.0569,0.9]
        },
        "children" : [23, 7890, 253], //Optional: array of node index in the array of nodes.
        "meshes" : [				//Optional : 'empty' nodes are okay.
          {
            "materialId" : 0,		//optional?: material definition ID 
            "geometryDefinitionId" : 0,	// definition will contain the vertex buffer layout and available attribute buffers and their type+encoding.
            "resourceId" : 12488,	//required: de-couples index-id from buffer/resource ids
            // transformation order is 1) scale, 2) rotation and 3) translation
            "scale": [ 1.0, 1.0, 1.0],          // optional, in local space (i.e. mesh space)
            "rotation": [ 0.0, 0.0, 0.0],       // optional, in local space
            "translation": [ 0.0, 0.0, 0.0],    // optional, in local space
            "texelCountHint": 1048576,  //optional (default=0 ->untextured):  "color" texture size (for memory estimation)
            "vertexCount": 526,   //required: needed to interpret geometry buffer correctly.
            "indexCount": 21750,  //required (for indexed-mesh) needed to interpret geometry correctly.
            "featureCount": 26   //required: needed to interpret geometry buffer correctly.
          }
        ],
        "instances" : //optional. Instancing applies to all geometries in this node.  
        {
            "instanceDefinitionId" : 3,
            "resourceId" : 1014,		//instance buffer at url: layers/0/nodes/1014/{instanceBufferDefinitions[3].index})
            "instanceCount" : 142
        }
    }
    //...
    ]
}
```

#### LodSelection
We replace the "array" of selection objects ( `lodSelection[]` ) with single **scalar value**.
_TBD_: 
- Unless we have a strong case for supporting anything else, we should settle on a **single** `lodSelectionMetricType` ( i.e. projected pixel area?)
- LOD selection type would become _per-layer_ instead of per node. 

#### OBB only
We only support OBB in the extended format for performance reasons. (but deprecated `3DNodeIndexDocument.json` would still be written with MBS for compatibility)

#### Per-node meta-data
`texelCountHint`, `vertexCount`, `indicesCount` and `featureCount` are required to:
- Infer the GPU memory required for each node. (this could help 3D clients with LOD selection)
- parse the geometry buffer (compute size in bytes of each attributes)

####  `resourceId` to facilitate editing. Drop `href` strings
Switch to _implicit_ buffer reference : geometry, attributes and texture may be access using a **known paths**:
```
nodes/{resourceId}/geometries/{buffer_id}
nodes/{resourceId}/attributes/{attribute_id}
nodes/{resourceId}/textures/{texture_id}
```
using `resourceId` to access resource buffers -and not `index`- de-couples the index nodes (light weight) from the (immutable & heavier) resources. This should greatly faciliate editing.

## 1. Replace `sharedResource` by shared `materialDefinition`
To avoid the extra `sharedResource` query, we introduce the concept of a `materialDefinition` that would indicate where to find textures based on their role.
For example:
``` js
{ 
	// ...
   "textureSetDefinitions": [
        {
            "formats": [
                {
                    "index": 0,// index in resources/{resource_id}/textures/{index} (per-node binding)
                    "format": "jpeg"
                },
                {
                    "index": 1, // index in resources/{resource_id}/textures/{index} (per-node binding)
                    "format": "dds"
                }
            ],
            "binding": "per-node" //in ["per-node", "per-layer"]
        },
        {
            "formats": [
                {
                    "index": 10,  //  shared/textures/{index} (per-layer binding)
                    "format": "jpeg"
                }
            ],
            "binding": "per-layer" 
        },
        {
            "formats": [
                {
                    "index": 30,  //  shared/textures/{index} (per-layer binding)
                    "format": "jpeg"
                }
            ],
            "binding": "per-layer" 
        }
    ],
    "materialDefinitions": [
        {
            "alphaMode" : "mask", // could be "opaque" or "blend".
            "alphaCutoff": 0.25,  // define the "threshold" for alpha masking texels
            "pbrMetallicRoughness": {
                "baseColorFactor": [
                    0.5,
                    0.5,
                    0.5,
                    1.0
                ],
                "baseColorTexture": {
                    "texSet": 0, // index in textureSetDefinitions[] above
                    "texCoord": 0 // set of UV to use for baseColorTexture
                },
                "metallicFactor": 1,
                "roughnessFactor": 1,
                "metallicRoughnessTexture": {
                    "texSet": 2, // index in textureSetDefinitions[] above
                    "texCoord": 1 // set of UV to use for metallicRoughnessTexture
                }
            },
            "normalTexture": {
                "texSet": 1, // index in textureSetDefinitions[] above
                "scale": 2,
                "texCoord": 1 // set of UV to use for normalTexture
            },
            "emissiveFactor": [
                0.2,
                0.1,
                0.0
            ]
        }
    ],
 //...
}
```

**TBD:** 
- Add `meshSymbol` object to `materialDefinitions` ( `wireframe`,`render_edge`, etc.)
- Double-sided lighting. 
- Plan support for texture arrays ?


# 3. Efficient  `meshDefinition`

Having multiple `meshDefinition` objects in `extended.json` allows for more efficient geometry definition. For instance, meshes may have different vertex attributes, topology and attributes within a single layer. 
This approach also solve a short-coming in legacy I3S for `uvRegions` attribute. This attribute is only needed for nodes using _repeated_ texture so to save space, current implementation silently omits it in some binary buffers *despite being listed in the `defaultGeometryDescription` json object* -which would break clients unexpectedly-.  With the `extended` specs, meshes with `uvRegion` would reference a different `meshDefinitionId` than meshes without them.     

**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing. Attribute that are present are store contiguously. (TBD: memory alignment requirement?, support more that 2 UV sets?) 
```
index
position
normal
uv0
uv1
color
uvRegion
featureId
faceRange
```

``` js
{ 	// extended.js
	// ...
     "meshDefinitions": [
        {
            "topology": "triangle", // could be point, line or triangle
            "geometryBuffers": [
                {
                    // buffer 0 has "legacy" un-indexed, un-compressed geometry for forward compatibility (url: /node/{id}/geometry/0)
                    "position": {
                        "type": "Float32",
                        "component": 3,
                        "encoding": "none",
                        "binding": "per-vertex"
                    },
                    "normal": {
                        "type": "Float32",
                        "component": 3,
                        "encoding": "none",
                        "binding": "per-vertex"
                    },
                    "uv0": {
                        "type": "UInt16",
                        "component": 2,
                        "encoding": "normalized",
                        "binding": "per-vertex"
                    },
                    "featureId": {
                        "type": "UInt32",
                        "component": 1, // must be 1
                        "binding": "per-feature" //could be per "per-face"
                    },
                    "faceRange": {
                        "type": "UInt32",
                        "component": 2, // must be 2
                        "binding": "per-feature" //mandatory
                    }
                },
                {
                    // buffer 1 has indexed geometry with compressed normal and quantized positions (url: /node/{id}/geometry/1)
                    //         FeatureID array is in separate buffer (to potentially reduce download size)
                    "indice": {
                        "type": "UInt32"
                    },
                    "position": {
                        "type": "UInt16",
                        "component": 3,
                        "encoding": "fixed-point",
                        "scale": 100.0,
                        "offset": 14500.0,
                        "binding": "per-vertex"
                    },
                    "normal": {
                        "type": "UInt16",
                        "component": 2,
                        "encoding": "normal-compression",
                        "binding": "per-face"
                    },
                    "uv0": {
                        "type": "UInt16",
                        "component": 2,
                        "encoding": "normalized",
                        "binding": "per-vertex"
                    },
                    "color": { // Always in RGBA order.
                        "type": "UInt8",
                        "component": 3,
                        "encoding": "none", //could be indexed colors?.
                        "binding": "per-vertex" //could be "per-face" or "constant"
                    },
                    "uvRegion": { //only for repeated textures. 
                        "type": "UInt16",
                        "component": 4,
                        "encoding": "normalized",
                        "binding": "per-vertex"
                    }
                },
                {
                    // buffer 2 contains the "id" (i.e. feature ID) for each triangle
                    "featureId": {
                        "type": "UInt32",
                        "component": 1, // must be 1
                        "binding": "per-feature" //could be per "per-face"
                    },
                    "faceRange": {
                        "type": "UInt32",
                        "component": 2, // must be 2
                        "binding": "per-feature" //mandatory
                    }
                }
            ],
            "attributeBuffers": [
                {
                    "id": 10,
                    "name": "Onwer",
                    "type": "String",
                    "encoding": "indexed-utf8-string",
                    "binding": "per-feature"
                }
            ]
			
        }
    ],
    "instanceBufferDefinitions": [
        {
            "index": 5,
            "scale": {
                "type": "Float32",
                "component": 3
            },
            "rotation": {
                "type": "Float32",
                "component": 3
            },
            "translation": {
                "type": "Float32",
                "component": 3
            },
            "color": {
                "type": "UInt8",
                "component": 3
            },
            "featureId": {
                "type": "Uint32",
                "component": 1
            }
        }
    ]
 // ...
}
```
As shown in the example above, different "format/layout" for the same geometry may be provided per node.  
Typical uses-cases:
- Provide both "legacy" backward geometry buffer and "compressed/index" geometry buffers for newer clients
- Split vertex attributes in separate buffers. This saves bandwidth when some vertex attributes may not be needed ( e.g. featureId/FaceId)

**TBD:**
- for "uncompressed" vertex attributes, `vertexCount`, `indexCount` and `featureCount` provided in the node json should be sufficient to successfully parse the binary geometry buffer (i.e. infer the stride/size of each attribute). If a compression is used (e.g. draco, lepcc), then compression header should indicate the size of the compressed stream. An alternative would be to add a binary header to each geometry buffer indicating the offsets of each attributes. 
- Should the specs require each vertex attributes to be aligned on 4-byte boundaries ?  

   