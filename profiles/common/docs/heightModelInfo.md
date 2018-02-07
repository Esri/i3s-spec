# heightModelInfo

The I3S standard accommodates declaration of a vertical coordinate system that may either be ellipsoidal or gravity-related. This allows for a diverse range of fields and applications where the particular definition of elevation/height is of importance.

### Related:

[pointcloud::layer](../../pointclouds/docs/layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| heightModel | string | Represents the height model type. |
| vertCRS | string | Represents the vertical coordinate system. |
| heightUnit | string | Represents the unit of the height. |
| esriDocumentation |  |  |

*Note: properties in **bold** are required*

```json
	},
	"heightModelInfo": {
		"heightModel": "gravity_related_height",
		"vertCRS": "NAVD88_height_(ftUS)",
		"heightUnit": "us-foot"
	}
```