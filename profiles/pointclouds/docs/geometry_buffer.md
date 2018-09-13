### Related:

[Default Geometry Schema](defaultGeometrySchema.md)



#Geometry Buffer:

Contains the absolute coordinates of all points in the node in binary form. For compactness, XYZ coordinates may be compressed using LEPCC (Limited Error Point Cloud Compression) as a binary blob without additional header (LEPCC has its own header). The XYZ coordinates are absolute in the coordinate system of the point cloud scene layer.  However, the compression (LEPCC) will exploit the locality of the data to reduce the number of bits used to encode point coordinates. 

|Scene layer path | format |Example|
|-----------------|--------|--------|
|Service URL|*layer_url*/nodes/*resource_id**/geometries/0 | http://my.service.com/SceneServer/layers/0/nodes/24/geometries/0 |
|SLPK path|*mypackage.slpk*/nodes/*resource_id**/geometries/0.bin.pccxyz | c:/my/path/layer.slpk/nodes/24/geometries/0 |

***NOTE**: *resource_id* should match [node.resourceId](./node.md) for the node of interest. Please note that *resource_id* is **NOT** equal node id in general.



