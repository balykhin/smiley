var hide_panel, first_time, dock_panel;

Ext.define('smiley360.view.Home', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homeview',
    requires: [
        'Ext.TitleBar',
        'Ext.Rating',
        'Ext.Video',
		'Ext.carousel.Carousel',
    ],
    config: {
        id: 'xHomeView',
        tabBarPosition: 'bottom',
        cls: 'cust-tabbar normal-page-bg',
        items: [{
            title: 'HOME',
            iconCls: 'home-img',
            styleHtmlContent: true,
            scrollable: true,
            items: [{
                xtype: 'toolbar',
                title: 'HOME',
                cls: 'home-title',
                docked: 'top',
                ui: 'light',
                items: [{
                    xtype: 'button',
                    text: '',
                    ui: 'plain',
                    iconCls: 'back-btn',
                    iconMask: true,
                    listeners: {
                        tap: function () {
                            this.up('#xHomeView').fireEvent('backButtonCommandHome', this);
                        }
                    }
                }, {
                    xtype: 'spacer'
                }, {
                    xtype: 'button',
                    itemId: 'menuBtn',
                    iconCls: 'menu-btn',
                    iconMask: true,
                    ui: 'plain',
                    text: '',
                    listeners:
                    {
                        tap: function () {
                            if (hide_panel.getHidden() == false) {
                                //this.setIconCls();
                                //this.setIcon('resources/images/menu-btn@2x.png');
                                hide_panel.hide({ type: 'slide', direction: 'top', duration: 300 });
                                Ext.getCmp('home-left').setMargin('0px 0px 0px 0px');
                                Ext.getCmp('right-home').setMargin('0px 0px 0px 0px');
                                //dock_panel.show({ type: 'slide', direction: 'right', duration: 300 });
                                //this.setSrc('resources/images/menu-btn@2x.png');
                                //dock_panel.getLayout().setItemFlex(dock_panel, 1);
                            }
                            else {
                                //this.setIconCls('menu-btn');
                                Ext.getCmp('home-left').setMargin('0px 200px 0px -200px');
                                Ext.getCmp('right-home').setMargin('0px 200px 0px -200px');
                                //this.setIcon('resources/images/shade_menu.png');
                                hide_panel.show({ type: 'slide', direction: 'left', duration: 300 });
                                //this.setSrc('resources/images/menu-btn.png');
                                //dock_panel.getLayout().setItemFlex(dock_panel, 2);

                            }
                        },
                    },
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                //flex: 1,
                items: [{
                    xtype: 'container',
                    layout: 'vbox',
                    id: 'home-left',
                    //style:'margin-left:-40px;',
                    listeners: {
                        painted: function () {
                            dock_panel = this;
                        },
                    },
                    items: [{
                        xtype: 'spacer',
                        height: '14px',
                        style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
                    }, {
                        xtype: 'spacer',
                        height: '7px',
                        style: 'background-color: #efecea;'
                    }, {
                        xtype: 'container',
                        laytout: { type: 'vbox' },
                        items: [{
                            xtype: 'container',
                            cls: 'has-shadow',
                            layout: { type: 'hbox' },
                            items: [{
                                xtype: 'label',
                                html: 'WHAT IS HAPPENING?',
                                cls: 'heading-text active-sign',
                                style: 'padding-left: 15px;',
                                flex: 2
                            }, {
                                xtype: 'label',
                                id: 'xUserLevelLabel',
                                html: 'LEVEL',
                                cls: 'heading-text headings-home',
                            }, {
                                xtype: 'rating',
                                id: 'xUserLevelRating',
                                disabled: true,
                                itemsCount: 5,
                                baseCls: 'x-level-field',
                                itemCls: 'x-level-star',
                                itemHoverCls: 'x-level-star-hover',
                            }],
                        }, {
                            xtype: 'container',
                            id: 'xWhatsHappeningList',
                            laytout: { type: 'vbox' },
                        }, {
                            xtype: 'spacer',
                            height: '10px',
                            style: 'background-color: #f4f3f1; margin: 0px 2px;'
                        }, {
                            xtype: 'spacer',
                            height: '7px',
                            style: 'background-color: #efecea;'
                        }, {
                            xtype: 'label',
                            html: '<p>SPECIAL OFFERS</p>',
                            cls: 'heading-text has-shadow',
                            style: 'padding-left: 15px;'
                        }, {
                            xtype: 'container',
                            style: 'background-color: #efecea',
                            items: [{
                                xtype: 'carousel',
                                id: 'xSpecialOffersList',
                                direction: 'horizontal',
                                style: 'background-color: #efecea',
                                dragable: false,
                                indicator: false,
                                defaults: {
                                    styleHtmlContent: true
                                },
                                width: '100%',
                                height: 100,
                            }, {
                                xtype: 'button',
                                cls: 'specialoffers-left-btn',
                            }, {
                                xtype: 'button',
                                cls: 'specialoffers-right-btn',
                            }],
                        }, {
                            xtype: 'container',
                            style: 'background-color: #f4f3f1; margin: 0px 2px;',
                            layout: { type: 'hbox' },
                            items: [{
                                xtype: 'label',
                                html: '<p style="font-family: din medium; font-size: 10px; line-height: 2.8em; color: #8f807d; margin-left: 5px;"><span style="border-bottom: 1px solid #faa61b; color: #6d605d;">Refer Friends</span> now and earn Smiles!</p>'
                            }, {
                                xtype: 'button',
                                text: '',
                                ui: 'plain',
                                cls: 'gray_bg',
                                iconCls: 'mobile_share',
                                iconMask: true
                            }, {
                                xtype: 'button',
                                text: '',
                                ui: 'plain',
                                cls: 'gray_bg',
                                iconCls: 'email_share',
                                iconMask: true
                            }, {
                                xtype: 'button',
                                text: '',
                                ui: 'plain',
                                cls: 'gray_bg',
                                iconCls: 'fb_share',
                                iconMask: true
                            }, {
                                xtype: 'button',
                                text: '',
                                ui: 'plain',
                                cls: 'gray_bg',
                                iconCls: 'twitter_share',
                                iconMask: true
                            }]
                        }, {
                            xtype: 'spacer',
                            height: '7px',
                            style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

                        }, {
                            xtype: 'spacer',
                            height: '10px',
                            style: 'background: transparent;'
                        }]
                    }],
                }, {//end vbox container
                    xtype: 'panel',
                    layout: 'vbox',
                    //flex:0.45,
                    id: 'right-home',
                    items: [{
                        xtype: 'container', layout: 'vbox',
                        style: 'font-family: franklin; text-align: right;',
                        items: [{
                            xtype: 'container', layout: 'vbox',
                            //padding: '0px 20px',
                            style: 'color: #333132; text-align: right; min-height: 60px; min-width: 90px; background-color:white;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
                            margin: '0px 0px 0px 38px ',
                            cls: 'has-shadow',
                            docked: 'top',
                            items: [{
                                xtype: 'image',
                                //src: '',
                                //width: 50,
                                //height: 60,
                                style: ' min-height: 60px; min-width: 80px;background-color:white;',

                            }, {
                                xtype: 'label',
                                style: 'padding-top: 10px;',
                                html: 'Noel Zahra',
                                style: 'font-size:1.4em; margin-bottom: -8px;text-align: right;',
                            }, {
                                xtype: 'label',
                                html: 'Austin, TX',
                                //padding: '-8px 0px 0px 0px',
                                style: 'padding-bottom: 10px;',
                                style: 'font-size: 0.8em; margin-bottom: 8px; margin-left: 2px; text-align: right;',
                            }],
                        }, {
                            xtype: 'container', layout: 'vbox',
                            //padding: '0px 20px',
                            docked: 'right',
                            style: 'color: white; font-family: franklin; font-size:1.4em; text-align: right;',
                            padding: '30px 10px',
                            items: [{
                                xtype: 'button',
                                html: 'Edit Profile',
                                margin: '20px 0px 0px 0px',
                                //padding: '0px 20px 0px 0px',
                                style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                cls: 'listmenuitem',
                                ui: 'plain',
                                listeners: {
                                    tap: function () {
                                        this.up('#xHomeView').fireEvent('getProfileHomeCommand', this);
                                    }
                                }
                            }, {
                                xtype: 'button',
                                text: 'Refer Friends',
                                margin: '20px 0px 0px 0px',
                                style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                cls: 'listmenuitem',
                                ui: 'plain',
                            }, {
                                xtype: 'button',
                                text: 'Terms of Use',
                                margin: '20px 0px 0px 0px',
                                style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                cls: 'listmenuitem',
                                ui: 'plain',
                            }, {
                                xtype: 'button',
                                text: 'Tutorial',
                                margin: '20px 0px 0px 0px',
                                style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                cls: 'listmenuitem',
                                ui: 'plain',
                            }, {
                                xtype: 'button',
                                text: 'Contact Us',
                                margin: '20px 0px 0px 0px',
                                style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                cls: 'listmenuitem',
                                ui: 'plain',
                            }, {
                                xtype: 'button',
                                text: 'Log Out',
                                margin: '20px 0px 0px 0px',
                                style: 'color: white; font-family: franklin; font-weight: normal; text-align: right;',
                                cls: 'listmenuitem',
                                ui: 'plain',
                            }],
                        }],
                    }],///end add
                    listeners: {
                        initialize: function () {
                            hide_panel = this;
                            hide_panel.setWidth(0);
                            hide_panel.hide();
                        },
                    },
                }]//end panel added
            }]//ens strange container
        }, {
            title: 'MISSIONS',
            iconCls: 'mission-img',
            styleHtmlContent: true,
            scrollable: true,
            items: [{
                xtype: 'toolbar',
                title: 'MISSIONS',
                cls: 'home-title',
                docked: 'top',
                ui: 'light',
            }]
        }, {
            title: 'SHARE',
            iconCls: 'share-img',
            styleHtmlContent: true,
            scrollable: true,

        }, {
            title: 'OFFERS',
            iconCls: 'offers-img',
            items: [{
                xtype: 'toolbar',
                title: 'SIGN UP',
                docked: 'top',
                ui: 'light',
                items: [{
                    xtype: 'button',
                    text: '',
                    ui: 'plain',
                    iconCls: 'cust-back',
                    itemId: 'backBtn'
                }, {
                    xtype: 'spacer'
                }, {
                    xtype: 'button',
                    iconCls: 'cust-menu',
                    ui: 'plain',
                    text: '',
                    itemId: 'menuBtn'
                }],
            }],
        }, {
            title: 'CONNECT',
            iconCls: 'connect-img',
            items: [{
                xtype: 'toolbar',
                title: 'SIGN UP',
                docked: 'top',
                ui: 'light',
                items: [{
                    xtype: 'button',
                    text: '',
                    ui: 'plain',
                    iconCls: 'cust-back',
                    itemId: 'backBtn'
                }, {
                    xtype: 'spacer'
                }, {
                    xtype: 'button',
                    iconCls: 'cust-menu',
                    ui: 'plain',
                    text: '',
                    itemId: 'menuBtn'
                }],
            }],
        }],
        listeners: {
            show: function () {
                console.log('Home view showed!');

                this.setUserLevel();
                this.setWhatsHappening();
                this.setSpecialOffers();
            },
        },
    },

    oneditLabel: function () {
        console.log("oneditLabel");
        this.fireEvent('oneditLabelCommand', this);
    },

    setUserLevel: function () {
        var userLevel = smiley360.userData.UserLevel
            ? smiley360.userData.UserLevel : 0;

        this.down('#xUserLevelLabel').setHtml('LEVEL ' + userLevel);

        var xUserLevelRating = this.down('#xUserLevelRating');

        xUserLevelRating.applyValue(-1);
        xUserLevelRating.setValue(userLevel - 1);
    },

    setWhatsHappening: function () {
        var xWhatsHappeningList = this.down('#xWhatsHappeningList');
        xWhatsHappeningList.removeAll(true, true);

        for (var key in smiley360.userData.WhatsHappening) {
            var oneItem = smiley360.userData.WhatsHappening[key];
            var oneElement = new Ext.Container({ layout: 'hbox' });

            oneElement.add(new Ext.Img(
            {
                flex: 2,
                src: oneItem.iconURL,
                cls: 'whatshappening-image',
            }));

            oneElement.add(new Ext.Label(
            {
                flex: 8,
                html: oneItem.text,
                cls: 'whatshappening-label'
            }));

            xWhatsHappeningList.add(oneElement);
        }
    },

    setSpecialOffers: function () {
        var xSpecialOffersList = this.down('#xSpecialOffersList');
        xSpecialOffersList.removeAll(true, true);

        for (var key in smiley360.userData.SpecialOffers) {
            var oneItem = smiley360.userData.SpecialOffers[key];
            var oneElement = new Ext.Container({ layout: 'hbox' });

            oneElement.add(new Ext.Label(
            {
                flex: 8,
                html: oneItem.desc,
                cls: 'specialoffers-label'
            }));

            oneElement.add(new Ext.Img(
            {
                flex: 2,
                src: oneItem.link,
                cls: 'specialoffers-image',
            }));

            xSpecialOffersList.add(oneElement);
        }
    },
});