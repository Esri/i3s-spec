# image

An image is a binary resource, containing a single raster that can be used to texture a feature or symbol. An image represents one specific texture LoD. For details on texture organization, please refer to the section on [texture resources](texture.cmn.md).

### Related:

[cmn::textureDefinitionInfo](textureDefinitionInfo.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | string | A unique ID for each image. Generated using the BuildID function. |
| size | number | width of this image, in pixels. |
| pixelInWorldUnits | number | The maximum size of a single pixel in world units. This property is used by the client to pick the image to load and render. |
| href | string[] | The href to the image(s), one per encoding, in the same order as the encodings. |
| byteOffset | number[] | The byte offset of this image's encodings. There is one per encoding, in the same order as the encodings, in the block in which this texture image resides. |
| length | number[] | The length in bytes of this image's encodings. There is one per encoding, in the same order as the encodings. |

*Note: properties in **bold** are required*

### Examples 

#### Example: Image 

```json
 {
  "id": "1170940301162943632",
  "size": 1024,
  "pixelInWorldUnits": 0,
  "href": [
    "../textures/0_0",
    "../textures/0_0_1"
  ],
  "byteOffset": [
    0,
    0
  ],
  "length": [
    167267,
    699192
  ]
} 
```

