<html>
<body>
<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> href</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> layerType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> ZFactor</code></td><td> </td><td> </td><td> </td><td>None</td><td>number/Float</td><td> </td></tr>
<tr><td><code> version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> name</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> alias</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> description</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> copyrightText</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> capabilities</code></td><td>True</td><td>1</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> capabilities.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> store</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
<tr><td><code> store.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/UUID</td><td> </td></tr>
<tr><td><code> store.profile</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.resourcePattern</code></td><td>True</td><td>1</td><td>5</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.resourcePattern.*</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.rootNode</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.version</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.extent</code></td><td>True</td><td>4</td><td>4</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.extent.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> store.indexCRS</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.vertexCRS</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/URL</td><td> </td></tr>
<tr><td><code> store.nidEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.featureEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.geometryEncoding</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.textureEncoding</code></td><td>True</td><td>1</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.textureEncoding.*</code></td><td> </td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.lodType</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.lodModel</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.featureOrdering</code></td><td> </td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> store.featureOrdering.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>string/None</td><td> </td></tr>
<tr><td><code> store.defaultGeometrySchema</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/NamedRuleset</td><td> </td></tr>
<tr><td><code> store.indexingScheme</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/NamedRuleset</td><td> </td></tr>
<tr><td><code> store.defaultTextureDefinition</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td> </td></tr>
<tr><td><code> store.defaultMaterialDefinition</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td> </td></tr>
<tr><td><code> fields</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> fields.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td> </td></tr>
<tr><td><code> drawingInfo</code></td><td> </td><td> </td><td> </td><td>None</td><td>object/None</td><td> </td></tr>
</table>
</body>
</html>