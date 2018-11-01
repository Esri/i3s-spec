Regular _Draco_ compressed meshes are supported with the following restrictions:
- Position attribute must be present (with optional scaling - see comment for `attributes` field below -)
- `Feature_ids` and `feature_indices` are both stored in the mesh( see comment for `attributes` field below). Feature indices are need to lookup Feature-attribute buffers that have "per-feature" binding. *WARNING* `feature_id` are **per face**, so the 3 vertices of each triangle must have the same `feature_index`. 

See [libdraco](https://github.com/google/draco) for more details