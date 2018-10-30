# textureDefinition

Materials describe how a feature or a set of features is to be rendered. This includes which shading and which colors to use. The following table provides the set of attributes and params for the `type`: `standard` material.

### Related:

[common::sharedResource](sharedResource.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **encoding** | string[] | MIMEtype - The encoding/content type that is used by all images in this map |
| wrap | string[] | UV wrapping modes, from {none, repeat, mirror}. |
| atlas | boolean | TRUE if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string[] | indicates which channels are stored in which channel of this map. Possible values: h=brightness, r=red, g=green, b=blue, a=alpha, n=bump, d=displacement, etc. |
| images | [common::image](image.md)[] | An image is a binary resource, containing a single raster that can be used to texture a feature or symbol. |

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

