var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Connect', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.connectview',
    requires: [
        'Ext.carousel.Carousel',
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
    	cls: 'normal-page-bg',
    	id: 'xConnect',
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
                	    title: 'CONNECT',
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
							    	listeners:{
							    		tap: function(){
							    			this.up('#xConnect').fireEvent('backButtonCommandConnect', this);
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
                                        if (Ext.getCmp('connect_menu').getHidden() == false) {
                                            Ext.getCmp('connect_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                        }
                                        else {
                                            Ext.getCmp('connect_menu').show({ type: 'slide', direction: 'left', duration: 300 });
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
                        html: 'FEATURED BRANDS',
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
                                            xtype: 'container',
                                            layout: 'hbox',
                                            items: [{
                                                xtype: 'image',
                                                //margin: '0px -20px 0px -50px',
                                                //style:'padding-left: 15px;',
                                                src: 'resources/images/offers_logo3.png',
                                                height: '100%',
                                            }]
                                        },
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
                        style: 'background-color: #F4F3F1; padding: 40px 25px;',
                        layout: { type: 'vbox' },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'recievebtn',
                                cls: 'menu-list-btn-recieve',
                                style: 'padding: 30px 0px 50px 0px; margin: -50px 0px; margin-top: -15px 0px;',
                                text: 'WHAT YOU\'LL RECIEVE',
                                listeners:
                                    {
                                        tap: function ()
                                        {
                                            if (Ext.getCmp('recieve_panel').getHidden() == true)
                                            { Ext.getCmp('recieve_panel').show(); this.setCls('after-menu-list-btn-recieve'); }
                                            else { Ext.getCmp('recieve_panel').hide(); this.setCls('menu-list-btn-recieve'); }
                                        }
                                    }
                                                            
                            },
                                        {
                                            xtype: 'panel',   
                                            layout: 'vbox',
                                            cls: 'has-shadow',
                                            style: 'border-radius: 0px 0px 5px 5px; background-color: #e2ddda; margin-top: 50px; margin-bottom: -30px;',
                                            id: 'recieve_panel',
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
                                }, {
                                    xtype: 'label',
                                    html: 'THESE ITEMS ARE ON THE WAY:',
                                    style: 'background-color: #e2ddda;font-family: din bold; font-size:1em;',
                                    padding: '10px 20px',
                                },
                                        {
                                            xtype: 'label',
                                            style: 'font-family: franklin; font-size:1.1em;',
                                            cls:'mission-t',
                                            html: '1 Campbell\'s Slow Kettle Soup',
                                            padding: '10px 20px',
                                        },
                        {
                            xtype: 'label',
                            style: 'font-family: franklin; font-size:1.1em;',
                            cls: 'mission-t',
                            html: 'Coupons',
                            padding: '10px 20px',
                        },
                                            {
                                                xtype: 'label',
                                                style: 'font-family: franklin; font-size:1.1em;',
                                                cls: 'mission-t',
                                                html: 'Sharing Guide',
                                                padding: '10px 20px',
                                            },
                                                ],
                                        },
                                                    
                            {
                                xtype: 'button',
                                itemId: 'recievebtn',
                                style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
                                cls: 'menu-list-btn-new',
                                text: 'TRY NEW THINGS',
                            },
                                    {
                                        xtype: 'button',
                                        itemId: 'recievebtn',
                                        style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
                                        cls: 'menu-list-btn-smiles',
                                        text: 'MISSION SMILES',
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
