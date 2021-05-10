# i3s_converter.exe Examples

In all the of following examples, we will assume a working directory of ```C:\Users\johndoe\Desktop``` and that my i3s_converter.exe has a path of ```C:\Users\johndoe\Desktop\i3s_converter.exe```

-------------------------------------
## Quick Links
[Convert from old version (1.4-1.7) to new version (1.8)](#ConvertSLPK)<br>
[Set name for the log file](#setLogName)<br>
[Set the output directory](#setOuput)<br>
[Set the name of the output file](#setFileName)<br>
[Validate SLPK](#validate)<br>
[Extract slpk to filesystem](#extractFilesystem)<br>
[Multithreaded conversion](#multithreadedConversion)<br>
[Create Basis Universal textures](#createBasis)<br>
[Drop DXT textures](#dropDXT)<br>
[Drop normals](#dropNormals)<br>
[Convert slpk to filesystem (eslpk)](#convertFilesystem)<br>
[Extract slpk to filesystem (eslpk)](#extractFilesystem)<br>
[Convert to cloud format (i3srest)](#convertCloud)<br>
[Extract to cloud (i3srest)](#extractCloud)<br>
[Convert and extract to cloud](#convertAndExtract)<br>
[Validate using AWS profile](#validateWithAws)

-------------------------------------

### Convert from old version (1.4-1.6) to new version (1.7)<a name = "ConvertSLPK"></a>
```i3s_converter.exe -u myFile.slpk```<br>
This command will convert/upgrade from an older SLPK version to the latest SLPK version.  The output file will be in the working directory.

### Set name for the log file.<a name = "setLogName"></a>
```i3s_converter.exe -u myFile.slpk -j myFileInfo```<br>
This command performs a conversion and the log file will have the name ```myFileInfo.json``` and will be placed in the working directory.

### Set the output directory.<a name = "setOuput"></a>
```i3s_converter.exe -u myFile.slpk -d C:\Users\johndoe\Desktop\MyFolder```<br>
This command performs a conversion and the output file will be placed in ```C:\Users\johndoe\Desktop\MyFolder```.

### Set the name of the output file.<a name = "setFileName"></a>
```i3s_converter.exe -u myFile.slpk -o myNewFile```<br>
This command performs a conversion and the output file will have the name ```myNewFile``` and be placed in the working directory.

### Validate SLPK<a name = "validate"></a>
```i3s_converter.exe -v myFile.slpk```<br>
This command will validate that a 1.6 or 1.7 slpk can be used and is compatible as 1.8 consumption.

### Extract slpk to filesystem<a name = "extractFilesystem"></a>
```i3s_converter.exe -e myFile.slpk```<br>
This command will extract the eslpk from the slpk and place it in the working directory.

### Multithreaded conversion<a name = "multithreadedConversion"></a>
```i3s_converter.exe -u myFile.slpk -t 4```<br>
This command performs a conversion using 4 threads instead of 1, placing the output file in the working directory.

### Create Basis Universal textures.<a name = "createBasis"></a>
```i3s_converter.exe -u myFile.slpk -k```<br>
This command performs a conversion and creates Basis Universal textures.

### Drop DXT textures.<a name = "dropDXT"></a>
```i3s_converter.exe -u myFile.slpk -x```<br>
This command performs a conversion and drops DXT textures if they are 
present.

### Drop normals.<a name = "dropNormals"></a>
```i3s_converter.exe -u myFile.slpk -n```<br>
This command performs a conversion and drops all normals.  Client will recreate these normals. 

### Convert to filesystem (eslpk)<a name = "convertFilesystem"></a>
```i3s_converter.exe -u myFile.slpk -d C:\Users\johndoe\Desktop\MyFolder -t 2```<br>
This command performs a conversion to the filesystem format (eslpk) for ready to serve files.
In this example, the destination folder is changed, and number of threads is set to 2.

### Extract to filesystem (eslpk)<a name = "extractFilesystem"></a>
```i3s_converter.exe -e myFile.slpk -d C:\Users\johndoe\Desktop\MyFolder```<br>
This command extracts an slpk to the filesystem format (eslpk) for ready to serve files.
In this example, the destination folder is changed.

### Convert to cloud format (i3srest)<a name = "convertCloud"></a>
```i3s_converter.exe -u myFile.slpk -d s3://mySlpkBucket -a AKIAIOSFODNN7EXAMPLE -s wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY -r us-east-1a```<br>
This command performs a conversion to the i3srest format for cloud storage.  This example uses AWS S3.

### Extract to cloud (i3srest)<a name = "extractCloud"></a>
```i3s_converter.exe -e myFile.slpk -d oss://mySlpkBucket -a AKIAIOSFODNN7EXAMPLE -s wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY -r oss-us-west-1```<br>
This command will extract the slpk to the cloud.  This example uses Alibaba OSS.  

### Convert and extract<a name = "convertAndExtract"></a>
```i3s_converter.exe --convert-and-extract myFile.slpk -d az://mySlpkContainer -a AKIAIOSFODNN7EXAMPLE -s wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY ```<br>
This command will convert and extract the slpk to the cloud.  This example uses Azure.

### Validate slpk on cloud service<a name = "validateOnCloud"></a>
```i3s_converter.exe --validate az://mySlpkContainer/mySlpk.i3srest -a AKIAIOSFODNN7EXAMPLE -s wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY```<br>
This command will validate that an SLPK on a cloud store (i3srest) can be used and is compatible as 1.7 consumption. This example uses Azure.

### Validate with AWS profile<a name = "validateWithAws"></a>
```i3s_converter.exe --validate oss://mySlpkBucket/mySlpk.i3srest --aws-profile alibaba -r oss-us-west-1 ```<br>
This command will validate using AWS profiles, rather than entering credentials into the program. This example uses Alibaba OSS.
Note that this command will only work with AWS and OSS.

