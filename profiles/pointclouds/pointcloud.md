# Point cloud Profile I3S #


## General Structure ##

### Layer documents ###
In addition to the `SceneLayer` document, a point cloud layer may have the following layer documents:
- `LayerStats` document describe the range, labels and distribution for each attribute in the layer
- [optional] `LayerSources` document lists 'label' string identifying the source of each point in the data set. See `PointID` attribute for detail.
 

### Node Index ###

The node index represents a parent-to-children linked tree *without* neighbor nodes references. Children must be contiguous (in index range) so they may be located using `firstChild` and `childrenCount` fields.  For each node, the following resource may be queried:
- Geometry buffer (XYZ)
- Attribute buffers: One buffer per-attribute. Available attributes are declared in the `SceneLayer` document.

Resources are identified by the `resourceID` specified in each node. 

PointCloud profile follows the general I3S concepts with the folllowing restrictions:

1. Index nodes may only be queried in page of 64 nodes. This is done using the index of the first node in the page (node-key naming pattern is *not* supported)
2. Oriented bounded boxes (OBB) are the only supported bounding volumes.

#### Node v.1.0 ###
For version 1.0 of the node type, the following fields are available:

 - `resourceID` : integer id needed to query resources of this node. 
 - `obb`    : bounding volume
 - `firstChild`: index of the first child of this node.
 - `childCount`: number of children for this node. 0 if node is a leaf node.
 - `pointCount`: number of points for this node.
 - `effectiveArea`: Estimation of the area covered by this node. Use to estimate LOD switching based on density.

### Geometry Buffer: ###
Contains the absolute coordinates of all points in the node. For compactness, XYZ coordinates are compressed using [LEPCC](tbd) (Limited Error Point Cloud Compression) as a binary blob *without* I3S binary header.

### Attribute Buffers: ###
Each (available) attribute is stored in a little-endian binary buffer *without* I3S binary header. Buffers may be GZIP'ed but "attribute" specific compression is also possible. RGB, for instance, may be compressed using [color clustering](tdb) (8-bit color palette) and (optionally) GZIP'ed. 
Note:
- Attributes *must* be stored in point order (i.e. 1-to-1).   

For LiDAR derived point clouds, the following attributes are common:

| Type | Format |
|------|--------|
|Intensity|UInt16|
|RGB color| 3xUInt8|
|Class Code| UInt8|
|Flags|UInt8|
|Returns|UInt8|
|PointID|UInt64|
  
### Attribute Statistics and Labels###
#### Statistics ####
Note: The following section relates to numeric attributes only since `string` attributes are not supported yet. 
The following stats may be available **per attributes**:
- `stats.min`: Minimum value for the entire layer.  
- `stats.max`: Maximum value for the entire layer.
- `stats.count`: Count for the entire layer.
- `stats.sum`: Sum of the attribute values over the entire layer.
- `stats.avg`: Average (or mean value): `sum/count`.
- `stats.stddev`: standard deviation. *[optional]*
- `stats.variance`: Variance (`stats.stddev *stats.stddev`)*[optional]*
- `stats.histo` : Histogram *[optional]*
- `mostFrequentValues` : Array of most frequent values sorted by descending frequency. *[optional]*

Histogram has three fields (`min`, `max`,`counts`). Bin size may be computed as `(max-min) / bin count`. Please note that `stats.histo.min/max` are not equivalent to `stats.min/max` since values smaller than `stats.histo.min` and greater than `stats.histo.max` are counted in the first and last bin respectively. 
- Notes:
	- Maximum array size for `stats.histo.counts` is 256.
	- `ELEVATION` pseudo-attribute is always present and represent Z-coordinate statistics
	
#### Labeling ####
Optionally, the statistics document may contain  labeling information for the attribute values:
-`labels.labels` : array of string label/value pairs *[optional]*. Useful when attribute represent a set of values (e.g. `ClassCode`),
-`labels.bitfieldLabels` : array of string label/bitNumber pairs. This useful when the attribute represent a bitfield (e.g. `FLAGS`)  *[optional]* - [see example](examples/example_1_stats_16.js)

Labels for values/bits not present in the layer data may not be listed. 


### Layer Sources and `PointID` (optional) ###
If available for the layer, `PointID` attribute refers back to the "original" record of each point. `PointID` is an 8 Bytes integer (`Byte0` is LSB, `Byte7` is MSB) where:	
- `Byte0-4` represent the 40-bit pointID within the source
- `Byte5-7` represent the 24-bit `SourceId`.  

The `LayerSource` document lists a `label` for each `SourceId`. This label may be shown to the user when identifying points. 


###HTTP API Overview:###

To query `SceneLayer` document: [[Example]](examples/example_1_3dscenelayer.js)
`http://my.server.com/layers/{layerId}`

To query `Statistics` document:
`http://my.server.com/layers/{layerId}/statistics` (All attributes stats in a single document)[[Example]](examples/example_1_stats.js)
`http://my.server.com/layers/{layerId}/statistics/{AttribKey}`[[Example]](examples/example_1_stats_8.js)[[Example]](examples/example_1_stats_16.js)[[Example]](examples/example_1_stats_32.js) 


To query `LayerSources` document (Optional):[[Example]](examples/example_1_sources.js)
`http://my.server.com/layers/{layerId}/sources`

To query `NodePage` document:[[Example]](examples/example_1_node_page.js)
`http://my.server.com/layers/{layerId}/nodepages/{firstNodeIdInPage}`

To query `Geometry` Buffer:
`http://my.server.com/layers/{layerId}/nodes/{resourceID}/geometries/0`

To query `Attribute` Buffer:
`http://my.server.com/layers/{layerId}/nodes/{resourceID}/attributes/{AttribKey}`
 *Node: `{AttribKey}` is listed at `scenelayer.attributeStorageInfo[].key`*




 