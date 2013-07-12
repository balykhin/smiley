var Debug_ = true;
Ext.define('smiley360.controller.Index', {
    extend: 'Ext.app.Controller',
    config: {
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
            offerDetailsView: {
                backButtonCommandOfferDetails: 'backButtonCommandOfferDetails'
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
    onMissionTapCommand: function () {
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

        var command = { data: { login: 'a', password: 'b' } };

        smiley360.services.signIn(command.data.login, command.data.password, function (response) {
            if (response.success) {
                alert('Login as' + response.userProfile.fName + ' ' + response.userProfile.lName);//provess/close view
            }
            else {
                alert('smth wrong');//show error on view
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

        var url = "../app/services/Services.js";

        if (Debug_ == true) {
            url = "../app/services/Services.mock.js";

            Ext.require('Ext.util.DelayedTask');
        }

        var onload = function () {
            // do something onload
            //console.log(Ext.Loader.history);
            console.log("Load is done!!!!");
        }
        var onerror = function () {
            // do something onerror
            console.log("Error!!!!");
        }
        var scope = this;
        Ext.Loader.injectScriptElement(url, onload, onerror, scope);

    },

    launch: function () {
        //================================
        console.log('launch');
        //================================
        this.callParent(arguments);
        // Ext.getStore('Notes').load();
    }
});



/* Global models and methods */

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