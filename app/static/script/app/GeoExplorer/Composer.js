/**
 * Copyright (c) 2009-2010 The Open Planning Project
 *
 * @requires GeoExplorer.js
 */

/** api: (define)
 *  module = GeoExplorer
 *  class = GeoExplorer.Composer(config)
 *  extends = GeoExplorer
 */

/** api: constructor
 *  .. class:: GeoExplorer.Composer(config)
 *
 *      Create a GeoExplorer application intended for full-screen display.
 */
GeoExplorer.Composer = Ext.extend(GeoExplorer, {

    // Begin i18n.
    saveMapText: "Export Map",
    loadMapText: "Import KML or Map file",
    exportMapText: "Export Map",
    toolsTitle: "Choose tools to include in the toolbar:",
    previewText: "Preview",
    backText: "Back",
    nextText: "Next",
    fullScreenText: "Full Screen",
    // End i18n.

    constructor: function(config) {        
        config.tools = [
            {
                ptype: "gxp_layertree",
                outputConfig: {
                    id: "layertree"
                },
                outputTarget: "tree"
            }, {
                ptype: "gxp_legend",
                outputTarget: 'legend',
                outputConfig: {
                    autoScroll: true
                },
                legendConfig : {
                    legendPanelId : 'legendPanel',
                    defaults: {
                        style: 'padding:5px',                  
                        baseParams: {
                            LEGEND_OPTIONS: 'forceLabels:on;fontSize:10',
                            WIDTH: 12, HEIGHT: 12
                        }
                    }
                }
            }, {
                ptype: "gxp_addlayers",
                actionTarget: "tree.tbar",
                upload: true
            }, {
                ptype: "gxp_removelayer",
                actionTarget: ["tree.tbar", "layertree.contextMenu"]
            }, {
                ptype: "gxp_removeoverlays",
                actionTarget: "tree.tbar"
            }, {
                ptype: "gxp_addgroup",
                actionTarget: "tree.tbar"
            }, {
                ptype: "gxp_removegroup",
                actionTarget: ["tree.tbar", "layertree.contextMenu"]
            }, {
                ptype: "gxp_groupproperties",
                actionTarget: ["tree.tbar", "layertree.contextMenu"]
            }, {
                ptype: "gxp_layerproperties",
                actionTarget: ["tree.tbar", "layertree.contextMenu"]
            }, {
                ptype: "gxp_zoomtolayerextent",
                actionTarget: {target: "layertree.contextMenu", index: 0}
            }, {
                ptype: "gxp_navigation", toggleGroup: this.toggleGroup,
                actionTarget: {target: "paneltbar", index: 15}
            }, {
				ptype: "gxp_wmsgetfeatureinfo_menu", 
				toggleGroup: this.toggleGroup,
				useTabPanel: true,
				actionTarget: {target: "paneltbar", index: 7}
			}, {
                ptype: "gxp_measure", toggleGroup: this.toggleGroup,
                actionTarget: {target: "paneltbar", index: 12}
            }, {
                ptype: "gxp_zoom",
                actionTarget: {target: "paneltbar", index: 20}
            }, {
                ptype: "gxp_zoombox", toggleGroup: this.toggleGroup,
                actionTarget: {target: "paneltbar", index: 24}
            }, {
                ptype: "gxp_graticule",
                actionTarget: {target: "paneltbar", index: 28}
            }, {
                ptype: "gxp_navigationhistory",
                actionTarget: {target: "paneltbar", index: 22}
            }, {
                ptype: "gxp_zoomtoextent",
                actionTarget: {target: "paneltbar", index: 26}
            }, {
                // shared FeatureManager for feature editing, grid and querying
                ptype: "gxp_featuremanager",
                id: "featuremanager"
            }, {
                ptype: "gxp_featuregrid",
                featureManager: "featuremanager",
                outputConfig: {
                    id: "featuregrid",
                    title: "Features"
                },
                outputTarget: "idalaylist"
            }, {
                "ptype": "gxp_idaqueryform",
                "featureManager": "featuremanager",
                "outputTarget": "idacontrol",
                "wfsGrid": "wfsGridPanel",
                "toggleGroup": this.toggleGroup,
                "appendActions": false
            }
        ];
        
        config.tools=config.tools.concat(customTools);
        
        GeoExplorer.Composer.superclass.constructor.apply(this, arguments);
    },

    /** api: method[destroy]
     */
    destroy: function() {
        this.loginButton = null;
        GeoExplorer.Composer.superclass.destroy.apply(this, arguments);
    },
    
    /**
     * api: method[createTools]
     * Create the toolbar configuration for the main view.
     */
    createTools: function() {
        var tools = GeoExplorer.Composer.superclass.createTools.apply(this, arguments);
		
        if(!this.fScreen){
            var fullScreen = new Ext.Button({
                text: this.fullScreenText,
                id: "full-screen-button",
                iconCls: "icon-fullscreen",
                enableToggle: true,
                handler: function(button, evt){
                    if(button.pressed){
                        Ext.getCmp('west').collapse();
                        Ext.getCmp('east').collapse();
                        //Ext.getCmp('south').collapse();
                        Ext.getCmp('fdhHeader').collapse();
                    } else {
                        Ext.getCmp('west').expand();
                        Ext.getCmp('east').expand();
                        //Ext.getCmp('south').expand();
                        Ext.getCmp('fdhHeader').expand();
                    }
                }
            });            
                            
            tools.unshift(fullScreen);
        }
        
        if(this.cswconfig){
            var extent = this.mapPanel.map.getExtent();
            
            if(extent)
                this.cswconfig.initialBBox = {
                    minx: extent.left,
                    miny: extent.bottom,
                    maxx: extent.right,
                    maxy: extent.top  
                };
            
            tools.push(new Ext.Button({
                tooltip: "CSW Explorer",
                handler: function() {
                      if(Ext.getCmp('csw-win'))
                          return;

                      var viewer = this;
                      
                      // Loads bundle for i18n messages
                      i18n = new Ext.i18n.Bundle({
                        bundle : "CSWViewer",
                        path : "externals/csw/CSWViewer/i18n",
                        lang : "it-IT"
                      });
                      
                      i18n.onReady( function() {
                          //
                          // Declares a panel for querying CSW catalogs
                          //
                          var cswPanel = new CSWPanel({
                              config: viewer.cswconfig,
                              listeners: {
                                  zoomToExtent: function(layerInfo){
                                      var map = viewer.mapPanel.map;
                                      var bbox = layerInfo.bbox;
                                      
                                      //
                                      // TODO: parse the urn crs code (like "urn:ogc:def:crs:::WGS 1984") inside the CSW BBOX tag. 
                                      //
                                      bbox.transform(
                                          new OpenLayers.Projection("EPSG:4326"),
                                          new OpenLayers.Projection(map.projection)
                                      );
                                      
                                      map.zoomToExtent(bbox);
                                  },
                                  viewMap: function(el){       
                                      var mask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
                                      mask.show();
                                                                  
                                      var mapInfo = el.layers;  
                                      var uuid = el.uuid;
                                      var gnURL = el.gnURL;                          
                                      var title = el.title;
                                      
                                      for(var i=0; i<mapInfo.length; i++){
                                          var wms = mapInfo[i].wms;    
                                          
                                          var source;
                                          for (var id in app.layerSources) {
                                              var src = app.layerSources[id];    
                                              var url  = src.initialConfig.url; 
                                              //
                                              // Checking if source url aldready exists
                                              //
                                              if(url && url.indexOf(wms) != -1)
                                                  source = src;
                                          }                                  
                                          
                                          var layer = mapInfo[i].layer;
                                          
                                          //
                                          // Adding a new record to existing store
                                          //
                                          var addLayer = function(s){
                                              var record = s.createLayerRecord({
                                                  name: layer,
                                                  title: title,
                                                  source : s.id, // TODO: to check this
                                                  gnURL: gnURL,
                                                  uuid: uuid
                                              });    
                                                          
                                              var layerStore = app.mapPanel.layers;  
                                                            
                                              if (record) {
                                                  layerStore.add([record]);
                                                  modified = true;
                                              }  
                                          }
                                          
                                          //
                                          // Adding the sources only if exists
                                          //
                                          if(!source){
                                              var sourceOpt = {
                                                  config: {
                                                      url: wms
                                                  }
                                              };
                                              
                                              source = viewer.addLayerSource(sourceOpt);
                                              
                                              //
                                              // Waiting GetCapabilities response from the server.
                                              //
                                              source.on('ready', function(){
                                                  addLayer(source);  
                                                  mask.hide();
                                              });
                                              
                                              //
                                              // To manage failure in GetCapabilities request (invalid request url in 
                                              // GeoNetwork configuration or server error).
                                              //
                                              source.on('failure', function(src, msg){
                                                  //
                                                  // Removing layer source from sources ?
                                                  //
                                                  /*for (var id in app.layerSources) {
                                                      if(id.indexOf(source.id) != -1)
                                                          app.layerSources[id] = null;    
                                                  }*/  
                                                  
                                                  mask.hide();
                                                  
                                                  Ext.Msg.show({
                                                      title: 'GetCapabilities',
                                                      msg: msg + " The layer cant be added to the map",
                                                      width: 300,
                                                      icon: Ext.MessageBox.ERROR
                                                  });  
                                              });
                                          }else{
                                              addLayer(source); 
                                              mask.hide();
                                          }
                                      }
                                  }
                              }
                          });
                          
                          //
                          // Overridding addListenerMD method to show metadata inside a new Tab.
                          //
                          cswPanel.cswGrid.plugins.tpl.addListenerMD = function(id, values){
                              Ext.get(id).on('click', function(e){
                                  //
                                  // open GN inteface related to this resource
                                  //
                                  if(values.identifier){
                                      viewer.viewMetadata(
                                          values.absolutePath.substring(0,values.absolutePath.length-3), 
                                          values.identifier, 
                                          values.title
                                      );
                                  }else{
                                      //
                                      // Shows all DC values. TODO create dc visual
                                      //
                                      var text="<ul>";
                                      var dc = values.dc;
                                      
                                      //eg. URI
                                      for (var el in dc){
                                          if (dc[el] instanceof Array){
                                              //cicle URI array
                                              for(var index=0;index<dc[el].length;index++){
                                                  //cicle attributes of dc
                                                  if(dc[el][index].value){
                                                    text += "<li><strong>"+el+":</strong> ";
                                                    
                                                    for(name in dc[el][index]){
                                                      text += "<strong>"+name+"</strong>="+dc[el][index][name]+" ";
                                                      
                                                    }
                                                    
                                                    text += "</li>";
                                                  }else if(el=="abstract") {
                                                    text += "<li><strong>abstract:</strong> "+dc[el][index]+"</li> ";
                                                  }else{
                                                    //DO NOTHING
                                                  }
                                              }
                                          }
                                      }
                                      
                                      dc+="</ul>";
                                      
                                      var dcPan = new Ext.Panel({
                                        html:text,
                                        preventBodyReset:true,
                                        autoScroll:true,
                                        autoHeight: false,
                                        width: 600,
                                        height: 400
                                      
                                      });		
                                              
                                      var dcWin = new Ext.Window({
                                          title: "MetaData",
                                          closable: true,
                                          width:614,
                                          resizable: false,
                                          draggable: true,
                                          items: [
                                            dcPan
                                          ]
                                      });
                                      
                                      dcWin.show();
                                  }
                              });
                          };

                          var viewWin = new Ext.Window({
                              width : 800,
                              height: 560,
                              id: 'csw-win',
                              renderTo: viewer.mapPanel.body,
                              modal: true,
                              autoScroll: true,
                              constrainHeader: true,
                              closable: true,
                              resizable: false,
                              draggable: true,
                              items: [ 
                                  cswPanel 
                              ],
                              listeners: {
                                  close: function(){
                                      cswPanel.destroy();
                                  }
                              }
                          });

                          viewWin.show();
                      });
                },
                scope: this,
                iconCls: "csw-viewer"
            }));
            
            tools.push('-');
        }
        
		if(this.xmlJsonTranslateService){
		    tools.push(
				new Ext.Button({
					tooltip: this.saveMapText,
					needsAuthorization: false,
					//disabled: !this.isAuthorized(),
					handler: function() {
						this.save(this.showUrl);
					},
					scope: this,
					iconCls: "icon-save"
				})
			);      		
			
			var gxMap = this.mapPanel.map;
			tools.push(new Ext.Button({
				tooltip: this.loadMapText,
				needsAuthorization: false,
				//disabled: !this.isAuthorized(),
				handler: function() {    
					var composer = this; 
					var win;  
                                        var pattern=/(.+:\/\/)?([^\/]+)(\/.*)*/i;
					var xmlJsonTranslateURL=app.xmlJsonTranslateService/*+"FileUploader?type=inline"*/;
                                        var mHost=pattern.exec(xmlJsonTranslateURL); 
                                        xmlJsonTranslateURL= mHost[2] == location.host ? xmlJsonTranslateURL :
                                        proxy + encodeURIComponent(xmlJsonTranslateURL);
                                    
					var fp = new Ext.FormPanel({
						fileUpload: true,
						autoWidth: true,
						autoHeight: true,
						frame: true,
						bodyStyle: 'padding: 10px 10px 0 10px;',
						labelWidth: 50,
						defaults: {
							anchor: '95%',
							allowBlank: false,
							msgTarget: 'side'
						},
						items: [{
							xtype: 'fileuploadfield',
							id: 'form-file',
							emptyText: this.loadMapEmptyText,
							fieldLabel: 'File',
							name: 'file-path',
							buttonText: '',
							buttonCfg: {
								iconCls: 'upload-icon'
							}
						}],
						buttons: [{
							text: this.uploadText,
							handler: function(){
								if(fp.getForm().isValid()){
								  fp.getForm().submit({
									  //url: app.xmlJsonTranslateService + 'HTTPWebGISFileUpload',
									  //url: proxy + app.xmlJsonTranslateService + 'HTTPWebGISFileUpload',
                                      url: xmlJsonTranslateURL+"HTTPWebGISFileUpload",
									  waitMsg: this.loadMapUploadText,
									  success: function(fp, o){
										  win.hide();
										  win.destroy();
										  if(o.result.result){
											  var json_str = unescape(o.result.result);
											  json_str = json_str.replace(/\+/g, ' ');
											  composer.loadUserConfig(json_str);  
											  modified = true;   
										  }else{
											if(o.result.success){   
												var url = xmlJsonTranslateURL + "FileUploader?code=" + o.result.fileID;

												var geographic = new OpenLayers.Projection("EPSG:4326");
												   
												var kmlLayer = new OpenLayers.Layer.Vector(o.result.result, {
													projection: geographic,
													strategies: [new OpenLayers.Strategy.Fixed()],
													protocol: new OpenLayers.Protocol.HTTP({
														url: url,
														format: new OpenLayers.Format.KML({
															extractStyles: true, 
															extractAttributes: true,
															maxDepth: 2
														})
													})
												});
												
												gxMap.addLayer(kmlLayer);  
												
												Ext.Msg.show({
													title:this.loadMapErrorText,
													msg: "KML file successfully imported !",
													buttons: Ext.Msg.OK,
													icon: Ext.MessageBox.INFO
												});
												
												gxMap.zoomToMaxExtent();
                                            }											 
										  }
									  },                                    
									  failure: function(fp, o){
										  win.hide();
										  win.destroy();
										  
										  Ext.Msg.show({
											 title:this.loadMapErrorText,
											 msg: o.result.errorMessage,
											 buttons: Ext.Msg.OK,
											 icon: Ext.MessageBox.ERROR
										  });
									  }
								  });
								}
							}
						}]
					});
					
					win = new Ext.Window({
						title: this.loadMapWindowTitle,
						id: 'upload-win',
						layout: 'form',
						//labelAlign: 'top',
						modal: true,
						bodyStyle: "padding: 5px",
						width: 380,
						items: [fp]
					});
					
					win.show();
				},
				scope: this,
				iconCls: "icon-load"
			}));
			
			tools.push('-');
		}

        return tools;
    },

    /*
     * private: method[viewIdaLink]
     */
    viewIdaLink: function(link, title){
        var tabPanel = Ext.getCmp(app.renderToTab);
        
        var tabs = tabPanel.find('title', title);
        if(tabs && tabs.length > 0){
            tabPanel.setActiveTab(tabs[0]); 
        }else{
            
            var linkTab = new Ext.Panel({
                title: title,
                layout:'fit', 
                tabTip: title,
                closable: true,
                items: [ 
                    new Ext.ux.IFrameComponent({ 
                        url: link
                    }) 
                ]
            });
            
            tabPanel.add(linkTab);
        }
    },
    
    /*
     * private: method[openPreview]
     */
    viewMetadata: function(gnURL, uuid, title){
        var tabPanel = Ext.getCmp(app.renderToTab);
        
        var tabs = tabPanel.find('title', title);
        if(tabs && tabs.length > 0){
            tabPanel.setActiveTab(tabs[0]); 
        }else{
            var metaURL = gnURL + "metadata.show?uuid=" + uuid; 
            
            var meta = new Ext.Panel({
                title: title,
                layout:'fit', 
                tabTip: title,
                closable: true,
                items: [ 
                    new Ext.ux.IFrameComponent({ 
                        url: metaURL 
                    }) 
                ]
            });
            
            tabPanel.add(meta);
        }
    },

    /*
     * private: method[openPreview]
     */
    openPreview: function(embedMap) {
        var preview = new Ext.Window({
            title: this.previewText,
            layout: "fit",
            items: [{border: false, html: embedMap.getIframeHTML()}]
        });
        preview.show();
        var body = preview.items.get(0).body;
        var iframe = body.dom.firstChild;
        var loading = new Ext.LoadMask(body);
        loading.show();
        Ext.get(iframe).on('load', function() {loading.hide();});
    },

    /** private: method[showEmbedWindow]
     */
    showEmbedWindow: function() {
       var toolsArea = new Ext.tree.TreePanel({title: this.toolsTitle, 
           autoScroll: true,
           root: {
               nodeType: 'async', 
               expanded: true, 
               children: this.viewerTools
           }, 
           rootVisible: false,
           id: 'geobuilder-0'
       });

       var previousNext = function(incr){
           var l = Ext.getCmp('geobuilder-wizard-panel').getLayout();
           var i = l.activeItem.id.split('geobuilder-')[1];
           var next = parseInt(i, 10) + incr;
           l.setActiveItem(next);
           Ext.getCmp('wizard-prev').setDisabled(next==0);
           Ext.getCmp('wizard-next').setDisabled(next==1);
           if (incr == 1) {
               this.saveAndExport();
           }
       };

       var embedMap = new gxp.EmbedMapDialog({
           id: 'geobuilder-1',
           url: "viewer" + "#maps/" + this.id
       });

       var wizard = {
           id: 'geobuilder-wizard-panel',
           border: false,
           layout: 'card',
           activeItem: 0,
           defaults: {border: false, hideMode: 'offsets'},
           bbar: [{
               id: 'preview',
               text: this.previewText,
               handler: function() {
                   this.saveAndExport(this.openPreview.createDelegate(this, [embedMap]));
               },
               scope: this
           }, '->', {
               id: 'wizard-prev',
               text: this.backText,
               handler: previousNext.createDelegate(this, [-1]),
               scope: this,
               disabled: true
           },{
               id: 'wizard-next',
               text: this.nextText,
               handler: previousNext.createDelegate(this, [1]),
               scope: this
           }],
           items: [toolsArea, embedMap]
       };

       new Ext.Window({
            layout: 'fit',
            width: 500, height: 300,
            title: this.exportMapText,
            items: [wizard]
       }).show();
    }
});
