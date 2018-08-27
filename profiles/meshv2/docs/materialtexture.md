# Material texture definition



### Related:

[meshv2::materialdefinitions](materialdefinitions.md), [meshv2::pbrmetallicroughness](pbrmetallicroughness.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **textureSetDefinitionId** | integer | index in [layer.textureSetDefinitions](layer.md) |
| **texCoord** | integer | Set if UV coordinates vertex attribute to use. Must `0` or `1`.  |
| factor | number | _normal texture_: scalar multiplier applied to each normal vector of the normal texture. For _occlusion texture_,scalar multiplier controlling the amount of occlusion applied. Default=`1` |

*Note: properties in **bold** are required*

### Examples 

#### Example:  

```json
 "" 
```

