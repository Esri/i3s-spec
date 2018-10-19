# SingleComponentParams

Objects of this type extend VestedGeometryParams and use one texture and one material. They can be used with aggregated LoD geometries. Component objects provide information on parts of the geometry they belong to, specifically with which material and texture to render them.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| material | string | URL - I3S Pointer reference to the material definition in this node's shared resource, from its root element. If present, used for the entire geometry. |
| texture | string | URL - I3S Pointer reference to the material definition in this node's shared resource, from its root element. If present, used for the entire geometry. |
| **id** | number | The ID of the component, only unique within the Geometry. |
| materialID | number | UUID of the material, as defined in the shared resources bundle, to use for rendering this component. |
| textureID | number[] | Optional ID of the texture, as defined in shared resources, to use with the material to render this component. |
| regionID | number[] | Optional ID of a texture atlas region which to use with the texture to render this component. |

*Note: properties in **bold** are required*

### Examples 

#### Example: info for point scene layer 

```json
 None 
```

#### Example:  info for 3D object scene layer 

```json
 None 
```

#### Example:  info for integrated mesh scene layer 

```json
 None 
```

