# Default filter types for Building Scene Layer 

You can filter building scene layers using filter types and its filter values. Because a building can have many filter types representing the fields in a buildings category layer there are some that are common for all buildings. This filter types are predefined and always written out to the statistical information of the building scene layer. Beside the default filter type any other field you want to use to filter needs to have the modelName custom. Filter types are used in the buildings [statistical information](attributestats.md) as well as in the [filter authoring info](filterAuthoringInfo.md). The following list contains all default filter types and modelNames that are defined when creating a building scene layer using ArcGIS.

### Overiew default filter types

| modelName |  Description |
| --- | --- |
| category |  Defines the category for elements within the layer. For example if the elements are belonging to the category door.|
| family | Defines the family an element belongs to. For example all pannels belong to the family basic wall or system pannel. |
| familyType | A detailed categorization of the family types an element can belong to. For example for a wall panel element the family type may be defined as the "Glass 4"" to specify the type of wall panel. |
| bldgLevel | The building levels defined. The building level is represented by integer values that can include domains. |
| createdPhase |The created phase defines in which building phase the element was constructed.|
| demolishedPhase | The demolished phase defines in which building phase the element was demolished. |
| discipline |Defines working disciplines for a building. For example, Architectural, Structural, Mechanical, Plumbing or Electrical. |
| assemblyCode |Unique assembly code based on the hierarchical list of uniformat codes. For example, the number code for a specific floor cover (carpet, tiles, etc.) |
| omniClass |The OmniClass Construction Classification System (known as OmniClass™ or OCCS) is a classification system for the construction industry.  |
| sytemClassification| An integer number to classify an element.|
| systemType| Defines the system type an element belongs to.|
|custom| User defined filter type to be used in filter blocks.
