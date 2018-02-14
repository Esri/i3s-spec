# heightModelInfo

The I3S standard accommodates declaration of a vertical coordinate system that may either be ellipsoidal or gravity-related. This allows for a diverse range of fields and applications where the particular definition of elevation/height is of importance.

### Related:

[pointcloud::layer](../../pointclouds/docs/layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| heightModel | string | Represents the height model type. |
| vertCRS | string | Represents the vertical coordinate system. |
| heightUnit | string | Represents the unit of the height. Supported unit types: meter, us-foot, foot, clarke-foot, clarke-yard, clarke-link, sears-yard, sears-foot, sears-chain, benoit-1895-b-chain, indian-yard, indian-1937-yard, gold-coast-foot, sears-1922-truncated-chain, us-inch, us-mile, us-yard, millimeter, decimeter, centimeter, kilometer |

*Note: properties in **bold** are required*

### Examples 

#### Example: heightModelInfo 

```json
 {
  "heightModelInfo": {
    "heightModel": "gravity_related_height",
    "vertCRS": "NAVD88_height_(ftUS)",
    "heightUnit": "us-foot"
  }
} 
````

