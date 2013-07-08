var xImage, xEmail, xMessage, xSubmit;

Ext.define('smiley360.view.ForgetPassword', {
    extend: 'Ext.Panel',
    alias: 'widget.forgetpasswordview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        cls: 'popup-panel',
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
                cls: 'popup-top-forgetpwd-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'popup-title-text',
                        html: 'Recover your Password.',
                    },
                    {
                        xtype: 'image',
                        dock: 'right',
                        cls: 'popup-title-image',
                        src: 'resources/images/lock.png',
                        listeners: {
                            initialize: function () {
                                xImage = this;
                            },
                        },
                    },
                ],
            },
            {
                xtype: 'panel',
                cls: 'popup-bottom-panel',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Email',
                        cls: 'cust-input',
                        required: true,
                        itemId: 'xEmail',
                        listeners: {
                            initialize: function () {
                                xEmail = this;
                            },
                        },
                    },
                    {
                        xtype: 'label',
                        cls: 'popup-message-text',
                        itemId: 'xMessage',
                        listeners: {
                            initialize: function () {
                                xMessage = this;
                            },
                        },
                    },
                    {
                        xtype: 'button',
                        cls: 'popup-submit-button',
                        html: 'SUBMIT',
                        itemId: 'doSubmit',
                        tap: 'onSubmitTap',
                        listeners: {
                            initialize: function () {
                                xSubmit = this;
                            },
                        },
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
                delegate: "#doSubmit",
                event: "tap",
                fn: "onSubmitTap"
            },
        ],
    },

    onCloseTap: function () {
        this.hide();
        this.destroy();
    },


    onSubmitTap: function () {
        if (xSubmit.getHtml() == 'CLOSE') {
            this.hide();
            this.destroy();
        }
        else {
            if (xEmail.getValue() == 'error') {
                xImage.setSrc('resources/images/smile-unsuccessful.png');
                xMessage.setHtml('Oops, the email address you entered is not found in our member accouns. Try again, or contact us for assistance.');

                this.height = this.getHeight();
            }
            else {
                xImage.setSrc('resources/images/smile-successful.png');
                xMessage.setHtml('Thankyou, your password reminder was sent');
                xSubmit.setHtml('CLOSE')
                xEmail.hide();
            }
        }
    },
});