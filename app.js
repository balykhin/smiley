/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'smiley360': 'app'
});
//</debug>

Ext.application({
    name: 'smiley360',
    requires: [
        'Ext.MessageBox', 'Ext.data.Validations', 'smiley360.model.SignupModel'
    ],
    controllers: ['Index'],
    views: [
        'Login',
        'Signup',
        'Home',
        'ForgetPassword',
        'ShareLink',
        'ShareToBlog',
        'ShareToTwitter',
        'ShareToFacebook',
        'ShareToFace2Face',
        'ShareToYouTube',
        'UploadPhoto',
        'EditProfile',
        'Survey',
        'Missions',
        'Details',
        'Offers',
        'OfferAccept',
        'OfferDetails',
        'OfferRemove',
        'ReviewForFender',
		'Connect',
		'Browse',
		'BrowseInstruments',
		'Brand',
		'BrandImage',
		'Share',
        'ContactUs',
        'TermsOfUse',
		'OfferAcceptAddress',
		'MissionCompleted',
		'MissingOffers',
        'LoginWithFacebook',
    ],

    icon: {
        '36': 'resources/icons/Icon_Android36.png',
        '48': 'resources/icons/Icon_Android48.png',
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        console.log('App launched!');

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var shareView = {
        	xtype: 'shareview'
        }
        var loginView = {
            xtype: 'loginview'
        }
        var brandView = {
        	xtype: 'brandview'
        }
        var offersView = {
            xtype: 'offersview'
        }
        var offerDetailsView = {
            xtype: 'offerdetailsview'
        }

        var homeView = {
            xtype: 'homeview'
        }
        var detailsView = {
            xtype: 'detailsview'
        }
        var missionsView = {
            xtype: 'missionsview'
        }

        var signupView = {
            xtype: 'signupview'
        }

        var editprView = {
            xtype: 'editprofileview'
        }

        var surveyView = {
            xtype: 'surveyview'
        }
        var browseView = {
        	xtype: 'browseview'
        }
        var connectView = {
        	xtype: 'connectview'
        }
        var browseInstrumentsView = {
        	xtype: 'browseinstrumentsview'
        }
        // Initialize the main view
        Ext.Viewport.add([loginView, homeView, signupView, editprView, surveyView, missionsView, detailsView, offersView, offerDetailsView, browseView, connectView, browseInstrumentsView,brandView, shareView]);
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
