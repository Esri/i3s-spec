import argparse
import glob
import json
import jsonschema
import os
import sys
import zipfile
import zlib
from validate_json import validate

verbose = ''

############################################################################
############### Decompress an slpk file for reading ########################
############################################################################
def from_gzip( content  ) :
    return zlib.decompress( content, 16+zlib.MAX_WBITS)
    

class Reader :
    def __init__(self, path):
        self.zip = zipfile.ZipFile( path, 'r')

    def get_file(self, path) :
        f = self.zip.open( path, 'r' )
        out = f.read()
        if path.endswith("json.gz") :
          out = from_gzip( out )
        return out

    def get_file_list( self ):
        return self.zip.namelist()


############################################################################
############ Functions to get the appropriate schema path ##################
############################################################################
def get_schema(slpk_type, file_type) :
    dir, file = os.path.split( file_type )
    if ( slpk_type == "Building" ) :
        return get_building_schema_path( dir, file )

    if ( slpk_type == "Point" ) :
        return get_point_schema_path( dir, file )
    
    if ( slpk_type == "PointCloud" ) :
        return get_pointcloud_schema_path( dir, file )

    if ( slpk_type == "3DObject" ) :
        return get_common_schema_path( dir, file )
    
    if ( slpk_type == "IntegratedMesh" ) :
        return get_common_schema_path( dir, file )
    # type was not valid
    return None


# includes Point, 3DObject
def get_common_schema_path( dir, file ) :
    if ( ( (not dir) or dir.isdigit() ) and file == "3dSceneLayer.json.gz" ) :
        return os.path.join("common", "schema", "3DSceneLayer_schema.json")

    if ( (dir.isdigit() or dir == "root") and file == "3dNodeIndexDocument.json.gz"):
        return os.path.join("common", "schema", "3DSNodeIndexDocument_schema.json")

    # e.g /sublayers/#/statistics/f_#/0.json.gz
    if ( ("f_" in dir) and file == "0.json.gz" ) :
        return os.path.join("common", "schema", "stats_schema.json")

    return None


def get_building_schema_path( dir, file ) :
    # e.g /3dSceneLayer.json.gz
    if (dir == "" and file == "3dSceneLayer.json.gz"):
        return os.path.join("building", "schema", "layer_schema.json")

    # e.g /statistics/summary.json.gz
    if (dir == "statistics" and file == "summary.json.gz"):
        return os.path.join("building", "schema", "statsummary_schema.json")

    # everything else in common or not being validated
    return get_common_schema_path(dir, file)


def get_pointcloud_schema_path( dir, file ) :
    if ( dir == "nodepages" ) :
        return os.path.join("pointclouds", "schema", "nodepage_schema.json")
    
    if ( dir == "statistics" ) :
        return os.path.join("pointclouds", "schema", "statistics.json")

    if ( (not dir) and file == "3dSceneLayer.json.gz" ) :
        return os.path.join("pointclouds", "schema", "layer_schema.json")

    # any other file is not being validated
    return None

def get_integrated_mesh_schema_path( dir, file) :
    if ( (not dir) and file == "3dSceneLayer.json.gz" ) :
        return os.path.join("meshv2", "schema", "layer_schema.json")
    return None

def get_point_schema_path( dir, file) :
    if ( (dir == "features") and file == "0.json.gz") :
        return os.path.join("common", "schema", "features_schema.json")
    return get_common_schema_path(dir, file)


############################################################################
##################### Functions for file I/O ###############################
############################################################################
# file_name, data are strings
# returns path to created file
def create_file_to_validate( file_name, data ):
    #create file to pass to validator
    with open(file_name, "w", encoding="utf-8" ) as f:
        f.write(data)

    current_dir = os.getcwd()
    data_file_path = os.path.join(current_dir, file_name)

    return data_file_path


# removes file_name, if within same directory as project
def remove_file( file_name ):
     if (os.path.exists(file_name) and os.path.isfile(file_name)) :
         os.remove(file_name)


# get the type of slpk, e.g:
# Building, Point, Pointcloud, ...
def get_slpk_type(dom) :
    if ( 'layerType' in dom ) :
        return dom['layerType']
    return None


############################################################################
##################### Functions for validation #############################
############################################################################
# creates temporary file to validate data
# validates data against json_schema
def validate_json_string( json_schema, data, temp_file_name = "temp" ):
    #create file for validator
    temp_file_name = temp_file_name.replace('\\', '_')
    data_file_path = create_file_to_validate(temp_file_name, data)

    #validate the file, then remove it
    try:
        successful_validation, error_output = validate(data_file_path, json_schema.replace('\\', '/'))
    finally:
        remove_file(temp_file_name)

    return successful_validation, error_output

# validate an slpk against the i3s specs
def validate_slpk( path_to_slpk, path_to_specs_folder ):
    # get all paths in slpk
    reader = Reader(path_to_slpk)
    files = reader.get_file_list()              # list with all the files in slpk
    error_output = {}
    error_count = 0
    success_count = 0
    successful_validation = True

    #current_layer = -1                  # used for printing current layer information / checking when sublayer has changed

    # 3dSceneLayer.json in root folder has layer type describing what type of slpk we're validating
    layer_desc_index = files.index("3dSceneLayer.json.gz")
    layer_desc = reader.get_file( files[layer_desc_index] ) # bytes file_type
    layer_desc = layer_desc.decode()                        # to string
    layer_desc = json.loads(layer_desc)

    slpk_type = get_slpk_type(layer_desc)
    
    for file in files:
        # check if file is a json file
        # if so, decompress file and validate schema
        if file[-7:] == "json.gz":
            file_contents = (reader.get_file(file)).decode()    # file_contents as string
            file_paths = file.split("/")                        

            # files in root directory will have path length of 1
            if ( len(file_paths) > 1) :
                current_file = os.path.join( file_paths[-2], file_paths[-1] )
            else :
                current_file = file_paths[-1]

            # get the schema for the current json file type
            schema = get_schema(slpk_type, current_file)

            # not every file is being validated
            # check get_schema_type to see which are being validated
            if (not schema) :
                continue

            print(file)

            path_to_json_schema = os.path.join(path_to_specs_folder, "profiles", schema)
            
            # validate the data against the schema           
            successful__file_validation, error_output[file] = validate_json_string(path_to_json_schema, file_contents, current_file)
            if (not successful__file_validation) :
                successful_validation = False
    
            if not successful__file_validation:
                error_count += 1
            else:
                success_count += 1

    current_slpk = os.path.split(path_to_slpk)[1]
    print()
    print("Results for %s:" % current_slpk)
    print("Number of errors: " + str(error_count))
    print("Number of successful files: " + str(success_count))
    print()

    return successful_validation, error_output


def main():
    parser = argparse.ArgumentParser(description='This program validates data given a schema.',
                                epilog='',
                                add_help=True,
                                argument_default=None, # Global argument default
                                usage=__doc__)
    parser.add_argument('-s', '--schema', action='store', dest='schema_file', required=True, help='The path of the i3s schema folder.')
    parser.add_argument('-d', '--data', action='store', dest='data_path', default='./', help='The slpk file being validated.')
    parser.add_argument('-j', '--json', action='store_true', dest='json_output', default=False, help='Setting this outputs the errors in a json compatible format')
    parser.add_argument('-w', '--write', action='store', dest='file_write', default=False, help='May only be set alongside -j. Writes file into specified directory.')
    parser.add_argument('-v', '--verbose', action='store_true', dest='verbose', help='Output verbose error information.')

    files = []
    error_output = {}
    error_count = 0
    global verbose

    try:
        arguments = parser.parse_args()
 
        json_output = arguments.json_output
        file_write = arguments.file_write
        verbose = arguments.verbose

        if os.path.isfile(arguments.schema_file):
            raise FileNotFoundError("Please provide the i3s-spec folder, not a schema file")
        elif os.path.isdir(arguments.schema_file):
            schema_dir = arguments.schema_file
        else:
            raise FileNotFoundError("Schema folder not found.")

	    # this is the data/slpk file being validated
        if os.path.isfile(arguments.data_path):
            files.append(arguments.data_path)
        elif os.path.isdir(arguments.data_path):
            for data_file_name in glob.glob(os.path.join(arguments.data_path, '*.slpk')):
                files.append(data_file_name)
        else:
            raise FileNotFoundError("Slpk or folder not found.")
            
    except FileNotFoundError as e:
        raise e
    except Exception as e:
        print (e)

    for data_file_name in files:
        head, tail = os.path.split(data_file_name)
        root, ext = os.path.splitext(tail)
        print("Now validating: %s" % tail)
        successful_validation, error_output[root] = validate_slpk( data_file_name, schema_dir )
        if not successful_validation:
            error_count += 1

    if json_output:
        process_error_json_output(error_output, file_write)
    else:
        print("Results:")
        print("Number of errors: " + str(error_count))
        print("Number of successful files: " + str(len(files) - error_count))


if __name__ == "__main__" :
    main()
