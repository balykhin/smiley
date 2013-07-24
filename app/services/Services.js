smiley360 = smiley360 || {};
smiley360.services = smiley360.services || {};

Ext.require('Ext.data.JsonP');

smiley360.services.authenticateservice = function (login, password, onCompleted) {
    smiley360.services.ajax(
		"authenticate",
		{
		    email: login,
		    password: password
		},
		function (response) {
		    response.success = response.success && response.memberID;
		    response.ID = response.memberID;
		    onCompleted(response);
		});
}

smiley360.services.recoverPassword = function (email, onCompleted) {
    smiley360.services.ajax(
	"recoverPassword",
	{
	    email: email
	},
	function (response) {
	    if (response.success) {
	        (response.status == 'success') ?
			response.success = true :
			response.success = false;
	    }
	    onCompleted(response);
	});
}

smiley360.services.sendMessage = function (messageData, onCompleted) {
    smiley360.services.ajax(
        "logComment",
        {
            memberID: messageData.userId,
            name: messageData.userName,
            email: messageData.userEmail,
            category: messageData.commentCategoryId,
            comment: messageData.commentText,
        },
            onCompleted
        );
}


/***************** Getter Methods *****************/

smiley360.services.getUserData = function (memberId, onCompleted) {
    var memberData = { memberID: memberId };
    var globalResponse = { UserId: memberId };

    smiley360.services.ajax("getProfile", memberData,
        function (response) {
            if (!response.success) { onCompleted(response) }
            else { delete response.success; }

            globalResponse.Profile = response;

            smiley360.services.ajax("get_member_level", memberData,
                function (response) {
                    if (!response.success) { onCompleted(response) }
                    else { delete response.success; }

                    globalResponse.UserLevel = response.level;

                    smiley360.services.ajax("getWhatsHappening", memberData,
                        function (response) {
                            if (!response.success) { onCompleted(response) }
                            else { delete response.success; }

                            globalResponse.WhatsHappening = response;

                            smiley360.services.ajax("getSpecialOffers", memberData,
                                function (response) {
                                    if (!response.success) { onCompleted(response) }
                                    else { delete response.success; }

                                    globalResponse.SpecialOffers = response;
                                    smiley360.services.ajax("getOffers", memberData,
										function (response) {
											if (!response.success) { onCompleted(response) }
											else { delete response.success; }

											globalResponse.Offers = response;
											smiley360.services.ajax("getMissionList", memberData,
												function (response) {
													if (!response.success) { onCompleted(response) }
													else { delete response.success; }

													globalResponse.MissionList = response;

													globalResponse.success = true;

													onCompleted(globalResponse);
												});
										});
                                });
                        });
                });
        });
}

smiley360.services.getProfile = function (memberID, onCompleted) {
    smiley360.services.ajax(
        "getProfile",
        {
            memberID: memberID
        },
            onCompleted
        );
}

smiley360.services.getMemberLevel = function (memberID, onCompleted) {
    smiley360.services.ajax(
        "get_member_level",
        {
            memberID: memberID
        },
            onCompleted
        );
}

smiley360.services.getWhatsHappening = function (memberID, onCompleted) {
    smiley360.services.ajax(
        "getWhatsHappening",
        {
            memberID: memberID
        },
            onCompleted
        );
}

smiley360.services.getSpecialOffers = function (memberID, onCompleted) {
    smiley360.services.ajax(
        "getSpecialOffers",
        {
            memberID: memberID
        },
            onCompleted
        );
}

/***************** Setter Methods *****************/

smiley360.services.setProfile = function (memberID, profArr, onCompleted) {
    smiley360.services.ajax(
        "setProfile",
        {
            memberID: memberID,
            profArr: profArr,
        },
            onCompleted
        );
}
smiley360.services.signupMember = function (first, last, username, password, email, zip, birthdate, gender, onCompleted) {
    smiley360.services.ajax(
		"signupMember",
		{
		    first: first,
		    last: last,
		    username: username,
		    password: password,
		    email: email,
		    zip: zip,
		    birthdate: birthdate,
		    gender: gender,
		},
			onCompleted
		);
}


/***************** Share Methods *****************/

smiley360.services.shareToBlog = function (shareData, onCompleted) {
}

smiley360.services.shareToFacebook = function (shareData, onCompleted) {
}

/***************** Helper Members *****************/

smiley360.services.serverUrl = "http://173.18.18.52/index.php/";
smiley360.services.ajax = function (method, params, onCompleted) {
    Ext.data.JsonP.request(
    {
        url: smiley360.services.serverUrl + "?method=" + method + "&params=" + Ext.JSON.encode(params),
        callback: function (result, response) {
            onCompleted(Ext.apply({ success: (result && !response.error) }, response));
        }
    });
}