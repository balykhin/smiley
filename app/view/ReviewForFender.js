var xIsReviewState = true;

Ext.define('smiley360.view.ReviewForFender', {
    extend: 'Ext.Container',
    alias: 'widget.reviewforfenderview',
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
                cls: 'popup-top-panel forgetpwd-background',
                items: [{
                    xtype: 'label',
                    id: 'xTitleLabel',
                    cls: 'popup-title-text',
                    html: 'Add your Review for Fender',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                id: 'xReviewPanel',
                cls: 'popup-middle-panel popup-status-container',
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'rating',
                        label: 'Rate the product:',
                        labelWidth: 'auto',
                        itemsCount: 5,
                        itemCls: 'x-rating-star',
                        itemHoverCls: 'x-rating-star-hover',
                    }, {
                        xtype: 'button',
                        docked: 'right',
                        text: 'ADD PHOTO',
                        id: 'xAddPhotoButton',
                        cls: 'popup-photo-button',
                        style: 'height: 30px; padding: 5px; margin-top: -3px;',
                        listeners: {
                            tap: function () {
                                //Ext.getCmp('xView').doAddPhoto();
                            }
                        },
                    }]
                }, {
                    xtype: 'textareafield',
                    maxRows: 5,
                    minLength: 70,
                    id: 'xReviewText',
                    cls: 'popup-input popup-input-text',
                    listeners: {
                        keyup: function () {
                            var postLenght = this.getValue().length;

                            Ext.getCmp('xReviewCountLabel').setHtml(postLenght.toString());
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
                        id: 'xReviewCountLabel',
                        docked: 'right',
                        cls: 'popup-post-bottom-text',
                        html: '0',
                    }],
                }],
            }, {
                xtype: 'panel',
                id: 'xGuidelinesPanel',
                cls: 'popup-middle-panel',
                hidden: true,
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '1.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'Please remember the FTC requires you to mention that you received a free sample courtesy of Smiley360 when sharing.',
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '2.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'Written from the 1st person perspective about a personal expierence with a brand, product or service',
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '3.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'Generally, 1 to 2 paragraphs with 175-300 words',
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '4.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'May contain a photograph, video or link',
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '5.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'Colorful language and imagery is fine, but threads, harassment, profanity, lewdness or other inappropriate displays will be flagged and removed.',
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '6.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'Reviews should be factually accurate. If the review or opnition contains facts, care should be taken not to exaggerate or misrepresent the expirience.',
                    }]
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        minWidth: 20,
                        cls: 'popup-guidelines-text',
                        html: '7.'
                    }, {
                        xtype: 'label',
                        maxWidth: '95%',
                        cls: 'popup-guidelines-text',
                        html: 'Reviews should be unbiased and objective when possible.',
                    }]
                }]
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'checkboxfield',
                        label: 'You agree to the ',
                        labelAlign: 'right',
                        labelWidth: '100%',
                        labelCls: 'popup-checkbox-grey-label',
                        cls: 'popup-checkbox',
                    }, {
                        xtype: 'button',
                        ui: 'plain',
                        cls: 'popup-checkbox-link',
                        html: 'Review Guidelines',
                        listeners: {
                            tap: function () {
                                Ext.getCmp('xView').showGuidelines();
                            }
                        }
                    }],
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'ADD REVIEW',
                    id: 'xAddReviewButton',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            if (xIsReviewState) {
                                Ext.getCmp('xView').doAddReview();
                            }
                            else {
                                Ext.getCmp('xView').showReviewForm();
                            }
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

    doAddReview: function () {
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
    },

    showReviewForm: function () {
        xIsReviewState = true;

        Ext.getCmp('xReviewPanel').show();
        Ext.getCmp('xGuidelinesPanel').hide();
        Ext.getCmp('xTitleLabel').setHtml('Add your Review for Fender')
        Ext.getCmp('xAddReviewButton').setText('ADD REVIEW');

        this.setHeight(Ext.getCmp('xRootPanel').element.getHeight());
    },

    showGuidelines: function () {
        xIsReviewState = false;

        Ext.getCmp('xReviewPanel').hide();
        Ext.getCmp('xGuidelinesPanel').show();
        Ext.getCmp('xTitleLabel').setHtml('Review Guidelines')
        Ext.getCmp('xAddReviewButton').setText('GO BACK TO YOUR REVIEW');

        this.setHeight(Ext.getCmp('xRootPanel').element.getHeight());
    },
});