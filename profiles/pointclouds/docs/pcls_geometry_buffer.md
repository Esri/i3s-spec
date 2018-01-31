### Related:


[Default Geometry Schema](pcsl_defaultGeometrySchema.md)



#Geometry Buffer:

Contains the absolute coordinates of all points in the node in binary form. For compactness, XYZ coordinates may be compressed using LEPCC (Limited Error Point Cloud Compression) as a binary blob without additional header (LEPCC has its own header). The XYZ coordinate are absolute in the coordinate system of the point cloud scene layer, but compression (LEPCC) will exploit the locality of the data to reduce the number of bits used to encode point coordinates. 

|Scene layer path | Example|
|-----------------|--------|
|Service URL|<layer_url>/nodes/<resource_id>/geometries/0
|SLPK path|<mypackage.slpk>/nodes/<resource_id>/geometries/0.bin.pccxyz 

 


