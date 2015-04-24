i3s-spec
========

*Indexed 3D Scene Format Specification*

[![App](https://github.com/Esri/i3s-spec/raw/master/teaser.jpg "Multiple Scene Services in a Web Viewer")] (http://www.arcgis.com/)

This repository hosts the specification for the ArcGIS Scene Service and its delivery format, i3s (Indexed 3D Scene). These are the core resources:

-	[Indexed 3d Scene Format](./format/Indexed%203d%20Scene%20Format%20Specification.md) – Main specification for the i3s Format
-	[Specification for the REST endpoint](./service/SceneService.md) of the Scene Service with resources and operations
-	A set of example JSON resources for each profile
-   Validator rule files for each profile

The structure of this specification is as follows:
- Format: Full logical format specification, including  physical format specification for Scene Packages (*.spk)
- Profiles: Subsets the full format specification for different data structures: 
    - Features (Meshes, Points, Lines, Polygons)
	- Meshpyramids 
    - Analytics 
    - Pointclouds
- Service: Contains the REST API specification for the Scene Service.

We are also building a Validation Toolkit to support developers.

## Contributing

You are very much invited to fork this repository to a public or private repository and to send Pull Requests if you have ideas for improvements or have found bugs in this documentation. Creating a Fork solely for this purpose 
does not consitute the creation and distribution of a derivative work. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## License for Indexed 3D Scene Format and REST Endpoint Specification

Copyright 2015 Esri

The specification is licensed unter the [Creative Commons Attribution-NoDerivs 3.0 Unported License](http://creativecommons.org/licenses/by-nd/3.0/). 
You can implement the specification in services, clients or processing tools without restrictions.

You may also extend or modify the specification using the builtin extension and profiling mechanisms, however modified or extended versions of the specification may not be redistributed. The specification may only be redistributed in its unmodified version, under the same license.

You are free to:

- Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
- The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- No derivatives — If you remix, transform, or build upon the material, you may not distribute (see Note below) the modified material.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

## Contributing to the Specifications

You are very much invited to fork this repository to a public or private repository and to send Pull Requests if you have ideas for improvements or have found bugs in this documentation. Creating a Fork solely for this purpose 
does not consitute the creation and distribution of a derivative work.

## License for JSON resources, validator, and examples

The supplementary resources may be updated without notice and are provided for use under the [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license and may be used, under the terms of that license, at your own risk.

[](Esri Tags: ArcGIS WebScene ArcGISOnline SceneService ArcGISServer)
[](Esri Language: JavaScript)
