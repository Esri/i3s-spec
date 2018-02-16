# I3S point cloud scene layer: stats

Contains statistics about each attribute. Statistics are useful to estimate attribute distribution and range.

### Related:

[pointcloud::statistics](statistics.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **min** | number | Minimum attribute value for the entire layer. |
| **max** | number | Maximum attribute value for the entire layer. |
| **count** | number | Count for the entire layer. |
| sum | number | Sum of the attribute values over the entire layer. |
| avg | number | Representing average or mean value. For example, sum/count. |
| stddev | number | Representing the standard deviation. |
| variance  | number | Representing variance. For example, stats.stddev *stats.stddev. |
| histogram | [pointcloud::histogram](histogram.md) | Represents the histogram. |
| mostFrequentValues | [pointcloud::valuecount](valuecount.md)[] |  |
| labels | [pointcloud::labels](labels.md) |  The statistics document may contain labeling information for the attribute values. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Elevation statistic (point.z statistics) 

```json
 {
    "min": 1567.597046,
    "max": 1649.043945,
    "avg": 1593.811809,
    "stddev": 12.722517,
    "count": 3799022.000000,
    "sum": 6054926127.557739,
    "variance": 161.862445,
    "histogram": {
        "minimum": 1567.596482,
        "maximum": 1644.937967,
        "counts": [
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            3,
            123,
            1852,
            7407,
            11776,
            15386,
            11689,
            12569,
            10041,
            11340,
            12370,
            18329,
            29686,
            40210,
            44547,
            50266,
            86603,
            102660,
            129177,
            113065,
            97772,
            103083,
            92726,
            74721,
            70910,
            68750,
            65077,
            66181,
            75049,
            69223,
            65015,
            65122,
            54877,
            46869,
            48223,
            47339,
            38808,
            35533,
            35212,
            33455,
            29682,
            33789,
            41732,
            26137,
            23063,
            26649,
            20234,
            15673,
            16440,
            22573,
            23646,
            24871,
            25511,
            25566,
            22712,
            20494,
            19606,
            20215,
            18483,
            17837,
            17991,
            17078,
            19259,
            20789,
            20905,
            18258,
            17028,
            20344,
            20705,
            20444,
            21581,
            19226,
            16906,
            19515,
            15510,
            15514,
            15741,
            15821,
            16097,
            14391,
            14062,
            15048,
            15715,
            15695,
            17170,
            14275,
            12690,
            13680,
            15699,
            15755,
            15074,
            14364,
            16359,
            20516,
            16407,
            12986,
            13478,
            12766,
            12209,
            11665,
            11931,
            13373,
            14710,
            14430,
            14360,
            15652,
            15713,
            14377,
            14540,
            12478,
            12802,
            16602,
            13237,
            12228,
            10972,
            12456,
            13791,
            15004,
            18845,
            15398,
            16732,
            15076,
            13460,
            12835,
            12615,
            13230,
            12967,
            12310,
            13408,
            18330,
            20433,
            21039,
            26813,
            21120,
            12081,
            6965,
            7830,
            9959,
            8015,
            6127,
            6679,
            6386,
            9682,
            11268,
            5126,
            4643,
            5009,
            4573,
            4029,
            4647,
            4351,
            6812,
            4024,
            3578,
            3810,
            4463,
            5298,
            4970,
            2439,
            2075,
            1624,
            1734,
            1579,
            1596,
            1417,
            1450,
            1391,
            1313,
            1321,
            1970,
            3932,
            1044,
            982,
            1158,
            871,
            622,
            739,
            513,
            526,
            378,
            388,
            500,
            1172,
            353,
            244,
            248,
            175,
            139,
            254,
            259,
            248,
            284,
            297,
            173,
            155,
            169,
            142,
            246,
            130,
            136,
            208,
            194,
            96,
            98,
            91,
            93,
            126,
            151,
            125,
            125,
            119,
            126,
            118,
            178,
            140,
            96,
            76,
            85,
            38,
            85
        ]
    }
} 
````

#### Example: Intensity statistics 

```json
 {
    "min": 0.000000,
    "max": 256.000000,
    "avg": 0.000000,
    "stddev": 0.000000,
    "count": 3799022.000000,
    "sum": 0.000000,
    "variance": 0.000000,
    "histogram": {
        "minimum": 0.000000,
        "maximum": 256.000000,
        "counts": [
            143339,
            143858,
            149770,
            164501,
            174011,
            181377,
            192349,
            166440,
            132127,
            110664,
            100962,
            97616,
            97383,
            100071,
            106157,
            114260,
            119177,
            122104,
            121872,
            116999,
            111086,
            102366,
            92383,
            81642,
            71199,
            61043,
            53223,
            47350,
            42872,
            39193,
            38076,
            403552
        ]
    }
} 
````

#### Example: RGB color statistics ( please note that histogram is not required here) 

```json
 {
    "min": 0.000000,
    "max": 255.000000,
    "avg": 0.022315,
    "stddev": 0.000000,
    "count": 11397066.000000,
    "sum": 510730851.000000,
    "variance": 0.000000,
    "histogram": {
        "minimum": 0.000000,
        "maximum": 0.000000,
        "counts": []
    }
} 
````

#### Example: Class code statistics with labels 

```json
 {
    "min": 1.0,
    "max": 12.0,
    "avg": 5.63104,
    "stddev": 2.629335,
    "count": 3799022.0,
    "sum": 21392446.0,
    "variance": 6.913403,
    "histogram": {
        "minimum": 1.0,
        "maximum": 12.0,
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
            "value": 8.0,
            "count": 1904257
        },
        {
            "value": 2.0,
            "count": 802764
        },
        {
            "value": 3.0,
            "count": 681975
        },
        {
            "value": 6.0,
            "count": 387412
        },
        {
            "value": 9.0,
            "count": 9987
        },
        {
            "value": 7.0,
            "count": 4948
        },
        {
            "value": 10.0,
            "count": 4073
        },
        {
            "value": 4.0,
            "count": 3056
        },
        {
            "value": 11.0,
            "count": 383
        },
        {
            "value": 5.0,
            "count": 153
        },
        {
            "value": 1.0,
            "count": 14
        }
    ]
},
"labels": {
    "labels": [
        {
            "value": 1.0,
            "label": "Unclassified"
        },
        {
            "value": 2.0,
            "label": "Ground"
        },
        {
            "value": 3.0,
            "label": "Low Vegetation"
        },
        {
            "value": 4.0,
            "label": "Medium Vegetation"
        },
        {
            "value": 5.0,
            "label": "High Vegetation"
        },
        {
            "value": 6.0,
            "label": "Building"
        },
        {
            "value": 7.0,
            "label": "Low Point(noise)"
        },
        {
            "value": 8.0,
            "label": "Model Key"
        },
        {
            "value": 9.0,
            "label": "Water"
        },
        {
            "value": 10.0,
            "label": "Rail"
        },
        {
            "value": 11.0,
            "label": "Road Surface"
        }
    ]
} 
````

#### Example: Flags statistics (LIDAR point cloud) 

```json
 {
    "min": 0.000000,
    "max": 137.000000,
    "avg": 0.000000,
    "stddev": 0.000000,
    "count": 82673752.000000,
    "sum": 0.000000,
    "variance": 0.000000,
    "histogram": {
        "minimum": 0.000000,
        "maximum": 137.000000,
        "counts": [
            58138737,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            24490375,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1610,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            43030
        ]
    },
    "mostFrequentValues": [
        {
            "value": 0.000000,
            "count": 58138737
        },
        {
            "value": 8.000000,
            "count": 24490375
        },
        {
            "value": 136.000000,
            "count": 43030
        },
        {
            "value": 128.000000,
            "count": 1610
        }
    ],
    "labels": {
        "bitfieldLabels": [
            {
                "bitNumber": 3,
                "label": "Overlap"
            },
            {
                "bitNumber": 7,
                "label": "Edge"
            }
        ]
    }
} 
````

#### Example: Returns statistics (LIDAR point cloud) 

```json
 {
    "min": 17.0,
    "max": 52.0,
    "avg": 17.41348,
    "stddev": 2.606183,
    "count": 3799022.0,
    "sum": 66154192.0,
    "variance": 6.792191,
    "histogram": {
        "minimum": 17.0,
        "maximum": 52.0,
        "counts": [
            3704673,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            49581,
            43733,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            394,
            341,
            300
        ]
    },
    "mostFrequentValues": [
        {
            "value": 17.0,
            "count": 3704673
        },
        {
            "value": 33.0,
            "count": 49581
        },
        {
            "value": 34.0,
            "count": 43733
        },
        {
            "value": 49.0,
            "count": 394
        },
        {
            "value": 50.0,
            "count": 341
        },
        {
            "value": 51.0,
            "count": 300
        }
    ]
} 
````

