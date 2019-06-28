# Domain Coded Value

Attribute domains are rules that describe the legal values of a field type, providing a method for enforcing data integrity. Attribute domains are used to constrain the values allowed in any particular attribute. Whenever a domain is associated with an attribute field, only the values within that domain are valid for the field. Using domains helps ensure data integrity by limiting the choice of values for a particular field. The domain code value contains the coded values for a domain as well as an associated description of what that value represents.

### Related:

[cmn::domain](domain.cmn.md)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| **name** | string | Text representation of the domain value. |
| **code** | string, number | Coded value (i.e. field value). |

*Note: properties in **bold** are required*

### Examples 

#### Example: Example 1 

```json
 {
  "name": "code 1.5 description",
  "code": 1.5
} 
```

#### Example: Example 1 

```json
 {
  "name": "coded 3000.1 desc",
  "code": 3000.3
} 
```

