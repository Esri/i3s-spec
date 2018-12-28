# heightModelInfo

The I3S standard accommodates declaration of a vertical coordinate system that may either be ellipsoidal or gravity-related. This allows for a diverse range of fields and applications where the definition of elevation/height is important.

### Related:

[bld::layer](layer.bld.md), [cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| heightModel | string | Represents the height model type.<div>Possible values are:<ul><li>`gravity_related_height`</li><li>`ellipsoidal`</li></ul></div> |
| vertCRS | string | Represents the vertical coordinate system. |
| heightUnit | string | Represents the unit of the height.<div>Possible values are:<ul><li>`meter`</li><li>`us-foot`</li><li>`foot`</li><li>`clarke-foot`</li><li>`clarke-yard`</li><li>`clarke-link`</li><li>`sears-yard`</li><li>`sears-foot`</li><li>`sears-chain`</li><li>`benoit-1895-b-chain`</li><li>`indian-yard`</li><li>`indian-1937-yard`</li><li>`gold-coast-foot`</li><li>`sears-1922-truncated-chain`</li><li>`us-inch`</li><li>`us-mile`</li><li>`us-yard`</li><li>`millimeter`</li><li>`decimeter`</li><li>`centimeter`</li><li>`kilometer`</li></ul></div> |

### Examples 

#### Example: heightModelInfo 

```json
 {
  "heightModel": "gravity_related_height",
  "vertCRS": "NAVD88_height_(ftUS)",
  "heightUnit": "us-foot"
} 
```

