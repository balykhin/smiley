var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Brand', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.brandview',
	requires: [
        'Ext.TitleBar',
        'Ext.Rating'
	],
	config: {
		id:'xBrandView',
		tabBarPosition: 'bottom',
		cls: 'cust-tabbar normal-page-bg',
		items: [
            {
            	title: 'HOME',
            	iconCls: 'home-img',
            	styleHtmlContent: true,
            	scrollable: true,
            	items: [
                	{
                		xtype: 'toolbar',
                		title: 'BRAND',
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
								handler: function () {
									this.up('#xBrandView').fireEvent('backButtonCommandBrand', this);
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
                                		if (Ext.getCmp('brand_menu').getHidden() == false) {
                                			Ext.getCmp('brand_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                		}
                                		else {
                                			Ext.getCmp('brand_menu').show({ type: 'slide', direction: 'left', duration: 300 });
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
                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                    	flex: 1,
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		items: [
                                {
                                	xtype: 'container',
                                	laytout: { type: 'vbox' },
                                	cls: 'has-shadow',
                                	items: [
                                        
                                        {
                                        	xtype: 'container',
                                        	layout: { type: 'hbox' },
                                        	style: 'padding: 10px 15px; background-color: #efecea;',
                                        	items: [
                                                {
                                                	xtype: 'container',
                                                	style: 'background-color: #efecea; padding-top: 15px;',
                                                	layout: {
                                                		type: 'vbox',
                                                	},
                                                	items: [
                                                        {
                                                        	xtype: 'label',
                                                        	html: 'FENDER',
                                                        	style: 'text-align:left;font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

                                                        },
                                                        {
                                                        	xtype: 'label',
															width: 300,
															html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
															style: 'font-size:1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'franklin\';',
                                                        	
                                                        },
														{
															xtype: 'container',
															layout: 'hbox',
															items: [{ 
																xtype: 'image',
																width: 50,
																height: 50,
																style: 'border-radius:0px; margin-left:-4px;',
																src: 'resources/images/secret-logo.png',
															},//1
															{
																xtype: 'image',
																width: 50,
																height: 50,
																style: 'border-radius:0px; margin-left:-4px;',
																src: 'resources/images/secret-logo.png',
															},//2
															{
																xtype: 'image',
																width: 50,
																height: 50,
																style: 'border-radius:0px; margin-left:-4px;',
																src: 'resources/images/secret-logo.png',
															},//3
															{
																xtype: 'image',
																width: 50,
																height: 50,
																style: 'border-radius:0px; margin-left:-4px;',
																src: 'resources/images/secret-logo.png',
															},//4
															{
																xtype: 'image',
																width: 50,
																height: 50,
																style: 'border-radius:0px; margin-left:-4px;',
																src: 'resources/images/secret-logo.png',
															},//5
															{
																xtype: 'image',
																width: 50,
																height: 50,
																style: 'border-radius:0px; margin-left:-4px;',
																src: 'resources/images/secret-logo.png',
															}//6
															],
														}
                                                	],


                                                },
                                                {
                                                	xtype: 'container',
                                                	layout: { type: 'vbox', align:'middle' },
                                                	style: 'padding: 20px;',
                                                	items: [
                                                            {
                                                            	xtype: 'container',
                                                            	layout: { type: 'vbox', align: 'middle' },
                                                            	style: 'padding: 20px 0px 0px 20px; background-color: white; border-style:inset; border-width: 1px; border-radius: 5px;',
                                                            	cls: 'has-shadow',
                                                            	width: 120,
                                                            	height: 120, 
                                                            	items: [
																		{
																			xtype: 'image',
																			padding: 30,
																			margin:'30px 0px',
																			src: 'resources/images/fender.png',
																		},],
                                                            }, {
                                                            	xtype: 'rating',
                                                            	labelWidth: 'auto',
                                                            	itemsCount: 5,
                                                            	style: 'padding: 10px 0px 30px 0px;',
                                                            	itemCls: 'x-rating-star',
                                                            	itemHoverCls: 'x-rating-star-hover',
                                                            },
															{
																xtype: 'button',
																cls: 'has-shadow follow-btn',
																style: 'font-family: franklin; font-size: 0.8em; letter-spacing: 1px;margin: 20px 0px 5px 0px;',
																width: 120,
																height: 30,
																text: 'FOLLOW',
																listeners: {
																	tap: function () {
																		if (this.getCls() == 'has-shadow follow-btn')
																		{ 
																			this.setCls('has-shadow after-follow-btn');
																			this.setText('FOLLOWING');
																		}
																		else {
																			this.setCls('has-shadow follow-btn');
																			this.setText('FOLLOW');
																		}
																	}
																}
															},
															{
																xtype: 'button',
																cls: 'has-shadow add-review-btn',
																style: 'font-family: franklin; font-size: 0.8em; letter-spacing: 1px;margin: 5px 0px 5px 0px;',
																width: 120,
																height: 30,
																text: 'ADD REVIEW',
																listeners: {
																	tap: function(){
																		Ext.widget('reviewforfenderview').show();
																	}
																}
															},

                                                	],
                                                },
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
												html: 'REVIEWS',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 1
											},
										]
									},
                                    
									{
										xtype: 'container',
										id: 'PeterReview',
										layout: { type: 'hbox' },
										style: 'padding: 10px 15px; background-color: #efecea;',
										flex: 1,
										items: [
                                            {
                                            	xtype: 'container',
                                            	style: 'background-color: #efecea; padding-top: 15px;',
                                            	layout: {
                                            		type: 'vbox',
                                            		align: 'middle',
                                            	},

                                            	items: [
                                                        {
                                                        	xtype: 'image',
                                                        	style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px; border-style: solid; border-width:2px; border-color: white;',
                                                        	cls: 'has-shadow',
                                                        	width: 100,
                                                        	height: 100,
                                                        	src: 'resources/images/lays.png',
                                                        },
                                            	],

                                            },
                                            {
                                            	xtype: 'container',
                                            	layout: { type: 'vbox' },
                                            	flex: 4,
                                            	style: 'padding-left: 10px;',
                                            	items: [
													{
														xtype: 'container',
														layout: { type: 'hbox' },
														items: [
																{
																	xtype: 'label',
																	html: 'PETER SMITHERS',
																	style: 'font-size:1.1em; padding: 10px 15px 10px 0px; background-color: #efecea; font-family: \'franklin\';',

																}, {

																	xtype: 'label',
																	html: '03/25/2013',
																	style: 'color: #7c7a7b; font-size:0.8em; padding: 10px 15px 10px 0px; background-color: #efecea; font-family: \'franklin\';',

																}, ],
													}, {
														xtype: 'label',
														html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada odio. Phasellus aliquam dignissim scelerisque. Sed ullamcorper libero nec placerat posuere.',
														style: 'color: #7c7a7b; font-size:1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

													}, {
														xtype: 'label',
														cls: 'rew_comment',
														style: 'font-size:1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea;font-family: \'franklin\';',
														html: 'I\'m on the mission!',

													},
                                            	]
                                            },
											{
												xtype: 'container',
												style: 'background-color: #efecea; padding-top: 15px;',
												layout: {
													type: 'vbox',
													align: 'middle',
												},

												items: [
                                                        {
                                                        	xtype: 'image',
                                                        	style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px; border-style: solid; border-width:2px; border-color: white;',
                                                        	cls: 'has-shadow',
                                                        	width: 70,
                                                        	height: 70,
                                                        	src: 'resources/images/lays.png',
                                                        	listeners: {
                                                        		tap: function () {
                                                        			Ext.widget('brandimageview').show();
                                                        		}
                                                        	},
                                                        },
												],

											},
										]
									},
									{
										xtype: 'spacer',
										height: '2px',
										style: 'background-color: #efecea; border-bottom: 1px dashed #D7CFCD;'
									},
									////////////////
									{
										xtype: 'container',
										id: 'JoannaReview',
										layout: { type: 'hbox' },
										style: 'padding: 10px 15px; background-color: #efecea;',
										flex: 1,
										items: [
                                            {
                                            	xtype: 'container',
                                            	style: 'background-color: #efecea; padding-top: 15px;',
                                            	layout: {
                                            		type: 'vbox',
                                            		align: 'middle',
                                            	},

                                            	items: [
                                                        {
                                                        	xtype: 'image',
                                                        	style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px; border-style: solid; border-width:2px; border-color: white;',
                                                        	cls: 'has-shadow',
                                                        	width: 100,
                                                        	height: 100,
                                                        	src: 'resources/images/lays.png',
                                                        },
                                            	],

                                            },
                                            {
                                            	xtype: 'container',
                                            	layout: { type: 'vbox' },
                                            	flex: 4,
                                            	style: 'padding-left: 10px;',
                                            	items: [
													{
														xtype: 'container',
														layout: { type: 'hbox' },
														items: [
																{
																	xtype: 'label',
																	html: 'JOANNA SIMPSON',
																	style: 'font-size:1.1em; padding: 10px 15px 10px 0px; background-color: #efecea; font-family: \'franklin\';',

																}, {

																	xtype: 'label',
																	html: '03/25/2013',
																	style: 'color: #7c7a7b; font-size:0.8em; padding: 10px 15px 10px 0px; background-color: #efecea; font-family: \'franklin\';',

																}, ],
													}, {
														xtype: 'label',
														html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada odio. Phasellus aliquam dignissim scelerisque. Sed ullamcorper libero nec placerat posuere.',
														style: 'color: #7c7a7b; font-size:1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'franklin\';',

													}, {
														xtype: 'label',
														cls: 'rew_comment',
														style: 'font-size:1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea;font-family: \'franklin\';',
														html: 'I\'m on the mission!',

													},
                                            	]
                                            },
											{
												xtype: 'container',
												style: 'background-color: #efecea; padding-top: 15px;',
												layout: {
													type: 'vbox',
													align: 'middle',
												},

												items: [
                                                        {
                                                        	xtype: 'image',
                                                        	style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px; border-style: solid; border-width:2px; border-color: white;',
                                                        	cls: 'has-shadow',
                                                        	width: 70,
                                                        	height: 70,
                                                        	src: 'resources/images/lays.png',
                                                        },
												],

											},
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
                            	xtype: 'container',
                            	laytout: { type: 'vbox' },
                            	cls: 'has-shadow',
                            	items: [
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
                    	id: 'brand_menu',
                    	listeners:
                            {
                            	initialize: function () {
                            		this.hide();
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
