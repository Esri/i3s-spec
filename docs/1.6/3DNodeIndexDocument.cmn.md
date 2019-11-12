# 3D Node Index Document

The 3dNodeIndexDocument JSON file describes a single index node within a store. It includes links to other nodes (e.g. children, sibling, and parent), links to feature data, geometry data, texture data resources, metadata (e.g. metrics used for LoD selection), and spatial extent. The node is the root object in the 3dNodeIndexDocument. There is always exactly one node object in a 3dNodeIndexDocument. 

Depending on the geometry and LoD model, a node document can be tuned towards being light-weight or heavy-weight. Clients decide which data to retrieve. The bounding volume information for the node, its parent, siblings, and children provide sufficient data for a simple visualization.  For example, the centroids could be rendered as point features. 

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | Tree Key ID, unique within the store. The root node is always 'root', all others follow the pattern '2-4-0-15-2'. At each level in a subtree, numbering starts at 0. |
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
    "id": "root",
    "level": 1,
    "version": "ee4fbf04-e882-444e-854d-cd519b68594a",
    "mbs": [
        -120.235609902853241,
        39.1981414865211661,
        1895.23079465422779,
        446.269165373884221
    ],
    "created": "2014-07-23T00:00:00.000Z",
    "expires": "2015-07-23T00:00:00.000Z",
    "transform": [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ],
    "lodSelection": [
        {
            "metricType": "screenSpaceRelative",
            "maxError": 0
        },
        {
            "metricType": "distanceRangeFromDefaultCamera",
            "maxError": 0
        }
    ],
    "featureData": [
        {
            "href": "./features/0",
            "featureRange": [
                0,
                3
            ]
        }
    ],
    "parentNode": null,
    "children": null,
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
        }
    ]
} 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {
    "version": "{8F10DF9A-885E-41E0-A5DF-2686CE5B4EAC}",
    "id": "1",
    "level": 2,
    "mbs": [
        0.026676119561926726,
        0.0024989835685061959,
        34.265922634862363,
        131.39643859863281
    ],
    "obb": {
        "center": [
            0.026676119561926726,
            0.0024989835685061959,
            34.265922634862363
        ],
        "halfSize": [
            115.30760192871094,
            58.432319641113281,
            60.50103759765625
        ],
        "quaternion": [
            0.50604724884033203,
            0.41447588801383972,
            0.64152449369430542,
            -0.40071475505828857
        ]
    },
    "lodSelection": [
        {
            "metricType": "maxScreenThreshold",
            "maxError": 20.530693054199219
        },
        {
            "metricType": "maxScreenThresholdSQ",
            "maxError": 331.05267333984375
        }
    ],
    "sharedResource": {
        "href": "./shared"
    },
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
            "href": "./textures/0_0"
        },
        {
            "href": "./textures/0_0_1"
        }
    ],
    "attributeData": [
        {
            "href": "./attributes/f_0/0"
        },
        {
            "href": "./attributes/f_1/0"
        }
    ],
    "parentNode": {
        "id": "root",
        "href": "../root",
        "mbs": [
            0.026340863717777552,
            0.0038648506589316588,
            103.90042581222951,
            314.794677734375
        ]
    },
    "features": null,
    "children": [
        {
            "id": "1-0",
            "href": "../1-0",
            "mbs": [
                0.026676119561926726,
                0.0024989835685061959,
                34.265922634862363,
                131.39643859863281
            ]
        }
    ]
} 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {
  "version": "{cc6ba509-6253-444c-8cc3-455867ce5521}",
  "id": "3",
  "level": 2,
  "mbs": [
    -119.61204566699678,
    37.730869080000808,
    1922.2222099672463,
    17855.905819243209
  ],
  "lodSelection": [
    {
      "metricType": "maxScreenThreshold",
      "maxError": 17.437408026604697
    }
  ],
  "sharedResource": {
    "href": "./shared"
  },
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
      "href": "./textures/0_0"
    },
    {
      "href": "./textures/0_0_1"
    }
  ],
  "parentNode": {
    "id": "root",
    "href": "../root",
    "mbs": [
      -119.61204566699678,
      37.730869080000808,
      1920.951396978965,
      17855.841813106414
    ]
  },
  "features": null,
  "neighbors": null,
  "children": [
    {
      "id": "3-0",
      "href": "../3-0",
      "mbs": [
        -119.61204567725831,
        37.730869097892402,
        1902.7901114998331,
        17856.256970142622
      ]
    }
  ]
} 
```

