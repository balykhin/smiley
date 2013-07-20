Ext.define('smiley360.view.BrandImage', {
	extend: 'Ext.Container',
	alias: 'widget.brandimageview',
	config: {
		modal: true,
		centered: true,
		fullscreen: true,
		hideOnMaskTap: true,
		id: 'xBrandImageView',
		scrollable: 'vertical',
		cls: 'popup-panel',
		items: [{
			xtype: 'panel',
			id: 'xBrandImageRootPanel',
			cls: 'popup-root-panel',
			items: [{
				xtype: 'image',
				cls: 'popup-close-button',
				listeners: {
					tap: function () {
						Ext.getCmp('xBrandImageView').destroy();
					}
				}
			}, {
				xtype: 'carousel',
				height: 300,
				items: [{
					xtype: 'container',
					layout: 'vbox',
					items: [
								{
									xtype: 'image',
									height: '100%',
									src: 'resources/images/guitar_.png',
								},
								{
									xtype: 'panel',
									html: '<div class="left-btn-brandimage"></div><div class="right-btn-brandimage"></div>'
								},
					],},
				],},
			],},
		],
		listeners: {
			initialize: function () {
				this.setHeight(Ext.getCmp('xBrandImageRootPanel').element.getHeight());
			},
			hide: function () {
				this.destroy();
			}
		},
	},
});