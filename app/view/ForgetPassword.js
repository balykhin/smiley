Ext.define('smiley360.view.ForgetPassword', {
    extend: 'Ext.Container',
    alias: 'widget.forgetpasswordview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xView',
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
            cls: 'popup-top-panel forgetpwd-background',
            items: [{
                xtype: 'label',
                cls: 'popup-title-text',
                html: 'Recover your Password.',
            }, {
                xtype: 'image',
                docked: 'right',
                id: 'xTitleImage',
                cls: 'popup-title-image',
                src: 'resources/images/lock.png',
            }],
        }, {
            xtype: 'panel',
            id: 'xBottomPanel',
            cls: 'popup-bottom-panel',
            items: [{
                xtype: 'textfield',
                required: true,
                id: 'xEmail',
                placeHolder: 'Email',
                cls: 'cust-input',
            }, {
                xtype: 'label',
                id: 'xMessage',
                cls: 'popup-message-text',
            }, {
                xtype: 'button',
                html: 'SUBMIT',
                cls: 'popup-submit-button',
                listeners: {
                    tap: function () {
                        if (this.getHtml() == 'CLOSE') {
                            Ext.getCmp('xView').destroy();
                        }
                        else {
                            var xEmail = Ext.getCmp('xEmail');
                            if (xEmail.getValue() == 'error') {
                                Ext.getCmp('xTitleImage').setSrc('resources/images/smile-unsuccessful.png');
                                Ext.getCmp('xMessage').setHtml('Oops, the email address you entered is not found in our member accouns. Try again, or contact us for assistance.');
                            }
                            else {
                                Ext.getCmp('xTitleImage').setSrc('resources/images/smile-successful.png');
                                Ext.getCmp('xMessage').setHtml('Thankyou, your password reminder was sent');
                                Ext.getCmp('xSubmit').setHtml('CLOSE')

                                xEmail.hide();
                            }
                        }
                    },
                },
            }],
        }],
        listeners: {
            hide: function () {
                this.destroy();
            }
        },
    },
});