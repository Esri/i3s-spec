# I3S point cloud scene layer: labels

Optionally, the statistics document may contain labeling information for the attribute values.

### Related:

[pcsl::statistics](statistics.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| labels | [label](label.pcsl.md)[] | Array of string label/value pairs. Used when attribute represents a set of values. For example, ClassCode. |
| bitfieldLabels | [bitfieldlabel](bitfieldlabel.pcsl.md)[] | Array of string label/bitNumber pairs. This is useful when the attribute represent a bitfield. For example, FLAGS. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Class Code labels (LIDAR data) 

```json
 {
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
} 
```

#### Example: Flags labels (LIDAR data) 

```json
 {
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
```

