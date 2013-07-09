var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.OffersDetails', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.offersdetailsview',
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
                	    title: 'OFFERS',
                	    //style: 'background: url(../images/bookmark-missions.png);',
                	    cls: 'home-title',
                	    docked: 'top',
                	    ui: 'light',
                	    items: [{
                	        xtype: 'button',
                	        text: '',
                	        ui: 'plain',
                	        iconCls: 'back-btn',
                	        iconMask: true,
                	        itemId: 'backBtn'
                	    },
                            {
                                xtype: 'spacer',
                            },
                            {
                                xtype: 'button',
                                text: '',
                                ui: 'plain',
                                iconCls: 'middle-btn',
                                iconMask: true,
                                itemId: 'middleBtn',
                                
                            },
                            {
                                xtype: 'spacer',
                            },
							{
							    xtype: 'button',
							    iconCls: 'menu-btn iconstyle',
							    iconMask: true,
							    ui: 'plain',
							    text: '',
							    itemId: 'menuBtn',
							    listeners:
                                {
                                    tap: function () {
                                        //if (Ext.getCmp('missions_menu').getHidden() == false) {
                                        //    Ext.getCmp('missions_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                        //}
                                        //else {
                                        //    Ext.getCmp('missions_menu').show({ type: 'slide', direction: 'left', duration: 300 });}
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
                        cls: 'has-shadow',
                        layout: { type: 'hbox' },
                        items: [{
                            xtype: 'label',
                            html: 'CAMPBELL\'S &reg; SLOW KETTLE &reg; SOUPS',
                            cls: 'heading-text active-sign',
                            style: 'padding-left: 15px;',
                            //flex: 2
                        },
                        {
                            xtype: 'spacer',
                            cls: 'heading-text',
                            style: 'background: #e2dddb;',
                        },
                        {
                            xtype: 'label',
                            html: '13',
                            cls: 'heading-text',
                        },
                        {
                            xtype: 'label',
                            html: '/92',
                            cls: 'heading-text',
                            style: 'padding-right: 10px;margin-right: -2px;',
                        }]
                    },
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
                        height: 250,
                        items: [{
                            xtype: 'container',
                            layout: 'hbox',
                            items: [{
                                xtype: 'image',
                                cls:'has-shadow',
                                src: 'resources/images/campbells.png',
                                flex: 1,
                                width: '100%',
                                height: '100%',
                                margin: '0px -5px',
                            },]
                        }]
                    },
                    {
                        xtype: 'spacer',
                        height: '10px',
                        style: 'background-color: #efecea;'
                    },
                    {
                        xtype: 'panel',
                        style: 'margin-bottom: 40px;',
                    	html: '<div class="left-btn-mission"></div><div class="right-btn-mission"></div>'
                    },
                    //{
                    //    xtype: 'spacer',
                    //    height: '10px',
                    //    style: 'margin-bottom: 50px;background-color: #efecea; border-bottom: 1px dashed #d7cfcd;'
                    //},
                    
                    {
                        xtype: 'container',
                        style: 'margin-top: -40px; border-top: 1px dashed #d7cfcd;background-color: #efecea; padding-bottom: 10px;',
                        items: [{
                                xtype: 'spacer',
                                height: '10px',
                                style: 'background-color: #efecea;'
                            },
                            {
                            xtype: 'button',
                            itemId: 'recievebtn',
                            cls: 'offers-offer-btn',
                            //style: '',// 50px 0px; margin: -50px 0px; margin-top: -15px 0px;',
                            text: 'OFFER',
                            listeners:
                                {
                                    tap: function () {
                                        if (Ext.getCmp('recieve_panel').getHidden() == true) {
                                            Ext.getCmp('recieve_panel').show();
                                            this.setCls('after-menu-list-btn-recieve');
                                        }
                                        else {
                                            Ext.getCmp('recieve_panel').hide();
                                            this.setCls('menu-list-btn-recieve');
                                        }
                                    },
                                    //initialize: function () {
                                    //    this.setCls('menu-list-btn-recieve');
                                    //}
                                }
                        },
                        {
                            xtype: 'panel',
                            layout: 'vbox',
                            style: 'border-radius: 0px 0px 5px 5px; background-color:white; margin: -10px 10px 0px 10px; padding: 0px 0px 20px 0px;',// margin-top: 50px; margin-bottom: -30px;',
                            id: 'recieve_panel',
                            listeners: {
                                initialize: function () { this.hide(); }
                            },
                            items:
                                [{
                                    xtype: 'label',
                                    height: '3px',
                                    style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
                                }, {
                                    xtype: 'label',
                                    html: 'THESE ITEMS ARE ON THE WAY',
                                    style: 'font-family: din bold; font-size:1em;',
                                    padding: '10px 20px',
                                }, {
                                    xtype: 'label',
                                    style: 'font-family: franklin; font-size:1.1em;',
                                    cls: 'mission-t',
                                    html: '1 Campbell\'s Slow Kettle Soup',
                                    padding: '10px 20px',
                                }, {
                                    xtype: 'label',
                                    style: 'font-family: franklin; font-size:1.1em;',
                                    cls: 'mission-t',
                                    html: 'Coupons',
                                    padding: '10px 20px',
                                }, {
                                    xtype: 'label',
                                    style: 'font-family: franklin; font-size:1.1em;',
                                    cls: 'mission-t',
                                    html: 'Sharing Guide',
                                    padding: '10px 20px',
                                }, ],
                        },
                        {
                            xtype: 'button',
                            //style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
                            cls: 'offers-mission-btn',
                            text: 'MISSION',
                        },
                        {
                            xtype: 'button',
                            //style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
                            cls: 'offers-recieve-btn',
                            text: 'WHAT YOU\'LL RECIEVE',
                        }, ]
                    },
///
                    {
                        xtype: 'spacer',
                        height: '7px',
                        style: '-webkit-box-shadow: 0px 1px 2px rgba(0,0,0,0.5); background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;',
                        cls:'has-shadow',
                    },
                    {
                        xtype: 'spacer',
                        height: '10px',
                        style: 'background: transparent;'
                    }
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
        this.fireEvent('backButtonCommandOffersDetails', this);
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
