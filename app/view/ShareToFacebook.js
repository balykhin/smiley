var image_1, image_2, image_3, image_4, image_5, t_field, my_panel;

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
                cls: 'popup-top-facebook-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-top-title',
                        html: 'Earn 5 Smiles Sharing on Facebook',
                    },
                    {
                        xtype: 'image',
                        dock: 'right',
                        width: 30,
                        height: 30,
                        margin: -5,
                        style: 'background-size: contain;',
                        src: 'resources/images/fb.png',
                    },
                ],
            },
            //{
            //    xtype: 'panel',
            //    height: 10,
            //    cls: 'popup-semi-top-panel',
            //    items: [
            //        {
            //            xtype: 'panel',
            //            layout: 'vbox',
            //            items: [    
            //                {
            //                    xtype: 'panel',
            //                    width: '33%',
            //                    style: 'background:transparent;',
            //                    listeners:
            //                        {
            //                            painted: function ()
            //                            {
            //                                my_pr_panel = this; 
            //                            }
            //                        }
            //                },
            //                {
            //                    xtype: 'panel',
            //                    width: '67%',
            //                },
            //            ],
            //        },
            //    ],
            //},
            {
                xtype: 'panel',
                height: 200,
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
                                name: 'rate-1',
                                itemId: 'rate1',
                                padding: '0 0 0 30',
                                src: 'resources/images/sad-smile-bullet.png',
                                listeners: {
                                    painted: function () {
                                        image_1 = this;
                                    },
                                    tap: function () {
                                        image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        image_4.setSrc('resources/images/sad-smile-bullet.png');
                                        image_5.setSrc('resources/images/sad-smile-bullet.png');

                                        if (this.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            this.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            this.setSrc('resources/images/sad-smile-bullet.png');
                                        };
                                    },
                                }
                            },
                            {
                                xtype: 'image',
                                name: 'rate-2',
                                itemId: 'rate2',
                                padding: '0 0 0 30',
                                src: 'resources/images/sad-smile-bullet.png',
                                listeners: {
                                    painted: function () {
                                        image_2 = this;
                                    },
                                    tap: function () {
                                        image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        image_4.setSrc('resources/images/sad-smile-bullet.png');
                                        image_5.setSrc('resources/images/sad-smile-bullet.png');

                                        if (image_1.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_1.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (this.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            this.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            this.setSrc('resources/images/sad-smile-bullet.png');
                                        };
                                    },
                                },
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                name: 'rate-3',
                                itemId: 'rate3',
                                src: 'resources/images/sad-smile-bullet.png',
                                listeners: {
                                    painted: function () {
                                        image_3 = this;
                                    },
                                    tap: function () {
                                        image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        image_4.setSrc('resources/images/sad-smile-bullet.png');
                                        image_5.setSrc('resources/images/sad-smile-bullet.png');

                                        if (image_1.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_1.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        };
                                        if (image_2.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_2.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        };
                                        if (this.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            this.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            this.setSrc('resources/images/sad-smile-bullet.png');
                                        };
                                    }
                                }
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                name: 'rate-4',
                                itemId: 'rate4',
                                src: 'resources/images/sad-smile-bullet.png',
                                listeners: {
                                    painted: function () {
                                        image_4 = this;
                                    },
                                    tap: function () {
                                        image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        image_4.setSrc('resources/images/sad-smile-bullet.png');
                                        image_5.setSrc('resources/images/sad-smile-bullet.png');

                                        if (image_1.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_1.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (image_2.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_2.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (image_3.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_3.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (this.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            this.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            this.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                    }
                                }
                            },
                            {
                                xtype: 'image',
                                padding: '0 0 0 30',
                                name: 'rate-5',
                                itemId: 'rate5',
                                src: 'resources/images/sad-smile-bullet.png',
                                listeners: {
                                    painted: function () {
                                        image_5 = this;
                                    },
                                    tap: function () {
                                        image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        image_4.setSrc('resources/images/sad-smile-bullet.png');
                                        image_5.setSrc('resources/images/sad-smile-bullet.png');

                                        if (image_1.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_1.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_1.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (image_2.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_2.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_2.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (image_3.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_3.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_3.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (image_4.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            image_4.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            image_4.setSrc('resources/images/sad-smile-bullet.png');
                                        };

                                        if (this.getSrc() == 'resources/images/sad-smile-bullet.png') {
                                            this.setSrc('resources/images/smile-bullet.png');
                                        }
                                        else {
                                            this.setSrc('resources/images/sad-smile-bullet.png');
                                        };
                                    },
                                },
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
                                html: 'Post must contain at least 70 characters.',
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
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                width: '50%',
                                items: [
                                    {
                                        xtype: 'checkboxfield',
                                        //width: 50,
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'popup-checkbox-text',
                                        html: 'Post to Profile Wall.',
                                    }
                                ],
                            },
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                width: '50%',
                                items: [
                                    {
                                        xtype: 'checkboxfield',
                                        //width: 50,
                                        checked: false,
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'popup-checkbox-text',
                                        html: 'Post to Brand Page.',
                                    }
                                ],
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
                delegate: '#doClose',
                event: 'tap',
                fn: 'onCloseTap'
            },
            {
                delegate: "#doShare",
                event: "tap",
                fn: "onShareTap"
            }
        ],
    },

    onCloseTap: function () {
        this.hide();
        this.destroy();
    },
});