{
   "success":true,
   "result":{
      "about":{
         "abstract":"Consorzio LaMMA",
         "contact":"<a href='http://www.lamma.rete.toscana.it/'>http://www.lamma.rete.toscana.it/<\/a>.",
         "title":"Dati Meteo - Consorzio LaMMA"
      },
      "defaultSourceType":"gxp_wmssource",
      "isLoadedFromConfigFile":true,
      "map":{
         "center":[
            "1250000.0000000",
            "5370000.0000000"
         ],
         "layers":[
            {
               "fixed":true,
               "group":"background",
               "name":"Aerial",
               "selected":false,
               "source":"bing",
               "title":"Bing Aerial",
               "visibility":false
            },
            {
               "fixed":true,
               "group":"background",
               "name":"mapnik",
               "selected":false,
               "source":"osm",
               "title":"Open Street Map",
               "visibility":false
            },
            {
               "fixed":true,
               "group":"background",
               "name":"osm",
               "selected":false,
               "source":"mapquest",
               "title":"MapQuest OpenStreetMap",
               "visibility":false
            },
            {
               "fixed":true,
               "group":"background",
               "name":"ROADMAP",
               "selected":false,
               "source":"google",
               "title":"Google Roadmap",
               "visibility":false
            },
            {
               "fixed":true,
               "group":"background",
               "name":"HYBRID",
               "selected":false,
               "source":"google",
               "title":"Google Hybrid",
               "visibility":false
            },
            {
               "fixed":true,
               "group":"background",
               "name":"TERRAIN",
               "opacity":1,
               "selected":false,
               "source":"google",
               "title":"Google Terrain",
               "visibility":true
            },
            {
                "source": "LaMMA-Modelli",
                "type": "OpenLayers.Layer.WMS",
                "group":"Temperature height above ground",
                "args": ["Temp 2m above ARW-ECM 3km", "http://172.16.1.139:8080/geoserver/ows", {
                    "layers": ["lamma:arw_3km_Temperature_height_above_ground_20111204T120000000Z"],
                    "transparent": true,
                    "format": "image/png",
                    "srs": "EPSG:900913",
                    "time": "2011-12-04T12:00:00.000Z"
                }, {
                    "metadata": {
                        "timeInterval": [["2011-12-04T12:00:00.000Z","2011-12-07T00:00:00.000Z","PT1H"]]
                    },
                    "singleTile": true,
                    "ratio": 1,
                    "transitionEffect": "resize",
                    "visibility": false
                }],
                "selected": true
            }
         ],
         "maxExtent":["-20037508.34","-20037508.34","20037508.34","20037508.34"],
         "maxResolution": 156543.0339,
         "projection":"EPSG:900913",
         "displayProjection":"EPSG:900913",
         "units":"m",
         "zoom":2
      },
      "mapTitle":"View",
      "modified":false,
      "printService":"http://demo1.geo-solutions.it/geoserver/pdf/",
      "proxy":"proxy/?url=",
      "renderToTab":"appTabs",
      "sources":{
         "LaMMA-Modelli":{
            "projection":"EPSG:900913",
            "ptype": "gxp_olsource"
         },
         "bing":{
            "projection":"EPSG:900913",
            "ptype":"gxp_bingsource"
         },
         "google":{
            "projection":"EPSG:900913",
            "ptype":"gxp_googlesource"
         },
         "mapquest":{
            "projection":"EPSG:900913",
            "ptype":"gxp_mapquestsource"
         },
         "ol":{
            "projection":"EPSG:900913",
            "ptype":"gxp_olsource"
         },
         "osm":{
            "projection":"EPSG:900913",
            "ptype":"gxp_osmsource"
         }
      },
      "tools":[
         {
            "outputConfig":{
               "id":"layertree"
            },
            "outputTarget":"tree",
            "ptype":"gxp_layertree"
         },
         {
            "legendConfig":{
               "defaults":{
                  "baseParams":{
                     "FORMAT":"image/png",
                     "HEIGHT":12,
                     "LEGEND_OPTIONS":"forceLabels:on;fontSize:10",
                     "WIDTH":12
                  },
                  "style":"padding:5px"
               },
               "legendPanelId":"legendPanel"
            },
            "outputConfig":{
               "autoScroll":true,
               "title":"Show Legend"
            },
            "outputTarget":"legend",
            "ptype":"gxp_legend"
         },
         {
            "actionTarget":"tree.tbar",
            "ptype":"gxp_addlayers",
            "upload":true
         },
         {
            "actionTarget":[
               "tree.tbar",
               "layertree.contextMenu"
            ],
            "ptype":"gxp_removelayer"
         },
         {
            "actionTarget":"tree.tbar",
            "ptype":"gxp_removeoverlays"
         },
         {
            "actionTarget":"tree.tbar",
            "ptype":"gxp_addgroup"
         },
         {
            "actionTarget":"tree.tbar",
            "ptype":"gxp_removegroup"
         },
         {
            "actionTarget":[
               "tree.tbar"
            ],
            "ptype":"gxp_groupproperties"
         },
         {
            "actionTarget":[
               "tree.tbar",
               "layertree.contextMenu"
            ],
            "ptype":"gxp_layerproperties"
         },
         {
            "actionTarget":{
               "index":0,
               "target":"layertree.contextMenu"
            },
            "ptype":"gxp_zoomtolayerextent"
         },
         {
            "actionTarget":[
               "layertree.contextMenu"
            ],
            "ptype":"gxp_geonetworksearch"
         },
         {
            "actionTarget":{
               "index":15,
               "target":"paneltbar"
            },
            "ptype":"gxp_navigation",
            "toggleGroup":"toolGroup"
         },
         {
            "actionTarget":{
               "index":7,
               "target":"paneltbar"
            },
            "ptype":"gxp_wmsgetfeatureinfo",
            "toggleGroup":"toolGroup"
         },
         {
            "actionTarget":{
               "index":12,
               "target":"paneltbar"
            },
            "ptype":"gxp_measure",
            "toggleGroup":"toolGroup"
         },
         {
            "actionTarget":{
               "index":20,
               "target":"paneltbar"
            },
            "ptype":"gxp_zoom"
         },
         {
            "actionTarget":{
               "index":24,
               "target":"paneltbar"
            },
            "ptype":"gxp_zoombox",
            "toggleGroup":"toolGroup"
         },
         {
            "actionTarget":{
               "index":22,
               "target":"paneltbar"
            },
            "ptype":"gxp_navigationhistory"
         },
         {
            "actionTarget":{
               "index":26,
               "target":"paneltbar"
            },
            "ptype":"gxp_zoomtoextent"
         },
         {
            "actionTarget":{
               "index":40,
               "target":"paneltbar"
            },
            "needsAuthorization":true,
            "ptype":"gxp_saveDefaultContext"
         },
         {
            "actionTarget":{
               "index":4,
               "target":"paneltbar"
            },
            "customParams":{
               "outputFilename":"fdh-print"
            },
            "legendPanelId":"legendPanel",
            "printService":"http://demo1.geo-solutions.it/geoserver/pdf/",
            "ptype":"gxp_print"
         },
		 {
            "ptype":"gxp_playback",
            "controlOptions":{
                "units":"OpenLayers.TimeUnit.HOURS",
                "step":1
            },
            "outputConfig": {
                "dynamicRange": false
            }
        }
      ],
      "viewerTools":[

      ],
      "xmlJsonTranslateService":"http://demo1.geo-solutions.it/xmlJsonTranslate/"
   }
}