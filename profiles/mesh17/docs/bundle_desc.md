

Bundle are binary resources with the following header:

**Binary bundle layout** 

|name|type|note|
|--|--|--|
|FourCC identifier | uint32|  `0x42444c30` i.e. `"BDL0"`|
|Number of slots | uint32| `n` |
|Slot `0` offset | uint32| from the beginning of the buffer |
|Slot `0` size | uint32| in bytes |
| ... | ... | |
|Slot `n-1` offset | uint32| from the beginning of the buffer |
|Slot `n-1` size | uint32| in bytes |

Binary data follows this header.

Bundle allows to store multiple textures independently of their format within a single binary resource (i.e single request). This could be advantagous when many bundled textures will be needed. 

In SLPK bundle have the extension `.bdl`
