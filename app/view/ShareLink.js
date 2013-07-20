Ext.define('smiley360.view.ShareLink', {
    extend: 'Ext.Container',
    alias: 'widget.sharelinkview',
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
                docked: 'top',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        Ext.getCmp('xView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                id: 'xTopPanel',
                cls: 'popup-top-panel link-background',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-title-text',
                        html: 'Earn 5 Smiles Sharing a Link',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/share-link.png',
                    }],
            }, {
                xtype: 'panel',
                id: 'xMiddlePanel',
                cls: 'popup-middle-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-top-text',
                    html: 'Copy the following link',
                }, {
                    xtype: 'textfield',
                    disabled: true,
                    cls: 'cust-input',
                    value: 'http://smiley360.com/768768768',
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'COPY',
                    icon: 'resources/images/share-copy.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    id: 'xCopyButton',
                    cls: 'popup-post-button',
                    listeners: {
                        tap: function () {
                            Ext.getCmp('xView').doCopy();
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

    doCopy: function () {
    },
});