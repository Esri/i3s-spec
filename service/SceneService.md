# Scene Service

This is the description of the REST API of the Scene Service. 

## Access to REST Resources

There is a set of REST resources also defined in the i3s format specification that are served out via differend endpoints:

Mandatory:

- 3dSceneServiceInfo (JSON)
- 3dSceneLayerInfo (JSON)
- 3dNodeIndexDocument (JSON)
- FeatureData (JSON)
- SharedResources (JSON)
- TextureData (Binary)
- GeometryData (Binary) 

Optional:

- Symbols (JSON with embedded Binary)

This is the REST API for retrieval of these resources:

### Common Services Information

- *URL Pattern*: ```http://<hostname>/arcgis/rest/services/```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/">http://3dcities.esri.com/arcgis/rest/services/</a>
- *Returns*: A List of all services running on the server instance.

### 3dSceneServiceInfo

- *URL Pattern*: ```<ags-base-url>/<server-name>/SceneServer```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer</a>
- *Returns*: Scene Service metadata and list of available layers.
 
### Symbols

- *URL Pattern*: ```<scene-server-url>/symbols```
- *Method*: ```GET```
- *Example Service*: <a href="">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/symbols</a>
- *Returns*: Single- or multifile resources for Symbols (using the symbols i3s profile) shared across layers.

### 3dSceneLayerInfo

- *URL Pattern*: ```<scene-server-url>/layers/<layer-id>```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0</a>
- *Returns*: Detailed information about single layer, including symbology, field schema, and profile/store metadata, with a link to the root 3dNodeIndexDocument

### 3dNodeIndexDocument

- *URL Pattern*: ```<layer-url >/nodes/<node-id>```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1</a>
- *Returns*: A file describing a single node in the spatial index, with links to all associated resources such as FeatureData, textures, Geometry and SharedResources
 
### SharedResources

- *URL Pattern*: ```<node-url>/shared/```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/shared">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/shared</a>
- *Returns*: A feature data resource (bundle)

### FeatureData

- *URL Pattern*: ```<node-url>/features/<feature-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/features/0">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/features/0</a>
- *Returns*: A feature data resource (bundle)
 
### GeometryData

- *URL Pattern*: ```<node-url>/geometries/<geometry-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/geometries/0">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/geometries/0</a>
- *Returns*: A geometry data resource (bundle)
 
### TextureData

- *URL Pattern*: ```<node-url>/textures/<texture-data-bundle-id>```
- *Method*: ```GET```
- *Example Service*: <a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/textures/0_0">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/0/nodes/5-1/textures/0_0</a>
- *Returns*: A texture data resource (bundle). Refer to the i3s format specification for details on how different encodings and resolutions are encoded.
