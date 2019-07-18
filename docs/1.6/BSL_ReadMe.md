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
  |	 |  |  +-- attributes
  |	 |  |  |  +--f_2
  |  |  |  |  +--f_4
  |  |  |  |  +--(...)
  |  |  |  +-- geometries
  |  |  |  |  +-- 0
  |  |  |  +-- textures
  |  |  |  |  +-- 0
  |  |  |  |  +-- 0_0_1
  |  |  |  |  +--(...)
  |  |  |  +-- shared 
  |  |  |  (...) 
  |  +--statistics
  |  |  +-- f_2
  |  |  |  | +--0
  |  |  +-- f_4
  |  |  |  | +--0
  |  |  +-- (...)
```
# HTTP API Overview

The following API methods are available for Building Scene Layer:

| Resource             | Type   | Description                                                  | URL Template                         |
| -------------------- | ------ | ------------------------------------------------------------ | ------------------------------------ |
| Scene Layer Document | `JSON` | This is the root document for the service that will contain properties common to the entire layer. | `http://serviceURL/layers/{layerID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.

Example: http://my.server.com/BuildingSceneLayer/SceneServer/layers/0



| Resource          | Type   | Description                   | URL Template                                                |
| ----------------- | ------ | ----------------------------- | ----------------------------------------------------------- |
| Sublayer Document | `JSON` | Discipline or category layer. | `http://serviceURL/layers/{layerID}/sublayers/{sublayerID}` |

- `layerID`: Integer. ID of the associated layer. Esri products expect this to be `0`.
- `sublayerID`: Integer. ID of the associated resource. 

Example: http://my.server.com/BuildingSceneLayer/SceneServer/layers/0/sublayers/98



Sublayers are identical to 3D Object layers and contain the same resources. The resource URL are prefixed with `sublayers/{sublayerID}`.

Example:  http://my.server.com/BuildingSceneLayer/SceneServer/layers/0/sublayers/98/geometries/1