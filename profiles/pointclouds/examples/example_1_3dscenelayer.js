{
  "id": 0,
  "layerType": "PointCloud",
  "name": "Dallas",
  "alias": "",
  "desc": "",
  "copyrightText": "",
  "capabilities": [
    "View"
  ],
  "sourceHRef": "./sourcerefs",
  "statsHRef": "./stats",
  "spatialReference": {
    "wkid": 4326,
    "latestWkid": 4326
  },
  "store": {
    "id": "",
    "profile": "PointCloud",
    "version": "1.6",
    "extent": [
      -96.743374,
      32.876557,
      -96.735446,
      32.880062
    ],
    "index": {
      "nodeVersion": 1,
      "nodePerIndexBlock": 64,
      "href": "./nodepages",
      "boundingVolumeType": "obb"
    },
    "attributeEncoding": "application/octet-stream+gzip",
    "geometryEncoding": "application/octet-stream",
    "defaultGeometrySchema": {
      "geometryType": "points",
      "header": [],
      "topology": "PerAttributeArray",
      "encoding": "pccxyz",
      "vertexAttributes": {
        "position": {
          "valueType": "Int32",
          "valuesPerElement": 3
        }
      },
      "ordering": [
        "position"
      ]
    }
  },
  "fields": [
    {
      "name": "INTENSITY",
      "type": "FieldTypeInteger",
      "alias": "INTENSITY"
    },
    {
      "name": "RGB",
      "type": "esriFieldTypeInteger",
      "alias": "RGB"
    },
    {
      "name": "CLASS_CODE",
      "type": "esriFieldTypeInteger",
      "alias": "CLASS_CODE"
    },
    {
      "name": "FLAGS",
      "type": "esriFieldTypeInteger",
      "alias": "FLAGS"
    },
    {
      "name": "RETURNS",
      "type": "esriFieldTypeInteger",
      "alias": "RETURNS"
    }
  ],
  "attributeStorageInfo": [
    {
      "key": "2",
      "name": "INTENSITY",
      "ordering": [
        "attributeValues"
      ],
      "attributeValues": {
        "valueType": "UInt16",
        "valuesPerElement": 1
      },
      "encoding": ""
    },
    {
      "key": "4",
      "name": "RGB",
      "ordering": [
        "attributeValues"
      ],
      "attributeValues": {
        "valueType": "UInt8",
        "valuesPerElement": 3
      },
      "encoding": "pccrgb"
    },
    {
      "key": "8",
      "name": "CLASS_CODE",
      "ordering": [
        "attributeValues"
      ],
      "attributeValues": {
        "valueType": "UInt8",
        "valuesPerElement": 1
      },
      "encoding": ""
    },
    {
      "key": "16",
      "name": "FLAGS",
      "ordering": [
        "attributeValues"
      ],
      "attributeValues": {
        "valueType": "UInt8",
        "valuesPerElement": 1
      },
      "encoding": ""
    },
    {
      "key": "32",
      "name": "RETURNS",
      "ordering": [
        "attributeValues"
      ],
      "attributeValues": {
        "valueType": "UInt8",
        "valuesPerElement": 1
      },
      "encoding": ""
    }
  ],
  "drawingInfo": "TBD"
}
