Ext.ns('login', 'Ext.ux');

login.LoginForm = {
	scroll: 'vertical',
	url   : '/app/Settings/do_login',
	standardSubmit : false,
	items: [
	{
		xtype: 'fieldset',
		title: '',
		instructions: 'Please enter your credentials.',
		defaults: {
			required: true,
			labelAlign: 'left',
			labelWidth: 100
		},
		items: [
		{
			xtype: 'textfield',
			name : 'login',
			label: 'Login',
			useClearIcon: true,
			autoCapitalize : false
		}, {
			xtype: 'passwordfield',
			name : 'password',
			label: 'Password',
			useClearIcon: true,
			autoCapitalize : false
			}]
		}
		],
		listeners : {
			submit : function(form, result){
				console.log('success', Ext.toArray(arguments));
			},
			exception : function(form, result){
				console.log('failure', Ext.toArray(arguments));
			}
		},
		dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			items: [
				{
					text: 'Reset',
					handler: function() {
						login.form.reset();
					}
				}, 
				{
					text: 'About',
					ui: 'forward',
					handler: function() {
						// create the root panel
					    new Ext.Panel({
					        fullscreen: true,
					        items: [
					          // add a panel to the root panel
					          { 
					            xtype: "form",
					            items: [{
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
				            }]
					    });
					}
				},
				{
					text: 'Login',
					ui: 'confirm',
					handler: function() {
						login.form.submit({
							waitMsg : {message:'Submitting', cls : 'demos-loading'}
						});
					}
				}
				]
			}
			]

		};