# spatialReference

The spatialReference object is located at the top level of the JSON hierarchy.  A spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT). The default tolerance and resolution values for the associated coordinate system are used.

A spatial reference can optionally include a definition for a vertical coordinate system (VCS), which is used to interpret the z values of a geometry.

### Related:

[common::3DSceneLayer](3DSceneLayer.md), [common::fullExtent](fullExtent.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| latestVcsWkid | integer | The current wkid value of the vertical coordinate system. |
| latestWkid | integer | Identifies the current wkid value associated with the same spatial reference. For example a WKID of '102100' (Web Mercator) has a latestWKid of '3857'. |
| vcsWkid | integer | The wkid value of the vertical coordinate system. |
| wkid | integer | The well-known ID (WKID) of the coordinate system. Specify either WKID or the well-known text (WKT) of the coordinate system. |
| wkt | string | The well-known text (WKT) of the coordinate system. Specify either WKT or WKID of the coordinate system (but not both) |

*Note: properties in **bold** are required*

### Examples 

#### Example: spatial reference 

```json
 {
  "spatialreference": {
    "wkid": 103142,
    "latestWkid": 6565,
    "vcsWkid": 105703,
    "latestVcsWkid": 6360
  }
} 
```

