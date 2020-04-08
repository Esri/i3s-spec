# texture



The texture resource contains texture image files. Textures are stored as a binary resource within a node. I3S supports JPEG and PNG, as well as compressed texture formats S3TC and ETC2. When creating a scene layer using textures for example, a 3D Object scene layer, the appropriate texture encoding declaration needs to be provided. This is done using MIME types such as image/jpeg (for JPEG) and image/vnd-ms.dds (for S3TC). Textures should be in RGBA format. RGBA is a three-channel RGB color model supplemented with a 4th alpha chanel.

The integrated mesh and 3D object profile types support textures. The textures file is a binary resource that contains images to be used as textures for the features in the node. A single texture file contains 1 to n textures for a specific level of texture detail. It may contain a single texture or multiple individual textures. These are part of a texture atlas. Textures are expected in the following formats: 0_0.jpg for JPEG, 0.bin for PNG, 0_0_1.bin.dds for S3TC, and 0_0_2.ktx for ETC2. The texture resource must include either a JPEG or PNG texture file. 

In I3S version 1.6, the size property will give you the width of a texture. In version 1.7, the texelCountHint can be used to determine the cost of loading a node as well as for use in texel-resolution based LoD switching. (A texel, texture element, or texture pixel is the fundamental unit of a texture map.) Compressed textures such as S3TC and ETC may contain mipmaps. 
Mipmaps (also MIP maps) or pyramids are pre-calculated, optimized sequences of images, each of which is a progressively lower resolution representation of the same image. The height and width of each image, or level, in the mipmap is a power of two smaller than the previous level.
When compressing textures with mipmaps,  the texture dimensions must of size 2<sup>n</sup> and the smallest size allowed is 4x4, where n is 2. The number and volume of textures tends to be the limiting display factor, especially for web and mobile clients.  The format used depends on the use case. For example, a client might choose to consume JPEG in low bandwidth conditions since JPEG encoded files are efficient to transmit and widely used. Clients constrained for memory or computing resources might choose to directly consume compressed textures for performance reasons.

## Atlas Usage and Regions

Individual textures should be aggregated into texture atlases (e.g. 2048 x 2048 pixel). A node can only have one texture atlas. Each individual texture becomes a subtexture.  As with all texture resources, the atlas has to be of size 2<sup>n</sup> on both dimensions, where n ranges from 3 to 12, inclusive.  Width and height do not need to be equal.  Subtextures also need to be of size 2<sup>n</sup> with n in the range of 3 to 12, inclusive.  Subtextures with other dimensions can cause border artifacts when filtering or MIP-mapping.  A subtexture can be padded to the ceiling of 2<sup>n</sup> size by interpolating or scaling pixels (e.g. a subtexture of size 900x900 should scale to 1028x1028 as 1028 is 2<sup>10</sup>).

Subtexture pixels are identified by the subimageRegion attribute: [umin, vmin, umax, vmax].  Region information is passed to the shader using a separate vertex attribute, which converts a UV vertex coordinate to a UVR coordinate.  R encodes the [umin, vmin, umax, vmax] attribute values into 4 UInt16 values.

## Texture Coordinates

Texture coordinates do not take atlas regions into account directly. They range from 0 to 1 in U and V, except when using the 'repeat' wrapping mode.  In repeat mode, U and V  range from 0 to n, where n is the number of repeats. Repeating textures may repeat vertically, horizontally, or both. The client is expected to use the sub-image region values and the texture coordinates to best handle repeating textures in atlases.


### Related:

[cmn::store](store.cmn.md), [psl::store](store.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| encoding | string[] | MIMEtype[1..*] The encoding/content type that is used by all images in this map |
| wrap | string[] | <div>Possible values for each array string:<ul><li>`none`</li><li>`repeat`</li><li>`mirror`</li></ul></div> |
| atlas | boolean | True if the Map represents a texture atlas. |
| uvSet | string | The name of the UV set to be used as texture coordinates. |
| channels | string[] | Indicates which channels are stored in which channel of this map. Possible values: h=brightness, r=red, g=green, b=blue, a=alpha, n=bump, d=displacement. |

### Examples 

#### Example: textureDefinition 

```json
 {
  "encoding": [
    "image/jpeg",
    "image/vnd-ms.dds"
  ],
  "wrap": [
    "none",
    "none"
  ],
  "atlas": false,
  "uvSet": "uv0",
  "channels": [
    "r",
    "g",
    "b"
  ]
} 
```

