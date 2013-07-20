var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.OfferDetails', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.offerdetailsview',
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
                	},  {
                xtype: 'container',
layout: 'vbox',
flex: 1,
listeners:
{
    painted: function () {
        //dock_panel = this;
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
        //cls: 'has-shadow',
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
                    //{
                    //    xtype: 'label',
                    //    html: '/92',
                    //    cls: 'heading-text',
                    //    style: 'padding-left: 15px;',
                    //    flex: 1.2,
                    //},
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
                                            //margin: '0px -20px 0px -50px',
                                            //style:'padding-left: 15px;',
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
                        //margin: '20px 25px',
                        cls: 'has-shadow',
                        style: 'background-color: #efecea; padding: 40px 25px 15px 25px;',
                        layout: { type: 'vbox' },
                        items: [
                            {
                                xtype: 'button',
                                //itemId: 'recievebtn',
                                cls: 'offers-offer-btn',
                                style: 'padding: 30px 0px 50px 0px; margin: -50px 0px; margin-top: -15px 0px;',
                                text: 'OFFER',
                                //icon: 'resources/images/missions-box.png',
                                //iconAlign: 'right',
                                //iconCls: 'icon-recieve', 
                                listeners:
                                    {
                                        tap: function ()
                                        {
                                            if (Ext.getCmp('offer_offer_panel').getHidden() == true)
                                            { Ext.getCmp('offer_offer_panel').show(); this.setCls('after-offers-offer-btn'); }
                                            else { Ext.getCmp('offer_offer_panel').hide(); this.setCls('offers-offer-btn'); }
                                        }
                                    }
                                                            
                            },
                                        {
                                            xtype: 'panel',   
                                            layout: 'vbox',
                                            cls: 'has-shadow',
                                            style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; background-color:white; margin-top: 50px; margin-bottom: -30px;',
                                            id: 'offer_offer_panel',
                                            listeners: {
                                                initialize: function()
                                                {this.hide();}
                                            },
                                            items:
                                                [
                                                {
                                                    xtype: 'label',
                                                    height: '3px',                                                                    
                                                    style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                                                }, 
                                        {
                                            xtype: 'label',
                                            style: 'background-color:#e2ddda; font-family: din medium; font-size:1.1em;',
                                            html: 'You will recieve one Campbell\'s Go&trade; soup of your choice, fun items to use when sharing your thoughts about Campbell\'s Go&trade; soup and 10 coupons to share with your friends and family for $2 off Campbell\'s Go&trade; soup.',
                                            padding: '10px 20px',
                                        },
                                                ],
                                        },
                                                    
                            {
                                xtype: 'button',
                                //itemId: 'recievebtn',
                                style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
                                cls: 'offers-mission-btn',
                                text: 'MISSION',
                                listeners:
                                    {
                                        tap: function () {
                                            if (Ext.getCmp('offer_mission_panel').getHidden() == true)
                                            { Ext.getCmp('offer_mission_panel').show(); this.setCls('after-offers-mission-btn'); }
                                            else { Ext.getCmp('offer_mission_panel').hide(); this.setCls('offers-mission-btn'); }
                                        }
                                    }
                            },
                            {
                                xtype: 'panel',
                                layout: 'vbox',
                                cls: 'has-shadow',
                                style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; background-color:white; margin-top: -60px; margin-bottom: 60px;',
                                id: 'offer_mission_panel',
                                listeners: {
                                    initialize: function ()
                                    { this.hide(); }
                                },
                                items:
                                    [
                                    {
                                        xtype: 'label',
                                        height: '3px',
                                        style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                                    },
                            {
                                xtype: 'label',
                                style: 'background-color:#e2ddda; font-family: din medium; font-size:1.1em;',
                                html: 'Try Campbell\'s Go&trade; soup once and you\'ll be hooked! Once you\'ve tried it, share your experience with your social circle both on and offline using your talk bubble and disguise accessories that are in your Smiley kit. Let your inner foodie shine bright and all about Campbell\'s Go&trade; soup. ',
                                padding: '10px 20px',
                            },
                                    ],
                            },
                                    {
                                        xtype: 'button',
                                        //itemId: 'recievebtn',
                                        style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
                                        cls: 'offers-recieve-btn',
                                        text: 'WHAT YOU\'LL RECIEVE',
                                        listeners:
                                    {
                                        tap: function () {
                                            if (Ext.getCmp('offer_recieve_panel').getHidden() == true)
                                            { Ext.getCmp('offer_recieve_panel').show(); this.setCls('after-offers-recieve-btn'); }
                                            else { Ext.getCmp('offer_recieve_panel').hide(); this.setCls('offers-recieve-btn'); }
                                        }
                                    }
                                    },
                                    {
                                        xtype: 'panel',
                                        layout: 'vbox',
                                        cls: 'has-shadow',
                                        style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; background-color:white;',
                                        id: 'offer_recieve_panel',
                                        listeners: {
                                            initialize: function ()
                                            { this.hide(); }
                                        },
                                        items:
                                            [
                            {
                                xtype: 'label',
                                height: '3px',
                                style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                            }, {
                                xtype: 'label',
                                html: 'JOIN THIS MISSION AND RECIEVE:',
                                style: 'background-color:#e2ddda; font-family: din bold; font-size:1em;',
                                padding: '10px 20px',
                            },
                                    {
                                        xtype: 'label',
                                        style: 'background-color:#e2ddda;font-family: franklin; font-size:1.1em;',
                                        cls: 'mission-t',
                                        html: '1 Campbell\'s Go&trade; soup in the bold flavour that you chose',
                                        padding: '10px 20px',
                                    },
                    {
                        xtype: 'label',
                        style: 'background-color:#e2ddda;font-family: franklin; font-size:1.1em;',
                        cls: 'mission-t',
                        html: 'Fun items to use when sharing about your Campbell\'s GO&trade; experience',
                        padding: '10px 20px',
                    },
                                        {
                                            xtype: 'label',
                                            style: 'background-color:#e2ddda;font-family: franklin; font-size:1.1em;',
                                            cls: 'mission-t',
                                            html: '10 coupons to share with your friends for $2 off GoCampbell\'s Go&trade; soup',
                                            padding: '10px 20px',
                                        },
                                        {
                                            xtype: 'label',
                                            style: 'background-color:#e2ddda;font-family: franklin; font-size:1.1em;',
                                            cls: 'mission-t',
                                            html: '$1 off Digital Coupon to share',
                                            padding: '10px 20px',
                                        },
                                        {
                                            xtype: 'label',
                                            style: 'background-color:#e2ddda;font-family: franklin; font-size:1.1em;',
                                            cls: 'mission-t',
                                            html: 'Smiley360 Sharing Guide',
                                            padding: '10px 20px',
                                        },
                                            ],
                                    },
                              {
                                  xtype: 'label',
                                  html: 'NO THANKS, REMOVE THIS OFFER.',
                                  style: 'text-decoration:underline; background-color:#efecea; font-family: din bold; font-size:1em;',
                                  padding: '20px 30px',
                              },
                        ],
                    
                    },
                    
            {
                xtype: 'button',
                style: 'margin: 10px 10px 0px 10px;',
                cls: 'accept-btn',
                text: 'ACCEPT THIS OFFER',
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
        this.fireEvent('backButtonCommandOfferDetails', this);
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
