smiley360 = smiley360 || {};
smiley360.services = smiley360.services || {};

smiley360.services.signIn = function (login, password, onCompleted)
{
	Ext.Ajax.request(
	{
		url: '',
		params:
		{
			login: login,
			password: password
		},
		success: function (response)
		{
			onCompleted(response);
		}
	});
}

/* Restore Password */

smiley360.services.restorePassword = function (submitData, onCompleted) {
}

/* Share Services Commands */
smiley360.services.shareToBlog = function (shareData, onCompleted) {
}

smiley360.services.shareToFacebook = function (shareData, onCompleted) {
}