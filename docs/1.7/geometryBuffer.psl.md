# geometryBuffer [PSL 1.7]



Point Geometry Description

```
compressedAttributes
```

 **Important:**
- Point geometries are always compressed


### Related:

[psl::geometryDefinition](geometryDefinition.psl.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| compressedAttributes | [compressedAttributes](compressedAttributes.cmn.md) | Compressed attributes. **Cannot** be combined with any other attributes. |

### Examples 

#### Example: I3S PSL v1.7 equivalent geometry buffer definition 

```json
 {
  "geometryBuffers": {
    "compressedAttributes": {
      "encoding": "draco",
      "attributes": [
        "position",
        "feature-index"
      ]
    }
  }
} 
```

