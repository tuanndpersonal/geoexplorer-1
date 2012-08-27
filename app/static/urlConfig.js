{
   "geoStoreBase":"http://localhost/geostore/rest/",
   "proxy":"/proxy?url=",
   "watermark_url":"../theme/app/img/nurc-logo.png",
   "watermark_title":"Powered by NURC",
   "watermark_position": "position:relative;left:5px;bottom:5px",
   
   "gsSources":{
        "Gliders": {
            "ptype": "gxp_wmssource",
            "title": "Gliders", 
            "version":"1.1.1",
            "url":"http://84.33.199.62/geoserver-gliders/ows"
        }
   },
    "layers":[
		{
            "format": "image/jpeg",
            "transparent": false,
            "source": "Gliders",
            "group": "background",
            "name": "it.geosolutions:nurcbg",
            "title": "Nurc Background"
        },
        {
            "format": "image/png8",
            "group": "Watervel",
            "name": "nurc:watvel",
			"styles": "watervelocityCR",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Watervel Forecast",
            "transparent": true,
            "visibility": true,
            "ratio": 1
        },
        {
            "format": "image/png",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'zoe'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'zoe' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'zoe' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'zoe' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'zoe' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Zoe",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'zoe' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Sophie",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'sophie'"
        },
        {
            "format": "image/png8",
            "group": "Sophie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'sophie' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Sophie",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'sophie' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Sophie",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'sophie' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Sophie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'sophie' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Sophie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'sophie' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'natalie'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'natalie' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'natalie' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'natalie' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'natalie' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Natalie",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'natalie' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Laura",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'laura'"
        },
        {
            "format": "image/png8",
            "group": "Laura",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'laura' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Laura",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'laura' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Laura",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'laura' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Laura",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'laura' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Laura",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'laura' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Greta",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'greta'"
        },
        {
            "format": "image/png8",
            "group": "Greta",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'greta' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Greta",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'greta' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Greta",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'greta' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Greta",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'greta' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Greta",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'greta' AND type = 'Points'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersNextWpts",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "NextWPT",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'elettra'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "WaterCurrent",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'elettra' AND type = 'WaterCurrent'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "CurrentTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'elettra' AND type = 'CurrentTrack'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersTracks",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "OldTrack",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'elettra' AND type = 'OldTracks'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Abort",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'elettra' AND type = 'Abort'"
        },
        {
            "format": "image/png8",
            "group": "Elettra",
            "name": "it.geosolutions:GlidersPoints",
            "opacity": 1,
            "selected": false,
            "source": "Gliders",
            "title": "Points",
            "transparent": true,
            "visibility": true,
            "ratio": 1,
            "cql_filter": "cruise_name = 'Rep10' AND glider_name = 'elettra' AND type = 'Points'"
        }
]
}

