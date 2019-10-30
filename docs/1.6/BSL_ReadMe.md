# Building Scene Layer

Building content is derived from a Building Information Modeling (BIM). BIM is a best-practice process for optimizing design and construction. BIM processes can produce 3D virtual representations of real-world assets that are commonly used for construction, documentation, and evaluation. BIM processes are applied in multiple domains including architecture, buildings, energy, utilities, and transportation. A building scene layer can represent the 3D model aspect of BIM structuring disciplines such as architectural or piping, and its categories like windows or walls.

*Example of a Building Scene Layer*

![Building Scene Layer](../img/buildingSceneLayer.png)

## Building Scene Layer Structure
The building scene layer contains discipline and category layers as sublayers which represent a building and its assets. Building scene layers can be used to create a scene layer package (*.slpk) or an I3S service. A building scene layer contains the following:

- [Layer description](layer.bld.md)
- [Sublayers](sublayer.bld.md)
- [Statistics](stats.bld.md)

*Example of building scene scene layer structure*

```
.<host>/SceneServer/layers
  +--0 // scene layer document
  |  +-- statistics
  |  |   +-- summary.json
  |  +-- sublayers
  |  |  +--0 // sublayer document
  |  |  |  +--nodes
  |  |  |  |  +--0
  |  |  |  |  |  +-- attributes
  |  |  |  |  |  |  +--f_2
  |  |  |  |  |  |  +--f_4
  |  |  |  |  |  |  +--(...)
  |  |  |  |  |  +-- geometries
  |  |  |  |  |  |  +-- 0
  |  |  |  |  |  +-- textures
  |  |  |  |  |  |  +-- 0
  |  |  |  |  |  |  +-- 0_0_1
  |  |  |  |  |  |  +--(...)
  |  |  |  |  |  +-- 3dNodeIndexDocument
  |  |  |  |  |  +-- shared 
  |  |  |  |  |  |  +-- sharedResource*
  |  |  |  |  |  +-- features^
  |  |  |  |  |  |  |  +-- 0
  |  |  |  |  (...) 
  |  |  |  +--statistics
  |  |  |  |  +-- f_2
  |  |  |  |  |  | +--0
  |  |  |  |  +-- f_4
  |  |  |  |  |  | +--0
  |  |  |  |  +-- (...)
```
_^ Not used by client. Human readable version of the features._ <br />
_* Deprecated._ <br />

# HTTP API Overview

The following API methods are available for Building Scene Layer:

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
    <td>http://my.server.com/BuildingSceneLayer/SceneServer/layers/0</td>
</tr>
<tr>
    <td>Description</td>
    <td>This is the root document for the service containing properties common to the entire layer. <br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri products expect this to be `0`.</td>
</tr>
</table>

**Sublayer Document**

<table>
<tr>
    <td>Type</td>
    <td>JSON</td>
</tr>
<tr>
    <td>URL Template</td>
    <td>http://serviceURL/layers/{layerID}/sublayers/{sublayerID}</td>
</tr>
<tr>
    <td>Example</td>
    <td>http://my.server.com/BuildingSceneLayer/SceneServer/layers/0/sublayers/98</td>
</tr>
<tr>
    <td>Description</td>
    <td> Discipline or category layer. <br/>
    <code>layerID</code> Integer. ID of the associated layer. Esri products expect this to be `0`. <br/>
    <code>sublayerID</code> Integer. ID of the associated resource. <br/>
    Sublayers are identical to 3D Object layers and contain the same resources. The resource URL are prefixed with `sublayers/{sublayerID}`</td>
</tr>
</table>

