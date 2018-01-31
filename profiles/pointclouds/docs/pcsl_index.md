# I3S Point Cloud layer: index

Describes the index (i.e. bounding volume tree) of the layer.

### Related:

[pcsl_store](pcsl_store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodeVersion** | number | The version of the individual nodes format. |
| **nodePerIndexBlock** | number | The page size describes the number of nodes per paged index document. 64 is currently expected. |
| href | string | DEPRECATED. The object './nodepages' will be assumed in the future. |
| boundingVolumeType | string | The bounding volume type. Only OBB is currently supported |
*Note: properties in **bold** are required*

