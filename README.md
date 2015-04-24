i3s-spec
========

*Indexed 3D Scene Format Specification*

[![App](https://github.com/Esri/i3s-spec/raw/master/teaser.jpg "Multiple Scene Services in a Web Viewer")] (http://www.arcgis.com/)

This repository hosts the specification for the ArcGIS Scene Service and its delivery format i3s (Indexed 3D Scene). These are the core resources:

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

## License

Copyright 2015 Esri

This specification is licensed unter the [Creative Commons Attribution-NoDerivs 3.0 Unported License](http://creativecommons.org/licenses/by-nd/3.0/). 
You can implement the specification in services, clients or processing tools without restrictions and can extend or modify it using the inbuilt 
extension and profiling mechanisms. However, you cannot create derivate works and distribute these. If you redistribute the specification, you 
have to do so under the same license.

You are free to:

- Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
- The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- NoDerivatives — If you remix, transform, or build upon the material, you may not distribute (see Note below) the modified material.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

## Contributing

You are very much invited to fork this repository to a public or private repository and to send Pull Requests if you have ideas for improvements or have found bugs in this documentation. Creating a Fork solely for this purpose 
does not consitute the creation and distribution of a derivative work.

[](Esri Tags: ArcGIS WebScene ArcGISOnline SceneService ArcGISServer)
[](Esri Language: JavaScript)