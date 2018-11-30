# FeatureData

The FeatureData JSON file(s) contain geographical features with a set of attributes, accessors to geometry attributes, and other references to styling or materials.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Feature ID, unique within the Node. If lodType is FeatureTree, the ID must be unique in the store. |
| position | number[] | An array of two or three doubles, giving the x,y(,z) (easting/northing/elevation) position of this feature's minimum bounding sphere center, in the vertexCRS. |
| pivotOffset | number[] | An array of three doubles, providing an optional, 'semantic' pivot offset that can be used to e.g. correctly drape tree symbols. |
| mbb | number[] | An array of six doubles, corresponding to xmin, ymin, zmin, xmax, ymax and zmax of the minimum bounding box of the feature, expressed in the vertexCRS, without offset. The mbb can be used with the Feature’s Transform to provide a LOD0 representation without loading the GeometryAttributes. |
| layer | string | The name of the Feature Class this feature belongs to. |
| attributes | [common::featureAttribute](../../common/docs/featureAttribute.md) | The list of GIS attributes the feature has. |
| geometries | [common::geometry](../../common/docs/geometry.md) | The list of geometries the feature has. A feature always has at least one Geometry. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 {
    "featureData": [
        {
            "position": [
                -120.233259777336656,
                39.1975451001783028,
                1896.46557621670036
            ],
            "id": 1
        },
        {
            "position": [
                -120.230476574493366,
                39.1976590870344666,
                1888.84558120960378
            ],
            "id": 2
        },
        {
            "position": [
                -120.235310119680662,
                39.1984046366487746,
                1899.513550219539
            ],
            "id": 3
        },
        {
            "position": [
                -120.240743291390672,
                39.1986236597809068,
                1901.64721722152626
            ],
            "id": 4
        }
    ],
    "geometryData": null
} 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 {
    "featureData": [
        {
            "id": 37,
            "position": [
                0.024772059555658643,
                0.0047952714350449465
            ],
            "pivotOffset": [
                0,
                0,
                0
            ],
            "mbb": [
                -13.225386250380865,
                -13.245363038501479,
                -7.3874186584725976,
                13.274930369492182,
                13.254953581371568,
                19.112897961400449
            ],
            "layer": "Building",
            "geometries": [
                {
                    "id": 37,
                    "type": "GeometryReference",
                    "params": {
                        "$ref": "/geometryData/1",
                        "faceRange": [
                            0,
                            373
                        ]
                    }
                }
            ]
        }
    ],
    "geometryData": [
        {
            "id": 1,
            "type": "ArrayBufferView",
            "transformation": [
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0,
                0.0,
                0.0,
                0.0,
                0.0,
                1.0
            ],
            "params": {
                "type": "triangles",
                "material": "/materialDefinitions/Mat574",
                "texture": "/textureDefinitions/574",
                "vertexAttributes": {
                    "position": {
                        "byteOffset": 8,
                        "count": 1122,
                        "valueType": "Float32",
                        "valuesPerElement": 3
                    },
                    "normal": {
                        "byteOffset": 13472,
                        "count": 1122,
                        "valueType": "Float32",
                        "valuesPerElement": 3
                    },
                    "uv0": {
                        "byteOffset": 26936,
                        "count": 1122,
                        "valueType": "Float32",
                        "valuesPerElement": 2
                    },
                    "color": {
                        "byteOffset": 35912,
                        "count": 1122,
                        "valueType": "UInt8",
                        "valuesPerElement": 4
                    },
                    "region": {
                        "byteOffset": 40400,
                        "count": 1122,
                        "valueType": "UInt16",
                        "valuesPerElement": 4
                    }
                },
                "featureAttributes": {
                    "id": {
                        "byteOffset": 49376,
                        "count": 1,
                        "valueType": "UInt64",
                        "valuesPerElement": 1
                    },
                    "faceRange": {
                        "byteOffset": 49384,
                        "count": 1,
                        "valueType": "UInt32",
                        "valuesPerElement": 2
                    }
                }
            }
        }
    ]
} 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 {
  "featureData": [
    {
      "id": 0,
      "position": [
        -119.61204566699678,
        37.730869080000808,
        1920.951396978965
      ],
      "pivotOffset": [
        0,
        0,
        0
      ],
      "mbb": [
        -119.77125610411167,
        37.635582022368908,
        1023.2551879882812,
        -119.45293022692204,
        37.826044507324696,
        2819.0902099609375
      ],
      "layer": "Building",
      "geometries": [
        {
          "id": 0,
          "type": "GeometryReference",
          "params": {
            "$ref": "/geometryData/0",
            "faceRange": [
              0,
              107
            ]
          }
        }
      ]
    }
  ],
  "geometryData": [
    {
      "id": 0,
      "type": "ArrayBufferView",
      "transformation": [
        1.0,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0
      ],
      "params": {
        "type": "triangles",
        "material": "/materialDefinitions/Mat0",
        "texture": "/textureDefinitions/0",
        "vertexAttributes": {
          "position": {
            "byteOffset": 8,
            "count": 324,
            "valueType": "Float32",
            "valuesPerElement": 3
          },
          "normal": {
            "byteOffset": 3896,
            "count": 324,
            "valueType": "Float32",
            "valuesPerElement": 3
          },
          "uv0": {
            "byteOffset": 7784,
            "count": 324,
            "valueType": "Float32",
            "valuesPerElement": 2
          },
          "color": {
            "byteOffset": 10376,
            "count": 324,
            "valueType": "UInt8",
            "valuesPerElement": 4
          }
        },
        "featureAttributes": {
          "id": {
            "byteOffset": 11672,
            "count": 1,
            "valueType": "UInt64",
            "valuesPerElement": 1
          },
          "faceRange": {
            "byteOffset": 11680,
            "count": 1,
            "valueType": "UInt32",
            "valuesPerElement": 2
          }
        }
      }
    }
  ]
} 
```

