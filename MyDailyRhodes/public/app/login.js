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
					ui: 'action',
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
					    		    style: 'font-family: verdana; font-size: 15px; font-weight: bold',
					    		    value: 'CSC Mobile Solution',
					    		    readOnly: true,
					    		    autoCapitalize : false
					    		}, {
					    			xtype: 'textfield',
					    		    name : 'version',
					    		    label: 'Version:',
					    		    value: 'Service Release 1',
					    		    readOnly: true,
					    		    autoCapitalize : false
					    		}, {
					    			xtype: 'textfield',
					    		    name : 'buildid',
					    		    label: 'Build id:',
					    		    value: '20100917-0705',
					    		    readOnly: true,
					    		    autoCapitalize : false
					    		}, {
					                xtype: 'textfield',
					                name:  'url',
					                label: 'Website',
					                readOnly: true,
					                value: 'http://www.csc.com'
					    		}, {
					                xtype: 'datepickerfield',
					                name: 'date',
					                label: 'Date',
					                picker: { yearFrom: 2011 },
					    		 	handler: function(picker, date) {
					    		 		// do something with the selected date
					    	        }
					    		}, {
					    			xtype: 'textfield',
					    		    name : 'copyright',
					    		    style: 'font-family: verdana; font-size: 8px',
					    		    placeHolder: '(c) Copyright CSC contributors and others 2011. All rights reserved.',
					    		    readOnly: true,
					    		    autoCapitalize : false
					    	    }, {
					    			html: '<div style="text-align: center;"><img src="/icon/csc_small.png" /></div>'	    	    
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