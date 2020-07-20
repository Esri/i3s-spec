# i3s_converter.exe
------------------
## Quick Links
[Introduction](#Introduction) <br />
[Running the executable](#Execute)  <br />
[Subcommands](#Subcommands) <br />
[Options](#Options)<br />
[Examples](#Examples)<br />
[Notes](#Notes)<br />
[Licensing](#Licensing)<br />

------------------

##Introduction <a name="Introduction"></a>
i3s_converter is used a command line tooling for
- Validating a 1.6 Scene Layer Package (slpk)
- Convert a 1.4-1.6 slpk to 1.7
- Extract a 1.7 slpk or a 2.0 slpk with layer type of Point Cloud.


|      &nbsp;     | Validate | Convert | Extract |
|-----------------|----------|---------|---------|
| 3DObject        |     <img alt="supported" src="readme_images/checkmark.png">    |    <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png"> |
| Integrated Mesh |     <img alt="supported" src="readme_images/checkmark.png">    |    <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png"> |
| Point           |     <img alt="supported" src="readme_images/checkmark.png">    |        |
| Pointcloud      |     <img alt="supported" src="readme_images/checkmark.png">    | &nbsp;  | <img alt="supported" src="readme_images/checkmark.png"> |
| Building        |     <img alt="supported" src="readme_images/checkmark.png">    |    <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png"> |

*Note:* 1.7 maintains backwards compatibility with 1.6. The resultant 1.7 slpk will be larger in size than the input slpk. This is due to the creation of Draco-compressed geometries and DXT-compressed textures.  All of these features are important for increased performance. If output slpk size is a limiting factor, the `-x` option can be used to skip writing DXT textures, but this may result in slower drawing performance.  

When extracing or converting, the following formats are available:
- Archived: *.slpk
- Filesystem : *.eslpk
- Cloud : *.i3srest

Cloud storage options supported:
- Microsoft Azure
- AWS S3
- Alibaba OSS

## Running the executable <a name="Execute"></a>

#### Open Command Prompt

1. Win+R

2. Enter __cmd__ into pop-up window

#### Run the executable

1. Specify the .exe path

  - Drag and drop the .exe into the command prompt window (absolute path)
    ![exe_abs_path](readme_images/exe_abs_path.PNG)
    OR

  - _cd_ into the directory that contains the .exe (relative path)
    - Use: i3s_converter  
    ![exe_cwd_path](readme_images/exe_cwd_path.PNG)

2. Specify the slpk path

    - Use relative path if executable is in same directory as slpk

    - Otherwise use absolute path

  ![min_required](readme_images/min_required_to_run.PNG)

  This is the minumum required to use the converter with an slpk.

## Subcommands <a name="Subcommands"></a>

| Subcommand   | Action          |
|--------------|-----------------|
| -b           | Show converter version    |
| -e           | Extract slpk to eslpk    |
| -h           | Show usage      |
| -i \[infile.slpk] | Show basic layer info |
| -u \[infile.slpk] | Convert slpk to 1.7   |
| -v \[infile.slpk] | Validate slpk |

## Options <a name="Options"></a>

| Option         | Action                  |
|----------------|-------------------------|
| -a \[key]         | AWS S3 access key / Azure Account / Alibaba Account |
| -d \[dir]         | Change [output directory](#outputDirectory). Will create it if it doesn't exist|
| -k             | Create ETC2 texture from input \(slow) |
| -j \[log_name] | Set log name    |
| -n    | Drop all normals. Client will recreate   |
| -o \[outfile]   | 1.7 slpk name   |
| -r    | Region where bucket is located   |
| -s \[key]   | AWS S3 secret key   |
| -t \[num threads]   | [Number of threads](#threadsDesc) to use when converting, default is 1 |
| -x             | Don't write DXT textures |

## Examples <a name="Examples"></a> 
Examples can be found [here](i3s_converter_examples.md), which show various uses of the i3s_converter.

## Conversion and Extraction
#### Filesystem
To convert an slpk to filesystem (*.eslpk)
- ```i3s_converter.exe --convert <path-to-slpk> -d <output-directory> -t <num-threads>```

To extract an slpk to filesystem (*.eslpk)
- ```i3s_converter.exe --extract <path-to-slpk> -d <output-directory>```

#### Cloud
To convert an slpk to cloud (*.i3srest)
 - ```  i3s_converter.exe --convert <path-to-slpk> -d <scheme>://<bucket-or-container> -a <access-key> -s <secret-key> -r <s3-or-alibaba-region> -t <num-threads>```

Usage for converting an slpk to cloud
- ```i3s_converter.exe --extract <path-to-slpk> -d <scheme>://<bucket-or-container> -a <access> -s <secret-key> -r <s3-or-alibaba-region>```

Supported schemes:
- AWS S3:          s3
- Microsoft Azure: az
- Alibaba OSS:     oss


## Notes <a name="Notes"></a>

- Only the first 10 warnings/errors are output to the command line.

- <a name = "outputDirectory"></a>Any output files are written out relative to the current working directory, unless _-d_ flag is used.  

- To avoid having to specify the absolute path to the .exe
  - _cd_ to the directory that contains the .exe
  - add the .exe as a PATH environment variable

- 1.7 slpks and log files will be overwritten when tool is re-run with the same input

- <a name = "threadsDesc"></a>The number of threads to run the extraction or conversion on.  Increasing the number of threads typically reduces execution time.
## Licensing <a name="Licensing"></a>
   Copyright 2020 ESRI

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.