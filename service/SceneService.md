# Scene Service

This is the description of the REST API of the Scene Service. 

## Access to REST Resources

There is a set of REST resources also described in the i3s format specification that are served out via differend endpoints:

- 3dSceneServiceInfo (JSON)
- 3dSceneLayerInfo (JSON)
- 3dNodeIndexDocument (JSON)
- FeatureData (JSON)
- SharedResources (JSON)
- Textures (Binary)
- Geometries (Binary)

This is the REST API for retrieval of these resoruces:

<table>
	<tr>
		<td><strong>Resource</strong></td>
		<td><strong>URL</strong></td>
		<td><strong>Returns</strong></td>
	</tr>
	<tr>
		<td rowspan="2" >ArcGIS Server 
		Base URL</td>
		<td>http://&lt;hostname&gt;/arcgis/rest/services/</td>
		<td>List of services</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/">http://3dcities.esri.com/arcgis/rest/services/</a> </td>
	</tr>
	<tr>
		<td rowspan="2" >SceneServer</td>
		<td>&lt;ags-base-url&gt;/&lt;server-name&gt;/SceneServer</td>
		<td>Server info and list of available services</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer</a> </td>
	</tr>
	<tr>
		<td rowspan="2" >Service Symbol Resources</td>
		<td>&lt;<strong>scene-server-url</strong>&gt;/symbols</td>
		<td>Symbol Resources shared across layers</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/symbols">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/symbols</a> </td>
	</tr>
	<tr>
		<td rowspan="2" >Layer</td>
		<td>&lt;<strong>scene-server-url</strong>&gt;/layers/&lt;layer-name&gt;</td>
		<td>Info about single layer (see 3dSceneLayer.js)</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings</a> </td>
	</tr>
		<tr>
		<td rowspan="2" >Layer Symbol Resources</td>
		<td>&lt;<strong>layer-url</strong>&gt;/symbols</td>
		<td>Symbol Resources belonging to a single layer</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/symbols">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/symbols</a> </td>
	</tr>
	<tr>
		<td rowspan="2" >Node</td>
		<td>&lt;<strong>layer-url</strong> &gt;/nodes/&lt;node-id&gt;</td>
		<td>Node file (json)</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings%20/nodes/51">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings /nodes/51</a> </td>
	</tr>
	<tr>
		<td rowspan="2" >Shared Resources</td>
		<td>&lt;<strong>node-url</strong>&gt;/shared/</td>
		<td>Shared resource data bundle for a node (symbology and materials)</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/shared">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings /nodes/51/shared</a></td>
	</tr>
	<tr>
		<td rowspan="2" >Features</td>
		<td>&lt;<strong>node-url</strong>&gt;/features/&lt;feature-data-bundle-id&gt;</td>
		<td>Feature data bundle.</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/features/3">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings /nodes/51/features/3</a></td>
	</tr>
	<tr>
		<td rowspan="2" >Geometries</td>
		<td>&lt;<strong>node-url</strong>&gt;/geometries/&lt;geometry-data-bundle-id&gt;</td>
		<td>Geometry data bundle.</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/caches/Buildings/nodes/51/geometries/3">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings /nodes/51/geometries/3</a></td>
	</tr>
	<tr>
		<td rowspan="2" >Textures</td>
		<td>&lt;<strong>node-url</strong>&gt;/textures/&lt;texture-bundle-id&gt;</td>
		<td>Texture bundle</td>
	</tr>
	<tr>
		<td colspan="2" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings%20/nodes/51">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings /nodes/51</a>/textures/3</td>
	</tr>
</table>

## Access to REST Operations

Furthermore, the specification includes a set of REST operations that provide capabilities such as querying:

- Search - find features matching a freetext query string
- Query - filter features matching a SQL-style query
- FindNode - find node that best matches a given spatial extent

<table>
	<tr>
		<td><strong>Operation Name</strong></td>
		<td><strong>Parent Resource</strong></td>
		<td><strong>Parameters</strong></td>
		<td><strong>Returns</strong></td>
	</tr>
	<tr>
		<td rowspan="2" >Search</td>
		<td>Scene Server</td>
		<td>Text query string</td>
		<td>Search results</td>
	</tr>
	<tr>
		<td colspan="3" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer</a>/Search?queryString=”technopark”</td>
	</tr>
	<tr>
		<td rowspan="2" >FindNode</td>
		<td>Cache</td>
		<td>Extent</td>
		<td>The node id</td>
	</tr>
	<tr>
		<td colspan="3" ><a href="%20http:/3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/FindNode?sphere="> http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/FindNode?sphere=”{x:52.1,y:34.2,z:0,r:50}</a>”
		JSON fragment needs to be URL-encoded:<br />
		http://&lt;server-url&gt;/layers/PublicBuildings/FindNode?sphere=”%7Bx%3A52.1%2Cy%3A34.2%2Cz%3A0%2Cr%3A50%7D” </td>
	</tr>
	<tr>
		<td rowspan="2" >Query</td>
		<td>Layer</td>
		<td>Existing map server query parameters</td>
		<td>Query results</td>
	</tr>
	<tr>
		<td colspan="3" ><a href="http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/query?whereClause=">http://3dcities.esri.com/arcgis/rest/services/zurich/SceneServer/layers/PublicBuildings/query?whereClause=”treeHeight</a> &gt; 10”</td>
	</tr>
</table>




