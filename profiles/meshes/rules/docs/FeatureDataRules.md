<html>
<body>
<table>
<tr><th>Property</th><th>Required</th><th>Min.</th><th>Max.</th><th>Container</th><th>Value Rules</th><th>Conditions</th></tr>
<tr><td><code> featureData</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.id</code></td><td>True</td><td> </td><td> </td><td>None</td><td>number/Integer</td><td> </td></tr>
<tr><td><code> featureData.*.position</code></td><td>True</td><td>2</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.position.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.pivotOffset</code></td><td> </td><td>3</td><td>3</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.pivotOffset.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.mbb</code></td><td>True</td><td>6</td><td>6</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.mbb.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>number/None</td><td> </td></tr>
<tr><td><code> featureData.*.layer</code></td><td>True</td><td> </td><td> </td><td>None</td><td>string/None</td><td> </td></tr>
<tr><td><code> featureData.*.geometries</code></td><td>True</td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS ArrayBufferView<br/></td></tr>
<tr><td><code> featureData.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS GeometryReference<br/></td></tr>
<tr><td><code> featureData.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS SharedResourceReference<br/></td></tr>
<tr><td><code> featureData.*.geometries.*</code></td><td>True</td><td> </td><td> </td><td>None</td><td>object/NamedRuleset</td><td>type IS Embedded<br/></td></tr>
<tr><td><code> featureData.*.attributes</code></td><td>True</td><td>0</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> featureData.*.attributes.*</code></td><td> </td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td> </td></tr>
<tr><td><code> geometryData</code></td><td> </td><td>1</td><td>*</td><td> </td><td>object/None</td><td> </td></tr>
<tr><td><code> geometryData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS ArrayBufferView<br/></td></tr>
<tr><td><code> geometryData.*</code></td><td>True</td><td> </td><td> </td><td>undefined</td><td>object/NamedRuleset</td><td>type IS Embedded<br/></td></tr>
</table>
</body>
</html>