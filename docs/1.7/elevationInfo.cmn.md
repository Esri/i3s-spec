# I3S Scene Layer: elevationInfo

An object defining where a feature is placed within a scene. For example, on the ground or at an absolute height. [See more](https://developers.arcgis.com/web-scene-specification/objects/elevationInfo/) information on elevation in ArcGIS clients.

### Related:

[psl::3DSceneLayer](3DSceneLayer.psl.md), [cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| mode | string | <div>Possible values are:<ul><li>`relativeToGround`</li><li>`absoluteHeight`</li><li>`onTheGround`</li><li>`relativeToScene`</li></ul></div> |
| offset | number | Offset is always added to the result of the above logic except for onTheGround where offset is ignored. |
| unit | string | A string value indicating the unit for the values in elevationInfo |
| featureExpression | [featureExpression](featureExpression.cmn.md) | Deprecated with 1.8, use featureExpressionInfo instead. {"value":0} ignores geometry z-values. |

