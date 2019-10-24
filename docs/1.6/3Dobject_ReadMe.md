# 3D Object Scene Layer (1.6)

A 3D object scene layer is used to visualize 3D objects.  3D object scene layers are often created from GIS data with attributes and explicitly modeled in 3D.  These attributes allow definition queries to specify symbology and other properties in lieu of setting properties for each object individually.  A 3D object scene layer can efficiently create and share just a few buildings or an entire city.

*Realistic 3D Object Scene Layer with textures*

![Realistic 3D Object Scene Layer with textures](../img/LyonTextured.png)

*Thematic 3D Object Scene Layer without textures*

![Thematic 3D Object Scene Layer without textures](../img/LyonThematic.png)

## 3D Object Scene Layer Structure
The 3D object scene layer is structured into a tree of multiple JSON files.  A 3D object scene layer can be used to create a scene layer package (*.slpk) or a I3S service. A 3D object scene layer contains the following:

- [Layer description](3DSceneLayer.cmn.md)
- geometryBuffer (binary)
- attributeBuffer (binary)
- textures (binary)
- [Node Index Document](3DNodeIndexDocument.cmn.md)
- [Statistics](statsInfo.cmn.md)
- [Shared Resources](sharedResource.cmn.md)
- features^

*Example of 3DObject layer structure*

```
.<host>/SceneServer/layers
	+--0 // scene layer document
	+-- nodes
	|  +--0
	|  |  +-- attributes
	|  |  |  +--f_2
	|  |  |  +--f_4
	|  |  |  +--(...)
	|  |  +-- geometries
	|  |  |  +-- 0
	|  |  +-- textures
	|  |  |  +-- 0
	|  |  |  +-- 0_0_1
	|  |  |  +--(...)
	|  |  +-- 3dNodeIndexDocument
	|  |  +-- shared 
	|  |  |  +-- sharedResource
	|  |  +-- features^
	|  |  |  +-- 0
	|  |  (...) 
	+--statistics
	|  +-- f_2
	|  |  | +--0
	|  +-- f_4
	|  |  | +--0
	|  +-- (...)
```
_^ Not used by client. Human readable version of the features._ <br />

# HTTP API Overview 1.6

The following API methods are available for 3D Object scene layer:

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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0</td>
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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98</td>
</tr>
<tr>
    <td>Description</td>
    <td>Description of the node. ID of the associated layer. Esri clients expect this to be `0`. resourceID: Integer. ID of the associated resource.</td>
</tr>
</table>

**Textures**
<table>
<tr>
    <td>Type</td>
    <td>JPG, PNG, DDS, KTX </td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{resourceID}/textures/{texture ID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/textures/1  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The texture resource (image). layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. resourceID: Integer. ID of the associated node. textureID: String. This ID returns one of the textures available for this node. The same texture may be available in different formats.</td>
</tr>
</table>


**Geometry**
<table>
<tr>
    <td>Type</td>
    <td>bin, draco</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{resourceID}/geometries/{geometry ID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/geometries/1 </td>
</tr>
<tr>
    <td>Description</td>
    <td>The geometry resource (mesh information). layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. resourceID: Integer. ID of the associated node.
geometryID: Integer. This ID returns one of the geometries available for this node. The same geometry may be available in a different format. </td>
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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/2/attributes/f_48/0  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The value for a specific attribute within a node. layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. attributeID: Integer. ID of the specific attribute for the layer. </td>
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
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/statistics/f_48/0  </td>
</tr>
<tr>
    <td>Description</td>
    <td>The statistics for the entire layer for a specific attribute. layerID: Integer. ID of the associated layer. Esri products expect this to be `0`. attributeID: Integer.  ID of the specific attribute for the layer. </td>
</tr>
</table>

**Shared resources**
<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Templace</td>
    <td>http://serviceURL/layers/{layerID}/nodes/{resourceID}/shared</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/3DObjectSceneLayer/SceneServer/layers/0/nodes/98/shared  </td>
</tr>
<tr>
    <td>Description</td>
    <td>Texture and material description. layerID: Integer. ID of the associated layer. ArcGIS clients expect this to be `0`. resourceID: Integer. ID of the associated node.  </td>
</tr>
</table>
