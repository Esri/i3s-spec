import zipfile
import zlib
import os
import sys
import json
import jsonschema
from functools import singledispatch # for removing null in the json data files

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
######## Remove null from the json schema to successfully validate #########
############################################################################
@singledispatch
def remove_null(ob):
    return ob

@remove_null.register(list)
def _process_list(ob):
    return [remove_null(v) for v in ob]

@remove_null.register(dict)
def _process_list(ob):
    return {k: remove_null(v) for k, v in ob.items()
            if v is not None}

def load_json_content_without_null_objects( src_path ) :
    with open(src_path, 'r') as source :
        data = json.load(source)
        return remove_null(data)

# testing remove null
#print( load_json_content_without_null_objects( "k:/temp/test-null.json" ) )


############################################################################
################## Validate a file against schema ##########################
############################################################################
def format_path(path):
    data_path = ''
    for item in path:
        data_path += '.' + str(item)
    return data_path    

def format_error( error, errors, input_data ):
    global verbose

    data = {}
    data['keyword'] = error.validator
    data['dataPath'] = format_path(error.absolute_path)
    data['message'] = error.message 
    data['schemaPath'] = format_path(error.schema_path)
    data['params'] = {}
    data['params'][error.validator] = error.validator_value
    
    if verbose:
        data['parentSchema'] = error.schema
        data['data'] = input_data

    return data

def process_error_json(errors, data):
    error_array = []

    for error in errors:
        error_array.append(format_error(error, errors, data))
    return error_array

def process_error_console(errors, data_file_name):
    for error in errors:
        uprint("\n\n\n\n~~~~~~~~~~~~~~~~~ " + data_file_name + " ~~~~~~~~~~~~~~~~~~~~~~~\n\n")
        uprint(error)
        for suberror in sorted(error.context, key=lambda e: e.schema_path):
            try:
                uprint(list(suberror.schema_path), suberror.message, sep=", ")  
            except Exception as e:
                print("\n\n\n\n" + e + "\n\n")

def process_error_json_output(json_errors, file_write):
    json_data = json.dumps(json_errors)
    if file_write:
        if os.path.isdir(file_write):
            file_write = os.path.join(file_write, 'validation_errors.json')

        with open(file_write, mode='w', encoding='utf-8') as output:
            output.write(json_data)

    else:
        uprint( str(json_data) )


def validate( data_file_name, schema_file, json_output=False ):
    successful_validation = True
    json_errors = {}
    json_errors['errors'] = []
    data = {}

    with open(data_file_name, 'r', encoding="utf8") as data_file:
        try: 
            data = json.load(data_file)
            data = remove_null(data)

        except ValueError as e:
            syntax_error = {}
            syntax_error['message'] = 'JSON data file syntax error: ' + str(e)
            json_errors['errors'].append(syntax_error)
            return False, json_errors

    try:
        absolute_path_to_base_directory = os.path.dirname(os.path.join(os.path.dirname(__file__), schema_file))
        schema_abs_path =os.path.realpath( os.path.join(os.path.dirname(__file__), schema_file))
        with open(schema_abs_path, 'r', encoding="utf-8") as file_object:
           schema = json.load(file_object)

        resolver = jsonschema.RefResolver('file:///' + absolute_path_to_base_directory + '/', schema)
    except:
        raise # Exception("RefResolver")

    validator = jsonschema.Draft4Validator(schema, resolver=resolver)

    errors = sorted(validator.iter_errors(data), key=lambda e: e.path)
    if errors:
        successful_validation = False
        if json_output:
            json_errors['errors'] = process_error_json(errors, data)
        else:
            process_error_console(errors, data_file_name)

    return successful_validation, json_errors

def uprint(*objects, sep=' ', end='\n', file=sys.stdout):
    try:
        enc = file.encoding
        if enc == 'utf8':
            print(*objects, sep=sep, end=end, file=file)
        else:
            f = lambda obj: str(obj).encode(enc, errors='replace').decode(enc)
            print(*map(f, objects), sep=sep, end=end, file=file)
    except Exception as e:
        raise e 

 ############################################################################

 # length is derived from the path, depending on how nested the object is
 # within the slpk structure
 # e.g [sublayers / 0 / nodes / root / 3dNodeIndexDocument.json.gz] has length 5
def get_schema_type(length, object):
    if (length == 1 and object == "3dSceneLayer.json"):
        return "common/schema/3dScenelayer_schema.json"
    
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

# file_name is a string
# data is a string
# returns path to created file
def create_file_to_validate(file_name, data):
    #create file to pass to validator
    with open(file_name, "w", encoding="utf-8") as f:
        f.write(data)

    # temporary file name to pass to schema validator
    current_dir = os.getcwd()
    data_file_path = current_dir + "\\" + file_name

    return data_file_path

# removes file within same directory as project
def remove_file(file_name):
     if (os.path.exists(file_name) and os.path.isfile(file_name)) :
         os.remove(file_name)

# creates temporary file to validate data
# validates data against json_schema
def validate_json_string(json_schema, data, temp_file_name = "temp"):
    temp_file_name = temp_file_name + ".json"
    #create file for validator
    data_file_path = create_file_to_validate(temp_file_name, data)

    #validate the file
    try:
        successful_validation, error_output = validate(data_file_path, json_schema)
    except Exception as e:
        print(e)
    finally:
        remove_file(temp_file_name)

    return successful_validation, error_output

############################################################################
################## Validate an slpk against schema #########################
############################################################################
def validate_slpk(path_to_slpk, path_to_specs_folder):
    # get all paths in slpk
    reader = Reader(path_to_slpk)
    paths = reader.get_file_list()              #list with all the files in slpk
    error_output = {}
    error_count = 0
    success_count = 0
    for file in paths:
        # check if path points to json file
        # if so, decompress file and validate schema
        if file[-7:] == "json.gz":
            file_contents = (reader.get_file(file)).decode()    # file_contents as string
            file_paths = file.split("/")                        # name something better

            current_file = file_paths[-1]

            # get the schema for the current json file type
            schema = get_schema_type(len(file_paths), current_file)

            # not every file is being validated
            # check get_schema_type to see which are being validated
            if (not schema):
                continue       

            print("Now validating: " + file)

            path_to_json_schema = path_to_specs_folder + "/profiles/" + schema
            
            # validate the data file against the schema           
            successful_validation, error_output[current_file] = validate_json_string(path_to_json_schema, file_contents)

            if not successful_validation:
                error_count += 1
            else:
                success_count += 1

            # remove the temporary file
            remove_file(current_file)

    print("Number of errors: " + str(error_count))
    print("Number of successful files: " + str(success_count))
