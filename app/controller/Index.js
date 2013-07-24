var isLogined = false;

Ext.define('smiley360.controller.Index', {
	extend: 'Ext.app.Controller',
	config: {
		id: 'ParentController',
		refs: {
			//newList   : '#newList',
			homeView: 'homeview',
			loginView: 'loginview',
			signupView: 'signupview',
			editProfileView: 'editprofileview',
			forgetPasswordView: 'forgetpasswordview',
			shareToFacebookView: 'sharetofacebookview',
			shareToTwitterView: 'sharetotwitterview',
			surveyView: 'surveyview',
			missionsView: 'missionsview',
			detailsView: 'detailsview',
			offersView: 'offersview',
			offerDetailsView: 'offerdetailsview',
			browseView: 'browseview',
			browseInstrumentsView: 'browseinstrumentsview',
			connectView: 'connectview',
			brandView: 'brandview',
			shareView: 'shareview',
		},
		control: {
			loginView: {
				AuthentificateCommand: 'AuthentificateCommand',
				ShowSignupViewCommand: 'ShowSignupViewCommand',
				getProfileCommand: 'getProfileHomeCommand',
				ShowSurveyViewCommand: 'ShowSurveyViewCommand',
				onMissionTapCommand: 'onMissionTapCommand',
				onMissionDetailsTapCommand: 'onMissionDetailsTapCommand',
				onOffersTapCommand: 'onOffersTapCommand',
				onOffersDetailsTapCommand: 'onOffersDetailsTapCommand',
				onBrowseTapCommand: 'onBrowseTapCommand',
				onConnectTapCommand: 'onConnectTapCommand',
				onBrowseInstrumentsTapCommand: 'onBrowseInstrumentsTapCommand',
				onBrandTapCommand: 'onBrandTapCommand',
				onShareTapCommand: 'onShareTapCommand',
			},
			signupView: {
				// The commands fired by the signup view.
				signupCommand: 'signupCommand',
				backButtonCommandSignup: 'backButtonCommandSignup',
				AuthentificateCommand: 'AuthentificateCommand'
			},
			homeView: {
				backButtonCommandHome: 'backButtonCommandHome',
				oneditLabelCommand: 'oneditLabelCommand',
				//GoToProfileCommand: 'GoToProfileCommand',
				getProfileHomeCommand: 'getProfileHomeCommand',
			},
			sharetofacebookview: {
			},
			sharetotwitterview: {
			},
			editProfileView: {
				backButtonCommandProfile: 'backButtonCommandProfile',
				onbtnSavechangesCommandProfile: 'onbtnSavechangesCommandProfile',
			},
			surveyView: {
				SurveyBackButtonCommand: 'SurveyBackButtonCommand'
			},
			missionsView:
            {
            	backButtonCommandMissions: 'backButtonCommandMissions'
            },
			detailsView: {
				backButtonCommandDetails: 'backButtonCommandDetails'
			},
			offersView: {
				backButtonCommandOffers: 'backButtonCommandOffers'
			},
			offerDetailsView: {
				backButtonCommandOfferDetails: 'backButtonCommandOfferDetails'
			},
			browseView: {
				backButtonCommandBrowse: 'backButtonCommandSignup'
			},
			connectView: {
				backButtonCommandConnect: 'backButtonCommandSignup'
			},
			browseInstrumentsView: {
				backButtonCommandBrowseInstruments: 'backButtonCommandSignup'
			},
			brandView: {
				backButtonCommandBrand: 'backButtonCommandSignup'
			},
			shareView: {
				backButtonCommandShare: 'backButtonCommandSignup'
			},
		}
	},

	// Tansitions
	slideLeftTransition: { type: 'slide', direction: 'left' },
	slideRightTransition: { type: 'slide', direction: 'right' },
	// Commands


	backButtonCommandDetails: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},
	onShareTapCommand: function () {
		console.log("onShareTapCommand");
		Ext.Viewport.animateActiveItem(this.getShareView(), this.slideLeftTransition);
	},
	onBrandTapCommand: function () {
		console.log("onBrandTapCommand");
		Ext.Viewport.animateActiveItem(this.getBrandView(), this.slideLeftTransition);
	},
	onConnectTapCommand: function () {
		console.log("onConnectTapCommand");
		Ext.Viewport.animateActiveItem(this.getConnectView(), this.slideLeftTransition);
	},
	onBrowseInstrumentsTapCommand: function () {
		console.log("onConnectTapCommand");
		Ext.Viewport.animateActiveItem(this.getBrowseInstrumentsView(), this.slideLeftTransition);
	},
	onBrowseTapCommand: function () {
		console.log("onConnectTapCommand");
		Ext.Viewport.animateActiveItem(this.getBrowseView(), this.slideLeftTransition);
	},

	onLocalstoragetestTapCommand: function () {
		Ext.Viewport.animateActiveItem(this.getMyMainView(), this.slideLeftTransition);
	},

	onOffersDetailsTapCommand: function () {
		Ext.Viewport.animateActiveItem(this.getOfferDetailsView(), this.slideLeftTransition);
	},

	onOffersTapCommand: function () {
		
			Ext.Viewport.animateActiveItem(this.getOffersView(), this.slideLeftTransition);
		

		smiley360.services.getOffers(function (response) {
			if (response.success) {
				//alert('Get an offer: ' + response.userOffers[0].text);//provess/close view
				Ext.getCmp('offers_label_text').setHtml(response.userOffers[0].text.toString());
			}
			else {
				alert('smth wrong');//show error on view
			}
		});


	},
	backButtonCommandOffers: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},

	backButtonCommandOfferDetails: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},

	backButtonCommandMissions: function () {
		//================================
		console.log("");
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

		//this.activateForgetPassword();
	},
	//getProfileCommand: function () {
	//    //================================
	//    console.log('getProfileCommand');
	//    //================================
	//    if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
	//},
	//GoToProfileCommand: function () {
	//    //================================
	//    console.log('GoToProfileCommand');
	//    //================================
	//    if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
	//},
	onMissionDetailsTapCommand: function () {
		 Ext.Viewport.animateActiveItem(this.getDetailsView(), this.slideLeftTransition); 
	},

	onMissionTapCommand: function () {
		 Ext.Viewport.animateActiveItem(this.getMissionsView(), this.slideLeftTransition); 
	},

	oneditLabelCommand: function () {
		console.log("oneditLabelCommand");
		Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); 

	},

	AuthentificateCommand: function (view, login, password) {
		var me = this;
		smiley360.services.authenticateservice(login, password,
            function (response) {
            	isLogined = response.success;

            	if (isLogined) {
            		console.log('Login Successful!');

            		Ext.getCmp('login_btn').enable();//TODO: remove to Logout view

            		smiley360.services.getUserData(response.ID,
                        function (response) {
                        	if (response.success) {
                        		smiley360.userData = response;

                        		Ext.Viewport.animateActiveItem(
                                    me.getHomeView(), me.slideLeftTransition);
                        	}
                        	else {
                        		console.log('Profile is corrupted!');//show error on view
                        	}
                        });
            	}
            	else {
            		console.log('Login unsuccessful!');

            		Ext.getCmp('login_btn').enable();//show error on view
            	};
            });
	},

	ShowSignupViewCommand: function () {
		//================================
		console.log('ShowSignupViewCommand');
		//================================
		Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition);
	},

	getProfileCommand: function () {
		//================================
		console.log('getProfileCommand');
		//================================
		//smiley360.services.getProfile(memberID,
		//    function (response) {
		//        if (response.success) {
		//            alert('Profile: ' + response);
		//        }
		//        else {
		//            alert('Profile is corrupted!');//show error on view
		//        }
		//    });
		if (isLogined) { Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition); }
	},

	getProfileHomeCommand: function () {
		//================================
		console.log('getProfileHomeCommand');
		//================================

		if (isLogined) {
			Ext.Viewport.animateActiveItem(
                this.getEditProfileView(), this.slideLeftTransition);
		}
	},

	onbtnSavechangesCommandProfile: function () {
		//================================
		console.log('SavechangesCommand');

		var fields = new Array(
            'fName',
            'lName',
            'email',
            'birthdate',
            'gender',
            'blogURL',
            'aboutself',
            'address1',
            'address2',
            'city',
            'stateID',
            'zip',
            'marital',
            'children',
            'howmanychildren',
            'income');

		var profArray = {};

		for (var field in fields) {
			(fields[field] == 'birthdate') ?
			profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field])[0].getFormattedValue() :
			profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field])[0].getValue();
		}

		smiley360.services.setProfile(smiley360.userData.UserId, profArray,
            function (response) {
            	if (response.success) {
            		console.log('Your changes aplied successfully!');
            	}
            	else {
            		console.log('Set Profile return error!');//show error on view
            	}
            });

		if (isLogined) {
			Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);
		}
	},

	ShowSurveyViewCommand: function () {
		//================================
		console.log('ShowSurveyViewCommand');
		//================================
		if (isLogined) { Ext.Viewport.animateActiveItem(this.getSurveyView(), this.slideLeftTransition); }
	},

	SurveyBackButtonCommand: function () {
		//================================
		console.log('SurveyBackButtonCommand');
		//================================
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);
	},

	signupCommand: function () {
		console.log("signupCommand");
		//Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);
		console.log('SignUpCommand');
		var me = this;
		var fields = new Array(
		   'first',
		   'last',
		   'username',
		   'password',
		   'email',
		   'zip',
		   'birthdate',
		   'gender');

		var profArray = {};

		for (var field in fields) {
			if ((fields[field] != 'username') && (fields[field] != 'birthdate'))
				profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field] + '_signup')[0].getValue(fields[field]);
			if (fields[field] == 'birthdate')
				profArray[fields[field]] = Ext.ComponentQuery.query('#' + fields[field] + '_signup')[0].getFormattedValue(fields[field]);
		}

		smiley360.services.signupMember(profArray.first,
										profArray.last,
										profArray.username,
										profArray.password,
										profArray.email,
										profArray.zip,
										profArray.birthdate,
										profArray.gender,
		    function (response) {
		    	if (response.success) {
		    		console.log('Member signup is done successfully!');
		    	}
		    	else {
		    		console.log('Member signup returned an error!');
		    	}
		    });

	},

	backButtonCommandHome: function () {
		console.log('Back button command home');
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
	},

	backButtonCommandProfile: function () {
		console.log('Back button command profile');
		Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideRightTransition);
	},

	backButtonCommandSignup: function () {
		console.log('Back button command signup');
		Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
	},

	doServicesLoad: function (mock) {
		var servicesPath = "app/services/Services.js";

		if (mock == true) {
			servicesPath = "app/services/Services.mock.js";
		}

		var onload = function () {
			// do something onload
			console.log("Services load is done!!!");
		}

		var onerror = function () {
			// do something onerror
			console.log("Services load error!!!");
		}

		Ext.Loader.injectScriptElement(servicesPath, onload, onerror, this);
	},

	//	Base Class functions.
	init: function () {
		//================================
		console.log("Index initialized!");
		//================================
		this.callParent(arguments);
	},

	launch: function () {
		//================================
		console.log('Index launched!');
		//================================
		this.callParent(arguments);
		this.doServicesLoad(false); //insert [true] for debug mode
	}
});

/* Global models and methods */

smiley360.userData = {};
smiley360.viewStatus =
{
	initial: 'initial',
	progress: 'progress',
	successful: 'successful',
	unsuccessful: 'unsuccessful',
}

smiley360.setResponseStatus = function (view, response) {
	var status = response.success ?
        smiley360.viewStatus.successful :
        smiley360.viewStatus.unsuccessful;

	smiley360.setViewStatus(view, status);
}

smiley360.setViewStatus = function (view, status) {
	var viewName = Ext.getDisplayName(view);
	var logMessage = Ext.String.format(
        'setViewStatus: { view: {0}, status: {1} }', viewName, status);

	console.log(logMessage);

	view.setStatus(status);
}
