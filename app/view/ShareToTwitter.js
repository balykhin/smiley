Ext.define('smiley360.view.ShareToTwitter', {
    extend: 'Ext.Container',
    alias: 'widget.sharetotwitterview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xView',
        scrollable: 'vertical',
        cls: 'popup-panel',
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
            cls: 'popup-top-panel twitter-background',
            items: [{
                xtype: 'label',
                cls: 'popup-top-title',
                html: 'Earn 5 Smiles Sharing on Twitter',
            }, {
                xtype: 'image',
                docked: 'right',
                cls: 'popup-title-image',
                src: 'resources/images/tw-1.png',
            }],
        }, {
            xtype: 'panel',
            id: 'xMiddlePanel',
            cls: 'popup-middle-panel',
            items: [{
                xtype: 'textareafield',
                maxRows: 5,
                minLength: 70,
                renderTo: 'output',
                cls: 'popup-post-textarea',
                listeners: {
                    keyup: function () {
                        var postLenght = this.getValue().length;

                        Ext.getCmp('xPostCountLabel').setHtml(postLenght.toString());
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'label',
                    cls: 'popup-post-bottom-text',
                    style: 'color: #878789;',
                    html: 'Tweet must contain a maximum of 84 characters.',
                }, {
                    xtype: 'label',
                    id: 'xPostCountLabel',
                    docked: 'right',
                    cls: 'popup-post-bottom-text',
                    html: '0',
                }],
            }],
        }, {
            xtype: 'panel',
            id: 'xBottomPanel',
            cls: 'popup-bottom-panel',
            items: [{
                xtype: 'label',
                cls: 'popup-post-comment',
                html: 'The following text will automatically be added to your post:',
            }, {
                xtype: 'label',
                cls: 'popup-post-comment-text',
                html: 'Try Campbell\'s Slow Kettle Style Soups and be sure to use this $1.00 off coupon! http://bit.ly/YxVW1D',
            }, {
                xtype: 'button',
                cls: 'popup-post-button',
                html: 'POST',
            }],
        }],
        listeners: {
            initialize: function () {
                this.setHeight(
                    Ext.getCmp('xTopPanel').element.getHeight() +
                    Ext.getCmp('xMiddlePanel').element.getHeight() +
                    Ext.getCmp('xBottomPanel').element.getHeight() + 4);
            },
            hide: function () {
                this.destroy();
            }
        },
    }
});