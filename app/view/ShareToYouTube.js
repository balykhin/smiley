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
                cls: 'popup-top-panel youtube-background',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-title-text',
                        html: 'Earn 5 Smiles Sharing on YouTube',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/youtube_share.png',
                    }],
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-top-text',
                    html: 'Submit a YouTube video URL',
                }, {
                    xtype: 'textfield',
                    required: true,
                    cls: 'cust-input',
                    value: 'www.youttube.com/',
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'checkboxfield',
                    label: 'I disclosed that I received a free sample in my video.',
                    labelAlign: 'right',
                    labelWidth: '100%',
                    labelWrap: true,
                    labelCls: 'popup-checkbox-red-label',
                    //inputCls: 'popup-checkbox-input',
                    cls: 'popup-checkbox',
                    listeners: {
                        check: function () {
                            this.setLabelCls('popup-checkbox-grey-label');
                        },
                        uncheck: function () {
                            this.setLabelCls('popup-checkbox-red-label');
                        }
                    }
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
                            //Ext.getCmp('xView').doShare();
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