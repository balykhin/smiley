Ext.define('smiley360.view.Login', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.field.Text',
    ],
    alias: 'widget.loginview',
    config: {
        id: 'xLoginView',
        cls: 'page-bg',
        title: 'Login',
        padding: '15px',
        scrollable: 'none',
        items: [{
            xtype: 'image',
            src: 'resources/images/logo.png',
            cls: 'logo'
        }, {
            xtype: 'spacer',
            height: '14px'
        }, {
            xtype: 'panel',
            cls: 'login-box',
            height: '254px',
            items: [{
                xtype: 'textfield',
                placeHolder: 'Username',
                itemId: 'txtUserName',
                id: 'txtLogin',
                name: 'txtUserName',
                cls: 'cust-input cust-input-user',
                clearIcon: false,
                required: true,
                value: 'mobiletest.smiley360@gmail.com',
            }, {
                xtype: 'passwordfield',
                maxHeight: '20px',
                placeHolder: '******',
                id: 'txtPassword',
                itemId: 'txtPassword',
                name: 'txtPassword',
                cls: 'cust-input cust-input-pwd',
                clearIcon: false,
                required: true,
                value: 'general1234',
            }, {
                xtype: 'spacer',
                height: '12px'
            }, {
                xtype: 'button',
                itemId: 'xLogin',
                id: 'login_btn',
                cls: 'cust-btn login-btn',
                text: 'LOG IN'
            }, {
                xtype: 'label',
                id: 'xForgetPassword',
                html: 'Lost your password?',
                cls: 'left cust-label'
            }, {
                xtype: 'label',
                id: 'xSignup',
                html: 'Need to set up a New Account?',
                cls: 'right cust-label'
            }, {
                xtype: 'spacer',
                cls: 'clear',
                height: '27px'
            }, {
                xtype: 'button',
                text: 'LOG IN WITH FACEBOOK',
                ui: 'action',
                listeners: {
                    tap: function () {
                        Ext.widget('loginwithfacebookview').show();
                        //this.up('#xLoginView').doLoginWithFacebook();
                    }
                }
            }, {
                xtype: 'label',
                listeners: {
                    initialize: function () {
                        this.setHtml(document.location);
                    }
                }
            }, {
                xtype: 'container',
                id: 'xFacebookInfo',
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'T',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetotwitterview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'F',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetofacebookview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'Y',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetoyoutubeview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'L',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharelinkview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'B',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetoblogview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'P',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('uploadphotoview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: '2',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('sharetoface2faceview').show();
                        }
                    }
                }],
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'R',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('reviewforfenderview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'C',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('contactusview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'T',
                    width: '40px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('termsofuseview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'OA',
                    width: '55px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('offeracceptview').show();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'OR',
                    width: '55px',
                    ui: 'action',
                    listeners: {
                        tap: function () {
                            Ext.widget('offerremoveview').show();
                        }
                    }
                }, {
                	xtype: 'button',
                	text: 'OA_A',
                	width: '80px',
                	ui: 'action',
                	listeners: {
                		tap: function () {
                			Ext.widget('offeracceptaddressview').show();
                		}
                	}
                }, ]
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xEditProfile',
                    text: 'E',
                    width: '50px',
                    ui: 'action',
                    tap: 'onEditProfileTap'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xSurvey',
                    text: 'S',
                    width: '50px',
                    ui: 'action',
                    tap: 'onSurveyTap'
                }],
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xMission',
                    text: 'M',
                    width: '50px',
                    ui: 'action',
                    tap: 'onMission'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xMissionDetails',
                    text: 'M_D',
                    width: '70px',
                    ui: 'action',
                    tap: 'onMission_List'
                }, {
                    xtype: 'button',
					text: 'M_C',
					width: '80px',
					ui: 'action',
					listeners: {
						tap: function () {
							Ext.widget('missioncomletedview').show();
						}
					}
				}, {
					xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xOffers',
                    text: 'O',
                    width: '50px',
                    ui: 'action',
                    tap: 'onOffers'
                }, {
                    xtype: 'button',
                    style: 'background-color: #3f4b4e !important;',
                    itemId: 'xOffersDetails',
                    text: 'O_D',
                    width: '70px',
                    ui: 'action',
                    tap: 'onOffersDetails'
            }, {
					xtype: 'button',
					text: 'M_O',
					width: '80px',
					ui: 'action',
					listeners: {
						tap: function () {
							Ext.widget('missingoffersview').show();
						}
					}
				}, ],
			}, {
                xtype: 'panel',
                layout: 'hbox',
                items: [
					{
					    xtype: 'button',
					    itemId: 'xConnect',
					    text: 'C',
					    width: '50px',
					    ui: 'confirm',
					    tap: ''
					}, {
					    xtype: 'button',
					    itemId: 'xBrowse',
					    text: 'B',
					    width: '50px',
					    ui: 'confirm',
					    tap: 'onxBrowse'
					},
                {
                    xtype: 'button',
                    itemId: 'xBrowseInstruments',
                    text: 'B_I',
                    width: '70px',
                    ui: 'confirm',
                    tap: 'onxBrowseInstruments'
                }, {
                    xtype: 'button',
                    itemId: 'xBrand',
                    text: 'Br',
                    width: '70px',
                    ui: 'confirm',
                    tap: 'onxBrand'
                }, {
                	xtype: 'button',
                	itemId: 'xShare',
                	text: 'Sh',
                	width: '70px',
                	ui: 'confirm',
                	tap: 'onxShare'
                }, ],
            }],
        }],
        listeners: [{
        	delegate: "#xShare",
        	fn: "onShareTap",
        	event: "tap",
        }, {
            delegate: "#xBrand",
            fn: "onBrandTap",
            event: "tap",
        }, {
            delegate: "#xConnect",
            fn: "onConnectTap",
            event: "tap",
        }, {
            delegate: "#xBrowseInstruments",
            fn: "onBrowseInstrumentsTap",
            event: "tap",
        }, {
            delegate: "#xBrowse",
            fn: "onBrowseTap",
            event: "tap",
        }, {
            delegate: "#xOffersDetails",
            fn: "onOffersDetailsTap",
            event: "tap",
        }, {
            delegate: "#xOffers",
            fn: "onOffersTap",
            event: "tap",
        }, {
            delegate: "#xMission",
            fn: "onMissionTap",
            event: "tap",
        }, {
            delegate: "#xMissionDetails",
            fn: "onMissionDetailsTap",
            event: "tap",
        }, {
            delegate: "#xLogin",
            fn: "onLoginTap",
            event: "tap",
        }, {
            delegate: 'div#xSignup',
            fn: 'onSignupTap',
            element: 'element',
            event: 'tap',
        }, {
            delegate: 'div#xForgetPassword',
            fn: 'onForgetPasswordTap',
            event: 'tap',
            element: 'element',
        }, {
            delegate: "#xEditProfile",
            fn: "onEditProfileTap",
            event: "tap",
        }, {
            delegate: "#xSurvey",
            fn: "onSurveyTap",
            event: "tap",
        }]
    },
    onShareTap: function () {
    	//================================
    	console.log("onShareTap");
    	//================================
    	this.fireEvent('onShareTapCommand', this);
    },
    onBrandTap: function () {
        //================================
        console.log("onBrandTap");
        //================================
        this.fireEvent('onBrandTapCommand', this);
    },
    onConnectTap: function () {
        //================================
        console.log("onConnectTap");
        //================================
        this.fireEvent('onConnectTapCommand', this);
    },
    onBrowseInstrumentsTap: function () {
        //================================
        console.log("onBrowseTap");
        //================================
        this.fireEvent('onBrowseInstrumentsTapCommand', this);
    },
    onBrowseTap: function () {
        //================================
        console.log("onBrowseTap");
        //================================
        this.fireEvent('onBrowseTapCommand', this);
    },

    onLocalstoragetestTap: function () {
        //================================
        console.log("onLocalstoragetestTap");
        //================================
        this.fireEvent('onLocalstoragetestTapCommand', this);
    },

    onOffersDetailsTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onOffersDetailsTapCommand', this);
    },

    onOffersTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onOffersTapCommand', this);
    },

    onMissionDetailsTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionDetailsTapCommand', this);
    },

    onMissionTap: function () {
        //================================
        console.log("onLoginTap");
        //================================
        this.fireEvent('onMissionTapCommand', this);
    },

    onLoginTap: function () {
        Ext.getCmp('login_btn').setDisabled(true);
        this.fireEvent('AuthentificateCommand', this, this.down("#txtLogin").getValue(), this.down("#txtPassword").getValue());
    },

    onSignupTap: function () {
        //================================
        console.log("onSignupTap");
        //================================
        this.fireEvent('ShowSignupViewCommand', this);
    },

    onForgetPasswordTap: function () {
        Ext.widget('forgetpasswordview').show();
    },

    onEditProfileTap: function () {
        this.fireEvent('getProfileCommand', this);
    },

    onSurveyTap: function () {
        //================================
        console.log("onSurveyTap");
        //================================
        this.fireEvent('ShowSurveyViewCommand', this);
    },

    getAuthData: function () {
        var getView = this;
        var getData = {
            loginData: Ext.getCmp('txtLogin').getValue(),
            passwordData: Ext.getCmp('txtPassword').getValue()
        };
        //smiley360.authenticate(getView, getData.loginData, getData.passwordData);
    },
});
