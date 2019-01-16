import argparse
import glob
import json
import jsonschema
import os
import sys
from functools import singledispatch # for removing null in the json data files

files = []
verbose = ''

# for removing 'None' from schema
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

#################################################################################################################
############################################ Error handling #####################################################
#################################################################################################################

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

#################################################################################################################
###################################### Resolve incomplete files #################################################
#################################################################################################################
# checks if file uses $include
# if true, create a new schema that loads the included file
# otherwise return the properties
def load_properties(abs_path_to_schema, dom):
    if '$include' not in dom :
        if 'properties' in dom :
            return dom['properties']
        return None                     # schema did not have any properties
    # we have to include a file for the full schema
    include_file = dom['$include']
    with open( os.path.join(abs_path_to_schema, include_file) , 'r', encoding="utf-8" ) as file_object:
        sub_dom = json.load(file_object)
    properties = {}
    properties['properties'] = {}
    properties['patternProperties'] = {}
    # load included properties
    loaded_properties = load_properties(abs_path_to_schema, sub_dom)
    if loaded_properties:
        for prop, value in loaded_properties.items() :
            properties['properties'][prop] = value
    # overwrites included properties
    if ( 'properties' in dom ) :
        for prop, value in dom['properties'].items():
            properties['properties'][prop] = value
    if ( 'patternProperties' in dom ) :
        for prop, value in dom['patternProperties'].items():
            properties['patternProperties'][prop] = value
    return properties

def load_schema(abs_path_to_schema, dom) :
    # get all the required properties
    schema = {}
    properties = load_properties(abs_path_to_schema, dom)
    if ('properties' in properties and properties['properties']) :
        schema['properties'] = properties['properties']
    if ('patternProperties' in properties and properties['patternProperties'] ) :
        schema['patternProperties'] = properties['patternProperties']
    # add required properties
    if ( 'required' in dom ) :
        schema['required'] = dom['required']
    # guard against additional properties
    schema['additionalProperties'] = False
    return schema

def to_uri(abs_path_to_folder, file, scheme='file:///') :
    return scheme + abs_path_to_folder + '/' + file

# create a dictionary of { key: uri , value: dom }
# if a schema uses $include to reference another schema,
# the included properties will be added to the current schema
def load_schemas(abs_path_to_folder) :
    refs = {}
    for file in glob.glob(os.path.join(abs_path_to_folder, '*.json')):
        # check files to see if $include in schema
        with open( file , 'r', encoding="utf-8" ) as file_object:
            dom = json.load(file_object)
            if '$include' in dom :
                dom = load_schema(abs_path_to_folder, dom)
            uri = to_uri( abs_path_to_folder, os.path.split(file)[1] )
            refs[uri] = dom
    return refs

#################################################################################################################
############################################ Validation #########################################################
#################################################################################################################
# use this if you want to validate a data file against a schema file
def validate( data_file, schema_file, json_output = False, store={} ):
    absolute_path_to_base_directory = os.path.dirname(os.path.join(os.path.dirname(__file__), schema_file));
    schema_file_name = os.path.split(schema_file)[1]
    data_file_name = os.path.split(data_file)[1]
    # load files with $include and add them to the store for resolving references
    if ( not store ) :
        store = load_schemas(absolute_path_to_base_directory)
    with open(data_file, 'r', encoding="utf-8") as data:
        data = json.load(data)
    return validate_json( data, schema_file_name, absolute_path_to_base_directory, data_file_name, store, json_output )

def validate_json( data, schema_file, path_to_dir, console_output_name, store, json_output=False):
    successful_validation = True
    json_errors = {}
    json_errors['errors'] = []
    data = remove_null(data)
    key = to_uri(path_to_dir, schema_file)
    schema = store[ key ]                   # get the correct schema to validate data

    try:
        resolver = jsonschema.RefResolver( to_uri(path_to_dir, ''), schema, store=store )
    except:
        raise;# Exception("RefResolver")

    validator = jsonschema.Draft4Validator(schema, resolver=resolver)
    errors = sorted(validator.iter_errors(data), key=lambda e: e.path)
    if errors:
        successful_validation = False
        if json_output:
            json_errors['errors'] = process_error_json(errors, data)
        else:
            process_error_console(errors, console_output_name)
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

#################################################################################################################
############################################### Main ############################################################
#################################################################################################################
def main():
    parser = argparse.ArgumentParser(description='This program validates data given a schema.',
                                epilog='',
                                add_help=True,
                                argument_default=None, # Global argument default
                                usage=__doc__)
    parser.add_argument('-s', '--schema', action='store', dest='schema_file', required=True, help='The file of the input JSON schema file.')
    parser.add_argument('-d', '--data', action='store', dest='data_path', default='./', help='The json data file being validated.')
    parser.add_argument('-j', '--json', action='store_true', dest='json_output', default=False, help='Setting this outputs the errors in a json compatible format')
    parser.add_argument('-w', '--write', action='store', dest='file_write', default=False, help='May only be set alongside -j. Writes file into specified directory.')
    parser.add_argument('-v', '--verbose', action='store_true', dest='verbose', help='Output verbose error information.')

    error_output = {}
    error_count = 0
    global verbose

    try:
        arguments = parser.parse_args()
 
        json_output = arguments.json_output
        file_write = arguments.file_write
        verbose = arguments.verbose

        if os.path.isfile(arguments.schema_file):
            schema_file = arguments.schema_file
        elif os.path.isdir(arguments.schema_file):
            raise FileNotFoundError("Please provide schema file rather than folder.")
        else:
            raise FileNotFoundError("Schema file not found.")

	    #this is the data/json file being validated
        if os.path.isfile(arguments.data_path):
            files.append(arguments.data_path)
        elif os.path.isdir(arguments.data_path):
            for data_file_name in glob.glob(os.path.join(arguments.data_path, '*.json')):
                files.append(data_file_name)
        else:
            raise FileNotFoundError("Data file or folder not found.")
    except FileNotFoundError as e:
        raise e
    except Exception as e:
        print (e)

    for data_file_name in files:
        head, tail = os.path.split(data_file_name)
        root, ext = os.path.splitext(tail)
        successful_validation, error_output[root] = validate( data_file_name, schema_file, json_output )
        if not successful_validation:
            error_count += 1
    if json_output:
        process_error_json_output(error_output, file_write)
    else:
        print("Number of errors: " + str(error_count))
        print("Number of successful files: " + str(len(files) - error_count))

if __name__ == "__main__":
    main()