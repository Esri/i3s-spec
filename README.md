Scene Layers: Service and Package Standard
===============================================

![Multiple scene layers in web scene viewer](./sceneLayers.jpg )

This GitHub repository hosts the specification for scene layers. Scene layers are containers for large volumes of geographic data. The delivery format and persistence model, referred to as indexed 3D scene layer (I3S) and scene layer package (.slpk) respectively, are detailed in this specification. Both formats are encoded using JSON and binary array buffers.

The I3S format originated from investigation into technology for rapidly streaming and distributing large volumes of 3D content across enterprise systems.  These systems can include server components, cloud hosted components, and a variety of client software from desktop to web to mobile applications.  

A single I3S data set, referred to as a scene layer, is a container for arbitrarily large volumes of heterogeneously distributed 3D geographic data. A scene layer is characterized by a combination of layer type and profile to fully describe the behavior of the layer. For example, the profile type MeshPyramids is a specific implementation instance that is used for  integrated mesh scene layer, 3D object scene layer, and sublayers of building scene layers.

The I3S format is declarative and extendable, and can be used to represent different types of 3D data. The following layer types are detailed in this documentation and validated via implementation and production deployments:

- [3D objects](docs/1.7/3Dobject_ReadMe.md) (e.g. building exteriors, from GIS data as well as 3D models in various formats)
- [Integrated mesh](docs/1.7/IntegratedMesh_ReadMe.md) (e.g. an integrated surface representing the skin of the earth, gathered through satellite, aerial, or drone imagery via dense matching photogrammetric software)
- [Point](docs/1.6/Point_ReadMe.md) (e.g. hospitals, schools, trees, street furniture, signs, from GIS data)
- [Point cloud](docs/2.0/pcsl_ReadMe.md) (e.g. large point data from LiDAR)
- [Building scene layer](docs/1.7/BSL_ReadMe.md) (e.g. comprehensive building model including building components)


The specification of the [indexed 3D scene layer (I3S)](format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md) and the specification for accessing I3S resources as scene service REST endpoints, are described in this document as open formats.  The REST endpoint implementations are described in the ReadMe for each layer type. 
You can use [I3S tool](./i3s_converter/i3s_converter_ReadMe.md) to convert to the newest i3s specification or validate your existing SLPK.

This GitHub repo includes documentation for 1.6, 1.7, and 2.0. Deprecated elements from a minor version will be removed as part of the next major revision.

## Designed for Web, Mobile and cloud  

The goal for I3S is to enable streaming large 3D datasets with high performance and scalability. The I3S format is designed from the ground up to be cloud, web and mobile friendly. It is based on JSON, REST and modern web standards, making it easy to handle, parse, and render by web and mobile clients.

## Designed for 3D
The I3S format is intrinsically designed to support 3D geospatial content.  The requisite coordinate reference systems and height models are used in conjunction with a rich set of layer types.

## Open Standard

For the purpose of encouraging community adoption and feedback, the I3S format is maintained by ESRI as an open specification. Further, an earlier version of this specification was submitted to the Open Geospatial Consortium (OGC) and was approved as an OGC Community Standard. By being an open specification, we further hope to ensure that adopting organizations have flexibility in accessing and visualizing their 3D data. Both the current I3S specifciation and the OGC standard are licensed under the Creative Commons Attribution-NoDerivatives 4.0 International Public License. Implementers can use the standard in services, clients or processing tools without restrictions. Consult the [license](#license-for-indexed-3d-scene-format-and-rest-endpoint-specification) section below for more information.

## An OGC Community Standard

The Open Geospatial Consortium (OGC) approved I3S as a Community Standard which was publicly released September 2017 as the [OGC Indexed 3d Scene Layer (I3S)](https://www.opengeospatial.org/standards/i3s) version 1.0. 

The open community specification hosted in this GitHub repository is the sole source of content for the OGC I3S Community Standard. The community specification evolves driven by advancements in technology as well as community needs. The OGC process allows for updating and synchronizing the Community Standard with this community specification at regular intervals to achieve equivalency. 

OGC is in the process of updating the I3S Community Standard to version 1.1 to include updates from this repository. To facilitate this process, as well as to quickly provide new capabilities to the community without impacting other existing scene layer types and profiles, each I3S layer evolves independently and follows its own release cycle.

The table below shows how the OGC community standard relates to the community specification hosted here.

| **I3S Profile**   | **Supported Layer Types**                                                                               | **I3S community specification**      | **OGC I3S community standard**          |
| ----------------- | ------------------------------------------------------------------------------------------------------- |------------------|----------------------------- |
| MeshPyramids      | [3D Object](docs/1.6/3Dobject_ReadMe.md) and [Integrated Mesh](docs/1.6/IntegratedMesh_ReadMe.md) | 1.6              | [1.0](http://docs.opengeospatial.org/cs/17-014r5/17-014r5.html)                         |
| Points            | [Point](docs/1.6/Point_ReadMe.md)                                                  | 1.6              | [1.0](http://docs.opengeospatial.org/cs/17-014r5/17-014r5.html)                          |
| PointClouds       | [Point Cloud](docs/2.0/pcsl_ReadMe.md)                                                               | 2.0              | 1.1 (under adoption process) |

The Point Cloud Scene Layer specification is going through the adoption process for inclusion in OGC I3S 1.1. Through this process, new layer types can be added to the OGC I3S Community Standard.

The following changes to the I3S community specification are yet to be proposed for incorporation into the OGC I3S Community Standard:

- The performance optimizations for the MeshPyramids profile that are part of the I3S 1.7 community specification.
- Inclusion of the [Building Scene Layer](docs/1.7/BSL_ReadMe.md), first introduced at I3S 1.6.

## What's New?

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

## Where Can I Use...?

There are several applications that can create and consume scene layers. The tables below list some of these applications. This is an evolving list and will be updated frequently. If an application that either consumes or generates scene layers is missing, please let us know so we can add it to the list.
<table>
 <tr>
  <td><strong>Vendor</strong></td>  
  <td><strong>Product/URL</strong></td>
  <td><strong>Scene Layer Type</strong></td>
 </tr>
 <tr>
  <td>Bentley</td>  
  <td><a href="https://www.bentley.com/en/products/brands/contextcapture">ContextCapture</a></td>  
  <td>IntegratedMesh</a></td>
 </tr>
 <tr>
  <td>Vricon</td>
  <td><a href="http://www.vricon.com">Vricon</a></td>
  <td>IntegratedMesh</td>
 </tr>
  <tr>
  <td>Pix4D</td>
  <td><a href="https://pix4d.com/">Pix4D</a></td>
  <td>IntegratedMesh</td>  
 </tr>
  </tr>
  <tr>
  <td>Skyline</td>
  <td><a href="http://www.skylineglobe.com/SkylineGlobe/corporate/Products/photomesh.aspx">PhotoMesh</a></td>
  <td>IntegratedMesh</td>  
 </tr>
</table>
<p><em>List of vendors and products that support creation of I3S layers.</em></p>

The Table below shows the various scene layer types that are supported by the <a href="http://server.arcgis.com/en/server/latest/publish-services/windows/scene-services.htm#">ArcGIS platform</a>.

This table reflects the current versions of the ArcGIS Clients.

<table>
  <tr>
    <th colspan="1" rowspan="2"><br>Scene Layer Types</th>
    <th colspan="3">ArcGIS Enterprise</th>
    <th colspan="3">ArcGIS Pro</th>
  </tr>
  <tr>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>First Released</td>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>First Released</td>
  </tr>
  <tr>
    <td>3D Object</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>10.5</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>1.4</td>
  </tr>
  <tr>
    <td>Integrated Mesh</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>10.5</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>1.4/2.1*</td>
  </tr>
  <tr>
    <td>Point</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>10.5</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>1.4</td>
  </tr>
  <tr>
    <td>Point Cloud</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>10.5.1</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>2.0</td>
  </tr>
  <tr>
    <td>Building Scene Layer</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>10.7</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>2.2</td>
  </tr>
</table>
<table>
  <tr>
    <th colspan="1" rowspan="2"><br>Scene Layer Types</th>
    <th colspan="2">ArcGIS Online</th>
    <th colspan="3">ArcGIS API for Javascript</th>
    <th colspan="3">ArcGIS Runtime</th>
  </tr>
  <tr>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>First Released</td>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>First Released</td>
  </tr>
  <tr>
    <td>3D Object</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"> </td>
    <td>100.2</td>
  </tr>
  <tr>
    <td>Integrated Mesh</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>100.2</td>
  </tr>
  <tr>
    <td>Point</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>100.5</td>
  </tr>
  <tr>
    <td>Point Cloud</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>100.5</td>
  </tr>
  <tr>
    <td>Building Scene Layer</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>



<table>
  <tr>
    <th colspan="1" rowspan="2"><br>Scene Layer Types</th>
    <th colspan="3">ArcGIS Earth</th>
    <th colspan="3">Esri City Engine</th>
  </tr>
  <tr>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>First Released</td>
    <td>Publishing</td>
    <td>Consuming</td>
    <td>First Released</td>
  </tr>
  <tr>
    <td>3D Object</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>1.6</td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td></td>
    <td>2017.1</td>
 </tr>
  <tr>
    <td>Integrated Mesh</td>
    <td></td>
    <td align="middle"><img alt="supported" src="format/images/checkmark.png"></td>
    <td>1.6</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Point</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Point Cloud</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Building Scene Layer</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


## Contributing

You are invited to fork this repository and to submit pull requests with ideas for improvements, bugs, or issues in this documentation. Creating a fork solely for this purpose does not constitute the creation and distribution of a derivative work. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## License for indexed 3D scene format and REST endpoint specification <a name="license-for-indexed-3d-scene-format-and-rest-endpoint-specification"></a>

Copyright &copy; 2015 - 2019 Esri

The specification is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International Public License](https://creativecommons.org/licenses/by-nd/4.0/legalcode).
You can implement the specification in services, clients or processing tools without restrictions.

You may also extend or modify the standard using the built-in extension and profiling mechanisms, however modified or extended versions of the standard may not be redistributed. The standard may only be redistributed in its unmodified version, under the same license.

You are free to:

- Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
- The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- No derivatives — If you remix, transform, or build upon the material, you may not distribute (see note below) the modified material.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

License history:  

Version 1.0 – 1.5 (04/30/2015 to 01/30/2017) of this specification are licensed under the older Creative Commons Attribution-NoDerivs 3.0 Unported license.

Version 1.6 – present integrated mesh, 3D object, point scene layer, building scene layer (dated 01/31/2017 to present) of this specification are licensed under the newer Creative Commons Attribution-NoDerivatives 4.0 International Public License.  

Version 1.7 – present integrated mesh and 3D object (dated 06/30/2019 to present) of this specification are licensed under the newer Creative Commons Attribution-NoDerivatives 4.0 International Public License.  

Version 2.0 - present point cloud scene layer (01/01/2017 to present) of this specification are licensed under the newer Creative Commons Attribution-NoDerivatives 4.0 International Public License.  

## License for JSON resources, validator, and examples <a name="license-for-indexed-3d-scene-format-and-rest-endpoint-specification"></a>

The supplementary resources may be updated without notice and are provided for use under the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license and may be used, under the terms of that license, at your own risk.
