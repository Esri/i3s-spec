Regular [libdraco](https://github.com/google/draco) compressed meshes are supported with the following restrictions:
- Position attribute must be present (with optional scaling - see comment for `attributes` field below -)
- `Feature_ids` and `feature_indices` are both stored in the mesh( see comment for `attributes` field below). Feature indices are required to lookup Feature-attribute buffers that have `per-feature` binding. *WARNING* `feature_id` are **per-face** ( i.e. `feature_index` **must** match for the 3 vertices of each triangle).

**Normals**
- Since including normal in Draco mesh greatly reduce the compression ratio, "trivial" normals (i.e. computed per-face) should be omitted to save space (3D Clients will recompute them on the fly). In addition, meshes with "natural" textured images (e.g. Integrated Mesh) should omit normals since artifical lightning conflits with the "natural" lightning already captured in aerial/satellite imagery.

