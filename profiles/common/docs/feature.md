# Feature

Features are representations of the geographic objects stored in a layer. In the 3dNodeIndexDocument, these objects define relationships, e.g. for linking feature representations of multiple LoDs

### Properties

| Property | Type | Description |
| --- | --- | --- |
| id | number | An ID of the feature object, unique within the store. The ID is important when using features from multiple stores. The ID must not be re-used e.g. for multiple representation of an input feature that are present in different nodes. |
| mbs | number[] | An array of four doubles, corresponding to x, y, z and radius of the minimum bounding sphere of the referenced node. |
| lodChildFeatures | number[] | IDs of features in a higher LoD level which together make up this feature. |
| lodChildNodes | string[] | Tree Key IDs of the nodes in which the lodChildFeatures are found. |
| rank | number[] | The LoD level of this feature. Only required for features that participate in a LoD tree. The lowest rank is 1. |
| rootFeature | string | The Tree Key ID of the root node of a feature LoD tree that this feature participates in. Only required if the feature participates in a LoD tree and if it is not the rootFeature itself. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Resource example 

```json
 {} 
```

