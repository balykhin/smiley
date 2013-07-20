var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Browse', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.browseview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		cls: 'normal-page-bg',
		id: 'xBrowse',
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
										this.up('#xBrowse').fireEvent('backButtonCommandBrowse', this);
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
                                		if (Ext.getCmp('browse_menu').getHidden() == false) {
                                			Ext.getCmp('browse_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                		}
                                		else {
                                			Ext.getCmp('browse_menu').show({ type: 'slide', direction: 'left', duration: 300 });
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
                    	id: 'missions-cont',
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
                                                	html: 'HOT BRANDS',
                                                	cls: 'heading-text active-sign',
                                                	style: 'padding-left: 15px;',
                                                	flex: 1
                                                },
                                        	]
                                        },
                                        {
                                        	xtype: 'carousel',
                                        	direction: 'horizontal',
                                        	style: 'background-color: #efecea;',
                                        	dragable: false,
                                        	indicator: false,
                                        	defaults: {
                                        		styleHtmlContent: true
                                        	},
                                        	width: '100%',
                                        	height: 180,

                                        	items: [{
                                        		xtype: 'container',
                                        		layout: 'hbox',
                                        		style: 'background-color: #efecea;',
                                        		cls: 'has-shadow',
                                        		padding: 20,
                                        		items: [

                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/mc_img.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'McDonald\'s',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/secret-logo.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Secrete',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/offers_logo.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Campbell\'s Go',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/offers_logo3.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Brand X',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                        		],//1st row items
                                        	},//1st row end
                                        	]
                                        },
                                        {
                                        	xtype: 'spacer',
                                        	height: '14px',
                                        	style: 'background-color: #efecea; margin: 0px 2px;',
                                        },
                                	],
                                },
                            ///end first

                            {
                            	xtype: 'container',
                            	laytout: { type: 'vbox' },
                            	cls: 'has-shadow',
                            	items: [
									{

										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;'
									}, {
										xtype: 'container',
										cls: 'has-shadow',
										layout: { type: 'hbox' },
										items: [
											{
												xtype: 'label',
												html: 'FAVORITED',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 1
											},
										]
									},

                                    {
                                    	xtype: 'carousel',
                                    	direction: 'horizontal',
                                    	style: 'background-color: #efecea;',
                                    	dragable: false,
                                    	indicator: false,
                                    	defaults: {
                                    		styleHtmlContent: true
                                    	},
                                    	width: '100%',
                                    	height: 180,

                                    	items: [{
                                    		xtype: 'container',
                                    		layout: 'hbox',
                                    		style: 'background-color: #efecea;',
                                    		cls: 'has-shadow',
                                    		padding: 20,
                                    		items: [

                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/secret-logo.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'McDonald\'s',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/mc_img.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'Secrete',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/offers_logo3.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'Campbell\'s Go',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/offers_logo.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'Brand X',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                    		],//1st row items
                                    	},//1st row end
                                    	]
                                    },
									{
										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;',
										cls: 'has-shadow',
									},
                            	]
                            },//end second
                            {
                            	xtype: 'spacer',
                            	height: '7px',
                            	style: 'background-color: #f4f3f1; margin: 0px 2px;'

                            },

                              {
                              	xtype: 'spacer',
                              	height: '7px',
                              	style: 'background-color: #f4f3f1; margin: 0px 2px;'

                              },
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
                                            	html: 'CATEGORIES',
                                            	cls: 'heading-text active-sign',
                                            	style: 'padding-left: 15px;',
                                            	flex: 1
                                            },
                                    	]
                                    },
                                    //auto, baby, clothes
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	//style: 'background: #e2ddda; border-radius: 5px;margin-right: 20px ',
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/auto_c.png',
                                                    	height: 50,
                                                    	width: '100%',
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Automotive',
                                                     	cls: 'browse_text',
                                                     	//style: 'text-align: center; font-size:1.25em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din bold\';',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/baby_c.png',
                                                    	height: 40,
                                                    	width: '70%',
                                                    	margin: '15px 22px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Baby',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/clothes_c.png',
                                                    	height: 50,
                                                    	width: '100%',
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Clothing & Accessories',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//1st row end
                                    //software,eco,education
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/computer_c.png',
                                                    	height: 50,
                                                    	align: 'center',
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Computer & Software',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/eco_friendly_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Eco-Friendly',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/edu_c.png',
                                                    	height: 50,
                                                    	width: '60%',
                                                    	margin: '15px 27px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Education',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//2nd row end
                                    //electronics, financial,food
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/mobile_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Electronics',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/finance_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Financial Services',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/food_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Food & Drinks',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//3rd row end
                                    //health,hobbies,home
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/health_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Health & Beauty',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/hobbies_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Hobbies',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/home_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Home & Garden',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//4th row end
                                    //media,music,non-prof
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/media_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Media',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			if (this.getCls() == 'has-shadow browse_container') {
                                            				this.setCls('has-shadow after_browse_container');
                                            				Ext.getCmp('xMusic_panel_browse').show();
                                            				Ext.getCmp('xMusicPict').setSrc('resources/images/music_aft_c.png');
                                            				Ext.getCmp('xMusicLabel').setCls('after_browse_text');
                                            			}
                                            			else {
                                            				this.setCls('has-shadow browse_container');
                                            				Ext.getCmp('xMusic_panel_browse').hide();
                                            				Ext.getCmp('xMusicPict').setSrc('resources/images/music_c.png');
                                            				Ext.getCmp('xMusicLabel').setCls('browse_text');
                                            			}
                                            		},
                                            	},
                                            	items: [

													{
														id: 'xMusicPict',
														xtype: 'image',
														height: 50,
														margin: '15px 35px',
													},
													 {
														id: 'xMusicLabel',
													 	xtype: 'label',
													 	html: 'Music & Arts',
													 	cls: 'browse_text',
													 },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/non-profit_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Non-Profit',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//5th row end
                                    {
                                    	xtype: 'container',
                                    	layout: 'vbox',
                                    	id: 'xMusic_panel_browse',
                                    	width: '100%',
                                    	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
                                    	
										items: [{
                                    		xtype: 'label',
                                    		html: 'Art Supplies',
                                    		style: 'text-align: left; font-size:1.25em; padding: 10px 0px 10px 175px ; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                    	}, {
                                    		xtype: 'label',
                                    		html: 'Artists',
                                    		style: 'text-align: left;  font-size:1.25em; padding: 10px 0px 10px 175px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                    	}, {
                                    		xtype: 'label',
                                    		html: 'Instruments',
                                    		style: 'text-align: left;  font-size:1.25em; padding: 10px 0px 10px 175px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                    	}, {
                                    		xtype: 'label',
                                    		html: 'Musical Gear',
                                    		style: 'text-align: left; font-size:1.25em; padding: 10px 0px 10px 175px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                    	}, {
                                    		xtype: 'label',
                                    		html: 'Performers',
                                    		style: 'text-align: left; font-size:1.25em; padding: 10px 0px 10px 175px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                    	}, ]
                                    },
                                    //people, pets, sports
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/people_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'People',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/pets_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Pets',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/sports_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Sports',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//6th row end
                                    //travel, work
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/travel_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Travel',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/work_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Work',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel

                                    	],//1st row items
                                    },//6th row end
                                     {
                                     	xtype: 'spacer',
                                     	height: '7px',
                                     	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

                                     },
									{
										xtype: 'spacer',
										height: '10px',
										style: 'background: transparent;'
									},
                            	],
                            },//end last
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
                    	id: 'browse_menu',
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
