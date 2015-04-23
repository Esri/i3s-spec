i3s-spec
========

*Indexed 3D Scene Format Specification*

This repository hosts the specification for the ArcGIS Scene Service and its delivery format I3S (Indexed 3D Scene). These are the core resources:

-	[Indexed 3d Scene Format](./format/Indexed%203d%20Scene%20Format%20Specification.md) – Main specification for the I3S Format
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

We are also building a [Validation Toolkit](https://devtopia.esri.com/Zurich-R-D-Center/i3s-validator) to support developers.

This specification is licensed unter the [Creative Commons Attribution-NoDerivs 3.0 Unported License](http://creativecommons.org/licenses/by-nd/3.0/). You can implement it without restrictions and can extend or modify it using the inbuilt extension and profilign mechanisms. However, you cannot create derivate works and distribute these. 

You are very much invited to fork this repository though and to send Pull Requests if you have ideas for improvements or have found bugs in this documentation. 