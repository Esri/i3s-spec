i3s-spec
========

*Indexed 3D Scene Format Specification*

This repository hosts the specification for the ArcGIS Scene Service and its delivery format I3S (Indexed 3D Scene). These are the core resources:

-	Indexed 3d Scene Format Specification.docx – Main specification document for the I3S Format
-	Service Rest Endpoint resources.docx – Specification document for the REST endpoint of the Scene Service
-	*.js – a set of example JSON resources

The structure of this specification is as follows:
- Format: Full logical format specification
- Package: Full physical format specification for packaged i3s caches (*.i3p)
- Profiles: Subsets the full format specification for different data structures such as MeshPyramids, Analytics and Features
- Service: Contains the REST API specification for the Scene Service.

We are also building a [Validation Toolkit](https://devtopia.esri.com/Zurich-R-D-Center/i3s-validator) to support developers.

There is also a set of informative and explorative articles on implementation details and usage strategies for the format available in the [i3s wiki](https://devtopia.esri.com/Zurich-R-D-Center/i3s-spec/wiki/_pages) that includes client traversal patterns, suggestions on optimizations and approaches to steps of the cooking process, such as texture atlas generation.

