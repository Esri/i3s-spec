# spatialReference

The spatialReference object is located at the top level of the JSON hierarchy.  A spatial reference can be defined using a Well Known ID (WKID) or Well Known Text (WKT). The default tolerance and resolution values for the associated Coordinate Reference System (CRS) are used.

A spatial reference can optionally include a definition for a vertical coordinate system (VCS), which is used to interpret a geometries z values.

### Related:

[pcsl::layer](layer.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| latestVcsWkid | integer | The current WKID value of the vertical coordinate system. |
| latestWkid | integer | Identifies the current WKID value associated with the same spatial reference. For example a WKID of '102100' (Web Mercator) has a latestWKid of '3857'. |
| vcsWkid | integer | The WKID value of the vertical coordinate system. |
| wkid | integer | WKID or Well Known ID of the CRS. Specify either WKID or WKT the well-known text of the CRS. |
| wkt | string | The well-known text (WKT) of the CRS. Specify either WKT or WKID of the CRS but not both. |

### Examples 

#### Example: spatial reference 

```json
 {
  "wkid": 103142,
  "latestWkid": 6565,
  "vcsWkid": 105703,
  "latestVcsWkid": 6360
} 
```

#### Example: custom spatial reference 

```json
 {
  "wkt": "PROJCS[\"Austria_Central_Zone\",GEOGCS[\"GCS_MGI_Ferro\",DATUM[\"D_MGI\",SPHEROID[\"Bessel_1841\",6377397.155,299.1528128]],PRIMEM[\"Ferro\",-17.66666666666667],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",-5000000.0],PARAMETER[\"Central_Meridian\",13.33333333333333],PARAMETER[\"Scale_Factor\",1.0],PARAMETER[\"Latitude_Of_Origin\",0.0],UNIT[\"Meter\",1.0]]"
} 
```

