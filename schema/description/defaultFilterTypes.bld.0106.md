# Default Filter Types for Building Scene Layer 

Building scene layers can be filtered by field types in the building category layer.  These predefined filter types are always included in the statistical information of the building scene layer.  Some filter types are common to all buildings. In addition to the default filters, other fields can be included by setting the modelName to custom.  Filter types are used in the buildings [statistical information](attributestats.md) as well as in the [filter authoring info](filterAuthoringInfo.md). The following list contains all default filter types and modelNames when creating a building scene layer using ArcGIS.

### Overiew default filter types

| modelName |  Description |
| --- | --- |
| category | Defines the category for elements within the layer. For example, if the elements belong to the category 'door'. |
| family | Defines the family an element belongs to. For example, all panels belong to the 'family basic wall' or 'system panel'. |
| familyType | A detailed categorization of the family types an element can belong to. For example, for a wall panel element, the family type may be defined as "Glass 4" to specify the type of wall panel. |
| bldgLevel | The building levels defined. The building level is represented by integer values, including domains. |
| createdPhase |The created phase defines in which building phase the element was constructed.|
| demolishedPhase | The demolished phase defines in which building phase the element was demolished. |
| discipline |Defines working disciplines for a building. For example, Architectural, Structural, Mechanical, Plumbing or Electrical. |
| assemblyCode |Unique assembly code based on the hierarchical list of uniformat codes. For example, the number code for a specific floor cover (carpet, tiles, etc.) |
| omniClass |The OmniClass Construction Classification System (known as OmniClass™ or OCCS) is a classification system for the construction industry.  |
| systemClassification| An integer number to classify an element.|
| systemType| Defines the system type an element belongs to.|
|custom| User defined filter type to be used in filter blocks.
