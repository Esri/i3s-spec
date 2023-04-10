# i3s_converter.exe version history

This documents purpose is to keep track of the version history of the i3s_converter and what changes were made when. To find out the version of the converter please use the `-b` option.

------------------

### Version 0.7.12282021
- Fixed crash when validating BSL with missing statistics summary.
- Fixed incorrect parentIndex for nodes in nodePages when converting.

### Version 0.7.09152021
- Fixed bug where Draco decoded attributes were incorrectly handled in certain cases to due Draco re-ordering of vertices.

### Version 0.7.09152022
- Added date-format and utc-offset options to convert date fields to ECMA ISO8601. 