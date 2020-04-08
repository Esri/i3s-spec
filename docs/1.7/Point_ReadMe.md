# Point Scene Layer (1.7)

Point scene layers contain point features and their attributes. Point scene layers are often used to visualize large amounts of 3D data like trees or buildings.  Most phenomena that can be visualized by 3D symbols can be displayed with a point scene layers.

**Examples**:<br />

Some PSL [SLPK]()

SomE PSL server [service]()

*screenshots here*

![Point scene layer ex](../img/PointSceneLayer.png)

## Point Scene Layer Structure
The point scene layer is structured into a tree of multiple JSON files. Point scene layers can be represented as a scene layer package (*.slpk) or a I3S service. A point scene layer contains the following:

[Stuff contained]()

*Example of point scene layer structure*

EDIT THIS AS NEEDED
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
EDIT AS NEEDED
The following API methods are available for Point Scene Layer:

**Scene layer document**

<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0</td>
</tr>
<tr>
    <td>Description</td>
    <td>This is the root document for the service containing properties common to the entire layer.<br/>
    <code>layerID</code>: Integer. ID of the associated layer. Esri products expect this to be `0`.</td>
</tr>
</table>

[3DSceneLayer](3DSceneLayer.psl.md)

**3D node index document**

<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{nodeID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/98</td>
</tr>
<tr>
    <td>Description</td>
    <td>Description of the node.<br/>
    <code>layerID</code>: Integer. ID of the associated layer. Esri clients expect this to be `0`.<br/>
    <code>nodeID</code>: Integer. ID of the associated resource.</td>
</tr>
</table>

[3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)

**Attributes**
<table>
<tr>
    <td>Type</td>
    <td>bin</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{nodeID}/attributes/f_{attributeID}/0</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/98/attributes/f_8/0 </td>
</tr>
<tr>
    <td>Description</td>
    <td>The value for a specific attribute within a node.<br/>
    <code>layerID</code>: Integer. ID of the associated layer. Esri products expect this to be `0`.<br/>
    <code>nodeID</code>: Integer. ID of the associated resource. attributeID: Integer. ID of the specific attribute for the layer. </td>
</tr>
</table>

**Feature**
<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{nodeID}/features/0</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/PointSceneLayer/SceneServer/layers/0/nodes/98/features/0 </td>
</tr>
<tr>
    <td>Description</td>
    <td>Point location and feature IDs.<br/>
    <code>layerID</code>: Integer. ID of the associated layer. Esri products expect this to be `0`.<br/>
    <code>nodeID</code>: Integer. ID of the associated resource.<br/>
    <code>attributeID</code>: Integer. ID of the specific attribute for the layer. </td>
</tr>
</table>

[featureData](featureData.cmn.md)

**Statistics**
<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/statistics/f_{attributeID}/0</td>
</tr>
<tr>
    <td>Example</td>
    <td> http://my.server.com/PointSceneLayer/SceneServer/layers/0/statistics/f_8/0  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The statistics for the entire layer for a specific attribute.<br/>
    <code>layerID</code>: Integer. ID of the associated layer. Esri products expect this to be `0`.<br/>
    <code>attributeID</code>: Integer.  ID of the specific attribute for the layer</td>
</tr>
</table>

[statistics](statisticsInfo.cmn.md)

