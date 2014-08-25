// example 1 - pointSymbol3D with symbolLayer type object
// more info here: https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/tree/master/symbology
{
  "drawingInfo": {
    "renderer": {
      "type": "simple",
      "symbol": {
        "id": "parkBenchSymbol",
        "type": "PointSymbol3D",
        "symbolLayers": [{
          "type": "Object",
          "resource": {
            "href": "symbolResources/parkBench" // references the folder containing symbolResource.json -- client reads that file by convention
          }, 
          "height": 1, // in meters 
          "width": 2, // in meters 
          "depth": 0.5 // in meters 
        }]
      }
    }
  }
}


// example 2 - pointSymbol3D with symbolLayer type object, has same resource but different color
{
  "drawingInfo": {
    "renderer": {
      "type": "simple",
      "symbol": {
        "id": "redParkBenchSymbol",
        "type": "PointSymbol3D",
        "symbolLayers": [{
          "type": "Object",
          "resource": {
            "href": "symbolResources/parkBench" // references the folder containing symbolResource.json -- client reads that file by convention
          }, 
          "height": 1, // in meters 
          "width": 2, // in meters 
          "depth": 0.5, // in meters 
          "material": {
            "color": [1, 0, 0]
          }
        }]
      }
    }
  }
}
