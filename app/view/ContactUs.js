Ext.define('smiley360.view.ContactUs', {
    extend: 'Ext.Container',
    alias: 'widget.contactusview',
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
                //docked: 'top',
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
                    html: 'Contact Us',
                }],
            }, {
                xtype: 'panel',
                id: 'xStatusIndicator',
                cls: 'popup-status-indicator',
            }, {
                xtype: 'panel',
                cls: 'popup-bottom-panel popup-status-container',
                items: [{
                    xtype: 'label',
                    cls: 'popup-message-title',
                    html: 'SEND US A MESSAGE',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-middle-panel',
                items: [{
                    xtype: 'textfield',
                    id: 'xUserName',
                    disabled: true,
                    cls: 'cust-input',
                }, {
                    xtype: 'textfield',
                    id: 'xUserEmail',
                    disabled: true,
                    cls: 'cust-input',
                }, {
                    xtype: 'selectfield',
                    id: 'xCommentCategories',
                    autoSelect: false,
                    value: null,
                    required: true,
                    placeHolder: 'Inquiring about',
                    cls: 'popup-input popup-input-selector',
                }, {
                    xtype: 'textareafield',
                    id: 'xCommentText',
                    maxRows: 5,
                    required: true,
                    placeHolder: 'Insert question or comment',
                    cls: 'popup-input popup-input-text',
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    id: 'xSendButton',
                    text: 'SEND MESSAGE',
                    icon: 'resources/images/share-initial.png',
                    iconAlign: 'right',
                    iconCls: 'popup-post-icon',
                    cls: 'popup-submit-button',
                    listeners: {
                        tap: function () {
                            Ext.getCmp('xView').doSendMessage();
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

    doSendMessage: function () {
        var thisView = this;
        var messageData = {
            userId: smiley360.UserId,
            userName: this.down('#xUserName').getValue(),
            userEmail: this.down('#xUserEmail').getValue(),
            commentCategoryId: this.down('#xCommentCategories').getValue(),
            commentText: this.down('#xCommentText').getValue(),
        };

        smiley360.setViewStatus(thisView, smiley360.viewStatus.progress);
        smiley360.services.sendMessage(messageData, function (response) {
            smiley360.setResponseStatus(thisView, response);
        });
    },

    setStatus: function (status) {
        var xSendButton = Ext.getCmp('xSendButton');
        var xStatusIndicator = Ext.getCmp('xStatusIndicator');

        switch (status) {
            case smiley360.viewStatus.progress: {
                xSendButton.setText('SENDING...');
                xSendButton.setIcon('resources/images/share-initial.png');
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
                xSendButton.setText('SEND SUCCESSFUL');
                xSendButton.setIcon('resources/images/share-successful.png');
                xStatusIndicator.setStyle('background-color: #5F9E45;');

                break;
            }
            case smiley360.viewStatus.unsuccessful: {
                xSendButton.setText('SEND UNSUCCESSFUL');
                xSendButton.setIcon('resources/images/share-unsuccessful.png');
                xStatusIndicator.setStyle('background-color: #ED1C24;');

                break;
            }
            default:
        }
    }
});