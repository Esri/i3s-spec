# I3S extension to support optimized mesh

## Design goals:
In order to improve I3S drawing/loading performances, the following changes have been identified:
1. Group (and streamline) `NodeIndex` object into page of `n` nodes
2. Drop `sharedResource` extra request per node   
3. More efficient mesh geometry (indexed-mesh, compressed normals, compressed positions)
4. Texture compression support. (already in progress. Not covered in this document)

Importantly, we would like to make these improvement "non-braking" and preserve forward compatibility (i.e. "old" 3D clients would "ignore" new features and still be able to draw the data correctly).

We're also considering adding the following features to this new I3S extension:

- Support for multi-mesh nodes with "per-mesh" material (avoid node duplication /co-trees for different materials) 
- Advanced materials (i.e. PRB, glTF like: Improve visual appearance of 3D objects)
- Multi-texture per mesh ( to support IM textured-attribute)
- Mesh instancing (Potentially significant speed up for BIM instanced models) 
- Texture transparency hints (`alphaMode`, `alphaCutoff`). Avoid "disappearing" semi-transparent object in WSV when alpha < 0.33 and alpha-mask is *not* intended. Avoid scanning all texels for alpha values)
 
## Proposed design 

All existing documents, buffers and textures will be left unchanged, except for an extra (optional) field added to the root of `3DSceneLayer.json`:
``` js
{//`3DSceneLayer.json`
	// ...
	"extentedFormat" : True; // optional, default = False.
	// ...
}
```
which indicates that an extra document called `extended.json` is available.
`tree-key` are cannot be used anymore, but existing 3D clients do not rely on them.  
The structure of an _extended_ I3S service is shown below (`*`: extended resources):
```
+--3DSceneLayer.json (url: '/layer/0')
+--extended.json* (url: '/layer/0/extended' )
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


  

### Switch from `tree-key` to id

This is required to map `node_id` to the `{page_id, offset_in_page}`: 
```
page_id         = floor( node_id / node_per_page)
node_id_in_page = modulo( node_id, node_per_page)
``` 
### Compact node object: 

Since node are now packed in pages (i.e. 64 nodes per page), we have to make each Node Object as compact as possible:

- Remove all redundant information (`parent`, `neighbors` ) 
- Avoid `String`, `href` as much as possible (switch to implicit integer locator:`resourceId`)
- Move all "common" properties to the layer document, or a truly `shared` JSON document referenced by integer id (i.e. `material_id`) 
- Simplify LodSelection object (same as PCSL v2, see below )

### Example:
``` js
{
    "id": 4352, 			//required: Switch from tree key to integer id
	"resourceId" : 4352,	//required: de-couples index-id from buffer/resource ids (easier editing)
	"materialId" : 0,		//optional?: material definition ID 
    "obb": {				//required: only support OBB (no MBS) 
        "center": [2.826423693,41.98850837,76.56204143],
        "halfSize": [14.93290901,11.43357086,7.315065861],
        "quaternion": [-0.07007025182,0.03053234331,-0.05699849501,0.9954441786]
    },
    "lodThreshold": 3161.302979 //optional: see 3dSceneLayer.json for the type ( i.e. : "lodSelectionMetricType" : "maxScreenThreshold")
    "textureWidth": 1024,  //optional (default=0 ->untextured): added "color" texture size (for memory estimation) 0 if un-textured
    "textureHeight": 1024,  //optional (default=0 ->untextured): added "color" texture size (for memory estimation) 0 if un-textured
    "vertexCount": 21792   //required(?): added "vertexCount" (for vertex buffer size estimation)
	"children" : [23, 7890, 253] //Optional: array of node_id
}
```

### TBD: Example (with multiple mesh support):
``` js
{
    "id": 4352, 			//required: Switch from tree key to integer id editing)
    "lodThreshold": 3161.302979 //optional: see 3dSceneLayer.json for the type ( i.e. : "lodSelectionMetricType" : "maxScreenThreshold")
    "obb": {				//required: only support OBB (no MBS) 
        "center": [2.826423693,41.98850837,76.56204143],
        "halfSize": [14.93290901,11.43357086,7.315065861],
        "quaternion": [-0.07007025182,0.03053234331,-0.05699849501,0.9954441786]
    },
	"children" : [23, 7890, 253] //Optional: array of node_id
	"meshes" : [				//Optional : 'empty' nodes are okay.
	  {
		"materialId" : 0,		//optional?: material definition ID 
		"meshDefinitionId" : 0,	// definition will contain the vertex buffer layout and available attribute buffers and their type+encoding.
		"resourceId" : 12488,	//required: de-couples index-id from buffer/resource ids
		"transform"  : [ 1,0,0,0,
						 0,1,0,0,
						 0,0,1,0,
						 0,0,0,1], // Optional: this would allow for mesh instancing  
    	"texelCountHint": 1048576,  //optional (default=0 ->untextured):  "color" texture size (for memory estimation)
	    "vertexCount": 21792   //required(?): added "vertexCount" (for vertex buffer size estimation). 
								//TBD: for indexed-mesh, should this be the IB size instead ? (i.e. un-indexed mesh that will be drawn)
	  }
	]
}
```
#####TBD: Mesh definition ID
``` js
// NOTE: order of attribute is fixed. Attribute cannot be swizzled
{
    "id": 3, 			//required:
	"buffers : 
	[

	]
	"position" : 
	{
		type: "Float32"
		component: 3
	}
	"normal":
	
}
```
#### LodSelection

- Replace "array" of selection objects ( `lodSelection[]` ) with single **scalar value**, the meaning of this value is defined by `lodSelectionMetricType` in `3dSceneLayer.json` (i.e. common for the entire layer).  
- TBD: Unless we have a strong case for supporting anything else, we should settle on a **single** `lodSelectionMetricType` ( i.e. projected pixel area?) 

#### OBB only
`nodepages.json` are new documents so we don't have to include MBS for backward compatibility

#### Meta-data to estimate node resource usage:
`textureWidth`, `textureHeight` and `vertexCount` are added to help client infer the GPU memory required for each node.

####  `resourceId` to facilitate editing. Drop `href` strings
Switch to _implicit_ buffer reference : geometry, attributes and texture may be access using a **known paths**:
```
nodes/{resourceId}/geometries/0
nodes/{resourceId}/attributes/16
nodes/{resourceId}/texture/0
```
using `resourceId` to access resource buffers -and not `nodeId`- de-couples the index nodes (light weight) from the (immutable & heavier) resources. This should greatly faciliate editing.
If "forward" compatibility is not a concern, we could tentatively structure I3S to reflect this approach: 
```
nodepages/{page_id}
resources/{resource_id}/geometries/0
resources/{resource_id}/attributes/{attribute_id}
resources/{resource_id}/textures/0
material/definitions/{material_id}
material/textures/{shared_material_texture_id}
statistics/{attribute_id}
```
 

#### `material_id` to replace `sharedResource`
To avoid the extra `sharedResource` query, we could introduce the concept of a `materialDefinition` that would indicate where to find textures based on their role.
For example:
``` js
[
{ //material definition:
    "id": 0,
    "pbrMetallicRoughness": {
        "baseColorFactor": [ 0.5, 0.5, 0.5, 1.0 ],
        "baseColorTexture": {
            "index": 0, 	// index in resources/{resource_id}/textures/{index}
            "texCoord": 0   // set of UV to use for baseColorTexture
	    },
        "metallicFactor": 1,
        "roughnessFactor": 1,
        "metallicRoughnessTexture": {
            "globalIndex": 2,  // index in material/textures/{globalIndex} (SHARED texture)
            "texCoord": 1 	   // set of UV to use for metallicRoughnessTexture
        }
    },
    "normalTexture": {
        "scale": 2,
        "index": 1,		// index in resources/{resource_id}/textures/{index}
        "texCoord": 1 	// set of UV to use for normalTexture
    },
    "emissiveFactor": [ 0.2, 0.1, 0.0 ]
}
]
```
*Please note the distinction between:*
- per-node texture index: e.g. `"index": 3, 	//-> resources/{resource_id}/textures/3`
- global (shared) texture index: e.g. `"globalIndex": 2,  // -> material/textures/2`


**TBD:** 
- Is `SharedResources.symbol` used for mesh ?
- Re-visit `textureImage` & `region` => this may be complex to support for clients and cause problems with repeated textures. 

#### TBD: `featureId` buffer as a standard binary attribute
- Having feature ID for each triangle in a separate binary buffer may help with Draco geometry compression. The assumption is that feature-id are only needed when:
	- `identify` popup
	- selection-by-id

But if `featureId` info per triangle is very often needed, it should be part of the `geometry` payload. (except for Integrated Mesh)  


#### TBD: Add 

### TODO:
- "multi-mesh" nodes to avoid co-trees. (node= OBB + [0,m] mesh(es)). Each mesh has a `materialid`, `geometryDefinitionId`. TBD: support mesh intancing too ?
- add `geometryDefinition` documents so that a SINGLE layer may use different vertex-buffer definitions ("index vs. unindexed", XYZ/NORMAL, XYZ/UV0/UV1, etc. )
- Multi-texturing support (Vricon attributes)
  

   