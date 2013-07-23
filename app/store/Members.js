Ext.define('smiley360.store.Members', {
	extend: 'Ext.data.Store',
	config: {
		model: 'smiley360.model.Member',
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'members'
		}
	}
});