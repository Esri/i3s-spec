# Point cloud Profile I3S #


## Point Cloud Scene Layer Structure##

The following tree describe the PCSL structure:
```
.<host>/SceneServer/layers
	+--0 // layer description (named 3dSceneLayer.json in SLPK)
	+-- nodepages
	|  +-- 0 
	|  +-- 64
	|  +-- 128
	|  +-- (...)
	|  +-- 256
	+-- nodes
	|  +--0
	|  |  +-- attributes
	|  |  |  +--2 
	|  |  |  +--4
	|  |  |  +--32
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
	|  +--1 
	|  |  (...) //same structure for all nodes
	|  +--...
	|  +-- 259
	|  |  (...) //same structure for all nodes
	+--statistics
	|  +-- 2
	|  +-- 4
	|  +-- 32
	|  +-- (...)
 

```

### Layer document:###
The JSON document describing the PCSL:

**Service URL**
`<layer_url>/0`

**SLPK path**
`<mypackage.slpk>/3dSceneLayer.json[.gz]`

**Description**
```javascript
{
	// --------- General info (same as other I3S profiles) ----
    "id": 0,
    "layerType": "PointCloud", // mandatory for PCSL
    "name": "mile_high",
    "alias": "",
    "desc": "",
    "copyrightText": "",
    "capabilities": [
        "View"
    ],
    "spatialReference": {
        "wkid": 4326
    },
	// ---------------------------------
    "statsHRef": "./statistics", //ignored
    "store": {
        "id": "",
        "profile": "PointCloud",// mandatory for PCSL
        "version": "1.6",
		// 2D extent in layer coordinate system
        "extent": [
            -105.023403,
            39.740089,
            -105.011746,
            39.757051
        ],
        "index": {
            "nodeVersion": 1,
            "nodePerIndexBlock": 64, //Mandatory. 
            "href": "./nodepages",
            "boundingVolumeType": "obb" //Mandatory. MBS not supported
        },
        "attributeEncoding": "application/octet-stream+gzip",
        "geometryEncoding": "application/octet-stream",
		
		//---- Only LEPCC compressed {x,y,z} geometry is supported ---- 
        "defaultGeometrySchema": {
            "geometryType": "points",
            "header": [],
            "topology": "PerAttributeArray",
            "encoding": "lepcc-xyz", // mandatory 
            "vertexAttributes": {
                "position": {
                    "valueType": "Int32", //ignored
                    "valuesPerElement": 3 //mandatory
                }
            },
            "ordering": [
                "position" //mandatory
            ]
        }
    },
	// Point attribute:
    "fields": [
        {
            "name": "ELEVATION",
            "type": "esriFieldTypeDouble",
            "alias": "ELEVATION"
        },
        {
            "name": "INTENSITY",
            "type": "FieldTypeInteger",
            "alias": "INTENSITY"
        },
        {
            "name": "RGB",
            "type": "esriFieldTypeInteger",
            "alias": "RGB"
        },
        {
            "name": "CLASS_CODE",
            "type": "esriFieldTypeInteger",
            "alias": "CLASS_CODE"
        },
        {
            "name": "FLAGS",
            "type": "esriFieldTypeInteger",
            "alias": "FLAGS"
        },
        {
            "name": "RETURNS",
            "type": "esriFieldTypeInteger",
            "alias": "RETURNS"
        }
    ],
    "attributeStorageInfo": [
        {
            "key": "1",
            "name": "ELEVATION",
            "encoding": "embedded-elevation" //mandatory
        },
        {
            "key": "2",
            "name": "INTENSITY",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt16",
                "valuesPerElement": 1
            },
            "encoding": "lepcc-intensity" // optional. 
        },
        {
            "key": "4",
            "name": "RGB",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 3
            },
            "encoding": "lepcc-rgb" //mandatory
        },
        {
            "key": "8",
            "name": "CLASS_CODE",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 1
            }
        },
        {
            "key": "16",
            "name": "FLAGS",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 1
            }
        },
        {
            "key": "32",
            "name": "RETURNS",
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "UInt8",
                "valuesPerElement": 1
            }
        }
    ],
}
```

### Layer Index ###

The layer index is a parent-to-children linked tree. This tree can be represented as "flat" array of nodes divided into "pages" of 64 nodes for effeciency.   

**Service URL**

`<layer_url>/nodepages/<page#>`

**SLPK path**

`<mypackage.slpk>/nodepages/<page#>.json[.gz]`

`<page#>` is the index of the first node of the page. If the page size if `64`, pages will be numbered `0,64,128, 192, ...`

**Examples**
```javascript
{
    "actualCount": 64, //optional. "nodes" array may be sufficient
    "nodes": [
        {
            "resourceId": 0, // required to query node resource: /nodes/<resourceId>/geometry/0 or /nodes/<resourceId>/attributes/<attrib_key>
            "obb": {
                "center": [-105.017570,39.748570, 1610.672543], //in layer spatial reference
                "halfSize": [500.318726,945.284058,44.164474], //in meters if global PCSL, in layer spatial reference otherwise.
                "quaternion": [0.420958,-0.055540,-0.118199,0.897630] //OBB orientation (in ECEF cartesian if global PCSL)
            }
            "firstChild": 1, //INDEX  of the first child in the layer index. (**NOT** resourceId)  
            "childCount": 4, //number of consecutive children
            "pointCount": 14998, 
            "effectiveArea": 1512157.125000 // LOD selection metrics. 
		//(...)
	]
}
```

#### Node v.1.0 ###
For version 1.0 of the node type, the following fields are available:

 - `resourceID` : integer id needed to query resources of this node. 
 - `obb`    : bounding volume
 - `firstChild`: index of the first child of this node.
 - `childCount`: number of children for this node. 0 if node is a leaf node.
 - `pointCount`: number of points for this node.
 - `effectiveArea`: Estimation of the area covered by this node. Use to estimate LOD switching based on density.


Children **must be contiguous** (in index range) so they may be located using `firstChild` and `childrenCount` fields.
Important notes:  
1. For each node, `resourceId` **must be used** to query node resources (**not** the node index)
	- Geometry buffer (XYZ) `/nodes/<resourceId>/geometry/0`
	- Attribute buffers: One buffer per-attribute. Available attributes are declared in the `SceneLayer` document.`/nodes/<resourceId>/attributes/<attrib_key>`

2. Oriented bounded boxes (OBB) are the **only** supported bounding volumes.

**Oriented Bounding boxes:**
1. For **Projected Coordinate Systems** (cartesian): `obb.center` and `obb.halfSize` are in units of the PCS. Please note that XY and Z may have different units. 
2. For **global scene**, only WGS84 (epsg:4326) is supported, in which case:  
- `obb.center` is in longitude(decimal degrees), latitude(decimal degrees), elevation (meters)
- `obb.halfSize` in meters
- `obb.orientation` is in ECEF cartesian space. ( Z+ : North, Y+ : East, X+: lon=lat=0.0 )

**LOD selection:**
PCSL LOD are designed to be "switched" (not refined) when a threshold is met. Client may choose to "refine" or "split" a parent node based on:
1. Screen space size of the parent node oriented bounding box is greater than threshold defined by the client. (e.g. 256 pixels)
2. use `node.effectiveArea` to check the screen space density of point. This estimation works best when the point-cloud represent a surface and is not volumetric in nature. World space density would be `Dw = node.pointCount / node.effectiveArea` which we called `Ds` once converted to screen space. Client would switch LOD when `Ds` is less/greater than a threshold defined by the client (e.g. 0.1 point per pixel square) 


### Geometry Buffer: ###
Contains the absolute coordinates of all points in the node in binary form. 

**Service URL**

`<layer_url>/nodes/<resource_id>/geometries/0`
**SLPK path**

`<mypackage.slpk>/nodes/<resource_id>/geometries/0.bin.pccxyz`

For compactness, XYZ coordinates **must be compressed** using [LEPCC](https://devtopia.esri.com/ArcGISPro/LEPCC) (Limited Error Point Cloud Compression) as a binary blob *without* I3S binary header.

### Attribute Buffers: ###
Point attribute buffers are organized per-node, per-attribute. 

**Service URL**

`<layer_url>/nodes/<resource_id>/attributes/<attrib_key>`

**SLPK path**

`<mypackage.slpk>/nodes/<resource_id>/geometries/attributes/<attrib_key>.json[.gz]`
Notes:
- Attributes *must* be stored in point order (i.e. 1-to-1).    
- Each (available) attribute is stored in a little-endian binary buffer *without* I3S binary header. 
- RGB buffer *must* be compressed using [LEPCC color clustering](https://devtopia.esri.com/ArcGISPro/LEPCC). Other attribute must used GZIP compression ( or optionally LEPCC-intensity compression for `intensity` buffer)


For LiDAR derived point clouds, the following attributes may be available:

| Type | Format | Name(key) | Notes |
|------|--------|------|-------|
|Intensity|UInt16|INTENSITY(0x2) | Compressed using LEPCC-intensity |
|RGB color| 3xUInt8|RGB(0x4)| Compressed using LEPCC-RGB |
|Class Code| UInt8|CLASS_CODE(0x8)| |
|Flags|UInt8|FLAGS(0x10) |bitfield: 0:`Synthetic`, 1:`Key-point`, 2:`Withheld`, 3:`Overlap`, 4:`Scan Channel0`,5:`Scan Channel1`,6:`Scan-direction`, 7:`Edge Of flight line`  |
|Returns|UInt8|RETURNS(0x20)| bits [0,3] return number, bits[4,7] number of returns |
|User data| UInt8| USER_DATA(0x80)| |
|Point Source ID| UInt16| POINT_SRC_ID(0x100) | |
|Scan Angle| Int16| SCAN_ANGLE(0x400)||
  
### Attribute Statistics and Labels###
#### Statistics (required)####

Statistics about each attributes are useful to estimate attribute distribution and range.

**Service URL** 

`<layer_url>/statistics/<attrib_key>`

**SLPK path**

`<mypackage.slpk>/statistics/<attrib_key>.json[.gz]`

**Example**

``` javascipt
{
    "attribute": "CLASS_CODE",
    "stats": {
        "min": 1.000000,
        "max": 12.000000,
        "avg": 0.000000,
        "stddev": 0.000000,
        "count": 3799022.000000,
        "sum": 0.000000,
        "variance": 0.000000,
        "histogram": {
            "minimum": 1.000000,
            "maximum": 12.000000,
            "counts": [
                14,
                802764,
                681975,
                3056,
                153,
                387412,
                4948,
                1904257,
                9987,
                4073,
                383
            ]
        },
        "mostFrequentValues": [
            {
                "value": 8.000000,
                "count": 1904257
            },
            {
                "value": 2.000000,
                "count": 802764
            },
            {
                "value": 3.000000,
                "count": 681975
            },
            {
                "value": 6.000000,
                "count": 387412
            },
            {
                "value": 9.000000,
                "count": 9987
            },
            {
                "value": 7.000000,
                "count": 4948
            },
            {
                "value": 10.000000,
                "count": 4073
            },
            {
                "value": 4.000000,
                "count": 3056
            },
            {
                "value": 11.000000,
                "count": 383
            },
            {
                "value": 5.000000,
                "count": 153
            },
            {
                "value": 1.000000,
                "count": 14
            }
        ]
    },
    "labels": {
        "labels": [
            {
                "value": 1.000000,
                "label": "Unclassified"
            },
            {
                "value": 2.000000,
                "label": "Ground"
            },
            {
                "value": 3.000000,
                "label": "Low Vegetation"
            },
            {
                "value": 4.000000,
                "label": "Medium Vegetation"
            },
            {
                "value": 5.000000,
                "label": "High Vegetation"
            },
            {
                "value": 6.000000,
                "label": "Building"
            },
            {
                "value": 7.000000,
                "label": "Low Point(noise)"
            },
            {
                "value": 8.000000,
                "label": "Model Key"
            },
            {
                "value": 9.000000,
                "label": "Water"
            },
            {
                "value": 10.000000,
                "label": "Rail"
            },
            {
                "value": 11.000000,
                "label": "Road Surface"
            }
        ]
    }
}
```
Note: The following section relates to numeric attributes only since `string` attributes are not supported. 
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

** Histogram **

`Histo` has three fields (`min`, `max`,`counts`). Bin size may be computed as `(max-min) / bin count`. Please note that `stats.histo.min/max` are not equivalent to `stats.min/max` since values smaller than `stats.histo.min` and greater than `stats.histo.max` are counted in the first and last bin respectively. 
- Notes:
	- Maximum array size for `stats.histo.counts` is 256.
	- `ELEVATION` pseudo-attribute is always present and represent Z-coordinate statistics
	- `stats.min` and `stats.max` may be conservative estimates.
	
#### Labeling (optional) ####
Optionally, the statistics document may contain  labeling information for the attribute values:
-`labels.labels` : array of string label/value pairs *[optional]*. Useful when attribute represent a set of values (e.g. `ClassCode`),
-`labels.bitfieldLabels` : array of string label/bitNumber pairs. This useful when the attribute represent a bitfield (e.g. `FLAGS`)  *[optional]* - [see example](examples/example_1.stats_16.js)

Labels for values/bits not present in the layer data may not be listed. 


###HTTP API Overview:###

To query `SceneLayer` document: [[Example]](examples/example_1_3dscenelayer.js)
`http://my.server.com/layers/{layerId}`

To query attribute `statistics` documents :
- `http://my.server.com/layers/{layerId}/statistics/{AttribKey}`[[Example]](examples/example_1.stats_8.js)[[Example]](examples/example_1.stats_16.js)[[Example]](examples/example_1.stats_32.js) 

<!--
To query `LayerSources` document (Optional):[[Example]](examples/example_1_sources.js)
`http://my.server.com/layers/{layerId}/sources`
-->
To query `NodePage` document:[[Example]](examples/example_1_node_page.js)
`http://my.server.com/layers/{layerId}/nodepages/{firstNodeIdInPage}`

To query `Geometry` Buffer:
`http://my.server.com/layers/{layerId}/nodes/{resourceID}/geometries/0`

To query `Attribute` Buffer:
`http://my.server.com/layers/{layerId}/nodes/{resourceID}/attributes/{AttribKey}`
 *Node: `{AttribKey}` is listed at `scenelayer.attributeStorageInfo[].key`*




 
