# Filter Mode: wire frame

Shows all elements that comply with the filter block of a filter in a building scene layer.  The elements are drawn with an edge line.

### Related:

[bld::filterMode](filterMode.bld.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| type | string | Declares filter mode of type wire frame.<div>Must be:<ul><li>`wireFrame`</li></ul></div> |
| edges |  | An object defining solid edges of a feature. [See more](https://developers.arcgis.com/web-scene-specification/objects/edges/) information on supported edges in ArcGIS clients. |

*Note: properties in **bold** are required*

*Note: properties in (parentheses) require a unique name*

### Examples 

#### Example: Filter mode wire frame 

```json
 {
  "type": "wireFrame",
  "edges": {
    "type": "solid",
    "color": [
      255,
      0,
      0
    ],
    "size": 0.75,
    "transparency": 10,
    "extensionLength": 5
  }
} 
```

