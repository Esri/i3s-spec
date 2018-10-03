# Building Scene Layer sub layer element hints

Building scene layers are defined by category layers which are grouped into discipline layers. Each category layer contains specific features. For example, the category layer windows contains all the windows of the building. When creating a building scene layer, the input category layers need to contain an element hint for the caching process to be optimal. The elementClassCodeHind represents the relative size of the category layer to the building. In case you are writing out building scene layers as SLPK or a scene service, the category layers need to include the elementClassCodeHint as meta data to take advantage of the caching optimization. The follow list describes the element hints currently defined for the caching of building scene layers.

### Related:

[bim::sublayer](sublayer.md)
### Overiew elementClassCodeHint

| emelemtClassCodeHint |  Description |
| --- | --- |
| 10 |  'Global' element. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature on a global scale. For example, if a category layer reaches over multiple cities.|
| 20 | 'Landscape' element. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature the size of landscape elements. For example, if a catory layer includes parts of the size of a city block. |
| 30 | 'Exterior Building’ element. If no meta data are defined this is the default. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature like roof or walls. |
| 40 |  ‘Exterior Building Detail’ element. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature like the details of roof or walls. |
| 50 | (Interior) ‘Office‘ element. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature like the inner walls or stair cases.  |
| 60 | (Interior) ‘Office equipment‘ element. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature like furniture or desktop computers. |
| 70 | (Interior) ‘Small Office equipment’ element. Add this elementClassCodeHint to the meta data in a feature class, if the category layer contains feature like phones or light fixtures.  |

### Examples 

#### Example: Building Scene Layer class code hint meta data

tags=elementClassCodeHint=30
