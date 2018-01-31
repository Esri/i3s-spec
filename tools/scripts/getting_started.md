# Getting started

## Setup:

1. Enable/add Python dev tool to visual studio 2017.
2.  install Chrome markdown extension to view *.md ( you may need to enable ** file:// ** origin for the markdown extension)

1. Clone the repo:[https://devtopia.esri.com/rona7954/i3s-schema](https://devtopia.esri.com/rona7954/i3s-schema)

2. Open the the solution `<repo>/scripts/tooling.sln`
3. For each project in the solution, select the "python environments->Python 3.6(64 bit)" 

### doc-generator

Run the script:
`schema_to_doc.py -i ../schema -s pcsl_layer -o ../docs/` `



Schemas are in `<repo>/schema`, outpout markdown will be at `<repo>/docs`

### schema-validator








