# textureDefinition

A Texture is a set of images, with some parameters specific to the texture/uv mapping to geometries.

### Related:

[store](store.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| encoding | string | MIMEtype[1..*] The encoding/content type that is used by all images in this map |
| wrap | string[] | <div>Possible values for each array string:<ul><li>`none`</li><li>`repeat`: .</li><li>`mirror`</li></ul></div> |
| atlas | boolean | True if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string[] |  |

*Note: properties in **bold** are required*

### Examples 

#### Example: textureDefinition 

