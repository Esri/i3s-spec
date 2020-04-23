# popupInfo

Defines the look and feel of popup windows when a user clicks or queries a feature. [See more](https://developers.arcgis.com/web-scene-specification/objects/popupInfo/) information on popup information in ArcGIS clients.

### Related:

[cmn::3DSceneLayer](3DSceneLayer.cmn.md), [psl::3DSceneLayer](3DSceneLayer.psl.md), [psl::3DSceneLayer](3DSceneLayer.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| title | string | A string that appears at the top of the popup window as a title |
| description | string | A string that appears in the body of the popup window as a description. It is also possible to specify the description as HTML-formatted content. |
| expressionInfos | [] | List of Arcade expressions added to the pop-up. [See more](https://developers.arcgis.com/web-scene-specification/objects/popupExpressionInfo/) information on supported in ArcGIS clients. |
| fieldInfos | [] | Array of fieldInfo information properties. This information is provided by the service layer definition. [See more](https://developers.arcgis.com/web-scene-specification/objects/fieldInfo/) information on supported in ArcGIS clients. |
| mediaInfos | [] | Array of various mediaInfo to display. Can be of type image, piechart, barchart, columnchart, or linechart. The order given is the order in which it displays. [See more](https://developers.arcgis.com/web-scene-specification/objects/mediaInfo/) information on supported in ArcGIS clients. |
| popupElements | [] | An array of popupElement objects that represent an ordered list of popup elements. [See more](https://developers.arcgis.com/web-scene-specification/objects/popupElement/) information on supported in ArcGIS clients. |

### Examples 

#### Example: popupInfo 

```json
 {
  "title": "Buildings",
  "mediaInfos": [],
  "description": "Buidlings on campus A.",
  "fieldInfos": [
    {
      "fieldName": "OBJECTID",
      "visible": true,
      "isEditable": false,
      "label": "OID"
    },
    {
      "fieldName": "Name",
      "visible": true,
      "isEditable": true,
      "label": "Name"
    }
  ],
  "popupElements": [
    {
      "text": "Buidlings on campus A.",
      "type": "text"
    },
    {
      "fieldInfos": [
        {
          "fieldName": "OBJECTID",
          "visible": true,
          "isEditable": false,
          "label": "OID"
        },
        {
          "fieldName": "Name",
          "visible": true,
          "isEditable": true,
          "label": "Name"
        }
      ],
      "type": "fields"
    }
  ],
  "expressionInfos": []
} 
```

