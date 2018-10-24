# LOD selection

A LodSelection object provides information on a given metric determined during the cooking process of an I3S store. This metric can be used by the client to determine whether a representation is of the right quality level for rendering or whether a different representation is needed. Cookers can add as many LodSelection objects as desired but must provide one as soon as the layer's lodType is not null. Of the three min/avg/max values, typically only one or two are used.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| metricType | string | The name of the error metric, one of {maxScreenThreshold, screenSpaceRelative, ...} |
| maxValue | number[] | Maximum metric value, expressed in the CRS of the vertex coordinates or in reference to other constants such as screen size. |
| avgValue | number[] | Average metric value, expressed in the CRS of the vertex coordinates or in reference to other constants such as screen size. |
| minValue | number[] | Minimum metric value, expressed in the CRS of the vertex coordinates or in reference to other constants such as screen size. |

*Note: properties in **bold** are required*

### Examples 

#### Example: LOD Selection example 

```json
 {
  "metricType": "maxScreenThreshold",
  "maxError": 34.87550189480981
} 
```

