Ext.define('smiley360.view.Home', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homeview',
    cls: 'normal-page-bg',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
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
						title: 'HOME',
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
							{xtype: 'spacer'},
							{
								xtype: 'button',
								iconCls: 'menu-btn',
								iconMask: true,
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
						]
					},
					{
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
								laytout: {type: 'vbox'},
								items: [
									{
										xtype: 'container',
										cls: 'has-shadow',
										layout: {type: 'hbox'},
										items: [
											{
												xtype: 'label',
												html: 'WHAT IS HAPPENING?',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 2
											},
											{
												xtype: 'label',
												html: 'LEVEL 2',
												cls: 'heading-text',
												flex: 0.8
											},
											{
												xtype: 'label',
												html: '* * * * *',
												cls: 'heading-text',
												flex: 1.2
											}
										]
									},
									{
										xtype: 'label',
										html: 'Refer the ladies in your life to us!  We’d love to include them in our current mission - and when they join us, you’ll earn Smiles!',
										style: 'background-color: #efecea;',
										cls: 'simple-text bullet'
									},
									{
										xtype: 'label',
										html: 'Check Smiley360 Connect!  Create or join a community around your favorite brands, products, or services.',
										style: 'background-color: #efecea;',
										cls: 'simple-text bullet'
									},
									{
										xtype: 'spacer',
										height: '10px',
										style: 'background-color: #f4f3f1; margin: 0px 2px;'
									},
									{
										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;'
									},
									{
										xtype: 'label',
										html: '<p>SPECIAL OFFERS</p>',
										cls: 'heading-text has-shadow',
										style: 'padding-left: 15px;'
									},
									{
										xtype: 'container',
										style: 'background-color: #efecea',
										items: [
											{
												xtype: 'carousel',
												direction: 'horizontal',
												style: 'background-color: #efecea',
												dragable: false,
												indicator: false,
												
												defaults: {
													styleHtmlContent: true
												},
												width: '100%',
												height: 100,
												items: [
													{
														xtype: 'container',
														layout: 'hbox',
														cls: 'cont-pad',
														items: [
															{
																xtype: 'label',
																html: '<p class="para-text">Like Lay’s on Facebook for a “Buy one get one free” coupon!  Tap here for more details.</p>',
																flex: 2.5
															},
															{
																xtype: 'image',
																cls: 'item-img',
																src: 'resources/images/lays.png',
																flex: 1.5,
																width: 80,
																height: 80
															}
														]
													},
													{
														xtype: 'container',
														layout: 'hbox',
														cls: 'cont-pad',
														items: [
															{
																xtype: 'label',
																html: '<p class="para-text">Like Lay’s on Facebook for a “Buy one get one free” coupon!  Tap here for more details.</p>',
																flex: 2.5
															},
															{
																xtype: 'image',
																cls: 'item-img',
																src: 'resources/images/coke.jpg',
																flex: 1.5,
																width: 80,
																height: 80
															}
														]
													},
													{
														xtype: 'container',
														layout: 'hbox',
														cls: 'cont-pad',
														items: [
															{
																xtype: 'label',
																html: '<p class="para-text">Like Lay’s on Facebook for a “Buy one get one free” coupon!  Tap here for more details.</p>',
																flex: 2.5
															},
															{
																xtype: 'image',
																cls: 'item-img',
																src: 'resources/images/redbull.jpg',
																flex: 1.5,
																width: 80,
																height: 80
															}
														]
													},
												]
											},
											{
												xtype: 'panel',
												html: '<div class="left-btn"></div><div class="right-btn"></div>'
											}
										]
									},
									{
										xtype: 'container',
										style: 'background-color: #f4f3f1; margin: 0px 2px;',
										layout: {type: 'hbox'},
										items: [
											{
												xtype: 'label',
												html: '<p style="font-family: din medium; font-size: 10px; line-height: 2.8em; color: #8f807d; margin-left: 5px;"><span style="border-bottom: 1px solid #faa61b; color: #6d605d;">Refer Friends</span> now and earn Smiles!</p>'
											},
											{
												xtype: 'button',
												text: '',
												ui: 'plain',
												cls: 'gray_bg',
												iconCls: 'mobile_share',
												iconMask: true
											},
											{
												xtype: 'button',
												text: '',
												ui: 'plain',
												cls: 'gray_bg',
												iconCls:'email_share',
												iconMask: true
											},
											{
												xtype: 'button',
												text: '',
												ui: 'plain',
												cls: 'gray_bg',
												iconCls:'fb_share',
												iconMask: true
											},
											{
												xtype: 'button',
												text: '',
												ui: 'plain',
												cls: 'gray_bg',
												iconCls:'twitter_share',
												iconMask: true
											}
										]
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
							}
                        ]
                    }
                ]
            },
            {
                title: 'MISSIONS',
                iconCls: 'mission-img',

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
							{xtype: 'spacer'},
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
						]
					},
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            },
            {
                title: 'SHARE',
                iconCls: 'share-img',

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
							{xtype: 'spacer'},
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
						]
					},
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
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
							{xtype: 'spacer'},
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
						]
					},
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
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
							{xtype: 'spacer'},
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
						]
					},
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ],
        listeners: [
			{
				delegate: "#backBtn",
				event: "tap",
				fn: "onBackButtonTap"
			}
		]
    },
    onBackButtonTap: function(){
    	console.log('back button tapped');
    	this.fireEvent('backButtonCommandHome', this);
    }
});
