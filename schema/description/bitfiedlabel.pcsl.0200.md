
Example for LiDAR data:

| Bit Number | Label | description |
|:--:|:--:|:--|
| 0| Synthetic | If set then this point was created by a technique other than LIDAR collection such as digitized from a photogrammetric stereo model or by traversing a waveform|
| 1| Key-Point |If set, this point is considered to be a model key-point and thus generally should not be withheld in a thinning algorithm.|
|2| Withheld |If set, this point should not be included in processing (synonymous with Deleted).|
|3| Overlap | If set, this point is within the overlap region of two or more swaths or takes. Setting this bit is not mandatory (unless, of course, it is mandated by a particular delivery specification) but allows Classification of overlap points to be preserved.|
|4 | Scan Channel 0 | Scanner Channel is used to indicate the channel (scanner head) of a multichannel system. Channel 0 is used for single scanner systems |
|5 | Scan Channel 1 |  Scanner Channel is used to indicate the channel (scanner head) of a multichannel system.|
|6| Scan Direction |The Scan Direction Flag denotes the direction at which the scanner mirror was traveling at the time of the output pulse. A bit value of 1 is a positive scan direction, and a bit value of 0 is a negative scan direction (where positive scan direction is a scan moving from the left side of the in-track direction to the right side and negative the opposite). |
|7| Edge of flight line | The Edge of Flight Line data bit has a value of 1 only when the point is at the end of a scan. It is the last point on a given scan line before it changes direction or the mirror facet changes. Note that this field has no meaning for 360° Field of View scanners (such as Mobile LIDAR scanners) and should not be set |




