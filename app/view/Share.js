var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Share', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.shareview',
	requires: [
        'Ext.carousel.Carousel',
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {

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
                		title: 'SHARE',
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
								itemId: 'backBtn'
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
                                		if (Ext.getCmp('share_menu').getHidden() == false) {
                                			Ext.getCmp('share_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                		}
                                		else {
                                			Ext.getCmp('share_menu').show({ type: 'slide', direction: 'left', duration: 300 });
                                		}
                                	},

                                },
							}
                		]
                	}, {
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
								items: [
									{
										xtype: 'container',
										cls: 'has-shadow',
										layout: { type: 'hbox' },
										items: [
											{
												xtype: 'label',
												html: 'CAMPBELL\'S &reg; SLOW KETTLE &reg; SOUPS ',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 2,
											},
											{
												xtype: 'label',
												html: '13/92',
												cls: 'heading-text',
												style: 'padding-left: 15px; padding-right: 10px;',
												flex: 0.2,
											},
										]
									},
									{
										xtype: 'container',
										style: 'background-color: #efecea; ',

										items: [
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
												height: 160,

												items: [
														{
															xtype: 'container',
															layout: 'vbox',
															items: [

																{
																	xtype: 'image',
																	src: 'resources/images/campbells.png',
																	height: 160
																}
															]
														},

												]
											},
											{
												xtype: 'panel',
												html: '<div class="left-btn-mission"></div><div class="right-btn-mission"></div>'
											},
									{
										xtype: 'spacer',
										style: 'background-color: #efecea; border-bottom: 1px dashed #d7cfcd;',
										height: 20,
									},

											{
												xtype: 'container',
												style: 'background-color: #F4F3F1; padding: 40px 25px;',
												layout: { type: 'vbox' },
												items: [
													 
													 {
													 	xtype: 'container',
													 	style: 'background-color: #F4F3F1; padding: 40px 25px;',
													 	layout: { type: 'hbox' },
													 	items: [{
													 				xtype: 'image',
													 				cls: 'share-fb-btn',
													 				style: 'padding: 50px 0px 50px 0px; margin: -50px 10px;',
													 				flex: 1,
													 				listeners:
																		{
																			tap: function ()
																			{ }
																		}
													 			},
																{
																	xtype: 'image',
																	cls: 'share-tw-btn',
																	style: 'padding: 50px 0px 50px 0px; margin: -50px 10px;',
																	flex: 1,
																	listeners:
																		{
																			tap: function ()
																			{ }
																		}
																}, {
																	xtype: 'image',
																	cls: 'share-pin-btn',
																	style: 'padding: 50px 0px 50px 0px; margin: -50px 10px;',
																	flex: 1,
																	listeners:
																		{
																			tap: function ()
																			{ }
																		}
																}, ]
													 },
													 {
													 	xtype: 'container',
													 	style: 'background-color: #F4F3F1; padding: 40px 25px; margin-top: -130px;',
													 	layout: { type: 'hbox', align: 'center'},
													 	items: [{
													 		xtype: 'panel',
													 		cls: 'share-badge-btn',
													 		style: 'padding: 4px 3px 4px 0px; margin: 0px 10px;',
													 		flex: 1,
													 		listeners:
																{
																	tap: function ()
																	{ }
																}
													 	}, {
													 		xtype: 'spacer',
													 	},
																{
																	xtype: 'panel',
																	cls: 'share-badge-btn',
																	style: 'padding: 4px 3px 4px 0px; margin: 0px 10px;',
																	flex: 1,
																	items: [{
																		xtype: 'container',
																		layout: 'vbox',
																		style: 'padding: 2px',
																		items: [{
																			xtype: 'container',
																			layout: 'hbox',
																			style: 'font-family: franklin; font-size: 0.8em;',
																			items: [{
																				xtype: 'label',
																				html:'5',
																			}, {
																				xtype: 'label',
																				html: '/',
																			}, {
																				xtype: 'label',
																				html: '10',
																			}], 
																		}, {
																			xtype: 'label',
																			html: '5',
																			style: 'font-family: din bold; font-size: 1em; padding-left: 9px; padding-bottom: 4px; margin-top: -6px;'
																		}, ],
																	}],
																	listeners:
																		{
																			tap: function ()
																			{ }
																		}
																},
																{
																	xtype: 'spacer',
																}, {
																	xtype: 'panel',
																	cls: 'share-badge-btn',
																	style: 'padding: 4px 3px 4px 0px; margin: 0px 10px;',
																	flex: 1,
																	listeners:
																		{
																			tap: function ()
																			{ }
																		}
																}, {
																	xtype: 'spacer',
																}, ]
													 },
													  {
													  	xtype: 'container',
													  	style: 'background-color: #F4F3F1; padding: 40px 25px;',
													  	layout: { type: 'hbox' },
													  	items: [{
													  		xtype: 'button',
													  		style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
													  		cls: 'menu-list-btn-new',
													  		text: 'TRY',
													  	}, {
													  		xtype: 'button',
													  		style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
													  		cls: 'menu-list-btn-new',
													  		text: 'TRY',
													  	}, {
													  		xtype: 'button',
													  		style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
													  		cls: 'menu-list-btn-new',
													  		text: 'TRY',
													  	}, ]
													  },
													  {
													  	xtype: 'container',
													  	style: 'background-color: #F4F3F1; padding: 40px 25px;',
													  	layout: { type: 'hbox' },
													  	items: [{
													  		xtype: 'button',
													  		style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
													  		cls: 'menu-list-btn-smiles',
													  		text: 'MIS',
													  	}, {
													  		xtype: 'button',
													  		style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
													  		cls: 'menu-list-btn-smiles',
													  		text: 'MIS',
													  	}, {
													  		xtype: 'button',
													  		style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
													  		cls: 'menu-list-btn-smiles',
													  		text: 'MIS',
													  	}, ]
													  },
												],
											},

										]
									},




									//{
									//    xtype: 'spacer',
									//    height: '10px',
									//    style: 'background-color: #f4f3f1; margin: 0px 2px;'
									//},
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
		this.fireEvent('backButtonCommandDetails', this);
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
