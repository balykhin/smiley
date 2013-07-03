Ext.define('smiley360.controller.Index', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginview',
            signupView: 'signupview',
            homeView: 'homeview',
            shareToFacebookView: 'sharetofacebookview',
            shareToTwitterView: 'sharetotwitterview',
        },
        control: {
            loginView: {
                loginCommand: 'loginCommand',
                fbShareCommand: 'fbShareCommand',
                shareCommand: 'shareCommand',
                signupPageCommand: 'signupPageCommand'
            },
            signupView: {
                // The commands fired by the signup view.
                signupCommand: 'signupCommand',
                backButtonCommandSignup: 'backButtonCommandSignup'
            },
            homeView: {
                backButtonCommandHome: 'backButtonCommandHome'
            },
            sharetofacebookview: {
            },
            sharetotwitterview: {
            },
        }
    },

    // Tansitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },


    //	Commands
    signupCommand: function () {
        console.log("signupCommand");
        //Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

    },
    signupPageCommand: function () {
        console.log('Signup Page Command');
        Ext.Viewport.animateActiveItem(this.getSignupView(), this.slideLeftTransition);
    },
    backButtonCommandHome: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
    },
    backButtonCommandSignup: function () {
        console.log('Back button command signup');
        Ext.Viewport.animateActiveItem(this.getLoginView(), this.slideRightTransition);
    },
    loginCommand: function () {
        console.log("LoginCommand");
        Ext.Viewport.animateActiveItem(this.getHomeView(), this.slideLeftTransition);

        //this.activateForgetPassword();
    },

    shareCommand: function () {
        console.log("shareCommand");

        var shareForm = Ext.Viewport.down('sharetotwitterview');
        //create the form if it doesn't exists
        if (!shareForm) {
            shareForm = Ext.widget('sharetotwitterview');
        }
        shareForm.reset();
        shareForm.show();
    },

    fbShareCommand: function () {
        console.log('fbShareCommand Click');

        var shareForm = Ext.Viewport.down('sharetofacebookview');
        //create the form if it doesn't exists
        if (!shareForm) {
            shareForm = Ext.widget('sharetofacebookview');
        }
        shareForm.reset();
        shareForm.show();
    },

    //onHideForm: function (button) {
    //    console.log('Button Click for Save');
    //    var form = button.up('panel');
    //    //do your processing here
    //    form.hide();
    //},

    //	Base Class functions.
    init: function () {
        this.callParent(arguments);
        console.log("init");
    },
    launch: function () {
        this.callParent(arguments);
        // Ext.getStore('Notes').load();
        console.log('launch');
    }
});