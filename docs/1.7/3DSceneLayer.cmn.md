# 3DSceneLayerInfo

The object 3DSceneLayerInfo describes the properties of a layer in a store. Every scene layer contains 3DSceneLayerInfo. For features based scene layers, such as 3D objects or point scene layers, may include the default symbology, as specified in the [drawingInfo](drawingInfo.md), which contains stylization information for a feature layer.

### Related:

[cmn::nodes](nodes.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | integer | Unique numeric ID of the layer. |
| href | string | The relative URL to the 3DSceneLayerResource. Only present as part of the SceneServiceInfo resource. |
| **layerType** | string | The user-visible layer type<div>Possible values are:<ul><li>`Line`</li><li>`Polygon`</li><li>`3DObject`</li><li>`IntegratedMesh`</li></ul></div> |
| spatialReference | [spatialReference](spatialReference.cmn.md) | The spatialReference of the layer including the vertical coordinate system. WKT is included to support custom spatial references. |
| heightModelInfo | [heightModelInfo](heightModelInfo.cmn.md) | Enables consuming clients to quickly determine whether this layer is compatible (with respect to its horizontal and vertical CRS) with existing content. |
| **version** | string | The ID of the last update session in which any resource belonging to this layer has been updated. |
| name | string | The name of this layer. |
| serviceUpdateTimeStamp | [serviceUpdateTimeStamp](serviceUpdateTimeStamp.cmn.md) | The time of the last update |
| alias | string | The display alias to be used for this layer. |
| description | string | Description string for this layer. |
| copyrightText | string | Copyright and usage information for the data in this layer. |
| **capabilities** | string[] | Capabilities supported by this layer.<div>Possible values for each array string:<ul><li>`View`: View is supported.</li><li>`Query`: Query is supported.</li><li>`Edit`: Edit is defined.</li></ul></div> |
| ZFactor | number | ZFactor to define conversion factor for elevation unit. |
| cachedDrawingInfo | [cachedDrawingInfo](cachedDrawingInfo.cmn.md) | Indicates if any stylization information represented as drawingInfo is captured as part of the binary mesh representation.  This helps provide optimal client-side access. Currently the color component of the drawingInfo is supported. |
| drawingInfo | [drawingInfo](drawingInfo.cmn.md) | An object containing drawing information. |
| elevationInfo | [elevationInfo](elevationInfo.cmn.md) | An object containing elevation drawing information. If absent, any content of the scene layer is drawn at its z coordinate. |
| popupInfo | [popupInfo](popupInfo.cmn.md) | PopupInfo of the scene layer. |
| disablePopup | boolean | Indicates if client application will show the popup information. |
| **store** | [store](store.cmn.md) | The store object describes the exact physical storage of a layer and enables the client to detect when multiple layers are served from the same store. |
| fields | [field](field.cmn.md)[] | A collection of objects that describe each attribute field regarding its field name, datatype, and a user friendly name {name,type,alias}. It includes all fields that are included as part of the I3S layer as derived from a source input feature layer. |
| attributeStorageInfo | [attributeStorageInfo](attributeStorageInfo.cmn.md)[] | Provides the schema and layout used for storing attribute content in binary format in I3S. |
| statisticsInfo | [statisticsInfo](statisticsInfo.cmn.md)[] | Contains the statistical information for a layer. |
| nodePages | [nodepages](nodepages.cmn.md) | paged-access index description |
| materialDefinitions | [materialdefinitions](materialdefinitions.cmn.md)[] | List of materials classes used in this layer. _TBD_ use a separated JSON resource? |
| textureSetDefinitions | [texturesetdefinition](texturesetdefinition.cmn.md)[] | define the set of textures that can be referenced by meshes |
| geometryDefinitions | [geometrydefinition](geometrydefinition.cmn.md)[] | Define the layouts of mesh geometry and its attributes |
| attributeDefinitions | [attributedefinition](attributedefinition.cmn.md)[] | Define the layouts of mesh geometry and its attributes |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 {
    "id": 0,
    "version": "F9E25568-DA3F-4AAD-B3D5-5C4DF7B29736",
    "name": "c6F5P_Import3DFiles1",
    "layerType": "3DObject",
    "spatialReference": {
        "wkid": 4326,
        "latestWkid": 4326,
        "vcsWkid": 5703,
        "latestVcsWkid": 5703
    },
    "alias": "c6F5P_Import3DFiles1",
    "description": "c6F5P_Import3DFiles1",
    "capabilities": [
        "View",
        "Query"
    ],
    "store": {
        "id": "0",
        "profile": "meshpyramids",
        "version": "1.7",
        "resourcePattern": [
            "3dNodeIndexDocument",
            "SharedResource",
            "Geometry",
            "Attributes"
        ],
        "rootNode": "./nodes/root",
        "extent": [
            0.024258503100827455,
            0.004895721021402932,
            0.02529067224991547,
            0.0058628856581417112
        ],
        "indexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326",
        "vertexCRS": "http://www.opengis.net/def/crs/EPSG/0/4326",
        "attributeEncoding": "application/octet-stream; version=1.6",
        "textureEncoding": [
            "image/jpeg"
        ],
        "lodType": "MeshPyramid",
        "lodModel": "node-switching",
        "defaultGeometrySchema": {
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
                "color",
                "region"
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
                },
                "region": {
                    "valueType": "UInt16",
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
    },
    "fields": [
        {
            "name": "OID",
            "type": "esriFieldTypeOID",
            "alias": "ObjectIdent"
        },
        {
            "name": "Name",
            "type": "esriFieldTypeString",
            "alias": "File Name"
        }
    ],
    "attributeStorageInfo": [
        {
            "key": "0",
            "name": "OID",
            "header": [
                {
                    "property": "count",
                    "valueType": "UInt32"
                }
            ],
            "ordering": [
                "attributeValues"
            ],
            "attributeValues": {
                "valueType": "Oid32",
                "valuesPerElement": 1
            }
        },
        {
            "key": "1",
            "name": "Name",
            "header": [
                {
                    "property": "count",
                    "valueType": "UInt32"
                },
                {
                    "property": "attributeValuesByteCount",
                    "valueType": "UInt32"
                }
            ],
            "ordering": [
                "attributeByteCounts",
                "attributeValues"
            ],
            "attributeByteCounts": {
                "valueType": "UInt32",
                "valuesPerElement": 1
            },
            "attributeValues": {
                "valueType": "String",
                "valuesPerElement": 1,
                "encoding": "UTF-8"
            }
        }
    ],
    "statisticsInfo": [
        {
            "key": "1",
            "name": "Name",
            "href": "./statistics/1"
        }
    ],
    "nodePages": {
        "nodesPerPage": 64,
        "lodSelectionMetricType": "maxScreenThresholdSQ"
    },
    "materialDefinitions": [
        {
            "alphaMode": "blend",
            "alphaCutoff": 0.247058824,
            "doubleSided": true,
            "pbrMetallicRoughness": {
                "baseColorTexture": {
                    "textureSetDefinitionId": 0,
                    "texCoord": 0
                }
            }
        }
    ],
    "textureSetDefinitions": [
        {
            "formats": [
                {
                    "index": 0,
                    "format": "jpg"
                }
            ]
        }
    ],
    "geometryDefinitions": [
        {
            "geometryBuffers": [
                {
                    "offset": 8,
                    "position": {
                        "type": "Float32",
                        "component": 3
                    },
                    "normal": {
                        "type": "Float32",
                        "component": 3
                    },
                    "uv0": {
                        "type": "Float32",
                        "component": 2
                    },
                    "color": {
                        "type": "UInt8",
                        "component": 4
                    },
                    "featureId": {
                        "type": "UInt64",
                        "component": 1,
                        "binding": "per-feature"
                    },
                    "faceRange": {
                        "type": "UInt32",
                        "component": 2,
                        "binding": "per-feature"
                    }
                }
            ]
        },
        {
            "geometryBuffers": [
                {
                    "offset": 8,
                    "position": {
                        "type": "Float32",
                        "component": 3
                    },
                    "normal": {
                        "type": "Float32",
                        "component": 3
                    },
                    "uv0": {
                        "type": "Float32",
                        "component": 2
                    },
                    "color": {
                        "type": "UInt8",
                        "component": 4
                    },
                    "uvRegion": {
                        "type": "UInt16",
                        "component": 4
                    },
                    "featureId": {
                        "type": "UInt64",
                        "component": 1,
                        "binding": "per-feature"
                    },
                    "faceRange": {
                        "type": "UInt32",
                        "component": 2,
                        "binding": "per-feature"
                    }
                }
            ]
        }
    ],
    "attributeDefinitions": [
        {
            "id": 0,
            "name": "OID",
            "alias": "ObjectIdent",
            "type": "UInt32",
            "binding": "per-feature",
            "offset": 4
        },
        {
            "id": 1,
            "name": "Name",
            "alias": "File Name",
            "type": "String",
            "binding": "per-feature",
            "offset": 4
        }
    ]
} 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 None 
```

