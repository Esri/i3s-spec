# 3D Object Scene Layer (1.7)

A 3D object scene layer is used to visualize 3D objects.  3D object scene layers are often created from GIS data with attributes and explicitly modeled in 3D.  These attributes allow definition queries to specify symbology and other properties in lieu of setting properties for each object individually.  A 3D object scene layer can efficiently create and share just a few buildings or an entire city.

**Examples**:<br />

New York LoD2 3D Buildings [SLPK](http://www.arcgis.com/home/item.html?id=44039155906640438c906d47fac50301).<br />
New York LoD2 3D Buildings [service](https://www.arcgis.com/home/item.html?id=a457834a6cb449cd958502d6e98ba305).<br />

Montreal, Canada textured buildings [SLPK](https://www.arcgis.com/home/item.html?id=5a575b5ab50845c2bfd071c593e9fc40).<br />
Montreal, Canada textured buildings [service](https://www.arcgis.com/home/item.html?id=77611df5dfae41019d5b57d89229e1d3).<br />

*Realistic 3D Object Scene Layer with textures*

![Realistic 3D Object Scene Layer with textures](../img/LyonTextured.png)

*Thematic 3D Object Scene Layer without textures*

![Thematic 3D Object Scene Layer without textures](../img/LyonThematic.png)

## 3D Object Scene Layer Structure
The 3D object scene layer is structured into a tree of multiple JSON files. A 3D object scene layer can be represented as a scene layer package (*.slpk) or a I3S service. A 3D object scene layer contains the following:

- [layer description](3DSceneLayer.cmn.md)
- [node pages](nodepage.cmn.md)
- geometryBuffer (binary)
- attributesBuffer (binary)
- textures (binary)
- [statistics](statsInfo.cmn.md)
- [3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)*
- [sharedResource](sharedResource.cmn.md)*
- features^

3D object scene layer packages can optionally contain a [hash table](slpk_hashtable.cmn.md) for faster indexing. 

*Example of 3DObject layer structure*

```
.<host>/SceneServer/layers
	+--0 // scene layer document
	+-- nodePages
	|  +-- 0
	|  +-- (...)
	+-- nodes
	|  +--0
	|  |  +-- attributes
	|  |  |  +--f_2
	|  |  |  +--f_4
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
	|  |  |  +-- 1
	|  |  |  +--(...)
	|  |  +-- textures
	|  |  |  +-- 0
	|  |  |  +-- 0_0_1
	|  |  |  +--(...)
	|  |  +-- 3dNodeIndexDocument*
	|  |  +-- shared* 
	|  |  +-- features^
	|  |  |  +-- 0
	|  |  (...) 
	+--statistics
	|  +-- f_2
	|  +-- f_4
	|  +-- (...)
```

_* Only required for 1.6 compatability for older clients._ <br />
_^ Not used by client. Human readable version of the features._ <br />



# HTTP API Overview 1.7

Version 1.7 is backwards compatible with 1.6.  For older clients to be able to read 1.7, sharedResources and  the 3DNodeIndexDocument resources are included.


The following API methods are available for 3D Object scene layer:

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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0</td>
</tr>
<tr>
    <td>Description</td>
    <td>This is the root document for the service containing properties common to the entire layer.<br/>
    <code>layerID</code>: Integer. ID of the associated layer. Esri products expect this to be `0`.</td>
</tr>
</table>

[Scene Layer document](3DSceneLayer.cmn.md)

**Node page** <br />

<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodepages/{nodePageID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodepages/8</td>
</tr>
<tr>
    <td>Description</td>
    <td><code>layerID</code>: Integer. ID of the associated layer. Esri products expect this to be `0`.<br/>
    <code>nodePageID</code>: Integer. ID of the associated node page.</td>
</tr>
</table>

[Node Pages](nodepage.cmn.md)

**Texture**
<table>
<tr>
    <td>Type</td>
    <td>JPG, PNG, DDS, KTX </td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{nodeID}/textures/{textureID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/textures/0_0_1  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The texture resource (image). <br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri products expect this to be `0`. <br/>
    <code>nodeID</code> Integer. ID of the associated node. <br/>
    <code>textureID</code> String. This ID returns one of the textures available for this node. The same texture may be available in different formats.</td>
</tr>
</table>

**Geometry**
<table>
<tr>
    <td>Type</td>
    <td>bin, draco</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{nodeID}/geometries/{geometryID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/geometries/1 </td>
</tr>
<tr>
    <td>Description</td>
    <td>The geometry resource (mesh information). <br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri products expect this to be `0`. <br/>
    <code>nodeID</code> Integer. ID of the associated node. <br/>
    <code>geometryID</code> Integer. This ID returns one of the geometries available for this node. The same geometry may be available in a different format. </td>
</tr>
</table>

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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/2/attributes/f_5/0  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The value for a specific attribute within a node. <br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri products expect this to be `0`. <br/>
    <code>nodeID</code> Integer. ID of the associated node. <br/>
    <code>attributeID</code> Integer. ID of the specific attribute for the layer. </td>
</tr>
</table>

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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/statistics/f_5/0  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The statistics for the entire layer for a specific attribute. <br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri products expect this to be `0`.<br/>
    <code>attributeID</code> Integer.  ID of the specific attribute for the layer. </td>
</tr>
</table>

[Statistics](statsInfo.cmn.md)

## HTTP API included for backward compatibility with 1.6

**Shared resources**
<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{nodeID}/shared</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/shared  </td>
</tr>
<tr>
    <td>Description</td>
    <td>Legacy texture and material description. **Not used in 1.7.**. <br/>
    <code>layerID</code> Integer. ID of the associated layer. ArcGIS clients expect this to be `0`. <br/>
    <code>nodeID</code> Integer. ID of the associated node.  </td>
</tr>
</table>

[Shared Resources](sharedResource.cmn.md)

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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98</td>
</tr>
<tr>
    <td>Description</td>
    <td>Description of the node. **Not used in 1.7.**<br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri clients expect this to be `0`.<br/>
    <code>nodeID</code> Integer. ID of the associated resource.</td>
</tr>
</table>

[3DNodeIndexDocument](3DNodeIndexDocument.cmn.md)

