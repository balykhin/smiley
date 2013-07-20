var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.BrowseInstruments', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.browseinstrumentsview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		cls: 'normal-page-bg',
		id: 'xBrowseInstruments',
		tabBarPosition: 'bottom',
		cls: 'cust-tabbar',
		items: [
            {
            	title: 'HOME',
            	iconCls: 'home-img',
            	styleHtmlContent: true,
            	scrollable: true,
            	items: [
                	{
                		xtype: 'toolbar',
                		title: 'CONNECT/browse',
                		cls: 'home-title',
                		docked: 'top',
                		ui: 'light',
                		items: [
							{
								xtype: 'button',
								text: '',
								ui: 'plain',
								iconCls: 'back-btn',
								iconMask: true,
								itemId: 'backBtn',
								listeners: {
									tap: function () {
										this.up('#xBrowseInstruments').fireEvent('backButtonCommandBrowseInstruments', this);
									}
								}
							},
							{ xtype: 'spacer' },
							{
								xtype: 'button',
								iconCls: 'menu-btn',
								iconMask: true,
								ui: 'plain',
								text: '',
								itemId: 'menuBtn',
								listeners:
                                {
                                	tap: function () {
                                		if (Ext.getCmp('browseinst_menu').getHidden() == false) {
                                			Ext.getCmp('browseinst_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                		}
                                		else {
                                			Ext.getCmp('browseinst_menu').show({ type: 'slide', direction: 'left', duration: 300 });
                                		}
                                	},

                                },
							}
                		]
                	},
                    {
                    	xtype: 'spacer',
                    	height: '14px',
                    	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
                    },
							{
								xtype: 'spacer',
								height: '7px',
								style: 'background-color: #efecea;'
							},

                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	id: 'browseinst-cont',
                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		flex: 1,

                    		listeners:
                                {
                                	painted: function () {
                                	},
                                },
                    		items: [
                                {
                                	xtype: 'container',
                                	laytout: { type: 'vbox' },
                                	cls: 'has-shadow',
                                	items: [
                                        {
                                        	xtype: 'container',
                                        	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                                        	layout: { type: 'hbox' },
                                        	items: [
                                                {
                                                	xtype: 'label',
                                                	html: 'MUSIC AND ARTS / instruments',
                                                	cls: 'heading-text active-sign',
                                                	style: 'padding-left: 15px;',
                                                	flex: 1
                                                },
                                        	]
                                        },
                                       {
                                       	xtype: 'container',
                                       	layout: 'vbox',
                                       	items:[{
                                        		xtype: 'container',
                                        		layout: 'hbox',
                                        		style: 'background-color: #efecea;',
                                        		padding: 20,
                                        		items: [

                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [
															{
																xtype: 'container',
																height: 100,
																width: 100,
																style: 'background: white;border-radius: 5px;',
																items: [{
																	xtype: 'image',
																	src: 'resources/images/city-live.png',
																	style: 'padding: 40px; margin: 10px;',
																}],
															}, {
																xtype: 'label',
																html: 'McDonald\'s',
																style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
															},
                                                    	]
                                                    },//1st item
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/gibson.png',
                                                            		style: 'padding: 25px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Secrete',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//2nd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	width: 100,
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/pandora.png',
                                                            		style: 'padding: 40px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Campbell\'s Go',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-word; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//3rd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/folk-art.png',
                                                            		style: 'padding: 30px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Brand X',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//4th item
                                        		],//1st row items
                                        	},//1st row end
                                        	{
                                        		xtype: 'container',
                                        		layout: 'hbox',
                                        		style: 'background-color: #efecea;',
                                        		padding: 20,
                                        		items: [

                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [
															{
																xtype: 'container',
																height: 100,
																width: 100,
																style: 'background: white;border-radius: 5px;',
																items: [{
																	xtype: 'image',
																	src: 'resources/images/m-audio.png',
																	style: 'padding: 40px; margin: 10px;',
																}],
															}, {
																xtype: 'label',
																html: 'McDonald\'s',
																style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
															},
                                                    	]
                                                    },//1st item
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/d-shirt.png',
                                                            		style: 'padding: 25px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Secrete',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//2nd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	width: 100,
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/fender.png',
                                                            		style: 'padding: 40px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Campbell\'s Go',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-word; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//3rd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/city-live.png',
                                                            		style: 'padding: 20px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Brand X',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//4th item
                                        		],//1st row items
                                        	},//2nd row end
											{
												xtype: 'container',
												layout: 'hbox',
												style: 'background-color: #efecea;',
												padding: 20,
												items: [

                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [
															{
																xtype: 'container',
																height: 100,
																width: 100,
																style: 'background: white;border-radius: 5px;',
																items: [{
																	xtype: 'image',
																	src: 'resources/images/fender.png',
																	style: 'padding: 40px; margin: 10px;',
																}],
															}, {
																xtype: 'label',
																html: 'McDonald\'s',
																style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
															},
                                                    	]
                                                    },//1st item
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/pandora.png',
                                                            		style: 'padding: 40px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Secrete',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//2nd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	width: 100,
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/fractal.png',
                                                            		style: 'padding: 30px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Campbell\'s Go',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-word; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//3rd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/gibson.png',
                                                            		style: 'padding: 25px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Brand X',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//4th item
												],//1st row items
											},//3rd row end
											{
												xtype: 'container',
												layout: 'hbox',
												style: 'background-color: #efecea;',
												padding: 20,
												items: [

                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [
															{
																xtype: 'container',
																height: 100,
																width: 100,
																style: 'background: white;border-radius: 5px;',
																items: [{
																	xtype: 'image',
																	src: 'resources/images/fender.png',
																	style: 'padding: 40px; margin: 10px;',
																}],
															}, {
																xtype: 'label',
																html: 'McDonald\'s',
																style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
															},
                                                    	]
                                                    },//1st item
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/pandora.png',
                                                            		style: 'padding: 40px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Secrete',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//2nd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	width: 100,
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/fractal.png',
                                                            		style: 'padding: 30px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Campbell\'s Go',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-word; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//3rd item 
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'container',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'background: white;border-radius: 5px;',
                                                            	items: [{
                                                            		xtype: 'image',
                                                            		src: 'resources/images/gibson.png',
                                                            		style: 'padding: 25px; margin: 10px;',
                                                            	}],
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Brand X',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//4th item
												],//1st row items
											},//4th row end
                                       	],
                                       },//all container's end
                                        {
                                        	xtype: 'spacer',
                                        	height: '14px',
                                        	style: 'background-color: #efecea; margin: 0px 2px;',
                                        },
                                	],
                                },
                            ///end first
                    		],
                    	},//end vbox container

                    {
                    	xtype: 'panel',
                    	layout: 'vbox',
                    	flex: 0.3,
                    	items:
                            [
                                {
                                	xtype: 'container', layout: 'vbox',
                                	style: 'font-family: franklin; text-align: right;',
                                	items:
                                        [
                                            {
                                            	xtype: 'container', layout: 'vbox',
                                            	//padding: '0px 20px',
                                            	style: 'color: #333132; text-align: right; min-height: 60px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
                                            	margin: '0px 20px 0px 20px',
                                            	cls: 'has-shadow',
                                            	docked: 'top',
                                            	items:
                                                    [
                                                            {
                                                            	xtype: 'image',
                                                            	style: ' min-height: 60px; background-color:white;',

                                                            }, {
                                                            	xtype: 'label',
                                                            	style: 'padding-top: 10px;',
                                                            	html: 'Noel Zahra',
                                                            	style: 'font-size:1.4em; margin-bottom: -8px;text-align: right;',
                                                            },
                                                            {
                                                            	xtype: 'label',
                                                            	html: 'Austin, TX',
                                                            	//padding: '-8px 0px 0px 0px',
                                                            	style: 'padding-bottom: 10px;',
                                                            	style: 'font-size: 0.8em; margin-bottom: 8px; margin-left: 2px; text-align: right;',
                                                            },
                                                    ],
                                            },
                                            {
                                            	xtype: 'container', layout: 'vbox',
                                            	//padding: '0px 20px',
                                            	docked: 'right',
                                            	style: 'color: white; font-family: franklin; font-size:1.4em; text-align: right;',
                                            	padding: '30px 10px',
                                            	items:
                                                    [

                                            {
                                            	xtype: 'button',
                                            	html: 'Edit Profile',
                                            	margin: '20px 0px 0px 0px',
                                            	//padding: '0px 20px 0px 0px',
                                            	style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                            	cls: 'listmenuitem',
                                            	ui: 'plain',
                                            	itemId: 'gotoeditprofileBtn',
                                            },
                                            {
                                            	xtype: 'button',
                                            	text: 'Refer Friends',
                                            	margin: '20px 0px 0px 0px',
                                            	style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                            	cls: 'listmenuitem',
                                            	ui: 'plain',
                                            },
                                             {
                                             	xtype: 'button',
                                             	text: 'Terms of Use',
                                             	margin: '20px 0px 0px 0px',
                                             	style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                             	cls: 'listmenuitem',
                                             	ui: 'plain',
                                             },
                                             {
                                             	xtype: 'button',
                                             	text: 'Tutorial',
                                             	margin: '20px 0px 0px 0px',
                                             	style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                             	cls: 'listmenuitem',
                                             	ui: 'plain',
                                             },
                                              {
                                              	xtype: 'button',
                                              	text: 'Contact Us',
                                              	margin: '20px 0px 0px 0px',
                                              	style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                              	cls: 'listmenuitem',
                                              	ui: 'plain',
                                              },
                                               {
                                               	xtype: 'button',
                                               	text: 'Log Out',
                                               	margin: '20px 0px 0px 0px',
                                               	style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                               	cls: 'listmenuitem',
                                               	ui: 'plain',
                                               },
                                                    ],
                                            },

                                        ],
                                },///end add


                            ],
                    	id: 'browseinst_menu',
                    	listeners:
                            {
                            	initialize: function () {
                            		this.hide();
                            		Ext.getCmp('xMusic_panel_browse').hide();
                            		Ext.getCmp('xMusicPict').setSrc('resources/images/music_c.png');
                            		Ext.getCmp('xMusicLabel').setCls('browse_text');
                            	},
                            	painted: function () {
                            	},
                            },
                    },//end panel added
                    	]
                    }//ens strange container
            	]
            },
            {
            	title: 'MISSIONS',
            	iconCls: 'mission-img',
            	styleHtmlContent: true,
            	scrollable: true,
            },
            {
            	title: 'SHARE',
            	iconCls: 'share-img',
            	styleHtmlContent: true,
            	scrollable: true,

            },
            {
            	title: 'OFFERS',
            	iconCls: 'offers-img',

            	items: [
                    {
                    	xtype: 'toolbar',
                    	title: 'SIGN UP',
                    	docked: 'top',
                    	ui: 'light',
                    	items: [
							{
								xtype: 'button',
								text: '',
								ui: 'plain',
								iconCls: 'cust-back',
								itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
                    	]
                    },
            	]
            },
            {
            	title: 'CONNECT',
            	iconCls: 'connect-img',

            	items: [
                    {
                    	xtype: 'toolbar',
                    	title: 'SIGN UP',
                    	docked: 'top',
                    	ui: 'light',
                    	items: [
							{
								xtype: 'button',
								text: '',
								ui: 'plain',
								iconCls: 'cust-back',
								itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
                    	]
                    },
            	]
            }
		],
		listeners: [
			{
				delegate: "#backBtn",
				event: "tap",
				fn: "onBackButtonTap"
			},
            //{
            //    delegate: '#editprofileLabel',
            //    fn: 'oneditLabel',
            //    element: 'element',
            //    event: 'painted',
            //},
            {
            	delegate: "#gotoeditprofileBtn",
            	event: "tap",
            	fn: "onGoToProfileTap",
            },

		]
	},
	onBackButtonTap: function () {
		console.log('back button tapped');
		this.fireEvent('backButtonCommandOffers', this);
	},
	onGoToProfileTap: function () {
		console.log('GoToProfile button tapped');
		this.fireEvent('GoToProfileCommand', this);
	},
	oneditLabel: function () {
		console.log("oneditLabel");
		this.fireEvent('oneditLabelCommand', this);
	},
});
