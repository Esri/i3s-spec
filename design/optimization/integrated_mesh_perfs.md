# I3S Mesh Performance 


Several changes to I3S and 3D clients have been proposed to address performance issues reported by customers and distributors. 
These optimization candidates are:

### 1. Oriented-bounded box 

Many tiles - especially at lower LOD- have very large horizontal-over-vertical aspect ratio (i.e. "pizza box" shape). As a consequence, relying on minimum bounding spheres (MBS) is problematic for 2 reasons:

1. MBS do not fit tied around the mesh: geometries that are not in view may actually pass the view-culling test.
2. MBS is isotropic so its projected size on screen is function of its distance from the camera only. At low view angle (i.e. close to ground) actual mesh projection may be an order of magnitude smaller, but 3D clients still "refine" distant nodes unnecessarily.  

Both shortcoming lead to wasted video memory and network bandwidth. Issue 2) being the lead cause.

![obb](img/jerusalem_obb.jpg)

The obvious solutions are:
1. Used tied OBB for view-culling ("optimizer" -presented below- computes them from geometries and add them to each node-index) 
2. 3D Viewer compute "perspective-correct" rectangular projection of OBB as the screen-size metric for LOD switching
3. Use `OBB projected area/(texture.width*texture.heigh)` ("optimizer" adds `texture size` information to each `node_index` so texture payload does not need to be fetched.) 


### 2. Paged index 

Request one node-index document per-request is very inefficient since index request must complete before the tree could be traverse further, in most cases. In high latency scenario, client-server "chattiness" is a major bottleneck. 

**Solution:**
1. The optimizer tool (see "_implementation_" section) groups index-nodes into "pages" of 64 nodes
2. All redundant information is stripped from the `Node-index` (i.e. `parentNode`, `neighbors`, resource references) to make JSON more compact. 
3. `tree-keys` are replaced by integer `id`. 
4. Added texture size information (`textureWidth`, `textureHeight`) to allow for accurate LOD switching computation without extra request. Legacy `lodSelection` and has been dropped but could be re-instated if useful.   
5. `sharedResource` document have been dropped since it's useless for IM and increases requests-per-node by 1/4. A new integer `id` based material resource will be evaluated for 3D object layers.

``` javascript
    "nodes": [
        {
            "id": 0,
            "mbs": [
                35.24183996, 31.79702922, 733, 1847.073699
            ],
            "obb": {
                "center": [ 35.24185021, 31.79702943,764.774121],
                "halfSize": [1894.442749,822.7074585,81.25891876],
                "quaternion":[ 0.00248162006,-0.01082093921,-0.008798263967,0.9998996854]
            },
            "textureWidth": 256,
            "textureHeight": 128,
            "vertexCount": 231,
            "children": [
                1,
                2
            ]
        },
        {
            "id": 1,
            "mbs": [
                35.23341115,31.79717743,733,1191.340482],
			"obb": {
                "center": [35.23341432,31.79717736,787.1089994],
                "halfSize": [959.4315186,53.65865326,822.4165039],
                "quaternion": [0.01159460936,0.7068728805,0.7072451115,0.0008235819987]
            },
            "textureWidth": 512,
            "textureHeight": 256,
            "vertexCount": 1527,
            "children": [
                3,
                4,
                5,
                6
            ]
        },
// ... 62 more nodes...
```

### 3. Texture compression

GPU memory usage is a major limiting factor that can be mitigated through texture compression.  
Three scenerios are possible


| Network compresion| GPU compression | Download size | CPU usage | GPU Memory | 
|--|--|--|--|--|
| jpeg| none| lowest | high | highest | 
| jpeg| DXT1 | lowest | highest | lowest | 
| DDS (with mips) | DXT1 | highest | negligeable| lowest | 

 
### 4. Smaller tile-size

> Why is at top-down view using so much video memory ?

If we take the Vricon dataset example, texture size is 1024x1024 which requires over 5MB of video memory (32 bit RGBA + mimaps), so even in a perfect case (`lodSelection` is correct and computed for an OBB, not a MBS and my viewport size is also 1024x1024), we would still need 4 tiles to cover a top-down view (viewport is -almost- always misaligned with tiling-scheme): that's a minumum of 20MB of memory. If the next LOD down is selected, memory usage could get close to 80 MB...

**solutions**:
- Using smaller node size (say 256x256) would reduce the cost of "partially" visible tiles on the edge of the viewport

	->... and for "perspective" view, 3D clients will be able to swith to lower LOD sooner and reduce memory usage (better LOD granualarity)

- Switch to GPU block-compressed texture format. ( 1:8 or 1:6 reduction in texture memory usage)  



## Implementation and results

In order to evaluate the benefits of the proposed improvements, I've implemented the following tools:

- **I3S Optimizer** (convert a service/SLPK to an "optimized" SLPK with change 1), 2)and 3). Optimization 4) may be implemented in the future).
- **IO Testbench** with throttleable bandwidth and Time-to-first-byte (TTFB).
- **3D Viewer** which can render both "legacy" and "optimized" services.     
- **Python scripts** to generate performance charts.

### 3D Viewer
The test viewer is a 64-bit standalone application written in C++ using D3D11 as the graphic API. 


#### Resource loading / LOD switching
- Tile loading proceed **top-down** (i.e. **breadth-first**). A parent is replaced by its children only when all **_visible_** children are ready to be renderered. So Viewer avoid missing tile 'gaps' by falling back to resident lower LOD tile.
- Tile request are ordered **by LOD first and then by distance from camera** (when same lod). `Node-index` request priority is **bumped by one LOD** compare to texture/geometry requests.  
- Visible nodes ancestry is **always kept in video memory**. While visual quality benefits are obvious (no "disappearing" tiles), we'll show that `texture` compression combined with `OBB`s makes this approach practical even for memory constrained systems.  
- LOD swithing is based on the following metric:`OBB projected area/(texture.width*texture.height)` 
for optimized mesh and I3S `lodThreshold` is ignored.


#### Threading model:
- Scene culling, Win32 event handling and 3D rendering execute in a single thread (main UI thread). 
- All IO, tile processing, JPEG-to-DDS re-compression (optional) and JSON parsing execute asynchronously using thread-pool of size 8. Test machine CPU has 4 physical core and 8 logical cores).
- Concurrency is at the **_tile_** level, not **_request_** level. So multiple requests for a single tile (e.g. geometry + texture) are handle sequentially by a worker thread. 
- To avoid IO request queue "latency" and/or complex request cancellation logic, the resource loader uses a dynamic "tile set":
	- View culling determine which resource should be requested for the **current** frame (i.e the `request_list`).
	- At the end of scene culling, `request_list` is swapped with the worker-thread pool. So request queue depth is _at most_ equal to the pool size: requests that didn't get processed and are not in the newest `request_list` are _de-facto_ discarded
	- Tile/request status is maintain atomically so render-thread may query it lock-free.

#### Features	: 
- Supports oriented-bounding box (OBB) and minimum bounding spheres (MBS). OBB may be reconstructed (asynchronously) from tile geometry if not provided by service.
-  Support on-the-fly JPEG-to-DDS texture compression with mipmap generation. (optimized for SSE2 instruction set).
- View culling is based on frustum/OBB or frustum/MBS collision,
- Support quota-based video memory management. Quota is mutualized across all visible layers in the scene graph. If quota is set to 0, only visible assets (and their ancestors) are kept in GPU memory.  

#### Benchmarking:
- Support fly-though creation & playback
- Performances measurement and logging.  


### Test datasets


#### Jerusalem (context capture)


Israeli distributor complained about poor performance in WSV with this dataset. Dataset visual quality and structure is quite good. Tile size -which is smaller than other datasets- highlights I3S inefficient client-server communication.

![jerusalem_quality](img/jerusalem_quality.jpg)

**Stats:**
- ~49k tiles
- ~6 GB (jpeg only), 11GB (jpeg + DDS)
- Texture size varies, but usually < 512

**Notes**:
- **DATASET MUST NOT BE SHARED OUTSIDE OF ESRI** 
- A few "no-data" nodes found at various tree-depth. 
- A few hundred "missing" nodes references found at various tree-depth. May impact performance a bit, but root cause is unclear (subset of a bigger dataset ?)


#### Girona (Acute 3D)


![girona_quality](img/girona_quality.jpg)

**Stats:**
- ~6800 tiles
- ~4GB (jpeg+DDS)
- Texture size varies, but usually < 1024

**notes**:
- One node has an invalid texture. ( tree-key: 26-0-0-0-0-0-3-1-0-0)


#### Mecca (Vricon)
Lower resolution dataset with large tiles. Texture visual quality is low. 
![mecca_quality](img/mecca_quality.jpg)
**Stats:**
- ~2GB (jpeg only), ~7.2GB (jpeg+DDS)
- Texture size ~1024


### Paged index results:

We compare optimized vs. regular (i.e. legacy) I3S performance.
- Bandwidth limit is set to 4 MBytes per second
- Time-to-first-byte (TTFB) set 250 milliseconds.
- Quality setting is 1.25 (i.e.refine node if `screen pixels/texel > 1.25` ).
- Window size is 1280*720 (720p HD).
- "Optimized" version downloads jpeg textures, create mipmaps and re-compress textures on the fly to DXT1.
- Video memory quota is set to 100 MB
- `sharedResource` JSON is **not requested** even for "legacy" I3S. Doing so would penalize "legacy" runs even more. (25% more requests-per-node)
 

#### Jerusalem dataset:
![benchmark_jeru_250ms](img/jerusalem.250ms.png)

As we can clearly see here, this dataset is **latency (i.e. TTFB) limited**. So much so that "legacy" run can't utilize all the bandwidth available. As a result, the visual quality is unacceptable at 1280x720 and poor at 640x720. On the other end, "Optimized" visual quality is excellent at 250 ms TTFB and still good at 500 ms TTFB 
 
**Visual quality comparative video**: 
- [Jerusalem side-by-side 640x720 - 500 ms TTFB ](https://esri.box.com/s/nzx67z68h19yrwvwqnk5r29svicyslvy)
- [Jerusalem side-by-side  640x720 - 250 ms TTFB ](https://esri.box.com/s/5hedx8181odqcxyv0ls9pd783a120q8b)

 #### Girona dataset:
![benchmark_girona_250ms](img/girona.250ms.png)

The benefits of the paged-index access are clearly visible here:
- "Legacy" is mostly latency bound.
- "optimized" is maximizing available "bandwidth" even with 250 TTFB ! -an ideal situation-
 
**Visual quality comparative video**: 
- [Girona side-by-side 640x720 - 500 ms TTFB](https://esri.box.com/s/1vppvn8zuqmhhtfletxl3ftkc8uxwpdb)

#### Mecca dataset:
![benchmark_mecca_250ms](img/mecca.250ms.png)

The benefit of the paged-index access are a bit less pronounced since this dataset uses bigger tiles (so fewer node-index requests), but the same observations hold: 
- "legacy" is especially hurt at the beginning of the run due to (mostly) depth-first traversal of the tree. This requires "serial" (i.e. dependent) requests which compound TTFB. `# of request` is the about the same, but "optimized" is able to discover many more useful nodes and figure out which tiles to query much quicker.  
- "Legacy" is mostly latency bound.
- "optimized" is maximizing available "bandwidth".
 
**Visual quality comparative video**: 
- [Mecca side-by-side 640x720 - 500 ms TTFB](https://esri.box.com/s/76o8ajl52s8c28sp3enfnjpm1rodzxmf)

 

### Texture compression results:

We measure the video memory usage in the three texture compression scenarios. (jpeg/uncompress, jpeg/dds, dds/dds)

- DXT1 (DDS) as a 1:8 fixed compression ratio (RGBA8 with A=255 always, RGB8 is not practical since modern GPU require 4-byte aligned texture)
- DDS (over wire) is GZIP compressed and contains mipmaps (up to 4x4 mip)
- Bandwidth limit is set to 4 MBytes per second
- Time-to-first-byte (TTFB) set 250 milliseconds.
- Quality setting is 1.25 (i.e.refine node if `screen pixels/texel > 1.25` ).
- Window size is 1280*720 (720p HD).
- If using jepg, mipmaps are computed on GPU.  

![girona_texture](img/girona.vram.png)

- The benefit of compression on video memory usage is clearly visible in both Memory-per- frame and Memory-per-tile measurements. 
- Surprisingly, download size for DDS/DDS scenario is not prohibitive (dds+gzip (over wire) size is higher than JPEG, but very reasonable). For high quality texture dataset, DDS-over-wire is clearly the best approach.
- Reduction in visual quality due to DXT compression wasn't noticeable

![mecca_texture](img/mecca.vram.png)

- DDS-over-wire bandwidth cost is must higher here. The reason is that Vricon's texture quality is low (with very little high-frequency information) so JPEG compressor achieve very high compression ratios while DDS+gzip doesn't. 
- "jpg/raw" visual quality suffers quite a bit since tiles are constantly garbage-collected to stay within memory quota (see "drops" in blue lines). This cause the viewer to often drop to lower LOD when camera moves. 
- In this case JPEG->DDS recompression would be best if CPU cycles are available. Otherwise DDS-over-wire is a better fallback since uncompress texture use too much memory.
- Reduction in visual quality due to DXT compression wasn't noticeable   

  
 

## Future work

- Geometry compression (Draco)
- 3D object meshes optimization (including BIM scene layer) 
 


## Contact / feedback
rpoirrie@esri.com

