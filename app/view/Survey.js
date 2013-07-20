Ext.define('smiley360.view.Survey', {
    extend: 'Ext.Panel',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    alias: 'widget.surveyview',
    config: {
    	title: 'Take This Survey',
    	cls: 'signup-bg',
    	style: 'background-color: #363639;',
        laytout: { type: 'fit' },
        items: [
			{
			    xtype: 'toolbar',
			    title: 'Take This Survey',
			    docked: 'top',
			    ui: 'light',
			    items: [
					{
					    xtype: 'button',
					    text: '',
					    ui: 'plain',
					    iconCls: 'back-btn',
					    iconMask: true,
					    itemId: 'backBtn'
					},
					{ xtype: 'spacer' },
			    ]
			}, {
			    xtype: 'spacer',
			    height: '14px',
			    style: 'background-color: #F4F3F1; margin: 5px 5px 0px; -webkit-border-radius: 5px 5px 0px 0px;'
			}, {
			    xtype: 'container',
			    height: '90%',
			    padding: '15px',
			    margin: '0px 5px',
			    cls: 'cont-signup',
			    laytout: { type: 'vbox' },
			    items: [
					{
					    xtype: 'panel',
					    scrollable: 'vertical',
					    cls: 'popup-survey-innerpanel',
					    items: [
                            {
                                xtype: 'panel',
                                margin: '0px -35px 0px 0px',
                                html: '<iframe src="http://uat.smiley360.com/mobile_survey/pms000_1.html" frameborder="no" class="popup-survey-iframe" ></iframe>'
                            }
					    ]
					},
			    ],
			}, {
			    xtype: 'spacer',
			    height: '14px',
			    style: 'background-color: #F4F3F1; margin: 0px 5px; -webkit-border-radius: 0px 0px 5px 5px;'
			}
        ],
        listeners: [
            {
                delegate: "#cmdSignup",
                event: "tap",
                fn: "onSignupButtonTap"
            },
            {
                delegate: "#backBtn",
                event: "tap",
                fn: "onBackButtonTap"
            }
        ]
    },
    onSignupButtonTap: function () {
        console.log("signup button tapped");
        //alert('signup button tapped');
        this.fireEvent('signupCommand', this);
    },
    onBackButtonTap: function () {
        console.log("SurveyView->onBackButtonTap");
        //alert('signup button tapped');
        this.fireEvent('SurveyBackButtonCommand', this);
    }
});