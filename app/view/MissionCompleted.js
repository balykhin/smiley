Ext.define('smiley360.view.MissionCompleted', {
    extend: 'Ext.Container',
    alias: 'widget.missioncomletedview',
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
                    cls: 'popup-title-text',
                    html: 'You\'ve completed this mission!',
                }, {
                    xtype: 'image',
                    docked: 'right',
                    id: 'xTitleImage',
                    cls: 'popup-title-image',
                    src: 'resources/images/smile-successful.png',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [{
                    xtype: 'label',
                    id: 'xMessageText',
                    cls: 'popup-message-text',
                    //style: 'margin: 10px;',
                    html: 'You\'ve earned all the Smiles for the <mission name> mission. Way to go! Don\'t worry, you can still keep sharing about your experience with the sharing tools.',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'Continue Sharing!',
                    id: 'xSubmitButton',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            //Ext.getCmp('xView').doRemoveOffer();
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

    doRemoveOffer: function () {
        var submitView = this;
        var submitData = {
            email: Ext.getCmp('xEmailField').getValue()
        };

        //smiley360.setViewStatus(submitView, smiley360.viewStatus.progress);
        smiley360.services.restorePassword(submitData, function (response) {
            smiley360.setResponseStatus(submitView, response);
        });
    },

    setStatus: function (status) {
        var xEmailField = Ext.getCmp('xEmailField');
        var xTitleImage = Ext.getCmp('xTitleImage');
        var xMessageText = Ext.getCmp('xMessageText');
        var xSubmitButton = Ext.getCmp('xSubmitButton');
        //var xSubmitStatus = Ext.getCmp('xSubmitStatus');

        switch (status) {
            case smiley360.viewStatus.progress: {
                xSubmitButton.setText('POSTING...');
                xSubmitButton.setIcon('resources/images/share-initial.png');
                xSubmitStatus.setStyle('background-color: #F9A419;');

                var statusAnimation = new Ext.Anim({
                    autoClear: false,
                    duration: 2000,
                    easing: 'ease-in',
                    from: { width: 0 },
                    to: { width: this.getWidth() },
                });

                statusAnimation.run(xSubmitStatus.element, 'slide');

                break;
            }
            case smiley360.viewStatus.successful: {
                xEmailField.hide();
                xSubmitButton.setHtml('CLOSE')
                xTitleImage.setSrc('resources/images/smile-successful.png');
                xMessageText.setHtml('Thankyou, your password reminder was sent');
                //xSubmitStatus.setStyle('background-color: #5F9E45;');

                break;
            }
            case smiley360.viewStatus.unsuccessful: {
                xTitleImage.setSrc('resources/images/smile-unsuccessful.png');
                xMessageText.setHtml('Oops, the email address you entered is not found in our member accouns. Try again, or contact us for assistance.');
                //xSubmitStatus.setStyle('background-color: #ED1C24;');

                break;
            }
            default:
        }
        // resize container after state has been changed
        this.setHeight(Ext.getCmp('xRootPanel').element.getHeight());
    }
});