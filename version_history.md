Version History
===============================================
Last updated 3/6/2020
### Version 1.7

Released 12/15/2019 [Building Scene Layer](docs/1.7/BSL_ReadMe.md) Specification upgrade to 1.7.
- Upgrade [tooling slpk](i3s_converter/i3s_converter_ReadMe.md) to convert 1.6 building scene layer to I3S 1.7.

Released 06/30/2019 - (applies to [MeshPyramids](docs/1.7/store.cmn.md) profile)

#### [3D Object Scene Layer](docs/1.7/3Dobject_ReadMe.md) and [Integrated Mesh Scene Layer](docs/1.7/IntegratedMesh_ReadMe.md)

  - Nodes are now accessible as pages using a [node page](docs/1.7/nodePageDefinition.cmn.md) - significantly reducing server-client traffic.
  - Support for [draco geometry compression](docs/1.7/compressedAttributes.cmn.md) - more compact geometry allows for smaller payloads.
  - Support for [advanced material](docs/1.7/materialDefinitions.cmn.md) such as physically based materials.
  - Deprecated [SharedResource](docs/1.7/sharedResource.cmn.md) - sharedResource properties are readily available in the node index resource.
  - New [tooling to validate existing slpk](i3s_converter/i3s_converter_ReadMe.md) and convert Integrated Mesh or 3D Object scene layers to I3S 1.7.

I3S specification version 1.7 is backwards compatible with I3S Version 1.6 and is currently supported by ArcGIS Pro 2.4 and ArcGIS Online.  More support of I3S 1.7 across the ArcGIS platform will roll out in upcoming releases.

### Version 1.6

Released 03/01/2019 - (applies to [MeshPyramids](docs/1.6/store.cmn.md profile) and officially submitted to the OGC in August 2019.

#### [3D Object Scene Layer](docs/1.6/3Dobject_ReadMe.md)
- [oriented bounding boxes](docs/1.6/obb.cmn.md) - Introduces support for oriented bounding boxes as a bounding volume.
- [attribute domain](docs/1.6/domain.cmn.md) (i.e. field) - Attribute domains are rules that describe the allowed values of a field type, providing a method for enforcing data integrity.  For example, domain values can be used in pop-ups with definition queries.
- [serviceUpdateTimeStamp](docs/1.6/serviceUpdateTimeStamp.cmn.md) - Provides the time stamp when the I3S service or the source of the service was created or updated. This property can be used in conjunction with the associated feature layer for editing.

#### [Building Scene Layer](docs/1.6/BSL_ReadMe.md)
- [Building Scene Layer](docs/1.6/BSL_ReadMe.md) profile specification. The Building Scene Layer is used to visualize and work with buildings.

### Version 2.0

Released 03/01/2019  - (applies to [Point Cloud](docs/1.6/store.cmn.md) profile)

#### [Point Cloud Scene Layer](docs/2.0/pcsl_ReadMe.md)

- [Point Cloud Scene Layer](docs/2.0/pcsl_ReadMe.md) profile specification.  The Point Cloud Scene Layer is used to visualize sensor data, including LiDAR.
