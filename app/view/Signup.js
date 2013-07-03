Ext.define('smiley360.view.Signup', {
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
	alias: 'widget.signupview',
	cls: 'signup-bg',

	config: {
		title: 'Signup',
		scrollable: 'vertical',
		laytout: {type: 'fit'},
		items: [
			{
				xtype: 'toolbar',
				title: 'SIGN UP',
				docked: 'top',
				ui: 'light',
				items: [
					{
						xtype: 'button',
						text: '',
						ui: 'plain',
						iconCls: 'back-btn',
						iconMask: true,
						itemId: 'backBtn'
					},
					{xtype: 'spacer'},
					{
						xtype: 'button',
						iconCls: 'menu-btn',
						iconMask: true,
						ui: 'plain',
						text: '',
						itemId: 'menuBtn'
					}
				]
			},
			{
				xtype: 'spacer',
				height: '14px',
				style: 'background-color: #f4f3f1; margin: 15px 2px 0px; -webkit-border-radius: 5px 5px 0px 0px;'
			},
			{
				xtype: 'container',
				padding: '15px',
				cls: 'cont-signup',
				laytout: {type: 'vbox'},
				items: [
					{
						xtype: 'label',
						html: 'Insert the following details to sign up. All of the follwing fields are required.',
						cls: 'simple-text'
					},
					{
						xtype: 'textfield',
						placeHolder: 'First Name',
						itemId: 'txtFirstName',
						name: 'txtFirstName',
						cls: 'cust-input',
						required: true
					},
					{
						xtype: 'textfield',
						placeHolder: 'Last Name',
						itemId: 'txtLastName',
						name: 'txtLastName',
						cls: 'cust-input',
						required: true
					},
					{
						xtype: 'textfield',
						placeHolder: 'Email',
						itemId: 'txtEmail',
						name: 'txtEmail',
						cls: 'cust-input',
						required: true
					},
					{xtype: 'spacer', height: '10px'},
					{
						xtype: 'passwordfield',
						placeHolder: 'Password',
						itemId: 'txtPassword',
						name: 'txtPassword',
						cls: 'cust-input cust-input-pwd-signup',
						required: true
					},
					{
						xtype: 'passwordfield',
						placeHolder: 'Confirm Password',
						itemId: 'txtCPassword',
						name: 'txtCPassword',
						cls: 'cust-input',
						required: true
					},
					{xtype: 'spacer', height: '10px', style: 'border-bottom: 1px dashed #d7cfcd;'},
					{
						xtype: 'label',
						html: 'To benefit from all the offers you entitled for, please insert the following data.',
						cls: 'simple-text'
					},
					{
			            xtype: 'datepickerfield',
			            cls:'cust-input cust-input-ddl',
			            name: 'birthday',
			            itemId: 'calDob',
						name: 'calDob',
						ui: 'light',
			            placeHolder:'Date of birth',
			            required: true
			        },
					{
			            xtype: 'selectfield',
			            itemId: 'ddlGender',
						name: 'ddlGender',
			            cls:'cust-input cust-input-ddl',
			   			placeHolder:'Gender',
			            options: [
			                {text: '',  value: ''},
			                {text: 'Male',  value: 'male'},
			                {text: 'Female', value: 'female'}
			            ]
			        },
					{xtype: 'spacer', height: '10px'},
					{
						xtype: 'textfield',
						placeHolder: 'Zip Code',
						itemId: 'txtZipCode',
						name: 'txtZipCode',
						cls: 'cust-input',
						required: true
					},

				]
			},
			{
				xtype: 'spacer',
				height: '15px',
				style: 'background-color: #f4f3f1; z-index: -2; position: relative;'
			},
			{
				xtype: 'container',
				style: 'background-color: #f4f3f1; padding: 2px 0px;',
				layout: {type: 'vbox'},
				items: [
					{
						xtype: 'button',
						itemId: 'cmdSignup',
						cls: 'cust-btn signup-btn',
						text: 'SIGN UP'
					}
				]
			},
			{
				xtype: 'spacer',
				height: '14px',
				style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'
				
			},
			{
				xtype: 'spacer',
				height: '10px',
				style: 'background: transparent;'
			}
			
		],
		listeners: [
			{
				delegate: "#cmdSignup",
				event: "tap",
				fn: "onSignupButtonTap"
			},
			{
				delegate: "#backBtn",
				event: "tap",
				fn: "onBackButtonTap"
			}
		]
	},
	onSignupButtonTap: function(){
			console.log("signup button tapped");
			//alert('signup button tapped');
			this.fireEvent('signupCommand', this);
	},
	onBackButtonTap: function(){
			console.log("back button tap signup");
			//alert('signup button tapped');
			this.fireEvent('backButtonCommandSignup', this);
	}
});