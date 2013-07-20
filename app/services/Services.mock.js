smiley360 = smiley360 || {};
smiley360.services = smiley360.services || {};

Ext.require('Ext.util.DelayedTask');

var profile =
	{
	    fName: 'Anton',
	    lName: 'D',
	    marital: '0',
	    children: 'yes',
	    howmanychildren: '1',
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
	    isComplete: '0',
	};

smiley360.services.authenticate = function (login, password, onCompleted) {
    if (login == '1234@outofchaos.com' && password == '123456') {
        onCompleted(
		{
		    success: true,
		});
    }
    else {
        onCompleted(smiley360.services.fault());
    }
}

smiley360.services.getProfile = function (memberID, onCompleted) {
    if (memberID == 249) {
        onCompleted(
       {
           success: true,
           userProfile: smiley360.services.getUserProfile(),
       });
    }
    else {
        onCompleted(smiley360.services.fault());
    }
};
/*isProfileComplete*/
smiley360.services.isProfileComplete = function (memberID, onCompleted) {
    if (memberID == 249) {
        onCompleted(
       {
           success: true,
           userProfile: smiley360.services.getProfileCompletion(),
       });
    }
    else {
        onCompleted(smiley360.services.fault());
    }
};
/*setProfile*/
smiley360.services.setProfile = function (memberID, onCompleted) {
    if (memberID == 249) {
        onCompleted(
       {
           success: true,
           upduserProfile: smiley360.services.setUserProfile(),
       });
    }
    else {
        onCompleted(smiley360.services.fault());
    }
};


smiley360.services.fault = function () {
    return { success: false };
};

smiley360.services.getProfileCompletion = function () {
    var completion =
	{

	};
    return completion;
}
smiley360.services.setUserProfile = function () {
    profile =
	{
	    fName: '',
	    lName: '',
	    marital: '',
	    children: '',
	    howmanychildren: '',
	    income: '',
	    aboutself: '',
	    blogURL: '',
	    gender: '',
	    birthdate: '',
	    address: '',
	    address2: '',
	    city: '',
	    stateID: '',
	    zip: '',
	    address_status: '',
	    isComplete: '',
	};
    return profile;
}
smiley360.services.getUserProfile = function () {

    return profile;
}
/*getSpecialOffers*/
function offerInfo(iconURL, text) {

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
smiley360.services.getProfileData = function () {
    var profiledata =
	{
	    editMember_genderOptions: [
                 { Value: 'Male', ID: 1 },
                 { Value: 'Female', ID: 2 }
	    ],
	    editMember_stateOptions: [
                 { Value: 'Arizona', ID: 1 },
                 { Value: 'New Mexico', ID: 2 },
	             { Value: 'New York', ID: 3 },
                 { Value: 'Texas', ID: 4 },
                 { Value: 'Illinois', ID: 5 },
                 { Value: 'Indiana', ID: 6 },
                 { Value: 'Virginia', ID: 7 },
	    ],
	    editMember_countryOptions: [
                 { Value: 'USA', ID: 1 },
                 { Value: 'Other', ID: 2 },
	    ],
	    editMember_marriageStatusOptions: [
                 { Value: 'Single', ID: 1 },
                 { Value: 'Married', ID: 2 },
	    ],
	    editMember_haveChildrenOptions: [
                 { Value: 'Yes, I have children.', ID: 1 },
                 { Value: 'No, I haven\'t children.', ID: 2 },
	    ],
	    editMember_numberChildrenOptions: [
                 { Value: '1', ID: 1 },
                 { Value: '2', ID: 2 },
	    ],
	    editMember_householdIncomeOptions: [
                 { Value: '10000-20000', ID: 1 },
                 { Value: '20000-30000', ID: 2 },
	    ],
	    editMember_ethnicityOptions: [
                 { Value: 'Black\\African-American', ID: 1 },
                 { Value: 'Asian or Pacific Islander', ID: 2 },
                 { Value: 'White\\Caucasian', ID: 3 },
                 { Value: 'Hispanic or Latino', ID: 4 },
                 { Value: 'Native American or Alaskan Native', ID: 5 },
                 { Value: 'I prefer not to specify', ID: 6 },
	    ],
	};
    return profiledata;
}
/*mobile_app_member_initialize*/
//smiley360.services.mobile_app_member_initialize = function () {
//    var profile =
//	{
//	    fName: 'Anton',
//	    lName: 'D',
//	    marital: '4',
//	    children: '3',
//	    howmanychildren: '0',
//	    income: '14',
//	    aboutself: 'A few words',
//	    blogURL: 'www.myblog.com',
//	    gender: '',
//	    birthdate: '1978-03-01',
//	    address: 'POBOX763',
//	    address2: '',
//	    city: 'RIEGELSVILLE',
//	    stateID: '38',
//	    zip: '18077-0763',
//	    address_status: '0',
//	    isComplete: '0'
//	};
//    return profile;
//}
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