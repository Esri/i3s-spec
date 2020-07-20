#i3s_converter.exe Examples

In all the of following examples, we will assume a working directory of ```C:\Users\johndoe\Desktop``` and that my i3s_converter.exe has a path of ```C:\Users\johndoe\Desktop\i3s_converter.exe```

-------------------------------------
##Quick Links
[Convert from old version (1.4-1.6) to new version (1.7)](#ConvertSLPK)
[Set name for the log file](#setLogName)
[Set the output directory](#setOuput)
[Set the name of the output file](#setFileName)
[Validate 1.6 SLPK](#validate)
[Extract slpk to filesystem](#extractFilesystem)
[Multithreaded conversion](#multithreadedConversion)
[Create ETC2 textures](#createETC2)
[Drop DXT textures](#dropDXT)
[Drop normals](#dropNormals)
[Convert to cloud format (i3srest)](#convertCloud)
[Extract to cloud (i3srest)](#extractCloud)

-------------------------------------

### Convert from old version (1.4-1.6) to new version (1.7)<a name = "ConvertSLPK"></a>
```i3s_converter.exe -u myFile.slpk```
This command will convert from an older SLPK version to the latest SLPK version.  The output file will be in the working directory.

### Set name for the log file.<a name = "setLogName"></a>
```i3s_converter.exe -u myFile.slpk -j myFileInfo```
This command performs a converion and the log file will have the name ```myFileInfo.json``` and will be placed in the working directory.

### Set the output directory.<a name = "setOuput"></a>
```i3s_converter.exe -u myFile.slpk -d C:\Users\johndoe\Desktop\MyFolder```
This command performs a converion and the output file will be placed in ```C:\Users\johndoe\Desktop\MyFolder```.

### Set the name of the output file.<a name = "setFileName"></a>
```i3s_converter.exe -u myFile.slpk -o myNewFile```
This command performs a converion and the output file will have the name ```myNewFile``` and be placed in the working directory.

### Validate 1.6 SLPK<a name = "validate"></a>
```i3s_converter.exe -v myFile.slpk```
This command will validate that a 1.6 slpk can be used and is compatible as 1.7 consumption.

### Extract slpk to filesystem<a name = "extractFilesystem"></a>
```i3s_converter.exe -e myFile.slpk```
This command will extract the eslpk from the slpk and place it in the working directory.

### Multithreaded conversion<a name = "multithreadedConversion"></a>
```i3s_converter.exe -u myFile.slpk -t 4```
This command performs a converion using 4 threads instead of 1, placing the output file in the working directory.

### Create ETC2 textures.<a name = "createETC2"></a>
```i3s_converter.exe -u myFile.slpk -k```
This command performs a converion and creates ETC2 textures.  This can be very slow.

### Drop DXT textures.<a name = "dropDXT"></a>
```i3s_converter.exe -u myFile.slpk -x```
This command performs a converion and drops DXT textures if they are 
present.

### Drop normals.<a name = "dropNormals"></a>
```i3s_converter.exe -u myFile.slpk -n```
This command performs a converion and drops all normals.  Client will recreate these normals. 

### Convert to cloud format (i3srest)<a name = "convertCloud"></a>
```i3s_converter.exe -u myFile.slpk -d s3://mySlpkBucket -a AKIAIOSFODNN7EXAMPLE -s wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY -r us-east-1a```
This command performs a conversion to the i3srest format for cloud storage.  This example uses AWS S3.

### Extract to cloud (i3srest)<a name = "extractCloud"></a>
```i3s_converter.exe -e myFile.slpk -d oss://mySlpkBucket -a AKIAIOSFODNN7EXAMPLE -s wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY -r us-west-1```
This command will extract the slpk to the cloud.  This example uses Alibaba OSS.  
