# featureData

The FeatureData JSON file(s) contain geographical features with a set of attributes, accessors to geometry attributes, and other references to styling or materials.

### Related:

[cmn::features](features.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **id** | number | Feature ID, unique within the Node. If lodType is FeatureTree, the ID must be unique in the store. |
| position | number[2:3] | An array of two or three doubles, giving the x,y(,z) (easting/northing/elevation) position of this feature's minimum bounding sphere center, in the vertexCRS. |
| pivotOffset | number[3] | An array of three doubles, providing an optional, 'semantic' pivot offset that can be used to e.g. correctly drape tree symbols. |
| mbb | number[6] | An array of six doubles, corresponding to xmin, ymin, zmin, xmax, ymax and zmax of the minimum bounding box of the feature, expressed in the vertexCRS, without offset. The mbb can be used with the Feature’s Transform to provide a LOD0 representation without loading the GeometryAttributes. |
| layer | string | The name of the Feature Class this feature belongs to. |
| attributes | [featureAttribute](featureAttribute.cmn.md) | The list of GIS attributes the feature has. |
| geometries | [geometry](geometry.cmn.md) | The list of geometries the feature has. A feature always has at least one Geometry. |

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

