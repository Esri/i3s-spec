Having multiple `geometryDefinition`allows for meshes to:

- have different vertex attributes within a single layer 
- include both compressed and uncompressed geometry buffers for forward compatibility. 


This approach also solve a short-coming in I3S 1.6 for `uvRegions` attribute. This attribute is only needed for nodes using _repeated_ texture so to save space, current implementations silently omits it in some binary buffers *despite being listed in the `defaultGeometryDescription` json object*. This can break clients unexpectedly-.  With the `extended`