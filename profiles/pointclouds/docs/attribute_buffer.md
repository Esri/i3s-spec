### Related:


[Default Geometry Schema](defaultGeometrySchema.md)

# Attribute Buffers

Point attribute buffers are organized per-node, per-attribute. Attributes must be stored in point order (i.e. 1-to-1). Each available attribute is stored in a little-endian binary buffer without I3S binary header. RGB buffer may be compressed using LEPCC color clustering. Other attribute must used GZIP compression or optionally LEPCC-intensity compression for intensity buffer. 

|Scene layer path | Example|
|-----------------|--------|
|Service URL|<layer_url>/nodes/<resource_id>/attributes/<attrib_key>| 
|SLPK path|<mypackage.slpk>/nodes/<resource_id>/geometries/attributes/<attrib_key>.json[.gz]|

For LiDAR derived point clouds, the following attributes may be available:

|Type|Format|Name(key)|Notes
|----|------|---------|-----|
|Intensity| UInt16|INTENSITY(0x2)|Compressed using LEPCC-intensity. 
|RGB color|3xUInt8|RGB(0x4)|Compressed using LEPCC-RGB.
|Class Code|UInt8|CLASS_CODE(0x8)|Class code number defining the attribute. 
|Flags|UInt8|FLAGS(0x10)|The flags can have following meaning: bitfield: 0: Synthetic , 1: Key-point , 2: Withheld , 3: Overlap , 4: Scan Channel0 ,5: Scan Channel1 ,6: Scan-direction , 7: Edge Of flight line.  
|Returns|UInt8|RETURNS(0x20)| Representing return values: bits [0,3] return number, bits[4,7] number of returns. 
|User|data|UInt8 USER_DATA(0x80)| User specifiied attribute values.  
|Point Source ID|UInt16|POINT_SRC_ID(0x100)| Representing the point source id.
|Scan Angle|Int16|SCAN_ANGLE(0x400)|Representing the scan angle.
