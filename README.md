i3s-spec
========

*Indexed 3D Scene Format Specification*

This repository hosts the specification for the ArcGIS Scene Service and its delivery format I3S (Indexed 3D Scene). These are the core resources:

-	[Indexed 3d Scene Format](./format/Indexed%203d%20Scene%20Format%20Specification.md) – Main specification for the I3S Format
-	[Specification for the REST endpoint](./service/SceneService.md) of the Scene Service with resources and operations
-	A set of example JSON resources for each profile
-   Validator rule files for each profile

The structure of this specification is as follows:
- Format: Full logical format specification, including  physical format specification for packaged i3s caches (*.i3p)
- Profiles: Subsets the full format specification for different data structures: 
    - Features (Meshes, Points, Lines, Polygons)
	- Meshpyramids 
    - Analytics 
    - Pointclouds
- Service: Contains the REST API specification for the Scene Service.

We are also building a [Validation Toolkit](https://devtopia.esri.com/Zurich-R-D-Center/i3s-validator) to support developers.

There is also a set of informative and explorative articles on implementation details and usage strategies for the format available in the [i3s wiki](https://devtopia.esri.com/Zurich-R-D-Center/i3s-spec/wiki/_pages) that includes client traversal patterns, suggestions on optimizations and approaches to steps of the cooking process, such as texture atlas generation.

Known Implementations:

- Cookers:
    - Redlands: 
        - Supported Profiles: 1.3 meshpyramid
        - Product: ArcGIS Server 10.3
        - Status: In development, >75% conformance to profile
    - Beijing:
        - Supported Profiles: 1.3 features (-meshes, -points, -lines, -polygons)
        - Product: standalone Windows App, integration with ArcGIS Server ongoing
        - Status: In development, >80% conformance to profile
    - Acute3D:
        - Supported Profiles: 1.3 features-meshes with full feature-tree LoD
        - Product: Smart3DCapture
        - Status: In development, >95% conformance to profile
    - Cyclomedia: 
        - Supported Profiles: 1.3 meshpyramids or features-meshes (not yet known)
        - Product: (?)
        - Status: In early development (no cache samples available yet)
    - VAlarm: 
        - Supported Profiles: 1.3 features-points, analytics
        - Product: VAlarm Tools Cloud (?)
        - Status: Planned, ETA for features-points in June/2014
    - Esri CH:
        - Supported Profiles: 1.3 analytics
        - Product: GeoEvent Processor Extension
        - Status: In development, ETA for simple anayltics in June/2014
- Clients
    - ArcGIS Web Scene Viewer (supports 1.3 features-meshes) 
    - ArcGIS Mobile Runtime (supports 1.2 meshpyramids, features-meshes)
    - ArcGIS Pro (supports 1.2 meshpyramids)
