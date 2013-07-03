Ext.define('smiley360.view.Login', {
	extend: 'Ext.form.Panel',
	requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.field.Text'],
	alias: 'widget.loginview',
	cls: 'page-bg',

	config: {
		title: 'Login',
		padding: '15px',
		scrollable: 'none',
		items: [{
			xtype: 'image',
			src: 'resources/images/logo.png',
			cls: 'logo'
		},
		{
			xtype: 'spacer',
			height: '14px'
		},
		{
			xtype: 'panel',
			cls: 'login-box',
			height: '254px',
			items: [
				{
					xtype: 'textfield',
					placeHolder: 'Username',
					itemId: 'txtUserName',
					name: 'txtUserName',
					cls: 'cust-input cust-input-user',
					clearIcon: false,
					required: true
				},
				{
					xtype: 'passwordfield',
					maxHeight: '20px',
					placeHolder: '******',
					itemId: 'txtPassword',
					name: 'txtPassword',
					cls: 'cust-input cust-input-pwd',
					clearIcon: false,
					required: true
				},
				{
					xtype: 'spacer',
					height: '12px'
				},
				{
					xtype: 'button',
					itemId: 'cmdLogin',
					cls: 'cust-btn login-btn',
					text: 'LOG IN'
				},
				{
					xtype: 'label',
					html: 'Lost your password?',
					cls: 'left cust-label'
				},
				{
					xtype: 'label',
					id: 'signup-label',
					html: 'Need to set up a New Account?',
					cls: 'right cust-label'
				},
				{
					xtype: 'spacer',
					cls: 'clear',
					height: '27px'
				},
                {
                    xtype: 'button',
                    style: 'background-color: #3366CC;',
                    itemId: 'cmdShare',
                    text: 'Share with Twitter',
                    ui: 'action',
                    tap: 'onMybuttonTap'
                },
                {
                    xtype: 'button',
                    itemId: 'cmdFbShare',
                    text: 'Share with Facebook',
                    //width: '50px',
                    ui: 'action',
                    tap: 'onFbShareTap'
                },
			]
		}],
		listeners: [
			{
				delegate: "#cmdLogin",
				event: "tap",
				fn: "onLoginButtonTap"
			},
            {
                delegate: '#cmdShare',
                event: 'tap',
                fn: 'onMybuttonTap'
            },
            {
                delegate: '#cmdFbShare',
                event: 'tap',
                fn: 'onFbShareTap'
            },
	  		{
	  			element: 'element',
	            delegate: 'div#signup-label',
	            event: 'tap',
	            fn: 'onSignupTap'

	  		}
		]
	},

	onLoginButtonTap: function(){
		console.log("login button tapped");
			//alert('signup button tapped');
			this.fireEvent('loginCommand', this);
	},
	onMybuttonTap: function () {
	    console.log("share button tapped");
	    //alert('signup button tapped');
	    this.fireEvent('shareCommand', this);

	},
	onFbShareTap: function () {
	    console.log("Facebook share button tapped");
	    //alert('signup button tapped');
	    this.fireEvent('fbShareCommand', this);

	},
	onSignupTap: function () {
		console.log('signup label tapped');
		this.fireEvent('signupPageCommand', this);
	}


});