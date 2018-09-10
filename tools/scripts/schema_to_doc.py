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
    c_path_to_codes = { 'pointclouds' : 'pointcloud',  'meshes' : 'mesh', 'meshpyramids':'3dobject', 'points' : 'point', 'common' : 'common', "meshv2":"meshv2" ,"bim":"bim"}
    c_code_to_paths = { 'pointcloud'  : 'pointclouds', 'mesh' : 'meshes', '3dobject':'meshpyramids', 'point' : 'points', 'common' : 'common', "meshv2":"meshv2","bim":"bim"}

    """ Keep track of all the schemas to avoid parsing sub-schema multiple times"""
    def __init__(self, schema_reference_path) :
        self.ref_path = schema_reference_path
        self.types = {} # key: schema name, value : type object
        self.include_stack = []

    def get_abs_path_from_schema_name( self, name ) :
        tok = name.split('::')
        assert( len(tok) <=2 )
        fn = tok[-1] + "_schema.json"
        if len(tok) >1 :
            assert( tok[0] in Schema_manifest.c_code_to_paths)
            fn = os.path.join( [Schema_manifest.c_code_to_paths[tok[0]], "schema", fn] ) 
        return os.path.realpath( os.path.join( self.ref_path, fn ) );
     
    def get_relative_output_path_from_schema_name( self, name, abs_ref_path=None ) :
        tok = name.split('::')
        assert( len(tok) <=2 )
        fn = tok[-1] + ".md"
        if len(tok) >1 :
            assert( tok[0] in Schema_manifest.c_code_to_paths)
            fn = os.path.join( Schema_manifest.c_code_to_paths[tok[0]], "docs", fn ) 
        if abs_ref_path != None :
            fn = os.path.relpath( os.path.join(self.ref_path, fn), os.path.dirname( abs_ref_path) )
        return fn

    def get_output_path_from_schema_name( self, name ) :
        #tok = name.split('::')
        #assert( len(tok) <=2 )
        #fn = tok[-1] + ".md"
        #if len(tok) >1 :
        #    assert( tok[0] in Schema_manifest.c_code_to_paths)
        #    fn = os.path.join( Schema_manifest.c_code_to_paths[tok[0]], "docs", fn ) 
        #return os.path.realpath( os.path.join( self.ref_path, fn ) );
        return os.path.realpath( os.path.join( self.ref_path, self.get_relative_output_path_from_schema_name(name) ) );

    def read_href_resource( self, href) :
        assert( len( self.include_stack) > 0 )
        path = os.path.realpath(  os.path.join(self.include_stack[-1], '..', href) )
        with open(path, 'r') as f :
            return f.read()
        
    def get_schema_name_from_abs_path( self, abs_path ) :
        rel_path = os.path.relpath(abs_path,start=self.ref_path  );
        return Schema_manifest.get_schema_name_from_relative_path( rel_path );



    def get_schema_name_from_relative_path( rel_path, default_namespace="" ):
        #pointclouds/schema/pcsl_attributeInfo_schema.json
        tok = rel_path.replace('\\','/').split('/')
        name = tok[-1];
        if name.endswith('.json') :
            name = name[:-5]
        if name.endswith('_schema') :
            name = name[:-7]
        if len(tok) ==1 :
            assert( default_namespace in Schema_manifest.c_code_to_paths)
            tok.insert(0, Schema_manifest.c_code_to_paths[ default_namespace])
        while( len(tok) > 0 and tok[0] == ".."):
            del tok[0]
        assert( tok[0] in Schema_manifest.c_path_to_codes)
        return "%s::%s" % (Schema_manifest.c_path_to_codes[tok[0]], name )

    def get_docs_href_from_schema_name( href) :
        return Schema_manifest._get_href_from_schema_name( href, 'docs')

    #def get_example_href_from_schema_name( abs_path_doc, href) :
    #    return Schema_manifest._get_href_from_schema_name( abs_path_doc, href, 'examples')

    def _get_href_from_schema_name( href, replace_by) :
        folders = []
        while 1:
            href, folder = os.path.split(href)
            if folder != "":
                folders.append(folder)
            else:
                if href != "":
                    folders.append(href)
                break

        folders.reverse()
        folders = [ (x if x !='schema' else replace_by ) for x in folders ]
        folders[-1] = folders[-1].replace('_schema.json', '.md')
        #if 'schema' in folders :
        #    folders = folders.replace( 'schema', 'docs')
        rel_path  = os.path.join(*folders )
        return rel_path;

    def add_dependency( self, child_href ) :
        #instanciate the type:
        assert( len(self.include_stack) > 0 )
        print( "reference:", child_href)
        abs_path =  os.path.realpath(  os.path.join( self.include_stack[-1], "..", child_href ) )
        if not os.path.exists( abs_path ) :
            raise BaseException( "Schema %s references %s but file %s doesnt exists. Please check href" %( self.include_stack, child_href, abs_path  ))
        #print("Dependency:",child_href)
        child_type = self.get_type_from_abs_path( abs_path)
        return child_type;

    def load_schema( self, abs_path ) :
        print("Loading schema file:",abs_path )
        sch = Schema_type( self )
        sch.parse_from_file(abs_path ) # os.path.join( self.ref_path, rel_path ) )
        #register it:
        assert( sch.name not in self.types )
        self.types[sch.name] = sch
        return sch;

    def get_type_from_abs_path( self, abs_path ) :
        
        # have it already ?
        name = self.get_schema_name_from_abs_path( abs_path )
        if name in self.types :
            return self.types[name]
        else :
            self.include_stack.append( abs_path )
            ret = self.load_schema( abs_path)
            self.include_stack.pop()
            return ret;

class Dummy_type :
    """used only for custom_related"""
    def __init__(self, manifest ):
        self.name = ""
        self.manifest = manifest

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
        self.custom_related = []

    def parse_from_file(self, abs_path) :
        """ parse schema definition from json-schema file"""
        self.name = self.manifest.get_schema_name_from_abs_path( abs_path )
        #self.name = os.path.basename( schema_path ).replace( "_schema.json", "" )
        self.parse_from_dom( json_to_dom( abs_path ) )

    def parse_from_dom( self, dom, parent_type=None  ) :
        """ Parse a schema definition """
        if 'title' in dom :
            self.title = dom['title']
        self.parse_type( dom, parent_type )
        # todo: parse example & external md doc if any

    def parse_property( self, field, sub_dom, parent_type=None ) :
        prop = Property()
        prop.name = field
        if '$ref' in sub_dom :
            #tmp = Schema_manifest.get_schema_name_from_relative_path( sub_dom['$ref'], self.name.split('::')[0] );
            tmp = Schema_manifest.get_schema_name_from_relative_path( sub_dom['$ref'], "" if parent_type is None else parent_type.name.split('::')[0] );
            if tmp != self.name and ( parent_type is None or tmp != parent_type.name ):
                prop.href = sub_dom['$ref']
                if 'description' in sub_dom :
                    prop.prop_desc = sub_dom['description']
                prop.type =  self.manifest.add_dependency(  sub_dom['$ref'])
            else:
                prop.href = sub_dom['$ref']
                if 'description' in sub_dom :
                    prop.prop_desc = sub_dom['description']
                prop.type = self if tmp == self.name else parent_type

        else :
            prop.type = Schema_type( self.manifest)
            prop.type.parse_from_dom( sub_dom, self )
        return prop

   

    def parse_type(self, dom, parent_type=None ) :
        if 'type' in dom :
            self.json_type = dom['type']
        if 'related' in dom :
            if not isinstance( dom['related'], list) :
                dom['related'] = [dom['related']]
            for related in dom['related'] :
                obj = Dummy_type( self.manifest);
                obj.name = related
                self.custom_related.append( obj )
        #print("Parsing type '%s' of type %s" % (self.name, self.json_type ) )

        if 'description' in dom :
            self.desc = dom['description']

        if 'items' in dom :
            assert( self.json_type == 'array')
            item_dom =  dom['items'] 
            self.item_prop = self.parse_property( 'items', item_dom, parent_type )
            if 'minItems' in dom :
                self.range[0] = str(dom['minItems'])
            if 'maxItems' in dom :
                self.range[1] = str(dom['maxItems'])

        if 'properties' in dom :
            for field,sub_dom in dom['properties'].items() :
                prop = self.parse_property( field, sub_dom, self )
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
    
    def get_type_name(self, doc_path) :
        if self.href != '' :
            return Schema_manifest.get_docs_href_from_schema_name( self.href )
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


    #def get_filename(self, typename ) :
    #    return os.path.join( self.output_folder, "%s.md" % typename )

    def get_property_name( self, prop ) :

        return ("**%s**" % prop.name) if prop.is_required else prop.name


    def get_property_type( self, prop, postfix='') :
        if isinstance(prop.type.json_type,list) :
            return ", ".join( [ "%s%s" %( x , postfix ) for x in prop.type.json_type] )
        if prop.type.json_type == 'array' :
            range = ''    
            if prop.type.range[0] == prop.type.range[1] and prop.type.range[0] != '':
                range = prop.type.range[0] 
            if prop.type.range[0] != prop.type.range[1] :
                range = "%s:%s" % prop.type 
            postfix ='[%s]' % range
            return self.get_property_type( prop.type.item_prop, postfix)
        
        typename = prop.type.json_type
        if prop.type.json_type == 'object' :
            if prop.href != '' :
                #print a link to the type:
                tn = prop.get_type_name(self.output_path)
                typename = "[%s](%s)" % (prop.type.name, "%s" % tn.replace('\\','/') )
            else :
                typename = prop.type.name
        return "%s%s" % (typename, postfix )


    def get_property_type_old( self, prop ) :
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
                tn = prop.get_type_name(self.output_path)
                typename = "[%s](%s)" % (prop.type.name, "%s" % tn.replace('\\','/') )
            else :
                typename = prop.type.name

        return "%s%s" % (typename, postfix )

    def get_one_enum_md( key, val) :
        return ("`%s`" % key ) if val == ''  else ("`%s`: %s" % (key,val) )
 
    def get_unordered_list_http( enum ) :
        return "<ul><li>%s</li></ul>" % ( "</li><li>".join( [ Markdown_writer.get_one_enum_md( k,v ) for k,v in  enum.items() ] ) )

    def get_property_desc( self, prop ) :
        postfix = ''
        if len( prop.type.enum ) > 0 :
            if len( prop.type.enum ) ==1 :
                postfix = "<div>Must be:%s</div>" % Markdown_writer.get_unordered_list_http( prop.type.enum  )
            else :
                postfix = "<div>Possible values are:%s</div>" % Markdown_writer.get_unordered_list_http( prop.type.enum  )
        if prop.type.json_type == 'array' and len( prop.type.item_prop.type.enum ) > 0 :
            postfix = "<div>Possible values for each array string:%s</div>" % Markdown_writer.get_unordered_list_http( prop.type.item_prop.type.enum ) 
        return prop.get_desc() + postfix;
    
     
    def get_example_code( self, ex_dom ) :
        if 'code' in ex_dom :
           return json.dumps( ex_dom['code'], ensure_ascii=False, indent=2, separators=(',', ': '))
        if 'code_href' in ex_dom :
            #load from relative path:
            #path = os.path.realpath( os.path.join( self.output_folder, ex_dom[ 'code_href' ]) )
            #rel_path = Schema_manifest.get_example_href_from_schema_name( self.output_path, ex_dom[ 'code_href' ] )
            abs_path =  os.path.realpath( os.path.join(self.output_path, '..', ex_dom[ 'code_href' ])) 
            if not os.path.exists( abs_path ) :
                raise BaseException( "Example 'href=%s' is missing (file %s not found )" %(ex_dom[ 'code_href' ], abs_path)  )
            with open( abs_path, 'r') as f :
                return f.read()

    def write_to_md( self, manifest, schema_doc ):
        self.output_path  =manifest.get_output_path_from_schema_name( schema_doc.name )
        #output_path  = os.path.join( self.output_folder, "%s.md" % schema_doc.name)
        print( "Writting %s" % self.output_path )
        with open( self.output_path,'w') as output:
            self.out = output
            self.write_line( "# %s\n" % schema_doc.title )
            self.write_line( schema_doc.desc )
            self.write_line()
            #remove list duplicates:
            schema_doc.back_refs = list( set(schema_doc.back_refs + schema_doc.custom_related) )
            if len( schema_doc.back_refs ) > 0:
                # print the related documents (i.e. navigation parents)
                self.write_line( "### Related:\n" )
                self.write_line( ", ".join( [ "[%s](%s)" %( x.name, manifest.get_relative_output_path_from_schema_name(x.name, self.output_path).replace('\\','/') ) for x in schema_doc.back_refs ] ) )
            self.write_line( "### Properties\n" )
            self.write_table_header( ["Property", "Type", "Description" ]);
            # to property table:
            for prop in  schema_doc.props :
                self.write_table_row( [ self.get_property_name( prop ), self.get_property_type(prop), self.get_property_desc(prop) ] );
            self.write_line()
            self.write_line( "*Note: properties in **bold** are required*" )
            self.write_line()
            # Examples:
            if len( schema_doc.example_dom ) :
                self.write_line( "### Examples \n" )
                for ex in schema_doc.example_dom  :
                    self.write_line( "#### Example: %s \n" % (ex['title'] if 'title' in ex else '' ))
                    if 'description' in ex :
                        self.write_line( "%s \n" % ex['description'] )
                    self.write_line( "```json\n %s \n```\n" % self.get_example_code( ex ))




if __name__ == "__main__" :

    ## argument parsing: 
    parser = argparse.ArgumentParser(description='This program creates md files.',
                                    epilog='',
                                    add_help=True,
                                    argument_default=None, # Global argument default
                                    usage=__doc__)
    #parser.add_argument('-i', '--input', action='store', dest='json_schema_path', required=True, help='The path to the input JSON schema folder.')
    #parser.add_argument('-s', '--schemas', action='store', dest='schema_names', required=True, help='comma separated list of schemas to process')
    
    parser.add_argument('-p', '--profile', action='store', dest='profiles', default='pointclouds', nargs='+', help='List of input profile folder names  (e.g: -p pointclouds points)' )

    args = parser.parse_args();

    #schema_files = []

    #try:
    #    os.makedirs(arguments.md_output_path)

    #except OSError as e:
    #    if e.errno != errno.EEXIST:
    #        raise

    ##assumes relative path:
    #output_path = os.path.realpath(  os.path.join(os.path.dirname(__file__), arguments.md_output_path) )
    #input_path  = os.path.realpath(  os.path.join(os.path.dirname(__file__), arguments.json_schema_path) )
    #schema_names     = arguments.schema_names.split(',')

    #find 'root' path:
    print(args.profiles );#profiles = ['pointclouds'] #add more as needed
    root = os.path.realpath(__file__ + "../../../../profiles") 
    print( "Profile root folder is:", root )
    assert( os.path.exists(root))

    manifest = Schema_manifest(root);

    for profile in args.profiles :
        #scan the schema sub-folder:
        search_folder = os.path.join( root, profile, "schema" )
        for file in os.listdir( search_folder) :
            if file.endswith(".json"):
                abs_path = os.path.join(search_folder, file)
                manifest.get_type_from_abs_path( abs_path )    
    
    #write all profiles:
    output_path =os.path.join( root )
    writer = Markdown_writer( output_path);
    for name, obj  in manifest.types.items() :
        writer.write_to_md( manifest, obj );
       



