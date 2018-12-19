# I3S point cloud scene layer: elevationInfo

The elevationInfo defines how content in a scene layer is aligned to the ground.

### Related:

[pcsl::layer](layer.pcsl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **mode** | string | The mode of the elevation. Point cloud scene layer supports absoluteHeight. |
| offset | number | The offset the point cloud scene layer. The elevation unit is the coordinate systems units. |

*Note: properties in **bold** are required*

### Examples 

#### Example: elevationInfo 

```json
 {
  "mode": "absoluteHeight",
  "offset": 0.0
} 
```

