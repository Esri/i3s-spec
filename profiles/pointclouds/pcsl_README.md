# i3s point cloud scene layer specification

Specification for the i3s point cloud scene layer scene layer format.

Latest released version is available publicly at **please add the location of the public spec**

# Content
[Point cloud scene layer documentation](docs/pcsl_Documentation.md)

- ../schema/: The scene layer json schema files for each profile type. 
- ../docs/: The documentation generated from the schema/ schema files for each profile type. 
- examples/: Examples for reference and testing.
- scripts/ contains various tools for schema and document validation, and markdown generation, and infos on deploying doc

# Version / Releases
i3s specification is versioned as major.minor, e.g. 1.5
Major number denotes a breaking change: 2.x i3s cannot be read by a 1.x client, and must be rejected.
To indicate patch releases between versions, i3s-spec releases are numbered with an additional patch number z, (x.y.z)
Latest release: 1.6

# i3s-schema
Please see [i3s schema](../../../README.md") guide
