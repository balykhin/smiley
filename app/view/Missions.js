var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Missions', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.missionsview',
	requires: [
        'Ext.carousel.Carousel',
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		id: 'xMissionView',
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
                		title: 'MISSIONS',
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
										this.up('#xMissionView').fireEvent('backButtonCommandMissions', this);
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
                                		if (Ext.getCmp('missions_menu').getHidden() == false) {
                                			Ext.getCmp('missions_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                		}
                                		else {
                                			Ext.getCmp('missions_menu').show({ type: 'slide', direction: 'left', duration: 300 });
                                		}
                                	},

                                },
							}
                		]
                	},

                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	id: 'missions-cont',
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		flex: 1,
                    		listeners:
								{
									painted: function () {
									},
								},
                    		items: [{
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
									laytout: { type: 'vbox' },
									//cls: 'has-shadow',
									items: [
										{
											xtype: 'container',
											cls: 'has-shadow',
											layout: { type: 'hbox' },
											items: [
												{
													xtype: 'label',
													html: 'CURRENT MISSIONS',
													cls: 'heading-text active-sign',
													style: 'padding-left: 15px;',
													flex: 1
												},
											]
										},
										{
											xtype: 'container',
											layout: { type: 'hbox' },
											style: 'padding: 10px 15px; border-bottom: 1px dashed #d7cfcd; background-color: #efecea;',
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
																style: 'padding: 20px 0px 0px 15px;background-color: #efecea; border-radius: 5px;',
																cls: 'has-shadow',
																width: 100,
																height: 100,
																src: 'resources/images/smile-missions.png',
																listeners: {
																	tap: function () {
																		Ext.getCmp('missionslist-cont').show();
																		Ext.getCmp('missions-cont').hide();
																	}
																}
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
															xtype: 'label',
															html: 'I Just Joined Smiley360',
															style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

														},
														{
															xtype: 'label',
															html: 'Participate in this digital mission and spread the word about Smiley to your friends, followers, readers and more. Give them a chance to join this exiting community, too! You will be handsomely rewarded. This is the first step to quality foe products and brand experiences from our partners.',
															style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

														},
													]
												},
											]
										},
										{
											xtype: 'container',
											layout: { type: 'hbox' },
											style: 'padding: 10px 15px; border-bottom: 1px dashed #d7cfcd; background-color: #efecea;',
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
																style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px;',
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
															xtype: 'label',
															html: 'Classic Taste',
															style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

														},
														{
															xtype: 'label',
															html: 'Give them a chance to join this exciting community, too!',
															style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

														},
													]
												},
											]
										},
										{
											xtype: 'container',
											layout: { type: 'hbox' },
											style: 'padding: 10px 15px; border-bottom: 1px dashed #d7cfcd; background-color: #efecea;',
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
																style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px;',
																cls: 'has-shadow',
																width: 100,
																height: 100,
																src: 'resources/images/secret-logo.png',
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
															xtype: 'label',
															html: 'Classic Taste',
															style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

														},
														{
															xtype: 'label',
															html: 'Give them a chance to join this exciting community, too!',
															style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

														},
													]
												},
											]
										},
										{
											xtype: 'spacer',
											height: '7px',
											style: 'background-color: #efecea;',
											cls: 'has-shadow',
										},


										{
											xtype: 'spacer',
											height: '7px',
											style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

										},
										{
											xtype: 'spacer',
											height: '10px',
											style: 'background: transparent;'
										}

									]
								},

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
                    	id: 'missions_menu',
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
		listeners: {
			show: function () {
				console.log('Mission view showed!');
				//this.setUserLevel();
				//this.setWhatsHappening();
				//this.setSpecialOffers();
			},
		},
		
	},
	
});
