Scene Layers: Service and Package Standard
===============================================

![App](./sceneLayers.jpg "Multiple Scene Layers in Web Scene Viewer")[http://www.arcgis.com](http://www.arcgis.com)

This repository hosts the standard for Scene Layers which are containers for arbitrarily large amounts of geographic data. The delivery format and persistence model for Scene Layers, referred to as Indexed 3d Scene Layer (I3S) and Scene Layer Package (SLPK) respectively, are specified in detail. Both formats are encoded using JSON and binary ArrayBuffers.

I3S originated from investigations into technologies for rapidly streaming and distributing large volumes of 3D content across enterprise systems that may consist of server components, cloud hosted components, and a variety of client software from desktop to web and mobile applications.  

A single I3S data set, referred to as a Scene Layer, is a container for arbitrarily large amounts of heterogeneously distributed 3D geographic data. A Scene Layer is characterized by a combination of layer type and profile to fully describe the behavior of the layer and the manner in which it is realized within the specification.

The I3S format is declarative and extendable and can be used to represent different types of 3D data.
The following layer types have been specified and the standard validated via implementation and production deployments:
- 3D Objects (e.g. Building Exteriors, from GIS Data as well as 3D models in various formats)
- Integrated Meshes (e.g. eg an integrated surface representing the skin of the earth, from satellite, aerial or drone imagery via dense matching photogrammetric software)
- Point Features (e.g. Hospitals or Schools, trees, street furniture, signs, from GIS Data)

The following layer types are planned for future inclusion:

- Line Features (e.g. from GIS Data)
- Polygon Features (e.g. from GIS Data)
- Pointclouds (e.g. from LiDAR)

The specification of the [Indexed 3d Scene Layer (I3S)](./format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md) and [Scene Layer Package (\*.slpk)](./format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md), as well as the specification for accessing I3S resources as [Scene Service REST](./service/SceneService.md) endpoints, are described in this standard as open formats.


## Designed for Web, Mobile and Cloud  

I3S is designed from the ground up to be cloud, web and mobile friendly. It is based on JSON, REST and modern web standards and is easy to handle, efficiently parse and render by Web and Mobile Clients. I3S is designed to stream large 3d datasets and is designed for performance and scalability.

## Designed for 3D
I3S is intrinsically designed to support 3D geospatial content and supports the requisite coordinate systems and height models in conjunction with a rich set of layer types.

## Open Standard

For the purpose of encouraging community adoption and feedback, I3S is an open standard. By being an open standard, we further hope to ensure that adopting organizations have flexibility in accessing and visualizing their 3D data. The standard is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International Public License. Implementers can use the standard in services, clients or processing tools without restrictions. Consult the [License](### License for Indexed 3D Scene Format and REST Endpoint Specification) section below for more information.

## Where can I use...?

There are few applications that can create and consume I3S content. The tables below list some of those applications. This is an evolving list and will be updated frequently. If an application that's either consuming or generating I3S content is missing, please let us know so we can add it to the list.
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
  <tr>
  <td>Melown</td>
  <td><a href="https://www.melown.com/">Melown Photogrammetry</a></td>
  <td>Integrated Mesh</td>  
 </tr>
</table>
<p><em>Table 1: List of vendors and products that support outputting I3S layers.</em></p>

The Table below shows the various scene layer types that are currently supported by the <a href="http://server.arcgis.com/en/server/latest/publish-services/windows/scene-services.htm#">ArcGIS platform. </a> The software products listed below support publishing as well as consuming Scene Layers.  

<table>
  <tr>
    <th rowspan="2"><br>ArcGIS Software<br></th>
    <th rowspan="2"><br>Version</th>
    <th colspan="3">Scene Layer Types<br></th>    
  </tr>
  <tr>
    <td>3D Objects</td>
    <td>Integrated Meshes</td>
    <td>Points</td>
  </tr>
  <tr>
    <td>ArcGIS Online</td>
    <td>Current</td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS API for JavaScript</td>
    <td>4.x</td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Enterprise</td>
    <td>10.6</td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Pro</td>
    <td>2.1</td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>Esri CityEngine</td>
    <td>2017.1</td>
    <td><ul><li>[x] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Earth</td>
    <td>1.6</td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Runtime</td>
    <td>100.2</td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
  </tr>
  </table>

<em>Table 2: ArcGIS platform support for different scene layers types.</em>


The list of supported scene layer types in the ArcGIS platform is growing at every release. For example, support for <em>PointCloud</em> scene layer is currently in active development.

## Contributing

You are very much invited to fork this repository to a public or private repository and to send Pull Requests if you have ideas for improvements or have found bugs in this documentation. Creating a Fork solely for this purpose
does not constitute the creation and distribution of a derivative work. Please see our [guidelines for  contributing](https://github.com/esri/contributing).

## License for Indexed 3D Scene Format and REST Endpoint Specification

Copyright 2015 - 2017 Esri

The specification is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International Public License](https://creativecommons.org/licenses/by-nd/4.0/legalcode).
You can implement the specification in services, clients or processing tools without restrictions.

You may also extend or modify the standard using the built-in extension and profiling mechanisms, however modified or extended versions of the standard may not be redistributed. The standard may only be redistributed in its unmodified version, under the same license.

You are free to:

- Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
- The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- No derivatives — If you remix, transform, or build upon the material, you may not distribute (see Note below) the modified material.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

License History:  

Version 1.0 – 1.5 (04/30/2015 to 01/30/2017) of this specification are licensed under the older Creative Commons Attribution-NoDerivs 3.0 Unported license.  
Version 1.6 – present (dated 01/31/2017 to present) of this specification are licensed under the newer Creative Commons Attribution-NoDerivatives 4.0 International Public License.  
Copies of both licenses are included in this repository.

## License for JSON resources, validator, and examples

The supplementary resources may be updated without notice and are provided for use under the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license and may be used, under the terms of that license, at your own risk.

[](Esri Tags: I3S, Indexed 3D Scene Layer, Scene Layer, ArcGIS WebScene, Mesh-Pyramids, ArcGISOnline Scene Service, ArcGISServer, Scene Layer Package, SceneLayer, 3D Object, Point, IntegreatedMesh, PointCloud)
[](Esri Language: JavaScript)
