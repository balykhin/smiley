Ext.define('smiley360.view.ShareToYouTube', {
    extend: 'Ext.Container',
    alias: 'widget.sharetoyoutubeview',
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
            cls: 'popup-top-panel youtube-background',
            items: [
                {
                    xtype: 'label',
                    cls: 'popup-top-title',
                    html: 'Earn 5 Smiles Sharing on YouTube',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/youtube_share.png',
                }],
        }, {
            xtype: 'panel',
            id: 'xMiddlePanel',
            cls: 'popup-middle-panel',
            items: [{
                xtype: 'label',
                cls: 'popup-top-text',
                html: 'Submit a YoutTube video URL',
            }, {
                xtype: 'textfield',
                required: true,
                cls: 'cust-input',
                value: 'www.youttube.com/',
            }]
        }, {
            xtype: 'panel',
            id: 'xBottomPanel',
            cls: 'popup-bottom-panel',
            items: [{
                xtype: 'checkboxfield',
                label: 'I disclosed that I received a free sample in my video.',
                labelAlign: 'right',
                labelWidth: '100%',
                labelWrap: true,
                labelCls: 'popup-checkbox-unchecked-label',
                //inputCls: 'popup-checkbox-input',
                cls: 'popup-checkbox',
                listeners: {
                    check: function () {
                        this.setLabelCls('popup-checkbox-checked-label');
                    },
                    uncheck: function () {
                        this.setLabelCls('popup-checkbox-unchecked-label');
                    }
                }
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