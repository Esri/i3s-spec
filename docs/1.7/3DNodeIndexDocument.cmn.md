# 3D Node Index Document

The 3dNodeIndexDocument JSON file describes a single index node within a store. A store is a container within the scene layer node folder. The file includes links to other nodes (e.g. children, sibling, and parent), links to feature data, geometry data, texture data resources, metadata (e.g. metrics used for LoD selection), and spatial extent. The node is the root object in the 3dNodeIndexDocument. There is always exactly one node object in a 3dNodeIndexDocument. 

Depending on the geometry and LoD model, a node document can be tuned towards being light-weight or heavy-weight. Clients decide which data to retrieve. The bounding volume information for the node, its parent, siblings, and children provide enough data for a simple visualization.  For example, the centroids of a bounding volume could be rendered as point features. 

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID, is a unique identifier of a node within the scene layer. At 1.7 the tree-key is the integer id of the node represented as a string. |
| level | integer | Explicit level of this node within the index tree. The lowest level is 1. |
| version | string | The version (store update session ID) of this node. |
| mbs | number[4] | An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of a node. |
| obb | [obb](obb.cmn.md) | Describes oriented bounding box. |
| created | string | Creation date of this node in UTC, presented as a string in the format YYYY-MM-DDThh:mm:ss.sTZD, with a fixed 'Z' time zone (see http://www.w3.org/TR/NOTE-datetime). |
| expires | string | Expiration date of this node in UTC, presented as a string in the format YYYY-MM-DDThh:mm:ss.sTZD, with a fixed 'Z' time zone (see http://www.w3.org/TR/NOTE-datetime). |
| transform | number[16] | Optional, 3D (4x4) transformation matrix expressed as a linear array of 16 values. |
| parentNode | [nodeReference](nodeReference.cmn.md) | Reference to the parent node of a node. |
| children | [nodeReference](nodeReference.cmn.md)[] | Reference to the child nodes of a node. |
| neighbors | [nodeReference](nodeReference.cmn.md)[] | Reference to the neighbor (same level, spatial proximity) nodes of a node. |
| sharedResource | [resource](resource.cmn.md) | Resource reference describing a shared resource document. |
| featureData | [resource](resource.cmn.md)[] | Resource reference describing a FeatureData document. |
| geometryData | [resource](resource.cmn.md)[] | Resource reference describing a geometry resource. |
| textureData | [resource](resource.cmn.md)[] | Resource reference describing a texture resource. |
| attributeData | [resource](resource.cmn.md)[] | Resource reference describing a featureData document. |
| lodSelection | [lodSelection](lodSelection.cmn.md)[] | Metrics for LoD selection, to be evaluated by the client. |
| features | [features](features.cmn.md)[] | **Deprecated.** A list of summary information on the features present in this node, used for pre-visualisation and LoD switching in featureTree LoD stores. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 {
    "id": "1306",
    "level": 6,
    "mbs": [
        -73.800118851149136,
        40.73669251979566,
        0.021572002209722996,
        679.45720236569286
    ],
    "obb": {
        "center": [
            -73.800118851149136,
            40.73669251979566,
            0.021572002209722996
        ],
        "halfSize": [
            365.631592,
            477.904175,
            0.0500000007
        ],
        "quaternion": [
            0.0587248169,
            -0.412625164,
            0.89993757,
            -0.128079131
        ]
    },
    "lodSelection": [
        {
            "metricType": "screenSpaceRelative",
            "maxError": 140.54929551759727
        },
        {
            "metricType": "distanceRangeFromDefaultCamera",
            "maxError": 139191.99158812518
        },
        {
            "metricType": "maxScreenThreshold",
            "maxError": 48.521113838756797
        },
        {
            "metricType": "maxScreenThresholdSQ",
            "maxError": 2354.2984881535963
        }
    ],
    "featureData": [
        {
            "href": "./features/0",
            "featureRange": [
                0,
                890
            ]
        }
    ],
    "parentNode": {
        "id": "156",
        "href": "../156",
        "mbs": [
            -73.795788258698877,
            40.732381367513021,
            -1.1518597602844238e-05,
            1362.6036826773482
        ],
        "obb": {
            "center": [
                -73.795788258698877,
                40.732381367513021,
                -1.1518597602844238e-05
            ],
            "halfSize": [
                731.456299,
                960.864807,
                0.128648579
            ],
            "quaternion": [
                0.0586951897,
                -0.412657171,
                0.899904907,
                -0.128218919
            ]
        }
    },
    "attributeData": [
        {
            "href": "./attributes/f_0/0"
        },
        {
            "href": "./attributes/f_2/0"
        },
        {
            "href": "./attributes/f_3/0"
        },
        {
            "href": "./attributes/f_4/0"
        },
        {
            "href": "./attributes/f_5/0"
        },
        {
            "href": "./attributes/f_6/0"
        },
        {
            "href": "./attributes/f_7/0"
        },
        {
            "href": "./attributes/f_8/0"
        },
        {
            "href": "./attributes/f_9/0"
        },
        {
            "href": "./attributes/f_10/0"
        },
        {
            "href": "./attributes/f_11/0"
        },
        {
            "href": "./attributes/f_12/0"
        },
        {
            "href": "./attributes/f_13/0"
        },
        {
            "href": "./attributes/f_14/0"
        },
        {
            "href": "./attributes/f_15/0"
        },
        {
            "href": "./attributes/f_16/0"
        },
        {
            "href": "./attributes/f_17/0"
        },
        {
            "href": "./attributes/f_18/0"
        },
        {
            "href": "./attributes/f_19/0"
        },
        {
            "href": "./attributes/f_20/0"
        },
        {
            "href": "./attributes/f_21/0"
        },
        {
            "href": "./attributes/f_22/0"
        },
        {
            "href": "./attributes/f_23/0"
        },
        {
            "href": "./attributes/f_24/0"
        },
        {
            "href": "./attributes/f_25/0"
        },
        {
            "href": "./attributes/f_26/0"
        },
        {
            "href": "./attributes/f_27/0"
        },
        {
            "href": "./attributes/f_28/0"
        },
        {
            "href": "./attributes/f_29/0"
        },
        {
            "href": "./attributes/f_30/0"
        },
        {
            "href": "./attributes/f_31/0"
        },
        {
            "href": "./attributes/f_32/0"
        },
        {
            "href": "./attributes/f_33/0"
        },
        {
            "href": "./attributes/f_34/0"
        },
        {
            "href": "./attributes/f_35/0"
        },
        {
            "href": "./attributes/f_36/0"
        },
        {
            "href": "./attributes/f_37/0"
        },
        {
            "href": "./attributes/f_38/0"
        },
        {
            "href": "./attributes/f_39/0"
        },
        {
            "href": "./attributes/f_40/0"
        },
        {
            "href": "./attributes/f_41/0"
        },
        {
            "href": "./attributes/f_42/0"
        }
    ]
} 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {
    "id": "25030",
    "level": 6,
    "mbs": [
        54.483553612201497,
        24.36252247939186,
        8.115040997043252,
        202.28157036604742
    ],
    "obb": {
        "center": [
            54.483553612201497,
            24.36252247939186,
            8.115040997043252
        ],
        "halfSize": [
            93.1058044,
            6.90459251,
            181.712433
        ],
        "quaternion": [
            0.933717132,
            -0.28870675,
            0.055369094,
            -0.204340667
        ]
    },
    "lodSelection": [
        {
            "metricType": "maxScreenThresholdSQ",
            "maxError": 1278203.75
        },
        {
            "metricType": "maxScreenThreshold",
            "maxError": 1275.7192232958625
        }
    ],
    "featureData": [
        {
            "href": "./features/0"
        }
    ],
    "geometryData": [
        {
            "href": "./geometries/0"
        }
    ],
    "sharedResource": {
        "href": "./shared"
    },
    "parentNode": {
        "id": "25031",
        "href": "../25031",
        "mbs": [
            54.483553612201497,
            24.36252247939186,
            8.115040997043252,
            202.28157036604742
        ],
        "obb": {
            "center": [
                54.483553612201497,
                24.36252247939186,
                8.115040997043252
            ],
            "halfSize": [
                93.1058044,
                6.90459251,
                181.712433
            ],
            "quaternion": [
                0.933717132,
                -0.28870675,
                0.055369094,
                -0.204340667
            ]
        }
    },
    "attributeData": [
        {
            "href": "./attributes/f_0/0"
        },
        {
            "href": "./attributes/f_1/0"
        },
        {
            "href": "./attributes/f_2/0"
        },
        {
            "href": "./attributes/f_3/0"
        },
        {
            "href": "./attributes/f_4/0"
        },
        {
            "href": "./attributes/f_5/0"
        },
        {
            "href": "./attributes/f_6/0"
        },
        {
            "href": "./attributes/f_7/0"
        },
        {
            "href": "./attributes/f_8/0"
        },
        {
            "href": "./attributes/f_9/0"
        },
        {
            "href": "./attributes/f_10/0"
        },
        {
            "href": "./attributes/f_11/0"
        },
        {
            "href": "./attributes/f_12/0"
        },
        {
            "href": "./attributes/f_13/0"
        },
        {
            "href": "./attributes/f_14/0"
        },
        {
            "href": "./attributes/f_15/0"
        },
        {
            "href": "./attributes/f_16/0"
        },
        {
            "href": "./attributes/f_17/0"
        },
        {
            "href": "./attributes/f_18/0"
        },
        {
            "href": "./attributes/f_19/0"
        },
        {
            "href": "./attributes/f_20/0"
        },
        {
            "href": "./attributes/f_21/0"
        },
        {
            "href": "./attributes/f_22/0"
        },
        {
            "href": "./attributes/f_23/0"
        },
        {
            "href": "./attributes/f_24/0"
        },
        {
            "href": "./attributes/f_25/0"
        },
        {
            "href": "./attributes/f_26/0"
        },
        {
            "href": "./attributes/f_27/0"
        },
        {
            "href": "./attributes/f_28/0"
        },
        {
            "href": "./attributes/f_29/0"
        },
        {
            "href": "./attributes/f_30/0"
        },
        {
            "href": "./attributes/f_31/0"
        },
        {
            "href": "./attributes/f_32/0"
        },
        {
            "href": "./attributes/f_33/0"
        },
        {
            "href": "./attributes/f_34/0"
        },
        {
            "href": "./attributes/f_35/0"
        },
        {
            "href": "./attributes/f_36/0"
        },
        {
            "href": "./attributes/f_37/0"
        },
        {
            "href": "./attributes/f_38/0"
        },
        {
            "href": "./attributes/f_39/0"
        },
        {
            "href": "./attributes/f_40/0"
        },
        {
            "href": "./attributes/f_41/0"
        },
        {
            "href": "./attributes/f_42/0"
        },
        {
            "href": "./attributes/f_43/0"
        },
        {
            "href": "./attributes/f_44/0"
        },
        {
            "href": "./attributes/f_45/0"
        }
    ]
} 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {
    "id": "17",
    "level": 8,
    "mbs": [
        138.59974403386326,
        -34.929125554424836,
        77.791773992590606,
        245.39599377770242
    ],
    "obb": {
        "center": [
            138.59974403386326,
            -34.929125554424836,
            77.791773992590606
        ],
        "halfSize": [
            186.775208,
            31.6982021,
            158.549973
        ],
        "quaternion": [
            -0.116017461,
            0.276839644,
            0.871147692,
            -0.388588935
        ]
    },
    "lodSelection": [
        {
            "metricType": "maxScreenThresholdSQ",
            "maxError": 807.53091035651016
        },
        {
            "metricType": "maxScreenThreshold",
            "maxError": 32.065250248092006
        }
    ],
    "featureData": [
        {
            "href": "./features/0"
        }
    ],
    "geometryData": [
        {
            "href": "./geometries/0"
        }
    ],
    "textureData": [
        {
            "href": "./textures/0"
        },
        {
            "href": "./textures/0_0_1"
        }
    ],
    "sharedResource": {
        "href": "./shared"
    },
    "parentNode": {
        "id": "18",
        "href": "../18",
        "mbs": [
            138.59974403386326,
            -34.929125554424836,
            77.791773992590606,
            245.39599377770242
        ],
        "obb": {
            "center": [
                138.59974403386326,
                -34.929125554424836,
                77.791773992590606
            ],
            "halfSize": [
                186.775208,
                31.6982021,
                158.549973
            ],
            "quaternion": [
                -0.116017461,
                0.276839644,
                0.871147692,
                -0.388588935
            ]
        }
    },
    "children": [
        {
            "id": "16",
            "href": "../16",
            "mbs": [
                138.59974490889948,
                -34.929115017712391,
                73.978384077548981,
                245.28071623121846
            ],
            "obb": {
                "center": [
                    138.59974490889948,
                    -34.929115017712391,
                    73.978384077548981
                ],
                "halfSize": [
                    162.582504,
                    36.705143,
                    181.55722
                ],
                "quaternion": [
                    0.0534443446,
                    -0.690046966,
                    0.487695336,
                    0.532101691
                ]
            }
        }
    ]
} 
```

