Rest Resources {style="margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:
0cm"}
--------------

**Resource**

**URL**

**Returns**

ArcGIS Server

Base URL

http://\<hostname\>/arcgis/rest/services/

List of services

[http://3dcities.esri.com/arcgis/rest/services/](http://3dcities.esri.com/arcgis/rest/services/)

SceneServer

\<ags-base-url\>/\<server-name\>/SceneServer

Server info and list of available caches

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer)

Layer

\<**scene-server-url**\>/layers/\<layer-name\>

Info about single layer (see 3dSceneLayer.js)

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings) 

Node

\<**layer-url** \>/nodes/\<node-id\>

Node file (json)

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings
/nodes/51](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings%20/nodes/51)

Shared Resources

\<**node-url**\>/shared/

Shared resource data bundle for a node (symbology and materials)

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings
/nodes/51/shared](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/shared)

Features

\<**node-url**\>/features/\<feature-data-bundle-id\>

Feature data bundle.

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings
/nodes/51/features/3](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/features/3)

Geometries

\<**node-url**\>/geometries/\<geometry-data-bundle-id\>

Geometry data bundle.

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings
/nodes/51/geometries/3](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/geometries/3)

Textures

\<**node-url**\>/textures/\<texture-bundle-id\>

Texture bundle

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings
/nodes/51](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings%20/nodes/51)/textures/3

Rest Operations {style="margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:
0cm"}
---------------

**Operation Name**

**Parent Resource**

**Parameters**

**Returns**

Search

Scene Server

Text query string

Search results

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer)/Search?queryString=”technopark”

FindNode

Cache

Extent

The node id

[ http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/FindNode?sphere=”{x:52.1,y:34.2,z:0,r:50}](../%20http:/3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/FindNode?sphere=)”

JSON fragment needs to be URL-encoded:\

http://\<server-url\>/layers/PublicBuildings/FindNode?sphere=”%7Bx%3A52.1%2Cy%3A34.2%2Cz%3A0%2Cr%3A50%7D”

Query

Layer

Existing map server query parameters

Query results

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/query?whereClause=”treeHeight](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/query?whereClause=)
\> 10”

GetFeature

Cache

Cache Feature ID

The complete feature (attributes + geom + sym/mat + textures)

[http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/GetFeature?featureId=309432971018](http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/GetFeature?featureId=309432971018) 

  {style="margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:
0cm"}
-

Global Parameters {style="margin-top:0cm;margin-right:0cm;margin-bottom:6.0pt;margin-left:
0cm"}
-----------------

**Name**

**Values**

**Description**

f

*json, pjson, html* (default)

Output is formatted by default as html page, unless *f=json*is provided

expand

Json object names to be replaced, i.e. *featureData* within a *node
index*document. The specified json objects must include a *href*
property.

For each of the json object names in the parameter values, replaces
their content with the document that the specified object’s *href*
property points to.

For example, in order to get the entire data ‘tile’ data for a specific
node:\

[\<**node-url**\>?**expand**=featureData,geometryData,textureData,sharedResource](../)

 
