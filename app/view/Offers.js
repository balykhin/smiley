var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Offers', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.offersview',
    requires: [
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
                	    title: 'OFFERS',
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
                                        if (Ext.getCmp('offers_menu').getHidden() == false) {
                                            Ext.getCmp('offers_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                        }
                                        else {
                                            Ext.getCmp('offers_menu').show({ type: 'slide', direction: 'left', duration: 300 });
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
                        id: 'offers-cont',
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
                                                    html: 'MISSION OFFERS',
                                                    cls: 'heading-text active-sign',
                                                    style: 'padding-left: 15px;',
                                                    flex: 1
                                                },
                                            ]
                                        },
                                        {
                                            xtype: 'container',
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
                                                                style: 'padding: 20px 0px 0px 15px;background-color: #efecea; border-radius: 5px;',
                                                                cls: 'has-shadow',
                                                                width: 100,
                                                                height: 100,
                                                                src: 'resources/images/secret-logo.png',
                                                                listeners: {
                                                                    tap: function () {
                                                                        Ext.getCmp('missionslist-cont').show();
                                                                        Ext.getCmp('offers-cont').hide();
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
                                                            html: 'Specific Mission Title',
                                                            style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

                                                        },
                                                        {
                                                            xtype: 'label',
                                                            id:'offers_label_text',
                                                            html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                                                            style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',
                                                            listeners: {
                                                                initialize: function () {
                                                                    
                                                                }
                                                            }
                                                        },
                                                    ]
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
											    html: 'QUALIFY FOR A NEW MISSION',
											    cls: 'heading-text active-sign',
											    style: 'padding-left: 15px;',
											    flex: 1
											},
									    ]
									},
                                    {
                                        xtype: 'container',
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
                                                        html: 'Survey Title',
                                                        style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

                                                    },
									                {
									                    xtype: 'label',
									                    html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel malesuada odio. Phasellus aliquam dignissim scelerisque. Sed ullamcorper libero nec placerat posuere.',
									                    style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

									                },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        xtype: 'container',
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
                                                            style: 'padding: 20px 0px 0px 0px;background-color: #efecea; border-radius: 5px;',
                                                            cls: 'has-shadow',
                                                            width: 100,
                                                            height: 100,
                                                            src: 'resources/images/mc_img.png',
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
                                                        html: 'Another Survey title',
                                                        style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

                                                    },
									                {
									                    xtype: 'label',
									                    html: 'Aliquam erat volutpat. Ut ornare tellus ut malesuada tempor. Fusce blandit tincidunt iaculis. Donec sit amet suscipit mi. Suspendisse dignissim viverra luctus. Etiam venenatis cursus dolor at aliquet.',
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
                                        xtype: 'container',
                                        style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                                        layout: { type: 'hbox' },
                                        items: [
                                            {
                                                xtype: 'label',
                                                html: 'POST-MISSION SURVEYS',
                                                cls: 'heading-text active-sign',
                                                style: 'padding-left: 15px; color: #939498;',
                                                flex: 1
                                            },
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        layout: { type: 'hbox' },
                                        style: 'padding: 10px 15px; background-color: #efecea;',
                                        flex: 1,
                                        //items: [
                                        //    {
                                        //        xtype: 'container',
                                        //        style: 'background-color: #efecea; padding-top: 15px;',
                                        //        layout: {
                                        //            type: 'vbox',
                                        //            align: 'middle',
                                        //        },

                                        //        items: [
                                        //                {
                                        //                    xtype: 'image',
                                        //                    style: 'padding: 20px 0px 0px 15px;background-color: #efecea; border-radius: 5px;',
                                        //                    cls: 'has-shadow',
                                        //                    width: 100,
                                        //                    height: 100,
                                        //                    src: 'resources/images/secret-logo.png',
                                        //                    listeners: {
                                        //                        tap: function () {
                                        //                            Ext.getCmp('missionslist-cont').show();
                                        //                            Ext.getCmp('missions-cont').hide();
                                        //                        }
                                        //                    }
                                        //                },
                                        //        ],

                                        //    },
                                        //    {
                                        //        xtype: 'container',
                                        //        layout: { type: 'vbox' },
                                        //        flex: 4,
                                        //        style: 'padding-left: 10px;',
                                        //        items: [
                                        //            {
                                        //                xtype: 'label',
                                        //                html: 'Specific Mission Title',
                                        //                style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

                                        //            },
                                        //            {
                                        //                xtype: 'label',
                                        //                html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                                        //                style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

                                        //            },
                                        //        ]
                                        //    },
                                        //]
                                    },
                                    {
                                        xtype: 'spacer',
                                        height: '14px',
                                        style: 'background-color: #efecea; margin: 0px 2px;',
                                    },
                                ],
                            },//end third
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
                                                html: 'BONUS SURVEYS',
                                                cls: 'heading-text active-sign',
                                                style: 'padding-left: 15px;',
                                                flex: 1
                                            },
                                        ]
                                    },
                                    {
                                        xtype: 'container',
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
                                                            style: 'padding: 20px 0px 0px 15px;background-color: #efecea; border-radius: 5px;',
                                                            cls: 'has-shadow',
                                                            width: 100,
                                                            height: 100,
                                                            src: 'resources/images/offers_logo2.png',
                                                            listeners: {
                                                                tap: function () {
                                                                    Ext.getCmp('missionslist-cont').show();
                                                                    Ext.getCmp('offers-cont').hide();
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
                                                        html: 'Another Survey Title',
                                                        style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

                                                    },
                                                    {
                                                        xtype: 'label',
                                                        html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                                                        style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        xtype: 'container',
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
                                                            style: 'padding: 20px 0px 0px 15px;background-color: #efecea; border-radius: 5px;',
                                                            cls: 'has-shadow',
                                                            width: 100,
                                                            height: 100,
                                                            src: 'resources/images/offers_logo3.png',
                                                            listeners: {
                                                                tap: function () {
                                                                    Ext.getCmp('missionslist-cont').show();
                                                                    Ext.getCmp('offers-cont').hide();
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
                                                        html: 'Yet, Another Survey Title',
                                                        style: 'font-size:1.4em; padding: 10px 15px 10px 0px; background-color: #efecea; color:#413f40; font-family: \'din bold\';',

                                                    },
                                                    {
                                                        xtype: 'label',
                                                        html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
                                                        style: 'font-size:1.1em; margin-top: -10px; padding: 0px 15px 10px 0px; word-wrap: break-all; background-color: #efecea; color:#413f40; font-family: \'din medium\';',

                                                    },
                                                ]
                                            },
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
									},
                                    //{
                                    //    xtype: 'spacer',
                                    //    height: '14px',
                                    //    style: 'background-color: #efecea; margin: 0px 2px;',
                                    //},
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
                        id: 'offers_menu',
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
