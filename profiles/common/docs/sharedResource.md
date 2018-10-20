# SharedResources

Shared resources are models or textures that can be shared among features within the same layer. They are stored as a JSON file entirely. Each node has a shared resource which contains materials and symbols used by more than a single feature in that node or in features which are stored in the subtree of the current node. This approach ensures an optimal distribution of shared resources across nodes, while maintaining the node-based updating process. The SharedResource class collects Material definitions, Texture definitions, Shader definitions and geometry symbols that need to be instanced.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| **materialDefinitions** | [common::materialDefinition](materialDefinition.md) | Materials describe how a Feature or a set of Features is to be rendered. |
| textureDefinitions | [common::textureDefinition](textureDefinition.md) | A Texture is a set of images, with some parameters specific to the texture/uv mapping to geometries. |

*Note: properties in **bold** are required*

### Examples 

#### Example: 3D Scene Layer info for point scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for 3D object scene layer 

```json
 None 
```

#### Example: 3D Scene Layer info for integrated mesh scene layer 

```json
 None 
```

