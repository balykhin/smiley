Ext.define('smiley360.view.Signup', {
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.FieldSet', 'Ext.data.Validations', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.field.DatePicker', 'Ext.field.Select'],
	alias: 'widget.signupview',
	config: {
		standardSubmit: false,
		id: 'Signup',
		title: 'Signup',
		cls: 'signup-bg',
		style: 'background-color: #363639;',
		scrollable: 'vertical',
		laytout: { type: 'fit' },
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
						itemId: 'backBtn',
						handler: function () {
							this.up('#Signup').fireEvent('backButtonCommandSignup', this);
						}

					},
					{ xtype: 'spacer' },
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
				style: 'background-color: #F4F3F1; margin: 5px 5px 0px; -webkit-border-radius: 5px 5px 0px 0px;'
			},
			{
				xtype: 'container',
				padding: '15px',
				margin: '0px 5px',
				cls: 'cont-signup',
				laytout: { type: 'vbox' },
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
						id: 'first_signup',
						required: true
					},
					{
						xtype: 'textfield',
						placeHolder: 'Last Name',
						itemId: 'txtLastName',
						name: 'txtLastName',
						cls: 'cust-input',
						id: 'last_signup',
						required: true
					},
					{
						xtype: 'textfield',
						placeHolder: 'Email',
						itemId: 'txtEmail',
						name: 'txtEmail',
						cls: 'cust-input',
						id: 'email_signup',
						required: true
					},
					{ xtype: 'spacer', height: '10px' },
					{
						xtype: 'passwordfield',
						placeHolder: 'Password',
						itemId: 'txtPassword',
						name: 'txtPassword',
						id: 'password_signup',
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
					{ xtype: 'spacer', height: '10px', margin: '0px -15px', style: 'border-bottom: 1px dashed #d7cfcd;' },
					{
						xtype: 'label',
						html: 'To benefit from all the offers you entitled for, please insert the following data.',
						cls: 'simple-text'
					},
					{
						xtype: 'datepickerfield',
						cls: 'cust-input cust-input-ddl',
						name: 'birthday',
						itemId: 'calDob',
						name: 'calDob',
						ui: 'light',
						id: 'birthdate_signup',
						placeHolder: 'Date of birth',
						required: true
					},
					{
						xtype: 'selectfield',
						itemId: 'ddlGender',
						name: 'ddlGender',
						id: 'gender_signup',
						placeHolder: 'Gender',
						cls: 'cust-input cust-input-ddl',
						options: [
			                { text: '', value: '' },
			                { text: 'Male', value: 'male' },
			                { text: 'Female', value: 'female' }
						]
					},
					{ xtype: 'spacer', height: '10px' },
					{
						xtype: 'textfield',
						placeHolder: 'Zip Code',
						itemId: 'txtZipCode',
						name: 'txtZipCode',
						id: 'zip_signup',
						cls: 'cust-input',
						required: true
					},

				]
			},
			{
				xtype: 'spacer',
				height: '15px',
				style: 'background-color: #F4F3F1; margin: 0px 5px; z-index: -2; position: relative;'
			},
			{
				xtype: 'container',
				margin: '0px 5px',
				style: 'background-color: #F4F3F1; padding: 2px 0px;',
				layout: { type: 'vbox' },
				items: [
					{
						xtype: 'button',
						itemId: 'cmdSignup',
						cls: 'cust-btn signup-btn',
						text: 'SIGN UP',
						listeners: {

							tap: function () {
								this.up('#Signup').fireEvent('signupCommand', this);
								console.log('siguptap');

								var formData = this.up('#Signup').getValues();

								var usr = Ext.create('smiley360.model.SignupModel', {
									txtFirstName: formData.txtFirstName,
									txtLastName: formData.txtLastName,
									txtEmail: formData.txtEmail,
									txtPassword: formData.txtPassword,
									txtCPassword: formData.txtCPassword,
									txtBirthdate: formData.calDob,
									txtZip: formData.txtZipCode,
									txtGender: formData.ddlGender,
								});

								var errs = usr.validate();
								var msg = '';

								if (!errs.isValid()) {
									errs.each(function (err) {
										msg += err.getMessage() + '\n\n';
									});

									Ext.Msg.alert('ERROR', msg);

								} else {
									Ext.Msg.alert('SUCCESS', 'Sign up is successful!');
									this.up('#Signup').fireEvent('AuthentificateCommand', this, formData.txtEmail, formData.txtPassword);
								}
							}
						}

					}
				]
			},
{
	xtype: 'spacer',
	height: '14px',
	style: 'background-color: #F4F3F1; margin: 0px 5px; -webkit-border-radius: 0px 0px 5px 5px;'

},
{
	xtype: 'spacer',
	height: '10px',
	style: 'background: transparent;'
}

		],
		listeners: {
			show: function () {
				console.log('SignUp view showed!');
			},

			activate: function () {
				console.log('EditProfile view activated!');
			}
		},
	},
});