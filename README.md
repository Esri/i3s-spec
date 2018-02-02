# I3S scene layer specification

Specification for the I3S scene layer format.

Latest released version is available publicly at **please add the location of the public spec**

# Content
- profiles/ The profiles types of I3S scene 
- ../schema/: The scene layer json schema files for each profile type. Schema files shared by all profile types are in the folder all/
- ../docs/: The documentation generated from the schema/ schema files for each profile type. 
- examples/: Examples for reference and testing.

# Contributing
Create a new issue that explains the proposal, describes the requirements, and adds some initial mock of spec if possible.
Create a schema PR with the proposed spec change
If you're not familiar with creating a schema PR, find a schema person to do these steps

# Version / Releases
I3S specification is versioned as major.minor, e.g. 1.5
Major number denotes a breaking change: 2.x I3S cannot be read by a 1.x client, and must be rejected.
To indicate patch releases between versions, I3S-spec releases are numbered with an additional patch number z, (x.y.z)
Latest release: 1.6
Versions < 1.6 are not schema-based
# Branching
Milestones for past and upcoming I3S spec releases include information about release date and target products/versions.
Release branch for each "shipped" I3S spec version, e.g. v1.5
The spec release typically happens around the time that the involved products freeze for release.
Release branches branch off master.
Release branch gets a release tag when the documentation is deployed to **repo**.
Master branch contains the latest developments, which are typically released with upcoming version.
Proposals are thus typically created by branching from (and merging into) master
# Tooling
scripts/ contains various tools for schema and document validation, and markdown generation, and infos on deploying doc

# I3S-schema
Please see [getting started](manual/getting_started.md) guide.
