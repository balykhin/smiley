var image_1, image_2, image_3, image_4, image_5, t_field;

Ext.define('smiley360.view.ShareToTwitter', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sharetotwitterview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        cls: 'popup-panel',
        layout: 'fit',
        height: 410,
        items: [
            {
                xtype: 'image',
                cls: 'popup-close-button',
                dock: 'top',
                style: 'background-size: contain;',
                itemId: 'doClose',
                tap: 'onCloseTap',
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                height: 50,
                cls: 'popup-top-twitter-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-top-title',
                        html: 'Earn 5 Smiles Sharing on Twitter',
                    },
                    {
                        xtype: 'image',
                        dock: 'right',
                        width: 30,
                        height: 30,
                        margin: -5,
                        style: 'background-size: contain;',
                        src: 'resources/images/tw-1.png',
                    },
                ],
            },
            {
                xtype: 'panel',
                height: 200,
                cls: 'popup-middle-panel',
                items: [

                    {
                        xtype: 'textareafield',
                        cls: 'popup-post-textarea',
                        maxRows: 5,
                        minLength: 70,
                        border: 1,
                        renderTo: 'output',
                        listeners: {
                            keyup: function () {
                                var postLenght = this.getValue().length;

                                t_field.setHtml(postLenght.toString());
                            }
                        }
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'popup-post-bottom-text',
                                style: 'color: #878789;',
                                html: 'Tweet must contain a maximum of 84 characters.',
                            },
                            {
                                xtype: 'label',
                                dock: 'right',
                                cls: 'popup-post-bottom-text',
                                html: '0',
                                listeners: {
                                    painted: function () {
                                        t_field = this;
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
            {
                xtype: 'panel',
                height: 160,
                cls: 'popup-bottom-panel',
                items: [

                    {
                        xtype: 'label',
                        cls: 'popup-post-comment',
                        html: 'The following text will automatically be added to your post:',
                    },
                    {
                        xtype: 'label',
                        cls: 'popup-post-comment-text',
                        html: 'Try Campbell\'s Slow Kettle Style Soups and be sure to use this $1.00 off coupon! http://bit.ly/YxVW1D',
                    },
                    {
                        xtype: 'button',
                        margin: '30 0 0 0',
                        itemId: 'doShare',
                        cls: 'popup-post-button',
                        html: 'POST',
                        tap: 'onCloseTap',
                    },
                ],
            },
        ],
        listeners: [
            {
                delegate: '#doClose',
                event: 'tap',
                fn: 'onCloseTap'
            },
        ],
    },

    onCloseTap: function () {
        this.hide();
        this.destroy();
    },
});