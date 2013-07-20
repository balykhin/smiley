Ext.define('smiley360.view.ShareToFace2Face', {
    extend: 'Ext.Container',
    alias: 'widget.sharetoface2faceview',
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
                cls: 'popup-top-panel face2face-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Earn 5 Smiles Sharing on Face2Face',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    cls: 'popup-title-image',
                    src: 'resources/images/share-f2f.png',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel popup-status-container',
                style: 'padding-bottom: 0px;',
                items: [{
                    xtype: 'selectfield',
                    id: 'xPeoplesSelector',
                    autoSelect: false,
                    value: null,
                    required: true,
                    placeHolder: 'How many peolpe you talked to?',
                    cls: 'popup-input popup-input-selector',
                    options: [
                        //{ text: '', value: '' },
                        { text: '1', value: '1' },
                        { text: '2', value: '2' },
                        { text: '3', value: '3' }
                    ]
                }, {
                    xtype: 'textareafield',
                    id: 'xReviewText',
                    maxRows: 5,
                    //maxLength: 84,
                    required: true,
                    placeHolder: 'Write your review',
                    cls: 'popup-input popup-input-text',
                }, {
                    xtype: 'rating',
                    id: 'xRateLabel',
                    label: 'Rate the product:',
                    labelWidth: 'auto',
                    itemsCount: 5,
                    itemCls: 'x-rating-star',
                    itemHoverCls: 'x-rating-star-hover',
                    listeners: {
                        change: function (rate, value, currentValue) {
                            var logMessage = Ext.String.format(
                                'ShareToFace2Face -> Rating changed: { value: {0}, currentValue: {1} }', value, currentValue);

                            console.log(logMessage);

                            if (value < 0) {
                                this.addCls('x-rating-field-required');

                                Ext.getCmp('xReviewText').addCls('popup-input-required');
                                Ext.getCmp('xPeoplesSelector').addCls('popup-input-required');
                            }
                            else {
                                this.removeCls('x-rating-field-required');

                                Ext.getCmp('xReviewText').removeCls('popup-input-required');
                                Ext.getCmp('xPeoplesSelector').removeCls('popup-input-required');
                            }
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'SUBMIT',
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