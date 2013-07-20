Ext.define('smiley360.view.TermsOfUse', {
    extend: 'Ext.Container',
    alias: 'widget.termsofuseview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xView',
        scrollable: 'vertical',
        cls: 'popup-panel',
        items: [{
            xtype: 'panel',
            id: 'xRootPanel',
            cls: 'popup-root-panel',
            items: [{
                xtype: 'image',
                //docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        Ext.getCmp('xView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel forgetpwd-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Terms of Use',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-message-title',
                    html: 'SMILEY360.COM TERMS OF SERVICE AGREEMENT',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-message-text',
                    html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue turpis, tempus at quam eget, blandit interdum nisl. Nam ipsum elit, malesuada sit amet tempor lobortis, ullamcorper sit amet mauris. Nullam volutpat faucibus dignissim. Donec at lacus a erat imperdiet blandit. Proin cursus euismod nisi quis tempor. Nam rutrum neque ut orci elementum fermentum at sed tortor. Nullam a congue nunc. Quisque congue venenatis euismod. Donec tempor condimentum malesuada. Ut sit amet nisl luctus, sodales nisi et, commodo mauris. Pellentesque varius vitae est id sagittis. Sed sed tortor et diam dictum porta. Ut vehicula metus at lectus scelerisque, tincidunt congue augue adipiscing. Sed imperdiet magna quis velit iaculis, ac vulputate orci auctor. Nulla fringilla metus luctus nulla facilisis, tempor fermentum neque consequat. Duis ornare molestie erat, sed suscipit lacus tempor et. Nam posuere feugiat ante, sit amet aliquet lorem tincidunt in.',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'CLOSE',
                    id: 'xCloseButton',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            Ext.getCmp('xView').destroy();
                        }
                    },
                }],
            }],
        }],
        listeners: {
            initialize: function () {
                this.setHeight(Ext.getCmp('xRootPanel').element.getHeight());
            },
            hide: function () {
                this.destroy();
            }
        },
    },
});