Scene Service
=============

This is the description of the REST API of the Scene Service. There is a set of REST resources also described in the i3s format specification that are served out via differend endpoints:

- 3dSceneServiceInfo (JSON)
- 3dSceneLayerInfo (JSON)
- 3dNodeIndexDocument (JSON)
- FeatureData (JSON)
- SharedResources (JSON)
- Textures (Binary)
- Geometries (Binary)

Furthermore, the specification includes a set of REST operations that provide capabilities such as querying:

- Search - find features matching a freetext query string
- Query - filter features matching a SQL-style query
- FindNode - find node that best matches a given spatial extent
- GetFeature - retrieve an individual feature by its ID

Please refer to the Word Document in this folder for the full specification of these REST resources and operations.