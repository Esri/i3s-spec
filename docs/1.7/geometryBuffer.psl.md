# geometryBuffer [PSL 1.7]



Point Geometry Description

**Important**: The order of the vertex attributes in the buffer is **fixed** to simplify binary parsing:

```
compressedAttributes
```

 **Important:**
- Attribute that are present are stored continuously in the corresponding geometry buffers.
- Point Geometry are always compressed


### Related:

[psl::geometryDefinition](geometryDefinition.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| compressedAttributes | [compressedAttributes](compressedAttributes.cmn.md) | Compressed attributes. **Cannot** be combined with any other attributes. |

### Examples 

#### Example: I3S PSL v1.7 equivalent geometry buffer definition 

```json
 None 
```

