# Scene Service

This is the description of the REST API of the Scene Service.

## Access to REST Resources

There is a set of REST resources also defined in the I3S format specification that are served out via different endpoints:

Mandatory:

- 3dSceneServiceInfo (JSON)
- 3dSceneLayerInfo (JSON)
- 3dNodeIndexDocument (JSON)
- SharedResources (JSON)
- TextureData (Binary)
- GeometryData (Binary)

Optional:

- FeatureData JSON (optional for Mesh-Pyramids profile)

This is the REST API for retrieval of these resources:

### Common Services Information

- *URL Pattern*: ```http://<hostname>/arcgis/rest/services/```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services)
- *Returns*: A List of all services running on the server instance.

### 3dSceneServiceInfo

- *URL Pattern*: ```<ags-base-url>/<server-name>/SceneServer```
- *Method*: ```GET```
- *Example Service*:[http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer)
- *Returns*: Scene Service metadata and list of available layers.


### 3dSceneLayerInfo

- *URL Pattern*: ```<scene-server-url>/layers/<layer-id>```
- *Method*: ```GET```
- *Example Service*:[http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0)
- *Returns*: Detailed information about single layer, including symbology, field schema, and profile/store metadata, with a link to the root 3dNodeIndexDocument

### 3dNodeIndexDocument

- *URL Pattern*: ```<layer-url >/nodes/<node-id>```
- *Method*: ```GET```
- *Example Service*:[http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0)
- *Returns*: A file describing a single node in the spatial index, with links to all associated resources such as FeatureData, textures, Geometry and SharedResources

### SharedResources

- *URL Pattern*: ```<node-url>/shared/```
- *Method*: ```GET```
- *Example Service*:[http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/shared](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/shared)
- *Returns*: A feature data resource (bundle)

### FeatureData

- *URL Pattern*: ```<node-url>/features/<feature-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*:[http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/features/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/features/0)
- *Returns*: A feature data resource (bundle)

### GeometryData

- *URL Pattern*: ```<node-url>/geometries/<geometry-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: <a href=[http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/geometries/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/geometries/0)
- *Returns*: A geometry data resource (bundle)

### TextureData

- *URL Pattern*: ```<node-url>/textures/<texture-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*:[http://scene.arcgis.com/arcgis/rest/services/Hosted/Buildings_San_Francisco/SceneServer/layers/0/nodes/1-3-0-0-0-0-0-0-0/textures/0_0](http://scene.arcgis.com/arcgis/rest/services/Hosted/Buildings_San_Francisco/SceneServer/layers/0/nodes/1-3-0-0-0-0-0-0-0/textures/0_0)
- *Returns*: A texture data resource (bundle). Refer to the i3s format specification for details on how different encodings and resolutions are encoded.
