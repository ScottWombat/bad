define([ "application",'handlebars','text!layout/header/links/list/templates/menu.html'], function(Mystore,HandleBars,tpl) {
	
	Mystore.module("HeaderApp_Link.List.View", function(View,Mystore,Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
			initialize: function () {
			    _.bindAll(this, 'render');
			   
			},
		  
		  template: HandleBars.compile(tpl),
				
		//template : TemplateManager.load(LINKS),
		templateHelpers: {
		       login : function(){return 'Login'},
		       logout : function(){return 'Logout'},
		       wishlist : function(){return 'Wish list'},
		       giftcards : function(){return 'Git Cards'},
		       myaccount : function(){return 'My account'},
		       checkout  : function(){return 'Checkout'},
		       about : function(){return 'About'},
		       contactus : function(){return 'Contact Us'},
		       clearance : function(){return 'Clearance'}
		    },
		    events:{
		    	'click' : 'tf'
		    },
		    tf: function(){
		    	alert('tf');
		    },
		    modelEvents: {
		        'change': 'render',
		        
		    },
			
		    fieldsChanged: function(){
		    	alert('filedchanged');
		    },
			events : {
				"click a.loginMenu" : "gotoLogin",
				"click a.aboutMenu" : "gotoAbout"
				
			},
			gotoLogin : function(e) {
				e.preventDefault();
				this.trigger("mymenu:navigate", "login:show");
			},
		
			gotoAbout : function(e) {
				e.preventDefault();
				this.trigger("mymenu:navigate", "about:show");
			}

			
		   
		});
       
	});	
	return Mystore.HeaderApp_Link.List.View;
});
