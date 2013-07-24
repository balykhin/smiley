var iframeUrl = 'http://173.18.18.52/Index.html?rootUrl=' + (Ext.device ? Ext.device.Device.uuid : '11111');

Ext.define('smiley360.view.LoginWithFacebook', {
    extend: 'Ext.Container',
    alias: 'widget.loginwithfacebookview',
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
                    html: 'Recover your Password.',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    id: 'xTitleImage',
                    cls: 'popup-title-image',
                    src: 'resources/images/lock.png',
                }],
            }, {
                xtype: 'panel',
                height: 400,
                html: '<iframe src="' + iframeUrl + '"frameborder="no" style="width: 100%; height: 400px;"></iframe>'
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