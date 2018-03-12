# serviceUpdateTimeStamp

Object to provide time stamp when the I3S service or the source of the service was created or updated.

### Related:

[pointcloud::layer](../../pointclouds/docs/layer.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| lastUpdate | number | Specifies the moment in unix epoch time when the I3S service was created or updated. |
| sourceLastUpdate | number | Specifies the moment in unix epoch time when the source of the I3S service was created or updated. |

*Note: properties in **bold** are required*

### Examples 

#### Example: serviceUpdateTimeStamp 

```json
 {
  "serviceUpdateTimeStamp": {
    "lastUpdate": "1518827901926",
    "sourceLastUpdate": "1520631394"
  }
} 
````

