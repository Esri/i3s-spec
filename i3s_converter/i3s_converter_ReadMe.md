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

## Introduction <a name="Introduction"></a>
i3s_converter a command line tool for
- Validating a 1.6 Scene Layer Package (slpk)
- Convert a 1.4-1.6 slpk to 1.7
- Extract a 1.7 slpk or a 2.0 slpk with layer type of Point Cloud.


|      &nbsp;     | Validate | Convert | Extract |
|-----------------|----------|---------|---------|
| 3DObject        |     <img alt="supported" src="readme_images/checkmark.png">    |    <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png"> |
| Integrated Mesh |     <img alt="supported" src="readme_images/checkmark.png">    |    <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png"> |
| Point           |     <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png">       | <img alt="supported" src="readme_images/checkmark.png">
| Pointcloud      |     <img alt="supported" src="readme_images/checkmark.png">    | &nbsp;  | <img alt="supported" src="readme_images/checkmark.png"> |
| Building        |     <img alt="supported" src="readme_images/checkmark.png">    |    <img alt="supported" src="readme_images/checkmark.png">    | <img alt="supported" src="readme_images/checkmark.png"> |

*Note:* 1.7 maintains backwards compatibility with 1.6. The resultant 1.7 slpk will be larger in size than the input slpk. This is due to the creation of Draco-compressed geometries and DXT-compressed textures.  All of these features are important for increased performance. If output slpk size is a limiting factor, the `-x` option can be used to skip writing DXT textures, but this may result in slower drawing performance.  

When extracing or converting, the following formats are available:
- Archived: *.slpk
- Filesystem : *.eslpk
- Cloud : *.i3srest

Cloud storage options supported:
- Microsoft Azure Blob
- Amazon Web Services S3
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
**Short name is interchangeable with long name, so either may be used for an action.  For example, <br>
```i3s_converter.exe -e myFile.slpk```<br>
is the equivalent to<br>
```i3s_converter.exe --extract myFile.slpk```<br>


| Subcommand Short | Subcommand Long | Action | 
|------------------|-----------------|--------|
| -b               | --converter-info | Show converter version |
| -e \[infile.slpk] | --extract \[infile.slpk] | Extract slpk to eslpk    |
| -h           | --help | Show usage      |
| -i \[infile.slpk] | --slpk-info \[infile.slpk] | Show basic layer info |
| -u \[infile.slpk] | --convert \[in-slpk]  | Convert and/or upgrade slpk to 1.7   |
| -v \[infile.slpk] | --validate \[in-slpk] | Validate slpk |
|  | --convert-and-extract \[in-slpk] | Convert to 1.7 extracted slpk |

## Options <a name="Options"></a>

| Option Short | Option Long         | Action                  |
|----------------|-------------------------|-------------------|
| -a \[key] | --access-key \[key] | AWS S3 access key / Azure Account / Alibaba Account |
| -d \[dir] | --dest \[output-directory] | Change [output directory](#outputDirectory). Will create it if it doesn't exist|
| -k | --create-ktx2-textures | Create Basis Universal texture from input |
| -j \[log_name] | --json \[log_name] | Set log name    |
| -n | --drop-normals | Drop all normals. Client will recreate   |
| -o \[outfile]  | --output-name \[outfile] | 1.7 slpk name   |
| -r  | --region  | Region where bucket is located (S3/OSS).|
| -s \[key] | --secret-key \[key] | AWS S3/Alibaba OSS secret key or Azure account key   |
| -t \[num threads] | --thread-count \[num threads] | [Number of threads](#threadsDesc) to use when converting, default is 1 |
| -x | --drop-dxt | Don't write DXT textures |
|  | --endpoint-url | Endpoint url for S3 compatible services |
| | --aws-profile | AWS Profile in ```%USERPROFILE%\.aws\credentials``` |



### Supported cloud schemes:
- AWS S3:          s3
- Azure Blob: az
- Alibaba OSS:     oss


## Examples <a name="Examples"></a> 
Examples can be found [here](i3s_converter_examples.md), which show various uses of the i3s_converter.

## Notes <a name="Notes"></a>

- Only the first 10 warnings/errors are output to the command line.

- <a name = "outputDirectory"></a>Any output files are written out relative to the current working directory, unless _-d_ flag is used.  

- To avoid having to specify the absolute path to the .exe
  - _cd_ to the directory that contains the .exe
  - add the .exe as a PATH environment variable

- 1.7 slpks and log files will be overwritten when tool is re-run with the same input

- <a name = "threadsDesc"></a>The number of threads to run the extraction or conversion on.  Increasing the number of threads typically reduces execution time.  If unsure, base of off number of CPU cores and I/O bandwidth of your machine.
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