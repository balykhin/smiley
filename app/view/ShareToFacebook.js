var image_1, image_2, image_3, image_4, image_5, t_field;

Ext.define('smiley360.view.ShareToFacebook', {
    extend: 'Ext.Container',
    alias: 'widget.sharetofacebookview',
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
            cls: 'popup-top-panel facebook-background',
            items: [{
                xtype: 'label',
                cls: 'popup-top-title',
                html: 'Earn 5 Smiles Sharing on Facebook',
            }, {
                xtype: 'image',
                docked: 'right',
                cls: 'popup-title-image',
                src: 'resources/images/fb.png',
            }],
        }, {
            xtype: 'panel',
            id: 'xMiddlePanel',
            cls: 'popup-middle-panel',
            items: [{
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'label',
                    cls: 'popup-top-text',
                    html: 'Rate the product:',
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }, {
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
                }],
            }, {
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
                    html: 'Post must contain at least 70 characters.',
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
                xtype: 'panel',
                width: '300px',
                layout: 'hbox',
                defaults: {
                    width: '50%',
                    labelAlign: 'right',
                    labelWidth: '100%',
                },
                items: [{
                    xtype: 'checkboxfield',
                    label: 'Post to Profile Wall.',
                    labelCls: 'popup-checkbox-checked-label',
                    cls: 'popup-checkbox',
                }, {
                    xtype: 'checkboxfield',
                    label: 'Post to Brand Page.',
                    labelCls: 'popup-checkbox-checked-label',
                    cls: 'popup-checkbox',
                }],
            }, {
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