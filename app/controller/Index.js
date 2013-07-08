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
            missionlistView: 'missionlistview',
        },
        control: {
            loginView: {
                ShowLoginViewCommand: 'ShowLoginViewCommand',
                ShowSignupViewCommand: 'ShowSignupViewCommand',
                ShowEditProfileViewCommand: 'ShowEditProfileViewCommand',
                ShowSurveyViewCommand: 'ShowSurveyViewCommand',
                onMissionListTapCommand: 'onMissionListTapCommand',
                onMissionTapCommand: 'onMissionTapCommand',
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
           
        }
    },
    
    // Tansitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    // Commands
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
    onMissionListTapCommand: function() {
        Ext.Viewport.animateActiveItem(this.getMissionListView(), this.slideLeftTransition);
        //Ext.getCmp('missionlist_menu').hide();
        //Ext.getCmp('missions_menu').hide();
        Ext.Msg.alert('Mis!');
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