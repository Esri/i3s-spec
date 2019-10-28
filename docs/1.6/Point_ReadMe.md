# Point Scene Layer

Point scene layers contain point features and their attributes. Point scene layers are often used to visualize large amounts of 3D data like trees or buildings.  Most phenomena that can be visualized by 3D symbols can be displayed with a point scene layers.

**Examples**:<br />
NYC 2015 Tree Survey [SLPK](https://www.arcgis.com/home/item.html?id=7f3221f2984f49d89a9ef6d114d5f748).<br />
NYC 2015 Tree Survey [service](www.arcgis.com/home/item.html?id=496552d059644b4892c51ad06bdba8e2).<br />

*Example of a point scene layer*

![Point Scene Layer](../img/PointSceneLayer.png)

## Point Scene Layer Structure
The point scene layer is structured into a tree of multiple JSON files. Point scene layers can be used to create a scene layer package (*.slpk) or a I3S service. A point scene layer contains the following:

- [Layer description](3DSceneLayer.psl.md)
- [Feature Data](featureData.cmn.md)
- attribute (binary)
- [Node Index Document](3DNodeIndexDocument.cmn.md)
- [Statistics](statisticsInfo.cmn.md)

*Example of point scene layer structure*

```
.<host>/SceneServer/layers
	+--0 // scene layer document
	+-- nodes
	|  +--root
	|  |  +-- attributes
	|  |  |  +--f_2
	|  |  |  +--f_4
	|  |  |  +--(...)
	|  |  +-- features
	|  |  |  +-- 0
	|  +-- (...)
	+--statistics
	|  +-- f_2
	|  | +--0
	|  +-- f_4
	|  | +--0
	|  +-- (...)
	+--resources
	    +-- styles
	 	| +-- root
	 	| +-- web 
```
# HTTP API Overview

The following API methods are available for Point Scene Layer:

**Scene layer document**

<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0</td>
</tr>
<tr>
    <td>Description</td>
    <td>This is the root document for the service containing properties common to the entire layer. layerID: Integer. ID of the associated layer. Esri products expect this to be `0`.</td>
</tr>
</table>

**3D node index document**

<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{resourceID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/98</td>
</tr>
<tr>
    <td>Description</td>
    <td>Description of the node. ID of the associated layer. Esri clients expect this to be `0`. resourceID: Integer. ID of the associated resource.</td>
</tr>
</table>

**Attributes**
<table>
<tr>
    <td>Type</td>
    <td>bin</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{resourceID}/attributes/f_{attributeID}/0</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0/attributes/f_48/0 </td>
</tr>
<tr>
    <td>Description</td>
    <td>The value for a specific attribute within a node. layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. attributeID: Integer. ID of the specific attribute for the layer. </td>
</tr>
</table>

**Feature**
<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{resourceID}/features/0</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/98/features/0 </td>
</tr>
<tr>
    <td>Description</td>
    <td>Point location and feature IDs. layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. attributeID: Integer. ID of the specific attribute for the layer. </td>
</tr>
</table>

**Statistics**
<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/statistics/f_{attributeID}/0</td>
</tr>
<tr>
    <td>Example</td>
    <td> http://my.server.com/PointSceneLayer/SceneServer/layers/0/statistics/f_48/0  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The statistics for the entire layer for a specific attribute. layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. attributeID: Integer.  ID of the specific attribute for the layer</td>
</tr>
</table>

