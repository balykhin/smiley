Ext.define('smiley360.view.OfferAcceptAddress', {
	extend: 'Ext.Container',
	alias: 'widget.offeracceptaddressview',
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
					html: 'Accept Offer',
				}],
			}, {
				xtype: 'panel',
				id: 'xMiddlePanel',
				cls: 'popup-middle-panel',
				items: [{
					xtype: 'label',
					cls: 'popup-message-text',
					html: 'In order to send product your way, please provide us with you most current address.',
				}, {
					xtype: 'panel',
					layout: 'vbox',
					items: [{
						xtype: 'label',
						cls: 'popup-message-text',
						style: 'margin-top: 10px;',
						html: 'EDIT CURRENT ADDRESS:',
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						value: '263 West Street',
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						value: '8th Floor',
					},
					{
						xtype: 'container',
						layout: 'hbox',
						items: [{
							xtype: 'textfield',
							cls: 'cust-input',
							value: 'New York',
							flex: 1,
							style: 'margin-right: 10px;'
						}, {
							xtype: 'textfield',
							cls: 'cust-input cust-input-ddl',
							value: 'NY',
							flex: 1,
						}]
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						value: '10018',
					}, {
						xtype: 'textfield',
						cls: 'cust-input',
						value: 'United States of America',
					}, ],
				}, {
					xtype: 'panel',
					style: 'margin-top: 10px;',
					items: [{
						xtype: 'label',
						id:'verify-label',
						width: 150,
						cls: 'popup-address-comment',
						html: 'This address is VERIFIED!',
					},{
						xtype: 'spacer',
						id: 'verify-spacer',
					},
					{
						xtype: 'image',
						id: 'question-icon',
						width: 30,
						height: 30,
						docked:'right',
						src: 'resources/images/question.png',
						cls: 'popup-post-icon',
					}, {
						xtype: 'button',
						id: 'question-help-button',
						ui: 'plain',
						text: 'Need Help?',
						docked: 'right',
						cls: 'popup-help-button',
						//icon: 'resources/images/question.png',
						//iconAlign: 'right',
						//iconCls: 'popup-post-icon',
						listeners: {
							initialize: function () {
								Ext.getCmp('verify-label').hide();
								Ext.getCmp('verify-spacer').hide();
								//Ext.getCmp('question-icon').setDocked('left');
								//Ext.getCmp('question-help-button').setDocked('left');
								//Ext.getCmp('xView').showHelp();
							}
						}
					}],
				}],
			}, {
				xtype: 'panel',
				cls: 'popup-button-panel',
				items: [{
					xtype: 'button',
					style: 'margin: 10px 10px 0px 10px;',
					cls: 'addr-accept-btn br-accept-btn',
					html: 'SAVE ADDRESS<br> AND CONTINUE TO MISSION',
					listeners: {
						tap: function () {
							Ext.getCmp('verify-label').setHtml('This address is not VERIFIED!');
							Ext.getCmp('verify-label').setCls('popup-address-comment-not');
							Ext.getCmp('verify-label').show();
							Ext.getCmp('verify-spacer').show();
							//Ext.getCmp('question-icon').setDocked('right');
							//Ext.getCmp('question-help-button').setDocked('right');
						}
					}
				}, ],
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