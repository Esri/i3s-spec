# I3S Scene Layer: popupInfo

Defines the look and feel of popup windows when a user clicks or queries a feature. [See more](https://developers.arcgis.com/web-scene-specification/objects/popupInfo/) information on popup information in ArcGIS clients.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| title | string | A string that appears at the top of the popup window as a title |
| description | string | A string that appears in the body of the popup window as a description. It is also possible to specify the description as HTML-formatted content.<div>Possible values are:<ul><li>`String`</li><li>`Null`</li></ul></div> |
| expressionInfos | [] | List of Arcade expressions added to the pop-up. |
| fieldInfos | [] | Array of various mediaInfo to display. Can be of type image, piechart, barchart, columnchart, or linechart. The order given is the order in which it displays. |
| mediaInfos | [] | Array of various mediaInfo to display. Can be of type image, piechart, barchart, columnchart, or linechart. The order given is the order in which it displays. |
| popupElements | [] | Array of various mediaInfo to display. Can be of type image, piechart, barchart, columnchart, or linechart. The order given is the order in which it displays. |

*Note: properties in **bold** are required*

