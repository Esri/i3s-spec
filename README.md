Scene Layers: Service and Package Standard
===============================================

![App](./sceneLayers.jpg "Multiple scene layers in web scene viewer")[http://www.arcgis.com](http://www.arcgis.com)

This repository hosts the standard for scene layers which are containers for arbitrarily large amounts of geographic data. The delivery format and persistence model for scene layers, referred to as indexed 3D scene layer (I3S) and scene layer package (.slpk) respectively, are specified in detail. Both formats are encoded using JSON and binary ArrayBuffers.

The format I3S originated from investigations into technologies for rapidly streaming and distributing large volumes of 3D content across enterprise systems that may consist of server components, cloud hosted components, and a variety of client software from desktop to web and mobile applications.  

A single I3S data set, referred to as a scene layer, is a container for arbitrarily large amounts of heterogeneously distributed 3D geographic data. A scene layer is characterized by a combination of layer type and profile to fully describe the behavior of the layer and the manner in which it is realized within the specification.

The I3S format is declarative and extendable and can be used to represent different types of 3D data.
The following layer types have been specified and the standard validated via implementation and production deployments:
- [3D objects](docs/1.6/3Dobjects.md) (e.g. building exteriors, from GIS data as well as 3D models in various formats)
- [integrated meshes](docs/1.6/integratedMesh.md) (e.g. an integrated surface representing the skin of the earth, from satellite, aerial or drone imagery via dense matching photogrammetric software)
- [points](docs/1.6/points.md) (e.g. hospitals or schools, trees, street furniture, signs, from GIS data)
- [point clouds](docs/1.6/pointCloud.md) (e.g. large point data from LiDAR)
- [building scene layer](docs/1.6/buildingSceneLayer.md) (e.g. comprehensive building model including building components)


The specification of the [indexed 3D scene layer (I3S)](./format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md) and [scene layer package (\*.slpk)](./format/Indexed%203d%20Scene%20Layer%20Format%20Specification.md), as well as the specification for accessing I3S resources as [scene service REST](./service/SceneService.md) endpoints, are described in this standard as open formats.


## Designed for Web, Mobile and Cloud  

The I3S format is designed from the ground up to be cloud, web and mobile friendly. It is based on JSON, REST and modern web standards and is easy to handle, efficiently parse and render by Web and Mobile Clients. The goal is to be able to stream large 3D datasets with high performance and scalability.

## Designed for 3D
The I3S format is intrinsically designed to support 3D geospatial content, the requisite coordinate systems and height models in conjunction with a rich set of layer types.

## Open Standard

For the purpose of encouraging community adoption and feedback, the I3S format is an open standard. By being an open standard, we further hope to ensure that adopting organizations have flexibility in accessing and visualizing their 3D data. The standard is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International Public License. Implementers can use the standard in services, clients or processing tools without restrictions. Consult the [[License|i3s-spec#license-for-indexed-3d-scene-format-and-rest-endpoint-specification]] section below for more information.

## Where can I use...?

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
</table>
<p><em>Table 1: List of vendors and products that support creation of I3S layers.</em></p>

The Table below shows the various scene layer types that are currently supported by the <a href="http://server.arcgis.com/en/server/latest/publish-services/windows/scene-services.htm#">ArcGIS platform. </a> 

<table>
  <tr>
    <th rowspan="2"><br>ArcGIS Software<br></th>
    <th rowspan="2"><br>Version</th>
    <th colspan="5">Scene Layer Types<br></th>    
  </tr>
  <tr>
    <td>3D Objects</td>
    <td>Integrated Meshes</td>
    <td>Points</td>
    <td>Point Clouds</td>
    <td>Building Scene Layer</td>
  </tr>
  <tr>
    <td>ArcGIS Online</td>
    <td>Current</td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS API for JavaScript</td>
    <td>4.x</td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Enterprise</td>
    <td>10.5</td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Pro</td>
    <td>1.4</td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[x] Publishing</li><li>[x] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>Esri CityEngine</td>
    <td>2016.1</td>
    <td><ul><li>[x] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Earth</td>
    <td>1.3</td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  <tr>
    <td>ArcGIS Runtime</td>
    <td>100.0</td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[x] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
    <td><ul><li>[ ] Publishing</li><li>[ ] Consuming</li></ul></td>
      <td><ul><li>[] Publishing</li><li>[] Consuming</li></ul></td>
  </tr>
  </table>
<em>Table 2: ArcGIS platform support for diffrent scene layers types.</em>

## Contributing

You are invited to fork this repository and to submit pull requests with ideas for improvements, bugs, or issues in this documentation. Creating a fork solely for this purpose does not constitute the creation and distribution of a derivative work. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## License for indexed 3D scene format and REST endpoint specification

Copyright 2015 - 2017 Esri

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
Version 1.6 – present integrated mesh, 3D object, point scene layer(dated 01/31/2017 to present) of this specification are licensed under the newer Creative Commons Attribution-NoDerivatives 4.0 International Public License.  

Copies of both licenses are included in this repository.

## License for JSON resources, validator, and examples

The supplementary resources may be updated without notice and are provided for use under the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license and may be used, under the terms of that license, at your own risk.

[](Esri Tags: I3S, Indexed 3D Scene Layer, Scene Layer, ArcGIS WebScene, Mesh-Pyramids, ArcGISOnline Scene Service, ArcGISServer, Scene Layer Package, SceneLayer, 3D Object, Point, IntegreatedMesh, PointCloud)
[](Esri Language: JavaScript)
