The resources folder is a location for additional symbology.  In styles subfolder, symbols may be user defined.  

In this folder, root.json.gz must be defined.  Root carries information such as a name(which is unique), itemtype, and more.  

<b>Example of root.json</b>
```
{
    "items": [
        {
            "name": "5fe9e487e2230d61de71aff13744c5e9",
            "title": "",
            "itemType": "pointSymbol",
            "dimensionality": "volumetric",
            "formats": [
                "web3d",
                "cim"
            ],
            "cimRef": "./cim/5fe9e487e2230d61de71aff13744c5e9.json.gz",
            "webRef": "./web/5fe9e487e2230d61de71aff13744c5e9.json.gz",
            "formatInfos": [
                {
                    "type": "gltf",
                    "href": "./gltf/5fe9e487e2230d61de71aff13744c5e9.json.gz"
                }
            ],
            "thumbnail": {
                "href": "./thumbnails/5fe9e487e2230d61de71aff13744c5e9.png"
            }
        }
    ],
    "cimVersion": "2.0.0"
}
```


If a symbol is defined, then it is placed in a folder based on the type(gltf,jpeg,png) and given a symbolLayer json.  The symbolLayer json is named based on the unique symbol name, and the [resource](resource.cmn.md) attribute is an href to an image or glb file.

The supported symbol resource types are JPEG, PNG, glb.gz.  The glb file type is a binary representation of 3D models saved in the gltf, then compressed with gzip.

<b>Example of the resource symbolLayer json</b>
```
{
    "name": "5fe9e487e2230d61de71aff13744c5e9",
    "type": "PointSymbol3D",
    "symbolLayers": [
        {
            "type": "Object",
            "anchorPosition": [
                0,
                0,
                -0.5
            ],
            "width": 26.685164171278601,
            "height": 20,
            "depth": 64.389789603982777,
            "heading": -90,
            "anchor": "relative",
            "resource": {
                "href": "./resource/5fe9e487e2230d61de71aff13744c5e9.glb.gz"
            }
        }
    ]
}
```
