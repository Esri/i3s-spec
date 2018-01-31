import sys
import os
import glob
import json
import argparse
import re
import errno
import collections


def json_to_dom( path ) :
    with open( path, 'r') as f :
      return  json.load(f, object_pairs_hook=collections.OrderedDict)


class Schema_manifest :
    """ Keep track of all the schema to avoid parsing sub-schema multiple times"""
    def __init__(self, schema_reference_path) :
        self.ref_path = schema_reference_path
        self.types = {} # key: schema name, value : type object

    def get_schema_filename( self, schema_name ) :
        return os.path.realpath(  os.path.join(self.ref_path, "%s_schema.json" % schema_name) ) 

    def read_href_resource( self, href) :
        path = os.path.realpath(  os.path.join(self.ref_path, href) )
        with open(path, 'r') as f :
            return f.read()
        
    def ref_to_schema_name(  ref ) :
        return ref.replace( '_schema.json', '')

    def add_dependency( self, parent_type, child_href ) :
        #instanciate the type:
        child_type = self.load_schema_from_ref( child_href)
        return child_type;

    def load_schema( self, schema_name ) :
        path = self.get_schema_filename( schema_name )
        type = Schema_type( self )
        type.parse_from_file( path )
        self.types[schema_name ] = type
        return type;

    def load_schema_from_ref( self, ref ) :
        name = Schema_manifest.ref_to_schema_name( ref )
        if name not in self.types :
            self.load_schema( name )
        return self.types[ name ]

class Schema_type :
    def __init__(self, manifest) :
        # init data members:
        self.json_type ='' # array, number, object, string, ...
        self.name =''
        self.title=''
        self.desc=''
        self.props = [] # array of Property object.
        self.examples = []
        self.enum = {} # for "enum", {  enum_value : description of this value }
        #self.href='' #externaly defined object type
        self.item_prop = None #array only.
        self.manifest = manifest
        self.back_refs = [] #for navigation purposes
        self.range = ["",""]
        self.example_dom=[];
        self.desc_href=''

    def parse_from_file(self, schema_path) :
        """ parse schema definition from json-schema file"""
        self.name = os.path.basename( schema_path ).replace( "_schema.json", "" )

        self.parse_from_dom( json_to_dom( schema_path) )

    def parse_from_dom( self, dom  ) :
        """ Parse a schema definition """
        if 'title' in dom :
            self.title = dom['title']
        self.parse_type( dom )
        # todo: parse example & external md doc if any

    def parse_property( self, field, sub_dom ) :
        prop = Property()
        prop.name = field
        if '$ref' in sub_dom :
            prop.href = sub_dom['$ref']
            if 'description' in sub_dom :
                prop.prop_desc = sub_dom['description']
            prop.type =  self.manifest.add_dependency( self,  sub_dom['$ref'])

        else :
            prop.type = Schema_type( self.manifest)
            prop.type.parse_from_dom( sub_dom )
        return prop

    def parse_type(self, dom ) :
      
        if 'type' in dom :
            self.json_type = dom['type']

        if 'description' in dom :
            self.desc = dom['description']

        if 'items' in dom :
            assert( self.json_type == 'array')
            item_dom =  dom['items'] 
            self.item_prop = self.parse_property( 'items', item_dom )
            if 'minItems' in dom :
                self.range[0] = str(dom['minItems'])
            if 'maxItems' in dom :
                self.range[1] = str(dom['maxItems'])

        if 'properties' in dom :
            for field,sub_dom in dom['properties'].items() :
                prop = self.parse_property( field, sub_dom )
                prop.is_required = True if 'required' in dom and field in dom['required'] else False
                if prop.type.json_type == 'array' :
                    prop.type.item_prop.type.back_refs.append( self)
                else :
                    prop.type.back_refs.append( self)
                self.props.append( prop )
        
            if self.json_type == 'string' and 'enum' in dom :
                for en in dom['enum'] :
                    self.enum[en]=''
                if 'enum-description' in dom :
                    for k, v in dom['enum-description'].items() :
                        assert( k in self.enum )
                        self.enum[k]= v
            if 'esriDocumentation' in dom and 'examples' in dom['esriDocumentation'] :
               self.example_dom  = dom['esriDocumentation']['examples']
            if 'description-href' in dom :
                self.desc ="%s\n\n%s" % (self.desc, self.manifest.read_href_resource( dom['description-href'] ) )

class Property :
    def __init__(self) :
        self.type = None;
        self.name=''
        self.prop_desc=''
        self.is_required=False
        self.out = None
        self.href = ''

    def get_desc( self ) :
       if self.href != '' and self.prop_desc != ''  :
            return self.prop_desc.replace('\n', " ")
       else :
            return self.type.desc.replace('\n', " ")
    
    def get_type_name(self) :
        if self.href != '' :
            return Schema_manifest.ref_to_schema_name( self.href )
        else :
            return self.type.json_type


class Markdown_writer  :
    def __init__(self, output_path ):
        self.output_folder = output_path

    def write_line( self, line='' ) :
        if line != '' :
            self.out.write( line )
        self.out.write('\n') #on all platforms 

    def write_table_row(self, cols ) :
        self.write_line( "| %s |" % " | ".join( cols ) )

    def write_table_header(self, hd ) :
        self.write_table_row( hd )
        self.write_table_row( [ "---" for x in hd ] ) 


    def get_filename(self, typename ) :
        return os.path.join( self.output_folder, "%s.md" % typename )

    def get_property_name( self, prop ) :

        return ("**%s**" % prop.name) if prop.is_required else prop.name

    def get_property_type( self, prop ) :
        postfix = '';
        if prop.type.json_type == 'array' :
            range = ''    
            if prop.type.range[0] == prop.type.range[1] and prop.type.range[0] != '':
                range = prop.type.range[0] 
            if prop.type.range[0] != prop.type.range[1] :
                range = "%s:%s" % prop.type 
            postfix ='[%s]' % range
            prop = prop.type.item_prop
        
        typename = prop.type.json_type
        if prop.type.json_type == 'object' :
            if prop.href != '' :
                #print a link to the type:
                typename = "[%s](%s)" % (prop.get_type_name(), "%s.md" % prop.get_type_name())
            else :
                typename = prop.type.name

        return "%s%s" % (typename, postfix )

    def get_one_enum_md( key, val) :
        return ("`%s`" % key ) if val == ''  else ("`%s`: %s" % (key,val) )
 
    def get_unordered_list_http( enum ) :
        return "<ul><li>%s</li></ul>" % ( "`%`</li><li>".join( [ Markdown_writer.get_one_enum_md( k,v ) for k,v in  enum.items() ] ) )

    def get_property_desc( self, prop ) :
        postfix = ''
        if len( prop.type.enum ) > 0 :
            postfix = "<div>Possible values are:%s</div>" % Markdown_writer.get_unordered_list_http( prop.type.enum  )
        if prop.type.json_type == 'array' and len( prop.type.item_prop.type.enum ) > 0 :
            postfix = "<div>Possible values for each array string:%s</div>" % Markdown_writer.get_unordered_list_http( prop.type.item_prop.type.enum ) 
        return prop.get_desc() + postfix;
     
    def get_example_code( self, ex_dom ) :
        if 'code' in ex_dom :
           return json.dumps( ex_dom['code'], ensure_ascii=False, indent=2, separators=(',', ': '))
        if 'code_href' in ex_dom :
            #load from relative path:
            path = os.path.realpath( os.path.join( self.output_folder, ex_dom[ 'code_href' ]) )
            with open( path, 'r') as f :
                return f.read()



    def write_to_md( self, manifest, schema_doc ):
        output_path  = os.path.join( self.output_folder, "%s.md" % schema_doc.name)
        print( "Writting %s" % output_path )
        with open( output_path,'w') as output:
            self.out = output
            self.write_line( "# %s\n" % schema_doc.title )
            self.write_line( schema_doc.desc )
            self.write_line()
            if len( schema_doc.back_refs ) > 0 :
                # print the related documents (i.e. navigation parents)
                self.write_line( "### Related:\n" )
                self.write_line( ", ".join( [ "[%s](%s)" %( type.name, "%s.md" % type.name ) for type in schema_doc.back_refs ] ) )
            self.write_line( "### Properties\n" )
            self.write_table_header( ["Property", "Type", "Description" ]);
            # to property table:
            for prop in  schema_doc.props :
                self.write_table_row( [ self.get_property_name( prop ), self.get_property_type(prop), self.get_property_desc(prop) ] );
            self.write_line( "*Note: properties in **bold** are required*" )
            self.write_line()
            # Examples:
            if len( schema_doc.example_dom ) :
                self.write_line( "### Examples \n" )
                for ex in schema_doc.example_dom  :
                    self.write_line( "#### Example: %s \n" % (ex['title'] if 'title' in ex else '' ))
                    self.write_line( "```json\n %s \n````\n" % self.get_example_code( ex ))




if __name__ == "__main__" :

    # argument parsing: 
    parser = argparse.ArgumentParser(description='This program creates md files.',
                                    epilog='',
                                    add_help=True,
                                    argument_default=None, # Global argument default
                                    usage=__doc__)
    parser.add_argument('-i', '--input', action='store', dest='json_schema_path', required=True, help='The path to the input JSON schema folder.')
    parser.add_argument('-s', '--schemas', action='store', dest='schema_names', required=True, help='comma separated list of schemas to process')
    parser.add_argument('-o', '--output_md', action='store', dest='md_output_path', default='./', help='The path where generated .md files should go.')

    arguments = parser.parse_args();

    schema_files = []

    try:
        os.makedirs(arguments.md_output_path)

    except OSError as e:
        if e.errno != errno.EEXIST:
            raise

    #assumes relative path:
    output_path = os.path.realpath(  os.path.join(os.path.dirname(__file__), arguments.md_output_path) )
    input_path  = os.path.realpath(  os.path.join(os.path.dirname(__file__), arguments.json_schema_path) )
    schema_names     = arguments.schema_names.split(',')
    writer = Markdown_writer( output_path);
    manifest = Schema_manifest(input_path);
    for schema_name in schema_names:
        manifest.load_schema( schema_name);

    for name, type  in manifest.types.items() :
      writer.write_to_md( manifest, type );
       



