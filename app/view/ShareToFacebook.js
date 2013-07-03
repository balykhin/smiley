Ext.define('smiley360.view.ShareToFacebook', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sharetofacebookview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        cls: 'popup-panel',
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-top-title',
                        html: 'Earn 5 Smiles Sharing on Facebook',
                    },
                    {
                        xtype: 'image',
                        dock: 'right',
                        width: 20,
                        height: 20,
                        src: 'resources/images/fb.png',
                    },
                ],
            },
            {
                xtype: 'panel',
                cls: 'popup-middle-panel',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'label',
                                margin: '5 5 5 0',
                                cls: 'popup-rate-text',
                                html: 'Rate the product:',
                            },
                            {
                                xtype: 'image',
                                margin: 15,
                                src: 'resources/images/smile-bullet.png',
                                listeners: {
                                    tap: function () {
                                        this.setSrc('resources/images/fb.png');
                                    }
                                }
                            },
                            {
                                xtype: 'image',
                                padding: 15,
                                src: 'resources/images/smile-bullet.png',
                                listeners: {
                                    tap: function () {
                                        this.setSrc('resources/images/fb.png');
                                    }
                                }
                            },
                            {
                                xtype: 'image',
                                padding: 15,
                                src: 'resources/images/smile-bullet.png',
                                listeners: {
                                    tap: function () {
                                        this.setSrc('resources/images/fb.png');
                                    }
                                }
                            },
                            {
                                xtype: 'image',
                                padding: 15,
                                src: 'resources/images/smile-bullet.png',
                                listeners: {
                                    tap: function () {
                                        this.setSrc('resources/images/fb.png');
                                    }
                                }
                            },
                            {
                                xtype: 'image',
                                padding: 15,
                                src: 'resources/images/smile-bullet.png',
                                listeners: {
                                    tap: function () {
                                        this.setSrc('resources/images/fb.png');
                                    }
                                }
                            },
                        ],
                    },
                    {
                        xtype: 'textareafield',
                        cls: 'popup-post-textarea',
                        maxRows: 5,
                        minLength: 70,
                        border: 1,
                        renderTo: 'output',
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'popup-post-buttom-text',
                                style: 'color: #878789;',
                                html: 'Post must contain at least 70 characters.',
                            },
                            {
                                xtype: 'label',
                                dock: 'right',
                                cls: 'popup-post-buttom-text',
                                html: '34',
                            },
                        ],
                    },
                ],
            },
            {
                xtype: 'panel',
                cls: 'popup-buttom-panel',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                width: '50%',
                                checked: false,
                                label: 'Post to Profile Wall.',
                                labelAlign: 'right',
                            },
                            {
                                xtype: 'checkboxfield',
                                width: '50%',
                                checked: false,
                                label: 'Post to Profile Wall.',
                                labelAlign: 'right',
                            },
                        ],
                    },
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
                        itemId: 'doShare',
                        cls: 'popup-post-button',
                        html: 'POST',
                    },
                ],
            },
        ],
        listeners: [
            {
                delegate: "#doShare",
                event: "tap",
                fn: "onShareTap"
            }],
    }
});