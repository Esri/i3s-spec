Scene Layers: Service and Package Standard
===============================================

![Multiple scene layers in web scene viewer](./sceneLayers.jpg )

This repository hosts the specification for scene layers. Scene layers are containers for large amounts of geographic data. The delivery format and persistence model, referred to as indexed 3D scene layer (I3S) and scene layer package (.slpk) respectively, are specified in detail. Both formats are encoded using JSON and binary ArrayBuffers.

The format I3S originated from investigation into technology for rapidly streaming and distributing large volumes of 3D content across enterprise systems.  These systems can include server components, cloud hosted components, and a variety of client software from desktop to web and mobile applications.  

A single I3S data set, referred to as a scene layer, is a container for arbitrarily large amounts of heterogeneously distributed 3D geographic data. A scene layer is characterized by a combination of layer type and profile to fully describe the behavior of the layer and the manner in which it is realized within the specification.

The I3S format is declarative and extendable, and can be used to represent different types of 3D data.
The following layer types have been specified and the standard validated via implementation and production deployments:

- [3D Objects](docs/1.7/3Dobject_ReadMe.md) (e.g. building exteriors, from GIS data as well as 3D models in various formats)
- [Integrated Mesh](docs/1.7/IntegratedMesh_ReadMe.md) (e.g. an integrated surface representing the skin of the earth, from satellite, aerial or drone imagery via dense matching photogrammetric software)
- [Point](docs/1.6/Point_ReadMe.md) (e.g. hospitals or schools, trees, street furniture, signs, from GIS data)
- [Point Cloud](docs/2.0/pcsl_ReadMe.md) (e.g. large point data from LiDAR)
- [Building Scene Layer](docs/1.6/BSL_ReadMe.md) (e.g. comprehensive building model including building components)


The specification of the [indexed 3D scene layer (I3S)](./format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md) and [scene layer package (\*.slpk)](./format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md#scene-layer-packages), as well as the specification for accessing I3S resources as [scene service REST](./service/SceneService.md) endpoints, are described in this standard as open formats.


## Designed for Web, Mobile and Cloud  

The goal is to be able to stream large 3D datasets with high performance and scalability. The I3S format is designed from the ground up to be cloud, web and mobile friendly. It is based on JSON, REST and modern web standards, making it easy to handle, parse, and render by Web and Mobile Clients.

## Designed for 3D
The I3S format is intrinsically designed to support 3D geospatial content.  The requisite coordinate systems and height models are used in conjunction with a rich set of layer types.

## Open Standard

For the purpose of encouraging community adoption and feedback, the I3S format is an open standard. By being an open standard, we further hope to ensure that adopting organizations have flexibility in accessing and visualizing their 3D data. The standard is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International Public License. Implementers can use the standard in services, clients or processing tools without restrictions. Consult the [license](#license-for-indexed-3d-scene-format-and-rest-endpoint-specification) section below for more information.

## An OGC Community Standard

On August 8 2017, the Open Geospatial Consortium (OGC) approved I3S as a community Standard and was released to the public as [OGC Indexed 3d Scene Layer (I3S) and Scene Layer Package Format Specification](https://www.opengeospatial.org/standards/i3s) version 1.0.

The open community GitHub specification hosted in this repository is the sole source of I3S OGC Community Standard. I3S evolves primarily driven by advancements in technology as well as community needs. The OGC process allows for updating and synchronizing the Community Standard with the open community GitHub version at regular intervals to achieve equivalency.

OGC is currently in the process of updating the I3S Community Standard to Version 1.1 to pick up updates form this repository. To facilitate this process, as well as provide new capabilities fast to the community without impacting existing scene layer types and profiles, each I3S profile evolves and is versioned independently.

The table below shows how I3S OGC Community Standard relates to the I3S specification hosted here.

| **I3S Profile**   | **Supported Layer Types**                                                                               | **I3S Version**      | **OGC I3S Community Standard Version**          |                
| ----------------- | ------------------------------------------------------------------------------------------------------- |------------------|----------------------------- |
| MeshPyramids      | [3D Object](../docs/1.6/3Dobject_ReadMe.md) and [Integrated Mesh](../docs/1.6/IntegratedMesh_ReadMe.md) | 1.6              | [1.0](http://docs.opengeospatial.org/cs/17-014r5/17-014r5.html)                         |
| Points            | [Point](../docs/1.6/3Dobject_ReadMe.md)                                                                 | 1.6              | [1.0](http://docs.opengeospatial.org/cs/17-014r5/17-014r5.html)                          |
| PointClouds       | [Point Cloud](../docs/2.0/pcsl_ReadMe.md)                                                               | 2.0              | 1.1 (under adoption process) |

In addition, the OGC 1.1 update for MeshPyramids Profile is picking up minor additional updates from I3S 1.6 for 3D Objects and Integrated Mesh Scene Layers as detailed in [here](#version-16).

The Point Cloud Scene Layer specification that is currently going thru the adoption process for inclusion as part of OGC I3S 1.1 is an example where new layer types could be added to I3S Standard. Similarly, [Building Scene Layer](docs/1.6/BSL_ReadMe.md) as well as performance optimizations for MeshPyramids profile released under I3S 1.6 and 1.7 specification respectively, will be submitted for inclusion as part of I3S OGC standard.

## What's New?

### Version 1.7
Released 06/30/2019 - (applies to [MeshPyramids](docs/1.7/store.cmn.md) profile)


### [3D Object Scene Layer](docs/1.7/3Dobject_ReadMe.md) and [Integrated Mesh Scene Layer](docs/1.7/IntegratedMesh_ReadMe.md)

- Nodes are now accessible via the [page node index](docs/1.7/nodePages.cmn.md) - significantly reducing server-client traffic
- Support for [Draco geometry compression](docs/1.7/compressedAttributes.cmn.md) - more compact geometry allows for smaller payloads
- Support for [advanced material](docs/1.7/materialDefinitions.cmn.md) such as physically based materials
- Deprecated [SharedResource](docs/1.7/sharedResource.cmn.md) - sharedResource properties are readily available in the node index resource
- New [tooling to validate existing slpk](i3s_converter/i3s_converter_ReadMe.md) and convert Integrated Mesh or 3d Objects scene layer to I3S 1.7

I3S specification version 1.7 is backward compatible with I3S Version 1.6 and is currently supported by ArcGIS Pro 2.4 and ArcGIS Online. More support of I3S 1.7 across the ArcGIS platform will role out in upcoming releases.

### Version 1.6

Released 03/01/2019 - (applies to [MeshPyramids](docs/1.6/store.cmn.md) profile)

#### [3D Object Scene Layer](docs/1.6/3Dobject_ReadMe.md)
- [Oriented Bounding Boxes](docs/1.6/obb.cmn.md) - introduces support for Oriented Bounding Boxes as a bounding volume
- [Attribute Domain](docs/1.6/domain.cmn.md) (i.e. field) - Attribute Domains are rules that describe the legal values of a field type, providing a method for enforcing data integrity.  For example, domain values can be used in pop-ups with definition queries
- [serviceUpdateTimeStamp](docs/1.6/serviceUpdateTimeStamp.cmn.md) - provides the time stamp when the I3S service or the source of the service was created or updated. This property can be used in conjunction with the associated feature layer for editing purposes

#### [Building Scene Layer](docs/1.6/BSL_ReadMe.md)
- [Building Scene Layer](docs/1.6/BSL_ReadMe.md) profile specification. The Building Scene Layer is used to visualize and work with buildings.

### Version 2.0

Released 03/01/2019  - (applies to [PointClouds](docs/1.6/store.cmn.md) profile)

#### [Point Cloud Scene Layer](docs/2.0/pcsl_ReadMe.md)

- The full specification for [Point Cloud Scene Layer](docs/2.0/pcsl_ReadMe.md)

## Where Can I Use...?

There are few applications that can create and consume scene layers. The tables below list some of those applications. This is an evolving list and will be updated frequently. If an application that's either consuming or generating scene layers is missing, please let us know so we can add it to the list.
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

The Table below shows the various scene layer types that are currently supported by the <a href="http://server.arcgis.com/en/server/latest/publish-services/windows/scene-services.htm#">ArcGIS platform</a>.

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

## License for indexed 3D scene format and REST endpoint specification

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

## License for JSON resources, validator, and examples

The supplementary resources may be updated without notice and are provided for use under the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license and may be used, under the terms of that license, at your own risk.
