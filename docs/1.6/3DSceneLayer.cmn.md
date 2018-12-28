# 3DSceneLayerInfo

The object 3DSceneLayerInfo describes the properties of a layer in a store. Every scene layer contains 3DSceneLayerInfo. For features based scene layers, such as 3D objects or point scene layers, may include the default symbology, as specified in the [drawingInfo](drawingInfo.md), which contains stylization information for a feature layer.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Unique numeric ID of the layer. |
| href | string | The relative URL to the 3DSceneLayerResource. Only present as part of the SceneServiceInfo resource. |
| layerType | string | The user-visible layer type<div>Possible values are:<ul><li>`Point`</li><li>`Line`</li><li>`Polygon`</li><li>`3DObject`</li><li>`IntegratedMesh`</li><li>`PointCloud`</li></ul></div> |
| spatialReference | [spatialReference](spatialReference.cmn.md) | The spatialReference of the layer including the vertical coordinate system. WKT is included to support custom spatial references. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | Enables consuming clients to quickly determine whether this layer is compatible (with respect to its horizontal and vertical CRS) with existing content. |
| version | string | The ID of the last update session in which any resource belonging to this layer has been updated. |
| name | string | The name of this layer. |
| serviceUpdateTimeStamp | [serviceUpdateTimeStamp](serviceUpdateTimeStamp.cmn.md) | The time of the last update |
| featureidMappedFromFS | number |  |
| alias | string | The display alias to be used for this layer. |
| description | string | Description string for this layer. |
| copyrightText | string | Copyright and usage information for the data in this layer. |
| capabilities | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li></ul></div> |
| ZFactor | number | should we not document this or is it still needed? |
| cachedDrawingInfo | [cachedDrawingInfo](cachedDrawingInfo.cmn.md) | Indicates if any stylization information represented as drawingInfo is captured as part of the binary mesh representation.  This helps provide optimal client-side access. Currently the color component of the drawingInfo is supported. |
| drawingInfo | [drawingInfo](drawingInfo.cmn.md) | An object containing drawing information. |
| elevationInfo | [elevationInfo](elevationInfo.cmn.md) | An object containing elevation drawing information. If absent, any content of the scene layer is drawn at its z coordinate. |
| popupInfo | [popupInfo](popupInfo.cmn.md) | PopupInfo of the scene layer. |
| disablePopup | boolean | Indicates if client application will show the popup information. |
| store | [store](store.cmn.md) | The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. |
| fields | [field](field.cmn.md)[] | A collection of objects that describe each attribute field regarding its field name, datatype, and a user friendly name {name,type,alias}. It includes all fields that are included as part of the I3S layer as derived from a source input feature layer. |
| attributeStorageInfo | [attributeStorageInfo](attributeStorageInfo.cmn.md)[] | Provides the schema and layout used for storing attribute content in binary format in I3S. |
| statisticsInfo | [statisticsInfo](statisticsInfo.cmn.md)[] | Contains the statistical information for a layer. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 {
"id" : 0,
"version" : "",
"name" : "",
"href" : "./layers/0",
"layerType" : "Point",
"spatialReference" : {
"wkid" : 4326,
"latestWkid" : 4326
}
,
"alias" : "",
"description" : "",
"capabilities" : ["View", "Query"],
"elevationInfo" : {
"mode" : "absoluteHeight",
"offset" : 0.000000
}
,
"drawingInfo" : {
"renderer" : {
"type" : "simple",
"symbol" : {
"type" : "PointSymbol3D",
"symbolLayers" : [{
"type" : "Icon",
"anchor" : "center",
"size" : 6,
"resource" : {
"primitive" : "circle"
}
,
"material" : {
"color" : [0, 0, 255]
}
,
"outline" : {
"color" : [0, 0, 0],
"size" : 0
}

}
]
}

}

}
,
"disablePopup" : false,
"store" : {
"id" : "",
"profile" : "points",
"version" : "1.6",
"resourcePattern" : ["3dNodeIndexDocument", "Attributes", "featureData"],
"rootNode" : "./nodes/root",
"extent" : [5.966632, 45.827005, 10.539381, 47.767247],
"indexCRS" : "http://www.opengis.net/def/crs/EPSG/0/4326",
"vertexCRS" : "http://www.opengis.net/def/crs/EPSG/0/4326",
"normalReferenceFrame" : "earth-centered",
"nidEncoding" : "",
"featureEncoding" : "",
"attributeEncoding" : "application/octet-stream; version=1.6",
"lodType" : "AutoThinning",
"lodModel" : "node-switching"
}
,
"fields" : [{
"name" : "OBJECTID",
"type" : "esriFieldTypeOID",
"alias" : "OBJECTID"
}
, {
"name" : "mem_point_LineOID",
"type" : "esriFieldTypeInteger",
"alias" : "LineOID"
}
, {
"name" : "mem_point_Value",
"type" : "esriFieldTypeDouble",
"alias" : "Value"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_OBJECTID",
"type" : "esriFieldTypeInteger",
"alias" : "OBJECTID"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_TILEKEY",
"type" : "esriFieldTypeString",
"alias" : "TILEKEY"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_KBNUM",
"type" : "esriFieldTypeString",
"alias" : "KBNUM"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_KBBEZ",
"type" : "esriFieldTypeString",
"alias" : "KBBEZ"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_feature_type_name",
"type" : "esriFieldTypeString",
"alias" : "fme_feature_type_name"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___name",
"type" : "esriFieldTypeString",
"alias" : "attribute___name"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___fme_data_type",
"type" : "esriFieldTypeString",
"alias" : "attribute___fme_data_type"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___native_data_type",
"type" : "esriFieldTypeString",
"alias" : "attribute___native_data_type"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_format_short_name",
"type" : "esriFieldTypeString",
"alias" : "fme_format_short_name"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_format_long_name",
"type" : "esriFieldTypeString",
"alias" : "fme_format_long_name"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_UUID",
"type" : "esriFieldTypeString",
"alias" : "UUID"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_DATUM_AENDERUNG",
"type" : "esriFieldTypeString",
"alias" : "DATUM_AENDERUNG"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_DATUM_ERSTELLUNG",
"type" : "esriFieldTypeString",
"alias" : "DATUM_ERSTELLUNG"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_ERSTELLUNG_JAHR",
"type" : "esriFieldTypeString",
"alias" : "ERSTELLUNG_JAHR"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_ERSTELLUNG_MONAT",
"type" : "esriFieldTypeString",
"alias" : "ERSTELLUNG_MONAT"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_JAHR",
"type" : "esriFieldTypeString",
"alias" : "REVISION_JAHR"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_MONAT",
"type" : "esriFieldTypeString",
"alias" : "REVISION_MONAT"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_GRUND_AENDERUNG",
"type" : "esriFieldTypeString",
"alias" : "GRUND_AENDERUNG"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT",
"type" : "esriFieldTypeString",
"alias" : "HERKUNFT"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT_JAHR",
"type" : "esriFieldTypeString",
"alias" : "HERKUNFT_JAHR"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT_MONAT",
"type" : "esriFieldTypeString",
"alias" : "HERKUNFT_MONAT"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_QUALITAET",
"type" : "esriFieldTypeString",
"alias" : "REVISION_QUALITAET"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_OBJEKTART",
"type" : "esriFieldTypeDouble",
"alias" : "OBJEKTART"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_NAME",
"type" : "esriFieldTypeString",
"alias" : "NAME"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_TLM_AREALE_NAME_UUID",
"type" : "esriFieldTypeString",
"alias" : "TLM_AREALE_NAME_UUID"
}
, {
"name" : "TLM_BAUM_GEBUESCHREIHE_Spacing",
"type" : "esriFieldTypeDouble",
"alias" : "Spacing"
}
, {
"name" : "HEIGHT",
"type" : "esriFieldTypeDouble",
"alias" : "HEIGHT"
}
, {
"name" : "treeType",
"type" : "esriFieldTypeInteger",
"alias" : "treeType"
}
, {
"name" : "HeightCorrected",
"type" : "esriFieldTypeDouble",
"alias" : "HeightCorrected"
}
, {
"name" : "treeRotation",
"type" : "esriFieldTypeDouble",
"alias" : "treeRotation"
}
],
"attributeStorageInfo" : [{
"key" : "f_0",
"name" : "OBJECTID",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["ObjectIds"],
"objectIds" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}

}
, {
"key" : "f_2",
"name" : "mem_point_LineOID",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}

}
, {
"key" : "f_3",
"name" : "mem_point_Value",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Float64",
"valuesPerElement" : 1
}

}
, {
"key" : "f_4",
"name" : "TLM_BAUM_GEBUESCHREIHE_OBJECTID",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}

}
, {
"key" : "f_5",
"name" : "TLM_BAUM_GEBUESCHREIHE_TILEKEY",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_6",
"name" : "TLM_BAUM_GEBUESCHREIHE_KBNUM",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_7",
"name" : "TLM_BAUM_GEBUESCHREIHE_KBBEZ",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_8",
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_feature_type_name",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_9",
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___name",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_10",
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___fme_data_type",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_11",
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___native_data_type",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_12",
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_format_short_name",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_13",
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_format_long_name",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_14",
"name" : "TLM_BAUM_GEBUESCHREIHE_UUID",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_15",
"name" : "TLM_BAUM_GEBUESCHREIHE_DATUM_AENDERUNG",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_16",
"name" : "TLM_BAUM_GEBUESCHREIHE_DATUM_ERSTELLUNG",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_17",
"name" : "TLM_BAUM_GEBUESCHREIHE_ERSTELLUNG_JAHR",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_18",
"name" : "TLM_BAUM_GEBUESCHREIHE_ERSTELLUNG_MONAT",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_19",
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_JAHR",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_20",
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_MONAT",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_21",
"name" : "TLM_BAUM_GEBUESCHREIHE_GRUND_AENDERUNG",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_22",
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_23",
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT_JAHR",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_24",
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT_MONAT",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_25",
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_QUALITAET",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_26",
"name" : "TLM_BAUM_GEBUESCHREIHE_OBJEKTART",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Float64",
"valuesPerElement" : 1
}

}
, {
"key" : "f_27",
"name" : "TLM_BAUM_GEBUESCHREIHE_NAME",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_28",
"name" : "TLM_BAUM_GEBUESCHREIHE_TLM_AREALE_NAME_UUID",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
, {
"property" : "attributeValuesByteCount",
"valueType" : "Int32"
}
],
"ordering" : ["attributeByteCounts", "attributeValues"],
"attributeByteCounts" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}
,
"attributeValues" : {
"valueType" : "String",
"encoding" : "UTF-8",
"valuesPerElement" : 1
}

}
, {
"key" : "f_29",
"name" : "TLM_BAUM_GEBUESCHREIHE_Spacing",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Float64",
"valuesPerElement" : 1
}

}
, {
"key" : "f_30",
"name" : "HEIGHT",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Float64",
"valuesPerElement" : 1
}

}
, {
"key" : "f_31",
"name" : "treeType",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Int32",
"valuesPerElement" : 1
}

}
, {
"key" : "f_32",
"name" : "HeightCorrected",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Float64",
"valuesPerElement" : 1
}

}
, {
"key" : "f_33",
"name" : "treeRotation",
"header" : [{
"property" : "count",
"valueType" : "Int32"
}
],
"ordering" : ["attributeValues"],
"attributeValues" : {
"valueType" : "Float64",
"valuesPerElement" : 1
}

}
],
"statisticsInfo" : [{
"key" : "f_0",
"name" : "OBJECTID",
"href" : "./statistics/f_0"
}
, {
"key" : "f_2",
"name" : "mem_point_LineOID",
"href" : "./statistics/f_2"
}
, {
"key" : "f_3",
"name" : "mem_point_Value",
"href" : "./statistics/f_3"
}
, {
"key" : "f_4",
"name" : "TLM_BAUM_GEBUESCHREIHE_OBJECTID",
"href" : "./statistics/f_4"
}
, {
"key" : "f_5",
"name" : "TLM_BAUM_GEBUESCHREIHE_TILEKEY",
"href" : "./statistics/f_5"
}
, {
"key" : "f_6",
"name" : "TLM_BAUM_GEBUESCHREIHE_KBNUM",
"href" : "./statistics/f_6"
}
, {
"key" : "f_7",
"name" : "TLM_BAUM_GEBUESCHREIHE_KBBEZ",
"href" : "./statistics/f_7"
}
, {
"key" : "f_8",
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_feature_type_name",
"href" : "./statistics/f_8"
}
, {
"key" : "f_9",
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___name",
"href" : "./statistics/f_9"
}
, {
"key" : "f_10",
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___fme_data_type",
"href" : "./statistics/f_10"
}
, {
"key" : "f_11",
"name" : "TLM_BAUM_GEBUESCHREIHE_attribute___native_data_type",
"href" : "./statistics/f_11"
}
, {
"key" : "f_12",
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_format_short_name",
"href" : "./statistics/f_12"
}
, {
"key" : "f_13",
"name" : "TLM_BAUM_GEBUESCHREIHE_fme_format_long_name",
"href" : "./statistics/f_13"
}
, {
"key" : "f_14",
"name" : "TLM_BAUM_GEBUESCHREIHE_UUID",
"href" : "./statistics/f_14"
}
, {
"key" : "f_15",
"name" : "TLM_BAUM_GEBUESCHREIHE_DATUM_AENDERUNG",
"href" : "./statistics/f_15"
}
, {
"key" : "f_16",
"name" : "TLM_BAUM_GEBUESCHREIHE_DATUM_ERSTELLUNG",
"href" : "./statistics/f_16"
}
, {
"key" : "f_17",
"name" : "TLM_BAUM_GEBUESCHREIHE_ERSTELLUNG_JAHR",
"href" : "./statistics/f_17"
}
, {
"key" : "f_18",
"name" : "TLM_BAUM_GEBUESCHREIHE_ERSTELLUNG_MONAT",
"href" : "./statistics/f_18"
}
, {
"key" : "f_19",
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_JAHR",
"href" : "./statistics/f_19"
}
, {
"key" : "f_20",
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_MONAT",
"href" : "./statistics/f_20"
}
, {
"key" : "f_21",
"name" : "TLM_BAUM_GEBUESCHREIHE_GRUND_AENDERUNG",
"href" : "./statistics/f_21"
}
, {
"key" : "f_22",
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT",
"href" : "./statistics/f_22"
}
, {
"key" : "f_23",
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT_JAHR",
"href" : "./statistics/f_23"
}
, {
"key" : "f_24",
"name" : "TLM_BAUM_GEBUESCHREIHE_HERKUNFT_MONAT",
"href" : "./statistics/f_24"
}
, {
"key" : "f_25",
"name" : "TLM_BAUM_GEBUESCHREIHE_REVISION_QUALITAET",
"href" : "./statistics/f_25"
}
, {
"key" : "f_26",
"name" : "TLM_BAUM_GEBUESCHREIHE_OBJEKTART",
"href" : "./statistics/f_26"
}
, {
"key" : "f_27",
"name" : "TLM_BAUM_GEBUESCHREIHE_NAME",
"href" : "./statistics/f_27"
}
, {
"key" : "f_28",
"name" : "TLM_BAUM_GEBUESCHREIHE_TLM_AREALE_NAME_UUID",
"href" : "./statistics/f_28"
}
, {
"key" : "f_29",
"name" : "TLM_BAUM_GEBUESCHREIHE_Spacing",
"href" : "./statistics/f_29"
}
, {
"key" : "f_30",
"name" : "HEIGHT",
"href" : "./statistics/f_30"
}
, {
"key" : "f_31",
"name" : "treeType",
"href" : "./statistics/f_31"
}
, {
"key" : "f_32",
"name" : "HeightCorrected",
"href" : "./statistics/f_32"
}
, {
"key" : "f_33",
"name" : "treeRotation",
"href" : "./statistics/f_33"
}
],
"heightModelInfo" : {
"heightModel" : "gravity_related_height",
"vertCRS" : "NAVD_1988",
"heightUnit" : "meter"
}

}
 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {"id":0,"version":"F3950549-438B-4B31-A1AB-710067EECD6A","name":"Pipes","serviceUpdateTimeStamp":{"lastUpdate":1539204480000},"href":"./layers/0","layerType":"3DObject","spatialReference":{"wkid":103130,"latestWkid":6551},"ZFactor":0.30480060960121924,"alias":"Pipes","description":"Pipes","copyrightText":"","capabilities":["View","Query"],"cachedDrawingInfo":{"color":true},"drawingInfo":{"renderer":{"type":"simple","symbol":{"type":"MeshSymbol3D","symbolLayers":[{"type":"Fill","material":{"color":[255,170,0],"transparency":0,"colorMixMode":"multiply"},"edges":{"type":"solid","color":[0,0,0],"size":1,"transparency":0,"extensionLength":0}}]}}},"popupInfo":{"title":"{DocName}","mediaInfos":[],"fieldInfos":[{"fieldName":"OBJECTID_1","visible":true,"isEditable":false,"label":"OBJECTID_1"},{"fieldName":"Category","visible":true,"isEditable":true,"label":"Category"},{"fieldName":"Family","visible":true,"isEditable":true,"label":"Family"},{"fieldName":"FamilyType","visible":true,"isEditable":true,"label":"FamilyType"},{"fieldName":"ObjectId","visible":true,"isEditable":true,"label":"ObjectId"},{"fieldName":"BldgLevel","visible":true,"isEditable":true,"label":"BldgLevel"},{"fieldName":"BldgLevel_Elev","visible":true,"isEditable":true,"label":"BldgLevel_Elev"},{"fieldName":"BldgLevel_IsBuildingStory","visible":true,"isEditable":true,"label":"BldgLevel_IsBuildingStory"},{"fieldName":"BldgLevel_RoomOffset","visible":true,"isEditable":true,"label":"BldgLevel_RoomOffset"},{"fieldName":"CreatedPhase","visible":true,"isEditable":true,"label":"CreatedPhase"},{"fieldName":"DemolishedPhase","visible":true,"isEditable":true,"label":"DemolishedPhase"},{"fieldName":"ElementType","visible":true,"isEditable":true,"label":"ElementType"},{"fieldName":"Discipline","visible":true,"isEditable":true,"label":"Discipline"},{"fieldName":"Function","visible":true,"isEditable":true,"label":"Function"},{"fieldName":"DocPath","visible":true,"isEditable":true,"label":"DocPath"},{"fieldName":"DocVer","visible":true,"isEditable":true,"label":"DocVer"},{"fieldName":"DocUpdate","visible":true,"isEditable":true,"label":"DocUpdate"},{"fieldName":"Transparency","visible":true,"isEditable":true,"label":"Transparency"},{"fieldName":"BaseCategory","visible":true,"isEditable":true,"label":"BaseCategory"},{"fieldName":"AssemblyCode","visible":true,"isEditable":true,"label":"AssemblyCode"},{"fieldName":"AssemblyDesc","visible":true,"isEditable":true,"label":"AssemblyDesc"},{"fieldName":"OmniClass","visible":true,"isEditable":true,"label":"OmniClass"},{"fieldName":"OmniClassDescription","visible":true,"isEditable":true,"label":"OmniClassDescription"},{"fieldName":"Mark","visible":true,"isEditable":true,"label":"Mark"},{"fieldName":"Typ_Mark","visible":true,"isEditable":true,"label":"Typ_Mark"},{"fieldName":"DocName","visible":true,"isEditable":true,"label":"DocName"},{"fieldName":"WidthDiameter","visible":true,"isEditable":true,"label":"WidthDiameter"},{"fieldName":"SystemId","visible":true,"isEditable":true,"label":"SystemId"},{"fieldName":"SystemName","visible":true,"isEditable":true,"label":"SystemName"},{"fieldName":"SystemType","visible":true,"isEditable":true,"label":"SystemType"},{"fieldName":"SystemClass","visible":true,"isEditable":true,"label":"SystemClass"},{"fieldName":"CalculatedSize","visible":true,"isEditable":true,"label":"CalculatedSize"},{"fieldName":"Comments","visible":true,"isEditable":true,"label":"Comments"},{"fieldName":"Flow","visible":true,"isEditable":true,"label":"Flow"}],"popupElements":[{"fieldInfos":[{"fieldName":"OBJECTID_1","visible":true,"isEditable":false,"label":"OBJECTID_1"},{"fieldName":"Category","visible":true,"isEditable":true,"label":"Category"},{"fieldName":"Family","visible":true,"isEditable":true,"label":"Family"},{"fieldName":"FamilyType","visible":true,"isEditable":true,"label":"FamilyType"},{"fieldName":"ObjectId","visible":true,"isEditable":true,"label":"ObjectId"},{"fieldName":"BldgLevel","visible":true,"isEditable":true,"label":"BldgLevel"},{"fieldName":"BldgLevel_Elev","visible":true,"isEditable":true,"label":"BldgLevel_Elev"},{"fieldName":"BldgLevel_IsBuildingStory","visible":true,"isEditable":true,"label":"BldgLevel_IsBuildingStory"},{"fieldName":"BldgLevel_RoomOffset","visible":true,"isEditable":true,"label":"BldgLevel_RoomOffset"},{"fieldName":"CreatedPhase","visible":true,"isEditable":true,"label":"CreatedPhase"},{"fieldName":"DemolishedPhase","visible":true,"isEditable":true,"label":"DemolishedPhase"},{"fieldName":"ElementType","visible":true,"isEditable":true,"label":"ElementType"},{"fieldName":"Discipline","visible":true,"isEditable":true,"label":"Discipline"},{"fieldName":"Function","visible":true,"isEditable":true,"label":"Function"},{"fieldName":"DocPath","visible":true,"isEditable":true,"label":"DocPath"},{"fieldName":"DocVer","visible":true,"isEditable":true,"label":"DocVer"},{"fieldName":"DocUpdate","visible":true,"isEditable":true,"label":"DocUpdate"},{"fieldName":"Transparency","visible":true,"isEditable":true,"label":"Transparency"},{"fieldName":"BaseCategory","visible":true,"isEditable":true,"label":"BaseCategory"},{"fieldName":"AssemblyCode","visible":true,"isEditable":true,"label":"AssemblyCode"},{"fieldName":"AssemblyDesc","visible":true,"isEditable":true,"label":"AssemblyDesc"},{"fieldName":"OmniClass","visible":true,"isEditable":true,"label":"OmniClass"},{"fieldName":"OmniClassDescription","visible":true,"isEditable":true,"label":"OmniClassDescription"},{"fieldName":"Mark","visible":true,"isEditable":true,"label":"Mark"},{"fieldName":"Typ_Mark","visible":true,"isEditable":true,"label":"Typ_Mark"},{"fieldName":"DocName","visible":true,"isEditable":true,"label":"DocName"},{"fieldName":"WidthDiameter","visible":true,"isEditable":true,"label":"WidthDiameter"},{"fieldName":"SystemId","visible":true,"isEditable":true,"label":"SystemId"},{"fieldName":"SystemName","visible":true,"isEditable":true,"label":"SystemName"},{"fieldName":"SystemType","visible":true,"isEditable":true,"label":"SystemType"},{"fieldName":"SystemClass","visible":true,"isEditable":true,"label":"SystemClass"},{"fieldName":"CalculatedSize","visible":true,"isEditable":true,"label":"CalculatedSize"},{"fieldName":"Comments","visible":true,"isEditable":true,"label":"Comments"},{"fieldName":"Flow","visible":true,"isEditable":true,"label":"Flow"}],"type":"fields"}],"expressionInfos":[]},"disablePopup":false,"store":{"id":"7586A65E-5A4A-4FAA-B279-1C97F7C0208B","profile":"meshpyramids","resourcePattern":["3dNodeIndexDocument","Attributes","SharedResource","Geometry"],"rootNode":"./nodes/root","version":"1.6","extent":[1816831.76067100465,731679.422988593578,1816950.00551325083,731840.359674587846],"indexCRS":"http://www.opengis.net/def/crs/EPSG/0/6551","vertexCRS":"http://www.opengis.net/def/crs/EPSG/0/6551","normalReferenceFrame":"vertex-reference-frame","nidEncoding":"application/vnd.esri.i3s.json+gzip; version=1.6","featureEncoding":"application/vnd.esri.i3s.json+gzip; version=1.6","geometryEncoding":"application/octet-stream; version=1.6","attributeEncoding":"application/octet-stream; version=1.6","lodType":"MeshPyramid","lodModel":"node-switching","defaultGeometrySchema":{"geometryType":"triangles","header":[{"property":"vertexCount","type":"UInt32"},{"property":"featureCount","type":"UInt32"}],"topology":"PerAttributeArray","ordering":["position","normal","uv0","color"],"vertexAttributes":{"position":{"valueType":"Float32","valuesPerElement":3},"normal":{"valueType":"Float32","valuesPerElement":3},"uv0":{"valueType":"Float32","valuesPerElement":2},"color":{"valueType":"UInt8","valuesPerElement":4}},"featureAttributeOrder":["id","faceRange"],"featureAttributes":{"id":{"valueType":"UInt64","valuesPerElement":1},"faceRange":{"valueType":"UInt32","valuesPerElement":2}}},"textureEncoding":["image/jpeg","image/vnd-ms.dds"]},"fields":[{"name":"OBJECTID_1","type":"esriFieldTypeOID","alias":"OBJECTID_1"},{"name":"Category","type":"esriFieldTypeString","alias":"Category"},{"name":"Family","type":"esriFieldTypeString","alias":"Family"},{"name":"FamilyType","type":"esriFieldTypeString","alias":"FamilyType"},{"name":"ObjectId","type":"esriFieldTypeString","alias":"ObjectId"},{"name":"BldgLevel","type":"esriFieldTypeInteger","alias":"BldgLevel"},{"name":"BldgLevel_Elev","type":"esriFieldTypeDouble","alias":"BldgLevel_Elev"},{"name":"BldgLevel_IsBuildingStory","type":"esriFieldTypeSmallInteger","alias":"BldgLevel_IsBuildingStory"},{"name":"BldgLevel_RoomOffset","type":"esriFieldTypeDouble","alias":"BldgLevel_RoomOffset"},{"name":"CreatedPhase","type":"esriFieldTypeInteger","alias":"CreatedPhase"},{"name":"DemolishedPhase","type":"esriFieldTypeInteger","alias":"DemolishedPhase"},{"name":"ElementType","type":"esriFieldTypeString","alias":"ElementType"},{"name":"Discipline","type":"esriFieldTypeString","alias":"Discipline"},{"name":"Function","type":"esriFieldTypeInteger","alias":"Function"},{"name":"DocPath","type":"esriFieldTypeString","alias":"DocPath"},{"name":"DocVer","type":"esriFieldTypeString","alias":"DocVer"},{"name":"DocUpdate","type":"esriFieldTypeDate","alias":"DocUpdate"},{"name":"Transparency","type":"esriFieldTypeDouble","alias":"Transparency"},{"name":"BaseCategory","type":"esriFieldTypeString","alias":"BaseCategory"},{"name":"AssemblyCode","type":"esriFieldTypeString","alias":"AssemblyCode"},{"name":"AssemblyDesc","type":"esriFieldTypeString","alias":"AssemblyDesc"},{"name":"OmniClass","type":"esriFieldTypeString","alias":"OmniClass"},{"name":"OmniClassDescription","type":"esriFieldTypeString","alias":"OmniClassDescription"},{"name":"Mark","type":"esriFieldTypeString","alias":"Mark"},{"name":"Typ_Mark","type":"esriFieldTypeString","alias":"Typ_Mark"},{"name":"DocName","type":"esriFieldTypeString","alias":"DocName"},{"name":"WidthDiameter","type":"esriFieldTypeDouble","alias":"WidthDiameter"},{"name":"SystemId","type":"esriFieldTypeString","alias":"SystemId"},{"name":"SystemName","type":"esriFieldTypeString","alias":"SystemName"},{"name":"SystemType","type":"esriFieldTypeString","alias":"SystemType"},{"name":"SystemClass","type":"esriFieldTypeInteger","alias":"SystemClass"},{"name":"CalculatedSize","type":"esriFieldTypeString","alias":"CalculatedSize"},{"name":"Comments","type":"esriFieldTypeString","alias":"Comments"},{"name":"Flow","type":"esriFieldTypeDouble","alias":"Flow"}],"attributeStorageInfo":[{"key":"f_0","name":"OBJECTID_1","header":[{"property":"count","valueType":"UInt32"}],"ordering":["ObjectIds"],"objectIds":{"valueType":"UInt32","valuesPerElement":1}},{"key":"f_1","name":"Category","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_2","name":"Family","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_3","name":"FamilyType","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_4","name":"ObjectId","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_5","name":"BldgLevel","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Int32","valuesPerElement":1}},{"key":"f_6","name":"BldgLevel_Elev","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Float64","valuesPerElement":1}},{"key":"f_7","name":"BldgLevel_IsBuildingStory","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Int16","valuesPerElement":1}},{"key":"f_8","name":"BldgLevel_RoomOffset","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Float64","valuesPerElement":1}},{"key":"f_9","name":"CreatedPhase","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Int32","valuesPerElement":1}},{"key":"f_10","name":"DemolishedPhase","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Int32","valuesPerElement":1}},{"key":"f_11","name":"ElementType","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_12","name":"Discipline","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_13","name":"Function","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Int32","valuesPerElement":1}},{"key":"f_14","name":"DocPath","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_15","name":"DocVer","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_16","name":"DocUpdate","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_17","name":"Transparency","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Float64","valuesPerElement":1}},{"key":"f_18","name":"BaseCategory","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_19","name":"AssemblyCode","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_20","name":"AssemblyDesc","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_21","name":"OmniClass","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_22","name":"OmniClassDescription","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_23","name":"Mark","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_24","name":"Typ_Mark","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_25","name":"DocName","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_26","name":"WidthDiameter","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Float64","valuesPerElement":1}},{"key":"f_27","name":"SystemId","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_28","name":"SystemName","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_29","name":"SystemType","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_30","name":"SystemClass","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Int32","valuesPerElement":1}},{"key":"f_31","name":"CalculatedSize","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_32","name":"Comments","header":[{"property":"count","valueType":"UInt32"},{"property":"attributeValuesByteCount","valueType":"UInt32"}],"ordering":["attributeByteCounts","attributeValues"],"attributeByteCounts":{"valueType":"UInt32","valuesPerElement":1},"attributeValues":{"valueType":"String","encoding":"UTF-8","valuesPerElement":1}},{"key":"f_33","name":"Flow","header":[{"property":"count","valueType":"UInt32"}],"ordering":["attributeValues"],"attributeValues":{"valueType":"Float64","valuesPerElement":1}}],"statisticsInfo":[{"key":"f_1","name":"Category","href":"./statistics/f_1"},{"key":"f_2","name":"Family","href":"./statistics/f_2"},{"key":"f_3","name":"FamilyType","href":"./statistics/f_3"},{"key":"f_4","name":"ObjectId","href":"./statistics/f_4"},{"key":"f_5","name":"BldgLevel","href":"./statistics/f_5"},{"key":"f_6","name":"BldgLevel_Elev","href":"./statistics/f_6"},{"key":"f_7","name":"BldgLevel_IsBuildingStory","href":"./statistics/f_7"},{"key":"f_8","name":"BldgLevel_RoomOffset","href":"./statistics/f_8"},{"key":"f_9","name":"CreatedPhase","href":"./statistics/f_9"},{"key":"f_10","name":"DemolishedPhase","href":"./statistics/f_10"},{"key":"f_11","name":"ElementType","href":"./statistics/f_11"},{"key":"f_12","name":"Discipline","href":"./statistics/f_12"},{"key":"f_13","name":"Function","href":"./statistics/f_13"},{"key":"f_14","name":"DocPath","href":"./statistics/f_14"},{"key":"f_15","name":"DocVer","href":"./statistics/f_15"},{"key":"f_16","name":"DocUpdate","href":"./statistics/f_16"},{"key":"f_17","name":"Transparency","href":"./statistics/f_17"},{"key":"f_18","name":"BaseCategory","href":"./statistics/f_18"},{"key":"f_19","name":"AssemblyCode","href":"./statistics/f_19"},{"key":"f_20","name":"AssemblyDesc","href":"./statistics/f_20"},{"key":"f_21","name":"OmniClass","href":"./statistics/f_21"},{"key":"f_22","name":"OmniClassDescription","href":"./statistics/f_22"},{"key":"f_23","name":"Mark","href":"./statistics/f_23"},{"key":"f_24","name":"Typ_Mark","href":"./statistics/f_24"},{"key":"f_25","name":"DocName","href":"./statistics/f_25"},{"key":"f_26","name":"WidthDiameter","href":"./statistics/f_26"},{"key":"f_27","name":"SystemId","href":"./statistics/f_27"},{"key":"f_28","name":"SystemName","href":"./statistics/f_28"},{"key":"f_29","name":"SystemType","href":"./statistics/f_29"},{"key":"f_30","name":"SystemClass","href":"./statistics/f_30"},{"key":"f_31","name":"CalculatedSize","href":"./statistics/f_31"},{"key":"f_32","name":"Comments","href":"./statistics/f_32"},{"key":"f_33","name":"Flow","href":"./statistics/f_33"}]} 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {
  "id": 0,
  "version": "3d3c7b51-6336-4893-b484-ad118775bcce",
  "name": "EsriExport2",
  "href": "./layers/0",
  "layerType": "IntegratedMesh",
  "ZFactor": 1.0,
  "spatialReference": {
    "wkid": 4326,
    "latestWkid": 4326
  },
  "alias": "EsriExport2",
  "description": "Vricon 3D Surface Model",
  "copyrightText": "Limited in accordance with the accompanying Vricon EULA",
  "capabilities": [
    "View",
    "Query"
  ],
  "store": {
    "id": "e9ecfade-0d85-4dd7-abb5-a3b0a07b9fd7",
    "profile": "meshpyramids",
    "resourcePattern": [
      "3dNodeIndexDocument",
      "SharedResource",
      "Geometry",
      "Attributes"
    ],
    "rootNode": "./nodes/root",
    "version": "1.4",
    "extent": [
      -106.5054122583675,
      38.994677805489189,
      -103.99630101552692,
      39.996971340614706
    ],
    "indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326",
    "vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326",
    "nidEncoding": "application/vnd.esri.i3s.json+gzip; version=1.4",
    "featureEncoding": "application/vnd.esri.i3s.json+gzip; version=1.4",
    "geometryEncoding": "application/octet-stream; version=1.4",
    "attributeEncoding": "application/octet-stream; version=1.4",
    "textureEncoding": [
      "image/jpeg",
      "image/vnd-ms.dds"
    ],
    "lodType": "MeshPyramid",
    "lodModel": "node-switching",
    "defaultGeometrySchema": {
      "geometryType": "triangles",
      "header": [
        {
          "property": "vertexCount",
          "type": "UInt32"
        },
        {
          "property": "featureCount",
          "type": "UInt32"
        }
      ],
      "topology": "PerAttributeArray",
      "ordering": [
        "position",
        "normal",
        "uv0",
        "color"
      ],
      "vertexAttributes": {
        "position": {
          "valueType": "Float32",
          "valuesPerElement": 3
        },
        "normal": {
          "valueType": "Float32",
          "valuesPerElement": 3
        },
        "uv0": {
          "valueType": "Float32",
          "valuesPerElement": 2
        },
        "color": {
          "valueType": "UInt8",
          "valuesPerElement": 4
        }
      },
      "featureAttributeOrder": [
        "id",
        "faceRange"
      ],
      "featureAttributes": {
        "id": {
          "valueType": "UInt64",
          "valuesPerElement": 1
        },
        "faceRange": {
          "valueType": "UInt32",
          "valuesPerElement": 2
        }
      }
    }
  }
} 
```

