/// <reference path="Services.js" />
smiley360 = smiley360 || {};
smiley360.services = smiley360.services || {};

smiley360.services.signIn = function (login, password, onCompleted) {
    if (login == 'a' && password == 'b') {
        onCompleted(
		{
		    success: true,
		    userProfile: smiley360.services.getUserProfile()
		});
    }
    else {
        onCompleted(smiley360.services.fault());
    }
}



smiley360.services.fault = function () {
    return { success: false };
};

smiley360.services.getUserProfile = function () {
    var profile =
	{
	    fName: 'Anton',
	    lName: 'D',
	    marital: '4',
	    children: '3',
	    howmanychildren: '0',
	    income: '14',
	    aboutself: 'A few words',
	    blogURL: 'www.myblog.com',
	    gender: '',
	    birthdate: '1978-03-01',
	    address: 'POBOX763',
	    address2: '',
	    city: 'RIEGELSVILLE',
	    stateID: '38',
	    zip: '18077-0763',
	    address_status: '0',
	    isComplete: '0'
	};
    return profile;
}
/*getSpecialOffers*/
function offerInfo( iconURL, text ) {  
   
    this.iconURL = iconURL;  
    this.text = text;   
}
smiley360.services.getSpecialOffers = function () {
    var offers = new Array();  
    offers[0] = new offerInfo('http:\/\/uat.smiley360.com\/\/images\/smilely-icon-small.gif', 'Complete all the available surveys below to help us match you with future missions. You\'ll earn 10 bonus Smiles for each one!');  
    offers[1] = new offerInfo('http:\/\/uat.smiley360.com\/\/images\/smilely-icon-small.gif', 'Check Smiley360 Connect! Create or join a community around your favorite brands, products, or services.');
	
    return offers;
}
smiley360.services.getOffers = function (onCompleted) {
        onCompleted(
		{
		    success: true,
		    userOffers: smiley360.services.getSpecialOffers()
		});
}
/* Restore Password */

smiley360.services.restorePassword = function (submitData, onCompleted) {
    var task = new Ext.util.DelayedTask(function () {
        if (submitData.email) {
            onCompleted({
                success: true,
            });
        }
        else {
            onCompleted({
                success: false,
            });
        }
    });

    task.delay(200);
}

/* Share Services Commands */

smiley360.services.shareToBlog = function (shareData, onCompleted) {
    var task = new Ext.util.DelayedTask(function () {
        if (shareData.blogURL) {
            onCompleted({
                success: true,
            });
        }
        else {
            onCompleted({
                success: false,
            });
        }
    });

    task.delay(2000);
}

smiley360.services.shareToFacebook = function (shareData, onCompleted) {
    var task = new Ext.util.DelayedTask(function () {
        if (shareData.post) {
            onCompleted({
                success: true,
            });
        }
        else {
            onCompleted({
                success: false,
            });
        }
    });

    task.delay(2000);
}