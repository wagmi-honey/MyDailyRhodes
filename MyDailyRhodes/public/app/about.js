Ext.ns('about', 'Ext.ux');

about.CompanyForm = {
		
		frame:true,
	   	title: 'Register',
	
	    width: 350,
	    defaults: {width: 230},
	    
		scroll: false,
		items: [
		{
			xtype: 'textfield',
		    name : 'name',
		    label: 'CSC Mobile Solution',
		    useClearIcon: true,
		    autoCapitalize : false
		}, {
			xtype: 'textfield',
		    name : 'version',
		    label: 'Version: Service Release 1',
		    useClearIcon: true,
		    autoCapitalize : false
		}, {
			xtype: 'textfield',
		    name : 'buildid',
		    label: 'Build id: 20100917-0705',
		    useClearIcon: true,
		    autoCapitalize : false
		}, {
			xtype: 'textfield',
		    name : 'copyright',
		    label: '(c) Copyright CSC contributors and others 2011. All rights reserved.',
		    useClearIcon: true,
		    autoCapitalize : false
		}, {
            xtype: 'textfield',
            name : 'website',
            label: 'Website',
            placeHolder: 'Visit http://www.csc.com',
            useClearIcon: true
	    }]
};
