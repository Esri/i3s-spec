# I3S point cloud scene layer: nodepage



Nodes represent the spatial extent of the data subdivided into regions. They are organized in *pages* of [layer.index.nodesPerPage](index.md) nodes.  Nodes are organized in bounding volumes and define the tree hierarchy. 

Children must be **contiguous**, in index range, so they may be located using  `firstChild`  and  `childrenCount`  fields.

**page number computation example:**

Assuming [layer.store.index.nodesPerPage](index.md) = 64, then `node id = 78` will be in page `page_id = floor( 78 / 64) = 1` (i.e. second page)



### Related:

[pcsl::layer](layer.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **nodes** | [node](node.pcsl.md)[] | Array of nodes |

*Note: properties in **bold** are required*

### Examples 

#### Example: Global scene (WSG84, last page) 

```json
 {
    "nodes": [
        {
            "resourceId": 704,
            "obb": {
                "center": [
                    -105.01482,
                    39.747244,
                    1596.040551
                ],
                "halfSize": [
                    29.421873,
                    29.539055,
                    22.082193
                ],
                "quaternion": [
                    0.420972,
                    -0.055513,
                    -0.118217,
                    0.897622
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7872,
            "lodThreshold": 8979.959961
        },
        {
            "resourceId": 705,
            "obb": {
                "center": [
                    -105.014132,
                    39.747244,
                    1588.67982
                ],
                "halfSize": [
                    29.421803,
                    29.538986,
                    14.721462
                ],
                "quaternion": [
                    0.420972,
                    -0.055509,
                    -0.118215,
                    0.897623
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7055,
            "lodThreshold": 8047.970215
        },
        {
            "resourceId": 706,
            "obb": {
                "center": [
                    -105.01512,
                    39.747343,
                    1629.163972
                ],
                "halfSize": [
                    3.677743,
                    3.692391,
                    3.680366
                ],
                "quaternion": [
                    0.420971,
                    -0.055515,
                    -0.118217,
                    0.897623
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 1,
            "lodThreshold": 1.140747
        },
        {
            "resourceId": 707,
            "obb": {
                "center": [
                    -105.013445,
                    39.746714,
                    1584.999455
                ],
                "halfSize": [
                    29.421768,
                    29.538958,
                    11.0411
                ],
                "quaternion": [
                    0.420977,
                    -0.055505,
                    -0.118212,
                    0.897621
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7567,
            "lodThreshold": 8632.032227
        },
        {
            "resourceId": 708,
            "obb": {
                "center": [
                    -105.012758,
                    39.746714,
                    1584.999455
                ],
                "halfSize": [
                    29.421768,
                    29.538958,
                    11.041096
                ],
                "quaternion": [
                    0.420978,
                    -0.055501,
                    -0.11821,
                    0.897621
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7168,
            "lodThreshold": 8176.874512
        },
        {
            "resourceId": 709,
            "obb": {
                "center": [
                    -105.013445,
                    39.747244,
                    1584.999456
                ],
                "halfSize": [
                    29.42177,
                    29.538956,
                    11.041099
                ],
                "quaternion": [
                    0.420973,
                    -0.055505,
                    -0.118213,
                    0.897623
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7532,
            "lodThreshold": 8592.106445
        },
        {
            "resourceId": 710,
            "obb": {
                "center": [
                    -105.012758,
                    39.747244,
                    1581.31909
                ],
                "halfSize": [
                    29.421768,
                    29.538956,
                    14.721463
                ],
                "quaternion": [
                    0.420973,
                    -0.0555,
                    -0.118211,
                    0.897623
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 6710,
            "lodThreshold": 7654.412109
        },
        {
            "resourceId": 711,
            "obb": {
                "center": [
                    -105.01482,
                    39.747775,
                    1592.360184
                ],
                "halfSize": [
                    29.421841,
                    29.539022,
                    18.401829
                ],
                "quaternion": [
                    0.420968,
                    -0.055512,
                    -0.118217,
                    0.897624
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7044,
            "lodThreshold": 8035.421875
        },
        {
            "resourceId": 712,
            "obb": {
                "center": [
                    -105.014132,
                    39.747775,
                    1584.999455
                ],
                "halfSize": [
                    29.421772,
                    29.538952,
                    11.041098
                ],
                "quaternion": [
                    0.420968,
                    -0.055508,
                    -0.118215,
                    0.897625
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7080,
            "lodThreshold": 8076.48877
        },
        {
            "resourceId": 713,
            "obb": {
                "center": [
                    -105.01482,
                    39.748305,
                    1599.720916
                ],
                "halfSize": [
                    29.421906,
                    29.539085,
                    25.762558
                ],
                "quaternion": [
                    0.420964,
                    -0.055512,
                    -0.118217,
                    0.897626
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7355,
            "lodThreshold": 8390.194336
        },
        {
            "resourceId": 714,
            "obb": {
                "center": [
                    -105.014133,
                    39.748305,
                    1599.720915
                ],
                "halfSize": [
                    29.421902,
                    29.539082,
                    25.762558
                ],
                "quaternion": [
                    0.420964,
                    -0.055508,
                    -0.118215,
                    0.897626
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7358,
            "lodThreshold": 8393.616211
        },
        {
            "resourceId": 715,
            "obb": {
                "center": [
                    -105.014648,
                    39.748504,
                    1629.163965
                ],
                "halfSize": [
                    7.355486,
                    7.38478,
                    3.680366
                ],
                "quaternion": [
                    0.420962,
                    -0.055511,
                    -0.118217,
                    0.897627
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 5,
            "lodThreshold": 5.703735
        },
        {
            "resourceId": 716,
            "obb": {
                "center": [
                    -105.014218,
                    39.748139,
                    1640.205065
                ],
                "halfSize": [
                    7.355505,
                    3.692403,
                    14.72146
                ],
                "quaternion": [
                    0.420965,
                    -0.055508,
                    -0.118215,
                    0.897626
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 71,
            "lodThreshold": 80.993034
        },
        {
            "resourceId": 717,
            "obb": {
                "center": [
                    -105.013445,
                    39.747775,
                    1588.67982
                ],
                "halfSize": [
                    29.421797,
                    29.538982,
                    14.721462
                ],
                "quaternion": [
                    0.420969,
                    -0.055504,
                    -0.118213,
                    0.897625
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7252,
            "lodThreshold": 8272.697266
        },
        {
            "resourceId": 718,
            "obb": {
                "center": [
                    -105.012758,
                    39.747775,
                    1588.67982
                ],
                "halfSize": [
                    29.421799,
                    29.538986,
                    14.721464
                ],
                "quaternion": [
                    0.420969,
                    -0.0555,
                    -0.118211,
                    0.897625
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 5507,
            "lodThreshold": 6282.09375
        },
        {
            "resourceId": 719,
            "obb": {
                "center": [
                    -105.013445,
                    39.748305,
                    1588.67982
                ],
                "halfSize": [
                    29.421803,
                    29.538984,
                    14.721462
                ],
                "quaternion": [
                    0.420965,
                    -0.055504,
                    -0.118213,
                    0.897627
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 7872,
            "lodThreshold": 8979.959961
        },
        {
            "resourceId": 720,
            "obb": {
                "center": [
                    -105.012758,
                    39.748305,
                    1592.360184
                ],
                "halfSize": [
                    29.421799,
                    29.538982,
                    11.041098
                ],
                "quaternion": [
                    0.420965,
                    -0.055499,
                    -0.118211,
                    0.897627
                ]
            },
            "firstChild": 0,
            "childCount": 0,
            "vertexCount": 5036,
            "lodThreshold": 5744.801758
        }
    ]
} 
```

