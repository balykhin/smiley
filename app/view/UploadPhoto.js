var image_1, image_2, image_3, image_4, image_5, t_field;

Ext.define('smiley360.view.UploadPhoto', {
    extend: 'Ext.Container',
    alias: 'widget.uploadphotoview',
    requires: ['Ext.Rating', 'Ext.Anim'],
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
                cls: 'popup-top-panel photo-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Earn 5 Smiles uploading a Photo',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/photo.png',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'panel',
                        layout: 'vbox',
                        style: 'padding-top: 15px;',
                        items: [{
                            xtype: 'button',
                            text: 'TAKE PHOTO',
                            id: 'xTakePhotoButton',
                            cls: 'popup-photo-button',
                            listeners: {
                                tap: function () {
                                    //Ext.getCmp('xView').doTakePhoto();
                                }
                            },
                        }, {
                            xtype: 'button',
                            text: 'BROWSE PHOTO',
                            id: 'xBrowsePhotoButton',
                            cls: 'popup-photo-button',
                            listeners: {
                                tap: function () {
                                    //Ext.getCmp('xView').doBrowsePhoto();
                                }
                            },
                        }]
                    }, {
                        xtype: 'textareafield',
                        id: 'xPostText',
                        flex: 1,
                        maxRows: 5,
                        //maxLength: 84,
                        cls: 'popup-input popup-input-text',
                        listeners: {
                            keyup: function () {
                                var postLenght = this.getValue().length;
                                var xPostCountLabel = Ext.getCmp('xPostCountLabel');

                                xPostCountLabel.setHtml(postLenght.toString());

                                if (postLenght > 84) {
                                    xPostCountLabel.setStyle('color: red;')
                                }
                                else {
                                    xPostCountLabel.setStyle('color: #878789;')
                                }
                            }
                        }
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        cls: 'popup-post-bottom-text',
                        style: 'color: #878789;',
                        html: 'Post must contain a maximum of 84 characters.',
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
                        id: 'xFacebookCheckbox',
                        label: 'Post to Facebook',
                        labelCls: 'popup-checkbox-grey-label',
                        cls: 'popup-checkbox',
                        checked: true,
                        listeners: {
                            check: function () {
                                Ext.getCmp('xView').onCheck();
                            },
                            uncheck: function () {
                                Ext.getCmp('xView').onUncheck();
                            }
                        }
                    }, {
                        xtype: 'checkboxfield',
                        id: 'xTwitterCheckbox',
                        label: 'Post to Twitter.',
                        labelCls: 'popup-checkbox-grey-label',
                        cls: 'popup-checkbox',
                        listeners: {
                            check: function () {
                                Ext.getCmp('xView').onCheck();
                            },
                            uncheck: function () {
                                Ext.getCmp('xView').onUncheck();
                            }
                        }
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
                            //Ext.getCmp('xView').doUpload();
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

    onCheck: function () {
        Ext.getCmp('xTakePhotoButton').setCls('popup-photo-button');
        Ext.getCmp('xBrowsePhotoButton').setCls('popup-photo-button');
        Ext.getCmp('xFacebookCheckbox').setLabelCls('popup-checkbox-grey-label');
        Ext.getCmp('xTwitterCheckbox').setLabelCls('popup-checkbox-grey-label');
    },

    onUncheck: function () {
        var xTwitterCheckbox = Ext.getCmp('xTwitterCheckbox');
        var xFacebookCheckbox = Ext.getCmp('xFacebookCheckbox');

        if (!xTwitterCheckbox.getChecked() &&
            !xFacebookCheckbox.getChecked()) {

            xTwitterCheckbox.setLabelCls('popup-checkbox-red-label');
            xFacebookCheckbox.setLabelCls('popup-checkbox-red-label');

            Ext.getCmp('xTakePhotoButton').setCls('popup-photo-button-required');
            Ext.getCmp('xBrowsePhotoButton').setCls('popup-photo-button-required');
        }
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