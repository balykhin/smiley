var save_size,s_hide, first_time=true, first_time_children=true,field_about, field_url,child_field_hide, make_hide=false;
Ext.define('smiley360.view.EditProfile', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.editprofileview',
    cls: 'normal-page-bg',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        cls: 'cust-tabbar',
        items: [
            {
                title: 'Edit Profile',
                iconCls: 'home-img',
                styleHtmlContent: true,
                scrollable: true,

                items: [
                	{
                	    xtype: 'toolbar',
                	    title: 'Edit Profile',
                	    cls: 'edit-profile-title inner_shadow',//'home-title',
                	    docked: 'top',
                	    ui: 'light',
                	    items: [
							{
							    xtype: 'button',
							    text: '',
							    ui: 'plain',
							    iconCls: 'back-btn',
							    iconMask: true,
							    itemId: 'backBtnProfile'
							},
							{ xtype: 'spacer' },
							{
							    xtype: 'button',
							    iconCls: 'menu-btn',
							    iconMask: true,
							    ui: 'plain',
							    text: '',
							    itemId: 'menuBtn'
							}
                	    ]
                	},
					{
					    items: [
                        	{
                        	    xtype: 'spacer',
                        	    height: '14px',
                        	    style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
                        	},
							{
							    xtype: 'spacer',
							    height: '7px',
							    style: 'background-color: #efecea;'
							},
							{
							    xtype: 'container',
							    laytout: { type: 'vbox' },
							    items: [
									{
									    xtype: 'container',
									    cls: 'has-shadow',
									    layout: { type: 'hbox' },
									    items: [
											{
											    xtype: 'label',
											    html: 'GENERAL INFORMATION',
											    cls: 'heading-text active-sign',
											    style: 'padding-left: 15px;',
											    flex: 1
											},
									    ]
									},
									  {
									      xtype: 'container',
									      cls: 'has-shadow',
									      layout: { type: 'vbox' },
									      style: 'background-color: #efecea;',
									      padding: 10,
									      items: [

                                              {
                                                  xtype: 'container',                                                  
                                                  layout: { type: 'hbox' },
                                                  style: 'background-color: #efecea; padding-bottom: 5px;',
                                                  items: [
                                               {
                                                   xtype: 'image',
                                                   //src: '',
                                                   style: 'border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
                                                   flex: 1,
                                                   cls: 'has-shadow',
                                               },
                                                      {
                                                          xtype: 'container',
                                                          layout: { type: 'vbox' },
                                                          style: 'background-color: #efecea; padding-top: 30px; padding-left: 10px;',
                                                          flex: 6,
                                                          items: [
                                                                      {
                                                                          xtype: 'textfield',
                                                                          placeHolder: 'First Name',
                                                                          itemId: 'txtFirstName',
                                                                          name: 'txtFirstName',
                                                                          cls: 'cust-input',
                                                                          required: true
                                                                      },
                                                                      {
                                                                          xtype: 'textfield',
                                                                          placeHolder: 'Last Name',
                                                                          itemId: 'txtLastName',
                                                                          name: 'txtLastName',
                                                                          cls: 'cust-input',
                                                                          required: true
                                                                      },
                                                                      
                                                          ]
                                                      },
                                                      ///end innervbox
                                                       


                                                  ],
                                                  ///end items hbox

                                              },///end hbox
                                              {
                                                  xtype: 'textfield',
                                                  placeHolder: 'Email',
                                                  itemId: 'txtEmail',
                                                  name: 'txtEmail',
                                                  cls: 'cust-input',
                                                  required: true
                                              },

					                                    {
					                                        xtype: 'datepickerfield',
					                                        cls: 'cust-input cust-input-ddl',
					                                        name: 'birthday',
					                                        itemId: 'calDob',
					                                        name: 'calDob',
					                                        ui: 'light',
					                                        placeHolder: 'Date of birth',
					                                        required: true
					                                    },
					                                    {
					                                        xtype: 'selectfield',
					                                        itemId: 'ddlGender',
					                                        name: 'ddlGender',
					                                        cls: 'cust-input cust-input-ddl',
					                                        placeHolder: 'Gender',
					                                        options: [
			                                                    { text: '', value: '' },
			                                                    { text: 'Male', value: 'male' },
			                                                    { text: 'Female', value: 'female' }
					                                        ]
					                                    },

									      ],//end items top vbox
									  },


									{
									    xtype: 'spacer',
									    height: '10px',
									    style: 'background-color: #f4f3f1; margin: 0px 2px;'
									},
									{
									    xtype: 'spacer',
									    height: '7px',
									    style: 'background-color: #efecea;'
									},
                                    /////part20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
									{
									    xtype: 'container',
									    cls: 'has-shadow',
									    layout: { type: 'hbox' },
									    items: [
											{
											    xtype: 'label',
											    html: 'SHIPPING INFORMATION',
											    cls: 'heading-text active-sign',
											    style: 'padding-left: 15px;',
											    flex: 1
											},
									    ]
									},
									  {
									      xtype: 'container',
									      cls: 'has-shadow',
									      layout: { type: 'vbox' },
									      style: 'background-color: #efecea;',
									      padding: 10,
									      items: [

                                              {
                                                  xtype: 'container',
                                                  layout: { type: 'hbox' },
                                                  items: [
                                               
                                                      {
                                                          xtype: 'container',
                                                          layout: { type: 'vbox' },
                                                          flex: 6,
                                                          items: [
                                                                      {
                                                                          xtype: 'textfield',
                                                                          placeHolder: 'Address1',
                                                                          itemId: 'txtAddress1',
                                                                          name: 'txtAddress1',
                                                                          cls: 'cust-input',
                                                                          required: false
                                                                      },
                                                                    {
                                                                        xtype: 'textfield',
                                                                        placeHolder: 'Address2',
                                                                        itemId: 'txtAddress2',
                                                                        name: 'txtAddress2',
                                                                        cls: 'cust-input',
                                                                        required: false
                                                                    },

                                                          ]
                                                      },
                                                      ///end innervbox



                                                  ],
                                                  ///end items hbox

                                              },///end hbox
                                              {
                                                  xtype: 'container',
                                                  layout: { type: 'hbox' },
                                                  items: [
                                                              {
                                                                  xtype: 'textfield',
                                                                  flex: 20,
                                                                  placeHolder: 'City',
                                                                  itemId: 'txtCity',
                                                                  name: 'txtCity',
                                                                  cls: 'cust-input',
                                                                  required: false
                                                              },
                                                              { xtype: 'spacer', height: '10px' },

                                                              {
                                                                  xtype: 'selectfield',
                                                                  flex: 20,
                                                                  itemId: 'ddlState',
                                                                  name: 'ddlState',
                                                                  cls: 'cust-input cust-input-ddl',
                                                                  placeHolder: 'State',
                                                                  options: [
                                                                      { text: '', value: '' },
                                                                  ]
                                                              },
                                                  ]
                                              },//end second hbox

                                            {
                                              	xtype: 'textfield',
                                              	placeHolder: 'CityStateZip',
                                              	itemId: 'txtCityStateZip',
                                              	name: 'txtCityStateZip',
                                              	cls: 'cust-input',
                                              	required: false
                                            },
					                        {
					                            xtype: 'selectfield',
					                            itemId: 'ddlCountry',
					                            name: 'ddlCountry',
					                            cls: 'cust-input cust-input-ddl',
					                            placeHolder: 'Country',
					                            options: [
			                                        { text: '', value: '' },
					                            ]
					                        },

									      ],//end items top vbox
									  },


									{
									    xtype: 'spacer',
									    height: '10px',
									    style: 'background-color: #f4f3f1; margin: 0px 2px;'
									},
									{
									    xtype: 'spacer',
									    height: '7px',
									    style: 'background-color: #efecea;'
									},
                                    /////part30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                                    {
                                        xtype: 'container',
                                        cls: 'has-shadow',
                                        layout: { type: 'hbox' },
                                        items: [
											{
											    xtype: 'label',
											    html: 'ABOUT YOU',
											    cls: 'heading-text active-sign',
											    style: 'padding-left: 15px;',
											    flex: 1
											},
                                        ]
                                    },
									  {
									      xtype: 'container',
									      cls: 'has-shadow',
									      layout: { type: 'vbox' },
									      style: 'background-color: #efecea;',
									      padding: 10,
									      items: [
                                              					{
                                              					    xtype: 'selectfield',
                                              					    itemId: 'ddlStatus',
                                              					    name: 'ddlStatus',
                                              					    cls: 'cust-input cust-input-ddl',
                                              					    placeHolder: 'Single',
                                              					    options: [
                                                                        { text: '', value: '' },
                                                                        { text: 'Single', value: 'Single' },
                                                                        { text: 'Married', value: 'Married' }
                                              					    ]
                                              					},
                                                                {
                                                                    xtype: 'selectfield',
                                                                    itemId: 'ddlChildren',
                                                                    name: 'ddlChildren',
                                                                    cls: 'cust-input cust-input-ddl',
                                                                    placeHolder: 'Do you have children?',
                                                                    listeners:
                                                                               {

                                                                                   change: function(selectbox,newValue,oldValue)
                                                                                   {
                                                                                       first_time_children = false;
                                                                                       //first_time = false;//check if custom variable has been set to false
                                                                                       if(newValue=='yes')
                                                                                       {
                                                                                           child_field_hide.show();                                  
                                                                                       }
                                                                                       if (newValue != 'yes') {
                                                                                           child_field_hide.hide();
                                                                                           child_field_hide.setValue('');
                                                                                       }
                                                                                   },
                                                                                      
                                                                                       
                                                                                       
                                                                                   
                                                                               },
                                                                    options: [
			                                                            { text: '', value: '' },
			                                                            { text: 'Yes, I have children.', value: 'yes' },
			                                                            { text: 'No, I haven\'t children.', value: 'no' }
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'selectfield',
                                                                    itemId: 'ddlHaveChildren',
                                                                    name: 'ddlHaveChildren',
                                                                    //style: 'my-ddl-color',
                                                                    cls: 'cust-input cust-input-ddl',
                                                                    placeHolder: 'How many children do you have?',
                                                                    listeners:
                                                                                {
                                                                                    element: 'element',
                                                                                    painted: function () {
                                                                                        child_field_hide = this;
                                                                                        if (first_time_children == true) { child_field_hide.hide(); };                                          
                                                                                    },
                                                                                },
                                                                    options: [
			                                                            { text: '', value: '' },
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'selectfield',
                                                                    itemId: 'ddlHousehold',
                                                                    name: 'ddlHousehold',
                                                                    cls: 'cust-input cust-input-ddl',
                                                                    placeHolder: 'Household Income',
                                                                    options: [
			                                                            { text: '', value: '' },
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    itemId: 'ddlRace',
                                                                    name: 'ddlRace',
                                                                    //style: 'my-ddl-color',
                                                                    cls: 'cust-input cust-input-ddl',
                                                                    placeHolder: 'Race / Ethnicity',
                                                                    listeners:
                                                                                {
                                                                                    element: 'element',
                                                                                    painted: function () {
                                                                                        //if (first_time == true) { s_hide.hide(); };
                                                                                    },
                                                                                    mousedown: function () {
                                                                                        this.setValue('Race / Ethnicity');
                                                                                        //this.setCls('cust-input cust-input-ddl my-ddl-color');
                                                                                        first_time = false;
                                                                                        if (make_hide == false) {
                                                                                            s_hide.show();
                                                                                            make_hide = true;
                                                                                            field_about.setValue(' ');
                                                                                            field_url.setValue(' ');
                                                                                            field_about.setReadOnly(true);                                                                                            
                                                                                            field_url.setReadOnly(true);
                                                                                            field_about.setPadding('0px 20px');
                                                                                            field_url.setPadding('0px 20px');
                                                                                        }
                                                                                        else {
                                                                                            s_hide.hide();
                                                                                            //Ext.Msg.alert('dfvgd');
                                                                                            make_hide = false;
                                                                                            field_about.setValue('');
                                                                                            field_url.setValue('');
                                                                                            field_url.setReadOnly(false);
                                                                                            field_url.setReadOnly(false);
                                                                                            field_about.setPadding('0px 0px');
                                                                                            field_url.setPadding('0px 0px');
                                                                                        };
                                                                                        //Ext.Msg.alert('Hidden!');
                                                                                    },          
                                                                                },
                                                                    options: [
			                                                            { text: '', value: '' },
                                                                    ]
                                                                },
                                                                //////////////////checkboxes
                                                                {
                                                                    xtype: 'panel',
                                                                    layout: 'vbox',
                                                                    itemId: 'ddlCheckboxes',
                                                                    //hidden: 'true',
                                                                    name: 'ddlCheckboxes',
                                                                    style: 'border-radius: 0px 0px 5px 5px; background-color:white; margin:-10px 0px -10px 0px;',
                                                                    cls: 'cust-input',
                                                                    listeners:
                                                                                {
                                                                                    element: 'element',
                                                                                    painted: function () {
                                                                                        s_hide = this;
                                                                                        if (first_time == true) { s_hide.hide(); };
                                                                                    },
                                                                                    
                                                                                    
                                                                                },
                                                                    //padding: 5,
                                                                    items: [
                                                                        {
                                                                            xtype: 'label',
                                                                            html: '(please select all that apply)',
                                                                            cls: 'my-checkbox-label',
                                                                            style: 'font-family: \'franklin\';font-size: 0.8em; color: black; background-color:transparent; padding-left: 120px;',
                                                                            margin: '-19px 0px 0px 0px',
                                                                            
                                                                        },
                                                                        {
                                                                            xtype: 'panel',
                                                                            layout: 'hbox',
                                                                            name: 'afr-american-p',
                                                                            padding: 5,
                                                                            items:
                                                                                [
                                                                                    {
                                                                                        xtype: 'checkboxfield',
                                                                                        name: 'afr-american-ch',
                                                                                        height: 23,
                                                                                        width: 23,
                                                                                    },
                                                                                    {
                                                                                        xtype: 'label',
                                                                                        name: 'afr-american-l',
                                                                                        html: 'Black\\African-American',
                                                                                        cls: 'my-checkbox-label',
                                                                                        style: 'background-color:white;',
                                                                                        height: 23,
                                                                                    },
                                                                               ],
                                                                        },
                                                                        {
                                                                            xtype: 'panel',
                                                                            layout: 'hbox',
                                                                            style: 'background-color:white;',
                                                                            name: 'asian-p',
                                                                            padding: 5,
                                                                            items:
                                                                                [
                                                                                    {
                                                                                        xtype: 'checkboxfield',
                                                                                        name: 'asian-ch',
                                                                                        height: 23,
                                                                                        width: 23,
                                                                                    },
                                                                                    {
                                                                                        xtype: 'label',
                                                                                        name: 'asian-l',
                                                                                        html: 'Asian or Pacific Islander',
                                                                                        cls: 'my-checkbox-label',
                                                                                        style: 'background-color:white;',
                                                                                        height: 23,
                                                                                    },
                                                                                ],
                                                                        },
                                                                        {
                                                                            xtype: 'panel',
                                                                            layout: 'hbox',
                                                                            name: 'white-caucasian-p',
                                                                            style: 'background-color:white;',
                                                                            padding: 5,
                                                                            items:
                                                                                [
                                                                                    {
                                                                                        xtype: 'checkboxfield',
                                                                                        name: 'white-caucasian-ch',
                                                                                        height: 23,
                                                                                        width: 23,
                                                                                    },
                                                                                    {
                                                                                        xtype: 'label',
                                                                                        name: 'white-caucasian-l',
                                                                                        html: 'White\\Caucasian',
                                                                                        cls: 'my-checkbox-label',
                                                                                        style: 'background-color:white;',
                                                                                        height: 23,
                                                                                    },
                                                                                ],
                                                                        },
                                                                        {
                                                                            xtype: 'container',
                                                                            layout: 'hbox',
                                                                            style: 'background-color:white;',
                                                                            padding: 5,
                                                                            items:
                                                                                [
                                                                                    {
                                                                                        xtype: 'checkboxfield',
                                                                                        name: 'hispanic-ch',
                                                                                        height: 23,
                                                                                        width: 23,
                                                                                    },
                                                                                    {
                                                                                        xtype: 'label',
                                                                                        name: 'hispanic-l',
                                                                                        html: 'Hispanic or Latino',
                                                                                        cls: 'my-checkbox-label',
                                                                                        style: 'background-color:white;',
                                                                                        height: 23,
                                                                                    },
                                                                                ],
                                                                        },
                                                                        {
                                                                            xtype: 'container',
                                                                            layout: 'hbox',
                                                                            style: 'background-color:white;',
                                                                            padding: 5,
                                                                            items:
                                                                                [
                                                                                    {
                                                                                        xtype: 'checkboxfield',
                                                                                        name: 'navite-amer-alaska-ch',
                                                                                        height: 23,
                                                                                        width: 23,
                                                                                    },
                                                                                    {
                                                                                        xtype: 'label',
                                                                                        name: 'navite-amer-alaska-l',
                                                                                        html: 'Native American or Alaskan Native',
                                                                                        cls: 'my-checkbox-label',
                                                                                        style: 'background-color:white;',
                                                                                        height: 23,
                                                                                    },
                                                                                ],
                                                                        },
                                                                        {
                                                                            xtype: 'container',
                                                                            layout: 'hbox',
                                                                            style: 'border-radius: 0px 0px 5px 5px; background-color:white;',
                                                                            padding: 5,
                                                                            items:
                                                                                [
                                                                                    {
                                                                                        xtype: 'checkboxfield',
                                                                                        name: 'not-specified-ch',
                                                                                        height: 23,
                                                                                        width: 23,
                                                                                    },
                                                                                    {
                                                                                        xtype: 'label',
                                                                                        name: 'not-specified-l',
                                                                                        html: 'I prefer not to specify',
                                                                                        cls: 'my-checkbox-label',
                                                                                        style: 'background-color:white;',
                                                                                        height: 23,
                                                                                    },
                                                                                ],
                                                                        },
                                                                        
                                                                    ],//end chackbox items
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    height: 80,
                                                                    placeHolder: 'Tell us about yourself',
                                                                    itemId: 'txtAboutYourself',
                                                                    name: 'txtAboutYourself',
                                                                    cls: 'cust-input',
                                                                    required: false,
                                                                    listeners:
                                                                        {
                                                                            initialize: function ()
                                                                                {
                                                                                    field_about=this;
                                                                                }
                                                                        }
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    placeHolder: 'Blog URL',
                                                                    itemId: 'txtBlogURL',
                                                                    name: 'txtBlogURL',
                                                                    cls: 'cust-input',
                                                                    required: false,
                                                                    listeners:
                                                                        {
                                                                            initialize: function () {
                                                                                field_url = this;
                                                                            }
                                                                        }
                                                                },


                                              
									      ],//end items top vbox
									  },

                                      {
                                          xtype: 'container',
                                          margin: '0px 2px 0px 2px',
                                          padding: '25px 0px 0px 0px',
                                          style: 'background-color: #F4F3F1; padding: 0px 20px;',
                                          layout: { type: 'vbox' },
                                          items: [
                                              {
                                                  xtype: 'button',
                                                  itemId: 'cmdSignup',
                                                  cls: 'cust-btn signup-btn save-changes-btn',
                                                  //cls: '',
                                                  text: 'SAVE CHANGES',

                                              },
                                              ],
                                      },

									{
									    xtype: 'spacer',
									    height: '10px',
									    style: 'background-color: #f4f3f1; margin: 0px 2px;'
									},
									
									{
									    xtype: 'spacer',
									    height: '7px',
									    style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

									},
									{
									    xtype: 'spacer',
									    height: '10px',
									    style: 'background: transparent;'
									}

							    ]
							}
					    ]
					}
                ]
            },
            {
                title: 'MISSIONS',
                iconCls: 'mission-img',

                items: [
                    {
                        xtype: 'toolbar',
                        title: 'SIGN UP',
                        docked: 'top',
                        ui: 'light',
                        items: [
							{
							    xtype: 'button',
							    text: '',
							    ui: 'plain',
							    iconCls: 'cust-back',
							    itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
							    xtype: 'button',
							    iconCls: 'cust-menu',
							    ui: 'plain',
							    text: '',
							    itemId: 'menuBtn'
							}
                        ]
                    },
                ]
            },
            {
                title: 'SHARE',
                iconCls: 'share-img',

                items: [
                    {
                        xtype: 'toolbar',
                        title: 'SIGN UP',
                        docked: 'top',
                        ui: 'light',
                        items: [
							{
							    xtype: 'button',
							    text: '',
							    ui: 'plain',
							    iconCls: 'cust-back',
							    itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
							    xtype: 'button',
							    iconCls: 'cust-menu',
							    ui: 'plain',
							    text: '',
							    itemId: 'menuBtn'
							}
                        ]
                    },
                ]
            },
            {
                title: 'OFFERS',
                iconCls: 'offers-img',

                items: [
                    {
                        xtype: 'toolbar',
                        title: 'SIGN UP',
                        docked: 'top',
                        ui: 'light',
                        items: [
							{
							    xtype: 'button',
							    text: '',
							    ui: 'plain',
							    iconCls: 'cust-back',
							    itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
							    xtype: 'button',
							    iconCls: 'cust-menu',
							    ui: 'plain',
							    text: '',
							    itemId: 'menuBtn'
							}
                        ]
                    },
                ]
            },
            {
                title: 'CONNECT',
                iconCls: 'connect-img',

                items: [
                    {
                        xtype: 'toolbar',
                        title: 'SIGN UP',
                        docked: 'top',
                        ui: 'light',
                        items: [
							{
							    xtype: 'button',
							    text: '',
							    ui: 'plain',
							    iconCls: 'cust-back',
							    itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
							    xtype: 'button',
							    iconCls: 'cust-menu',
							    ui: 'plain',
							    text: '',
							    itemId: 'menuBtn'
							}
                        ]
                    },
                ]
            }
        ],
        listeners: [
			{
			    delegate: "#backBtnProfile",
			    event: "tap",
			    fn: "onBackButtonProfileTap"
			}
        ]
    },
    onBackButtonProfileTap: function () {
        console.log('back button tapped');
        this.fireEvent('backButtonCommandProfile', this);
    }
});
