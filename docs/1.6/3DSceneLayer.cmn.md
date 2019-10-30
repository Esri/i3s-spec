# 3DSceneLayer [common profiles]

The 3DSceneLayerInfo describes the properties of a layer in a store. Every scene layer contains 3DSceneLayerInfo. Features based scene layers, such as 3D objects or point scene layers, may include the default symbology, as specified in the drawingInfo, which contains stylization information for a feature layer.

When generating scene layers with the meshpyramid cooker, the root node never has any geometry. Any node's children represent a higher LOD quality than an ancestor node.  Nodes without geometry at the top of the tree are allowable since the lowest LOD of a feature/geometry is not to shown.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Unique numeric ID of the layer. |
| href | string | The relative URL to the 3DSceneLayerResource. Only present as part of the SceneServiceInfo resource. |
| **layerType** | string | The user-visible layer type<div>Possible values are:<ul><li>`3DObject`</li><li>`IntegratedMesh`</li></ul></div> |
| spatialReference | [spatialReference](spatialReference.cmn.md) | The spatialReference of the layer including the vertical coordinate system. WKT is included to support custom spatial references. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | Enables consuming clients to quickly determine whether this layer is compatible (with respect to its horizontal and vertical coordinate system) with existing content. |
| **version** | string | The ID of the last update session in which any resource belonging to this layer has been updated. |
| name | string | The name of this layer. |
| serviceUpdateTimeStamp | [serviceUpdateTimeStamp](serviceUpdateTimeStamp.cmn.md) | The time of the last update. |
| alias | string | The display alias to be used for this layer. |
| description | string | Description string for this layer. |
| copyrightText | string | Copyright and usage information for the data in this layer. |
| **capabilities** | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li></ul></div> |
| ZFactor | number | ZFactor to define conversion factor for elevation unit. |
| cachedDrawingInfo | [cachedDrawingInfo](cachedDrawingInfo.cmn.md) | Indicates if any stylization information represented as drawingInfo is captured as part of the binary mesh representation.  This helps provide optimal client-side access. Currently the color component of the drawingInfo is supported. |
| drawingInfo | [drawingInfo](drawingInfo.cmn.md) | An object containing drawing information. |
| elevationInfo | [elevationInfo](elevationInfo.cmn.md) | An object containing elevation drawing information. If absent, any content of the scene layer is drawn at its z coordinate. |
| popupInfo | [popupInfo](popupInfo.cmn.md) | PopupInfo of the scene layer. |
| disablePopup | boolean | Indicates if client application will show the popup information. Default is FALSE. |
| **store** | [store](store.cmn.md) | The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. |
| fields | [field](field.cmn.md)[] | A collection of objects that describe each attribute field regarding its field name, datatype, and a user friendly name {name,type,alias}. It includes all fields that are included as part of the scene layer as derived from a source input feature layer. |
| attributeStorageInfo | [attributeStorageInfo](attributeStorageInfo.cmn.md)[] | Provides the schema and layout used for storing attribute content in binary format in I3S. |
| statisticsInfo | [statisticsInfo](statisticsInfo.cmn.md)[] | Contains the statistical information for a layer. |

*Note: properties in **bold** are required*

### Examples 

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

