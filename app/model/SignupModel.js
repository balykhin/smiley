Ext.applyIf(Ext.data.Validations, {

	password: function (config, value) {

		if (value == Ext.getCmp('password_signup').getValue()) {
			return true;
		} else {
			return false;
		}
	}
});

Ext.define("smiley360.model.SignupModel", {
	extend: "Ext.data.Model",
	requires: ['Ext.data.Validations'],
	config: {
		fields: [
					{ name: 'txtFirstName', type: 'string' },
					{ name: 'txtLastName', type: 'string' },
					{ name: 'txtPassword', type: 'password' },
					{ name: 'txtCPassword', type: 'password' },
					{ name: 'txtEmail', type: 'string' },
					{ name: 'txtZip', type: 'string' },
					{ name: 'txtBirthdate', type: 'date', dateFormat: 'YYYY-mm-dd' },
					{ name: 'txtGender', type: 'auto' }
		],
		validations: [
			{ type: 'presence', name: 'txtFirstName', message: "Enter your first name." },
			{ type: 'presence', name: 'txtLastName', message: "Enter your last name." },
			{ type: 'presence', name: 'txtPassword', message: "Enter password." },
			{ type: 'length', field: 'txtPassword', min: 6, message: "Password must be at least 6 digits." },
			{ type: 'presence', name: 'txtCPassword', message: "Confirm password." },
			{ type: 'presence', name: 'txtEmail', message: "Enter email." },
			{ type: 'presence', name: 'txtZip', message: "Enter zip code." },
			{ type: 'length', field: 'txtZip', min: 5, message: "Zip code must be at least 5 symbols." },
			{ type: 'format', field: 'txtZip', matcher: /\d+/, message: "Zip code must consist of digits only." },
			{ type: 'presence', name: 'txtBirthdate', message: "Enter birthdate." },
			{ type: 'presence', name: 'txtGender', message: "Enter gender." },
			//{ type: 'format', name: 'txtEmail', matcher: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Wrong email format" },
			//{ type: 'password', name: 'txtCPassword', message: "Password is not match its confirmation." },
			{ type: 'email', name: 'txtEmail', message: "Incorrect email format." },

		]
	},

});