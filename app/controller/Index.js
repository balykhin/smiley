Ext.define('smiley360.controller.Index', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
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
            offersdetailsView: 'offersview',
        },
        control: {
            loginView: {
                ShowLoginViewCommand: 'ShowLoginViewCommand',
                ShowSignupViewCommand: 'ShowSignupViewCommand',
                ShowEditProfileViewCommand: 'ShowEditProfileViewCommand',
                ShowSurveyViewCommand: 'ShowSurveyViewCommand',
                onMissionTapCommand: 'onMissionTapCommand',
                onMissionDetailsTapCommand: 'onMissionDetailsTapCommand',
                onOffersTapCommand: 'onOffersTapCommand',
                onOffersDetailsTapCommand: 'onOffersDetailsTapCommand',
            },
            signupView: {
                // The commands fired by the signup view.
                signupCommand: 'signupCommand',
                backButtonCommandSignup: 'backButtonCommandSignup',
            },
            homeView: {
                backButtonCommandHome: 'backButtonCommandHome',
                oneditLabelCommand: 'oneditLabelCommand',
                GoToProfileCommand: 'GoToProfileCommand',
            },
            sharetofacebookview: {
            },
            sharetotwitterview: {
            },
            editProfileView: {
                backButtonCommandProfile: 'backButtonCommandProfile'
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
            offersdetailsView:{
                backButtonCommandOffersDetails: 'backButtonCommandOffersDetails'                
            }
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
    onOffersDetailsTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getOffersDetailsView(), this.slideLeftTransition);
    },
    onOffersTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getOffersView(), this.slideLeftTransition);
    },
    backButtonCommandOffers: function () {
        //================================
        console.log("");
        //================================
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

        //this.activateForgetPassword();
    },
    backButtonCommandOffersDetails: function () {
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

    GoToProfileCommand: function () {
        //================================
        console.log('GoToProfileCommand');
        //================================
        Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);
    },
    //onOffersDetailsTapCommand: function () {
    //    Ext.Viewport.animateActiveItem(this.getDetailsView(), this.slideLeftTransition);
    //},
    onMissionDetailsTapCommand: function () {
        Ext.Viewport.animateActiveItem(this.getDetailsView(), this.slideLeftTransition);
    },
    onMissionTapCommand: function() {
        Ext.Viewport.animateActiveItem(this.getMissionsView(), this.slideLeftTransition);
    },
    oneditLabelCommand: function () {
        console.log("oneditLabelCommand");
        Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);

    },
    ShowLoginViewCommand: function () {
        //================================
        console.log("ShowLoginViewCommand");
        //================================
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

        var command={data: { login: '', password: '' } };
        smiley360.services.signIn(command.data.login, command.data.password, function (response)
        {
        	if (response.success)
        	{
        		//provess/close view
        	}
        	else
        	{
				//show error on view
        	}
        });
        //this.activateForgetPassword();
    },

    ShowSignupViewCommand: function () {
        //================================
        console.log('ShowSignupViewCommand');
        //================================
        Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition);
    },

    ShowEditProfileViewCommand: function () {
        //================================
        console.log('ShowEditProfileViewCommand');
        //================================
        Ext.Viewport.animateActiveItem(this.getEditProfileView(), this.slideLeftTransition);
    },

    ShowSurveyViewCommand: function () {
        //================================
        console.log('ShowSurveyViewCommand');
        //================================
        Ext.Viewport.animateActiveItem(this.getSurveyView(), this.slideLeftTransition);
    },

    SurveyBackButtonCommand: function () {
        //================================
        console.log('SurveyBackButtonCommand');
        //================================
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideLeftTransition);
    },

    //	Commands
    signupCommand: function () {
        console.log("signupCommand");
        //Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

    },

    backButtonCommandHome: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
    },

    backButtonCommandProfile: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
    },

    backButtonCommandSignup: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
    },

    //	Base Class functions.
    init: function () {
        //================================
        console.log("init");
        //================================
        this.callParent(arguments);
    },

    launch: function () {
        //================================
        console.log('launch');
        //================================
        this.callParent(arguments);
        // Ext.getStore('Notes').load();
    }
});