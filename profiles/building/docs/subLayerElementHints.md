# Building Scene Layer sub-layer element hints

Building scene layers are defined by category layers, which are further grouped by discipline layers. Category layers contain a specific group of features.  For example, the category layer "windows" contains all the windows of the building. When creating a building scene layer, the input category layers need to include an "element hint" for optimal caching. The elementClassCodeHint represents the relative size of the category layer to the building. If you are writing out building scene layers as a SLPK or a scene service, the category layers need to include the elementClassCodeHint as metadata to take advantage of the caching optimization. The follow list describes the element hints currently defined for the caching of building scene layers.

### Related:

[building::sublayer](sublayer.md)
### Overiew elementClassCodeHint

| elementClassCodeHint |  Description |
| --- | --- |
| 10 | 'Global' element. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains feature on a global scale. For example, if a category layer reaches over multiple cities. |
| 20 | 'Landscape' element. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains feature the size of landscape elements. For example, if a category layer includes parts about the size of a city block. |
| 30 | 'Exterior Building’ element. If no metadata are defined this is the default. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains features like roofs or walls. |
| 40 | ‘Exterior Building Detail’ element. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains features like roof or wall details. |
| 50 | (Interior) ‘Office‘ element. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains features like interior walls or staircases. |
| 60 | (Interior) ‘Office equipment‘ element. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains features like furniture or desktop computers. |
| 70 | (Interior) ‘Small Office equipment’ element. Add this elementClassCodeHint to the metadata in a feature class if the category layer contains features like phones or light fixtures. |

### Examples 

#### Example: Building Scene Layer class code hint meta data

tags=elementClassCodeHint=30
