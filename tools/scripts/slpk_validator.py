import argparse
import glob
import json
import jsonschema
import os
import shutil
import sys
import zipfile
import zlib
import collections
import validate_json
import schema_to_doc

verbose = ''

def json_to_dom( path ) :
    with open( path, 'r') as f :
      return  json.load(f, object_pairs_hook=collections.OrderedDict)

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
def get_schema(slpk_type, file_type, version, manifest_paths) :
    dir, file = os.path.split( file_type )
    if ( slpk_type == "Building" ) :
        return get_building_schema_path( manifest_paths[version], dir, file )

    if ( slpk_type == "PointCloud" ) :
        return get_pointcloud_schema_path( manifest_paths[version], dir, file )

    if ( slpk_type == "Point" ) :
        return get_point_schema_path( manifest_paths[version], dir, file )

    if ( slpk_type == "3DObject" ) :
        return get_common_schema_path( manifest_paths[version], dir, file )

    if ( slpk_type == "IntegratedMesh" ) :
        return get_common_schema_path( manifest_paths[version], dir, file )

    # invalid slpk type
    return None
    


# get the path for the file within the profile type from the manifest
def get_schema_file_name(manifest, type, file_name) :
    if (type in manifest) :
        for schema in manifest[type]:
            if (schema['path'] == file_name) :
                return schema['schema']
    return None     # type or file not found


# includes Point, 3DObject, IM, ...
def get_common_schema_path( manifest, dir, file ) :
    if ( ( (not dir) or dir.isdigit() ) and file == "3dSceneLayer.json.gz" ) :
        return get_schema_file_name(manifest, 'common', file)

    if ( (dir[0].isdigit() or dir == "root") and file == "3dNodeIndexDocument.json.gz"):
        return get_schema_file_name(manifest, 'common', file)
    ## e.g /sublayers/#/statistics/f_#/0.json.gz
    if ( (dir.startswith("f_") or dir[0].isdigit()) and file == "0.json.gz" ) :
        return get_schema_file_name(manifest, 'common', file)
    if ( dir == "nodepages") :
        return get_schema_file_name(manifest, 'common', "nodepages")
    ### not being validated currently ###
    #if ( (dir == "features") and file == "0.json.gz") :
    #    return get_schema_file_name(manifest, 'common', file)

    #if ( ( dir == "shared") and file == "sharedResource.json.gz"):
    #    return get_schema_file_name(manifest, 'common', file)

    # file is not being checked
    return None


def get_building_schema_path( manifest, dir, file ) :
    ## e.g 3dSceneLayer.json.gz
    if (dir == ""):
        return get_schema_file_name(manifest,'building', file)
    ## e.g statistics/summary.json.gz
    if (dir == "statistics"):
        return get_schema_file_name(manifest,'building', file)
    # everything else in common or not being validated
    return get_common_schema_path(manifest, dir, file)


def get_point_schema_path( manifest, dir, file ) :
    # 3dSceneLayer.json.gz
    if (dir == ""):
        return get_schema_file_name(manifest,'point', file)
    # everything else in common or not being validated
    return get_common_schema_path(manifest, dir, file)

def get_pointcloud_schema_path( manifest, dir, file ) :
    #node pages don't have consistent naming, e.g 0.json, 64.json, 384.json, ...
    if ( dir == "nodepages" ) :
        return  get_schema_file_name(manifest, "pointcloud", "nodepage")
    if ( dir == "statistics" ) :
        return  get_schema_file_name(manifest, "pointcloud", "statistics")
    if ( (not dir) and file == "3dSceneLayer.json.gz" ) :
        return get_schema_file_name(manifest, "pointclout", file)
    # everything else in common or not being validated
    return get_schema_file_name(manifest, dir, file)


############################################################################
#################### Functions for reading files ###########################
############################################################################
def create_dir(path) :
    try:
        os.mkdir(path)
    except OSError :
        print("Failed creating directory %s", path)
    else :
        print("Creating directory %s", path)

def remove_dir(path) :
    # check if path is directory
    if ( os.path.isdir(path) ) :
        try :
            shutil.rmtree(path)
        except Exception as e :
            print(e)
            raise
    else :
        print("Directory %s does not exist" % path)


# copy only files in src, not directories
def copy_files(src, dst) :
    src_files = os.listdir(src)
    for file_name in src_files:
        fn = os.path.join(src, file_name)
        if (os.path.isfile(fn)):
            shutil.copy(fn, dst)

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


def load_file_to_dom(reader, file) :
    files = reader.get_file_list()
    layer_desc_index = files.index(file)
    layer_desc = reader.get_file( files[layer_desc_index] ) # bytes file_type
    layer_desc = layer_desc.decode()                        # to string
    return json.loads(layer_desc)


def get_slpk_info(reader) :
    layer_file = "3dSceneLayer.json.gz"
    layer_desc = load_file_to_dom(reader, layer_file)
    # 3dSceneLayer.json in root folder has layer type describing what type of slpk we're validating
    type, version = get_info_from_layer(layer_desc)
    # older builds of BSL do not have version property
    # version defaults to 1.6
    if ( not version ) :
        version = '1.6'
    return type, version


# get the type of slpk, e.g:
# Building, Point, Pointcloud, ...
def get_info_from_layer(dom) :
    type = None
    version = None
    if ( 'layerType' in dom ) :
        type =  dom['layerType']
    if ( 'store' in dom ) :
        if ('version' in dom['store'] ) :
            version = dom['store']['version']
    return type, version

def load_manifests(path_to_specs_folder) :
    path_to_manifest = os.path.join(path_to_specs_folder, 'manifest')
    manifests = {}
    for file in os.listdir( path_to_manifest) :
        version = file.split('.')[1]                    # e.g manifest.0106.json
        version = schema_to_doc.Schema_manifest.c_code_to_versions[version] 
        manifests[version] = {}
        # load the manifest
        manifest_dom = json_to_dom( os.path.join( path_to_manifest, file ) )
        for profile in manifest_dom['profile'] :
            manifests[version][profile['name']] = profile['schemas']
    return manifests

# inject the $include files into file if necessary
def load_schemas(abs_path_to_folder) :
    for file in os.listdir( abs_path_to_folder) :
        # check files to see if $include in schema
        dom = json_to_dom( os.path.join(abs_path_to_folder, file) )
        if '$include' in dom  :
            schema = validate_json.dom_to_schema(abs_path_to_folder, dom)
            # overwrite the file
            create_file_to_validate( os.path.join( abs_path_to_folder, file ), json.dumps( schema ) )
            

############################################################################
##################### Functions for validation #############################
############################################################################
# creates temporary file to validate data
# validates data against json_schema
def validate_json_string( json_schema, data, store, temp_file_name = "temp" ):
    #create file for validator
    temp_file_name = temp_file_name.replace('\\', '_')
    data_file_path = create_file_to_validate(temp_file_name, data)

    #validate the file, then remove it
    try:
        successful_validation, error_output = validate_json.validate( data_file_path, json_schema.replace('\\', '/'), False, store )
    finally:
        remove_file(temp_file_name)
    return successful_validation, error_output


# validate an slpk against the i3s specs
def validate_slpk( path_to_slpk, path_to_specs_folder, manifests ):
    error_output = {}
    error_count = 0
    success_count = 0
    successful_validation = True
    # delete the copied i3s directory
    # get all paths in slpk
    reader = Reader(path_to_slpk)
    files = reader.get_file_list()              # list with all the files in slpk   
    slpk_type, version = get_slpk_info(reader)
    ##temporary. for validation. 1.8 was changed to 1.7, but still written out as 1.8 in some files##
    if (version == '1.8') :
        version = '1.7'
    for file in files:
        # check if file is a json file
        # if so, decompress file and validate schema
        if file.endswith("json.gz"):
            file_contents = (reader.get_file(file)).decode()    # file_contents as string
            file_paths = file.split("/")                                    
            # files in root directory will have path length of 1
            # append directory to diffentiate files with similar names
            if ( len(file_paths) > 1) :
                current_file = os.path.join( file_paths[-2], file_paths[-1] )
            else :
                current_file = file_paths[-1]
            # get the schema for the current json file type
            schema = get_schema(slpk_type, current_file, version, manifests)
            # not every file is being validated
            # only proceed if file is being validated
            if (schema) :
                print("Validating file: %s" % file)
                path_to_json_schema = os.path.join(path_to_specs_folder, schema)
                # validate the data against the schema           
                successful__file_validation, error_output[file] = validate_json_string(path_to_json_schema, file_contents, file_paths[-1])

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
        root = arguments.schema_file

        if os.path.isfile(arguments.schema_file):
            raise FileNotFoundError("Please provide the i3s-spec folder, not a schema file")
        elif os.path.isdir(arguments.schema_file):
            schema_dir = os.path.join(root, 'schema') 
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

    ## some pre-processing
    # copy i3s schemas
    temp_schema_dir = os.path.join( os.getcwd(), 'schema')
    create_dir(temp_schema_dir)
    copy_files(schema_dir, temp_schema_dir)
    load_schemas(temp_schema_dir)
    # load the manifests e.g the entry points
    manifests = load_manifests( root )

    # validate the slpk/slpks
    try:
        for data_file_name in files:
            head, tail = os.path.split(data_file_name)
            root, ext = os.path.splitext(tail)
            print("Now validating slpk: %s" % tail)
            successful_validation, error_output[root] = validate_slpk( data_file_name, temp_schema_dir, manifests )
            if not successful_validation:
                error_count += 1

        if json_output:
            process_error_json_output(error_output, file_write)
        else:
            print("Results:")
            print("Number of errors: " + str(error_count))
            print("Number of successful files: " + str(len(files) - error_count))
    finally:
        remove_dir(temp_schema_dir)


if __name__ == "__main__" :
    main()
