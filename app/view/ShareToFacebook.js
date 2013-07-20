Ext.define('smiley360.view.ShareToFacebook', {
    extend: 'Ext.Container',
    alias: 'widget.sharetofacebookview',
    requires: [
        'Ext.Rating',
        'Ext.Anim'],
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
                cls: 'popup-top-panel facebook-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Earn 5 Smiles Sharing on Facebook',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/fb.png',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                items: [{
                    xtype: 'rating',
                    label: 'Rate the product:',
                    labelWidth: 'auto',
                    itemsCount: 5,
                    itemCls: 'x-rating-star',
                    itemHoverCls: 'x-rating-star-hover',
                }, {
                    xtype: 'textareafield',
                    maxRows: 5,
                    minLength: 70,
                    id: 'xPostText',
                    cls: 'popup-input popup-input-text',
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
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    defaults: {
                        width: '50%',
                        labelAlign: 'right',
                        labelWidth: '100%',
                    },
                    items: [{
                        xtype: 'checkboxfield',
                        label: 'Post to Profile Wall.',
                        labelCls: 'popup-checkbox-grey-label',
                        cls: 'popup-checkbox',
                    }, {
                        xtype: 'checkboxfield',
                        label: 'Post to Brand Page.',
                        labelCls: 'popup-checkbox-grey-label',
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
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'POST',
                    icon: 'resources/images/share-initial.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    id: 'xShareButton',
                    cls: 'popup-post-button',
                    listeners: {
                        tap: function () {
                            Ext.getCmp('xView').doShare();
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

    doShare: function () {
        var shareView = this;
        var shareData = {
            post: Ext.getCmp('xPostText').getValue()
        };

        smiley360.setViewStatus(shareView, smiley360.viewStatus.progress);
        smiley360.services.shareToFacebook(shareData, function (response) {
            smiley360.setResponseStatus(shareView, response);
        });
    },

    setStatus: function (status) {
        var xShareButton = Ext.getCmp('xShareButton');
        var xStatusIndicator = Ext.getCmp('xStatusIndicator');

        switch (status) {
            case smiley360.viewStatus.progress: {
                xShareButton.setText('POSTING...');
                xShareButton.setIcon('resources/images/share-initial.png');
                xStatusIndicator.setStyle('background-color: #F9A419;');

                var statusAnimation = new Ext.Anim({
                    autoClear: false,
                    duration: 2000,
                    easing: 'ease-in',
                    from: { width: 0 },
                    to: { width: this.getWidth() },
                });

                statusAnimation.run(xStatusIndicator.element, 'slide');

                break;
            }
            case smiley360.viewStatus.successful: {
                xShareButton.setText('POST SUCCESSFUL');
                xShareButton.setIcon('resources/images/share-successful.png');
                xStatusIndicator.setStyle('background-color: #5F9E45;');

                break;
            }
            case smiley360.viewStatus.unsuccessful: {
                xShareButton.setText('POST UNSUCCESSFUL');
                xShareButton.setIcon('resources/images/share-unsuccessful.png');
                xStatusIndicator.setStyle('background-color: #ED1C24;');

                break;
            }
            default:
        }
    }
});