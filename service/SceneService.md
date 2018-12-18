# Scene Service

This is the description of the REST API of the Scene Service.

## Access to REST Resources

There is a set of REST resources also defined in the I3S format specification that are served out via different endpoints:

Mandatory:

- 3dSceneServiceInfo (JSON)
- 3dSceneLayerInfo (JSON)
- [3dNodeIndexDocument](docs/1.6/3DSNodeIndexDocument.cmn.md) (JSON)
- [SharedResources](docs/1.6/sharedResource.cmn.md) (JSON)
- TextureData (Binary)
- GeometryData (Binary)

Optional:

- [FeatureData](docs/1.6/featureData.cmn.md) (JSON) (optional for Mesh-Pyramids profile)

The schema of the individual endpoints is documented in the <a href="../format/Indexed 3d Scene Layer Format Specification.md#_6">JSON Resources Schema and Documentation of the I3S Format specification</a>. This is the REST API for retrieval of these resources:

### Common Services Information

- *URL Pattern*: ```http://<hostname>/arcgis/rest/services/```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services)
- *Returns*: List of all services running on the server instance.

### 3dSceneServiceInfo

- *URL Pattern*: ```<ags-base-url>/<server-name>/SceneServer```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer)
- *Returns*: Scene Service metadata and list of available layers.


### 3dSceneLayerInfo

- *URL Pattern*: ```<scene-server-url>/layers/<layer-id>```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0)
- *Returns*: Detailed information about a single layer, including symbology, field schema, and profile/store metadata, with a link to the root [3dNodeIndexDocument](docs/1.6/3DSNodeIndexDocument.cmn.md).

### 3dNodeIndexDocument

- *URL Pattern*: ```<layer-url >/nodes/<node-id>```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0)
- *Returns*: A file describing a single node in the spatial index, with links to all associated resources such as [FeatureData](docs/1.6/featureData.cmn.md), textures, geometry and [SharedResources](docs/1.6/sharedResource.cmn.md).

### SharedResources

- *URL Pattern*: ```<node-url>/shared/```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/features/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/features/0)
- *Returns*: A feature data resource (bundle).

### FeatureData

- *URL Pattern*: ```<node-url>/features/<feature-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/features/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/features/0)
- *Returns*: A feature data resource (bundle).

### GeometryData

- *URL Pattern*: ```<node-url>/geometries/<geometry-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: [http://3dcities.maps.arcgis.com/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/geometries/0](http://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/New_York_LoD2_3D_Buildings/SceneServer/layers/0/nodes/5-1-0-0-0/geometries/0)
- *Returns*: A geometry data resource (bundle).

### TextureData

- *URL Pattern*: ```<node-url>/textures/<texture-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: [http://scene.arcgis.com/arcgis/rest/services/Hosted/Buildings_San_Francisco/SceneServer/layers/0/nodes/1-3-0-0-0-0-0-0-0/textures/0_0](http://scene.arcgis.com/arcgis/rest/services/Hosted/Buildings_San_Francisco/SceneServer/layers/0/nodes/1-3-0-0-0-0-0-0-0/textures/0_0)
- *Returns*: A [texture data resource](textureDefinition.cmn.md) (bundle).

