import argparse
import glob
import json
import jsonschema
import os
import sys
import zipfile
import zlib
from validate_json import validate

# used in main
verbose = ''

############################################################################
############### Decompress an slpk file for reading ########################
############################################################################
def to_gzip( content  ) :
    if type( content ) == type( "" ) :
        content = content.encode('utf-8')
    Z_BEST_SPEED =1 
    gzip_compress = zlib.compressobj(Z_BEST_SPEED, zlib.DEFLATED, zlib.MAX_WBITS | 16 )
    packed = gzip_compress.compress(content) + gzip_compress.flush()
    return packed

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

 # length is derived from the path, depending on how nested the object is
 # within the slpk structure
 # e.g [sublayers / 0 / nodes / root / 3dNodeIndexDocument.json.gz] has length 5
def get_schema_type( length, object ):
    if (length == 1 and object == "3dSceneLayer.json.gz"):
        return "building/schema/layer_schema.json"
        #return "common/schema/3dScenelayer_schema.json"
    
    if (length == 2):
        return "building/schema/statsummary_schema.json"

    if (length == 3):
        return "common/schema/3dScenelayer_schema.json"

    if (length == 5 and object == "3dNodeIndexDocument.json.gz"):
        return "common/schema/3DSNodeIndexDocument_schema.json"

    #ignore shared resource
    #if (length == 6 and object == "sharedResource.json.gz") :
    #    return "common/schema/sharedResource.json"

    #ignore feature data
    # ignore these files for initial testing.
    # slows down the process
    #if (length == 6 and object == "0.json.gz") :
    #    return "common/schema/featureData_schema.json"
    
    if (length == 5 and object == "0.json.gz" ) :
        return "common/schema/stats_schema.json"

    # bad file
    return None


# file_name, data are strings
# returns path to created file
def create_file_to_validate( file_name, data ):
    #create file to pass to validator
    with open(file_name, "w", encoding="utf-8" ) as f:
        f.write(data)

    current_dir = os.getcwd()
    data_file_path = current_dir + "\\" + file_name

    return data_file_path


# removes file_name if within same directory as project
def remove_file( file_name ):
     if (os.path.exists(file_name) and os.path.isfile(file_name)) :
         os.remove(file_name)


# creates temporary file to validate data
# validates data against json_schema
def validate_json_string( json_schema, data, temp_file_name = "temp" ):
    #create file for validator
    data_file_path = create_file_to_validate(temp_file_name, data)

    #validate the file, then remove it
    try:
        successful_validation, error_output = validate(data_file_path, json_schema)
    finally:
        remove_file(temp_file_name)

    return successful_validation, error_output

############################################################################
################## Validate an slpk against schema #########################
############################################################################
def validate_slpk( path_to_slpk, path_to_specs_folder ):
    # get all paths in slpk
    reader = Reader(path_to_slpk)
    paths = reader.get_file_list()              #list with all the files in slpk
    error_output = {}
    error_count = 0
    success_count = 0
    successful_validation = True
    for file in paths:
        # check if path points to json file
        # if so, decompress file and validate schema
        if file[-7:] == "json.gz":
            file_contents = (reader.get_file(file)).decode()    # file_contents as string
            file_paths = file.split("/")                        

            current_file = file_paths[-1]

            # get the schema for the current json file type
            schema = get_schema_type(len(file_paths), current_file)

            # not every file is being validated
            # check get_schema_type to see which are being validated
            if (not schema):
                continue       

            print("validating file: " + file)

            path_to_json_schema = path_to_specs_folder + "/profiles/" + schema
            
            # validate the data file against the schema           
            successful__file_validation, error_output[current_file] = validate_json_string(path_to_json_schema, file_contents, current_file)
            if (not successful__file_validation) :
                successful_validation = False
    
            if not successful__file_validation:
                error_count += 1
            else:
                success_count += 1

    print("Results for slpk:")
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
            raise FileNotFoundError("Please provide the i3s spec folder, not a schema file")
            #schema_file = arguments.schema_file
        elif os.path.isdir(arguments.schema_file):
            #raise FileNotFoundError("Please provide schema file rather than folder.")
            schema_dir = arguments.schema_file
        else:
            raise FileNotFoundError("Schema file not found.")

	    #this is the data/slpk file being validated
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
