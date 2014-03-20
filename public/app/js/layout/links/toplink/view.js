define([ "application",'handlebars' ,'utils/templateManager'], function(Mystore,HandleBars,TemplateManager) {
	
	Mystore.module("Main.View", function(View,Mystore,Backbone, Marionette, $, _) {
		
		 
		
		 View.Layout = Marionette.Layout.extend({
			  itemViewContainer :'div',
		      template: TemplateManager.getLinksTemplate(),
		      regions: {
		        loginRegion: "#login"
		      
		      },
		      initialize: function(){
		    	 
		    	 
		    	  this.viewLogin		= new View.Login();
		    	  
		    	 
		      },
		      onRender: function() {},

			  onShow: function() {
					this.loginRegion.show(this.viewLogin);
				
			  }
		      
		});
		
		View.Login = Marionette.ItemView.extend({
			//template: HandleBars.compile(
			//		'<a title="{{name}}"><img src="assets/image/lang/{{img}}" alt="{{name}}">&nbsp;&nbsp;&nbsp;&nbsp;{{name}}</a>'
			//),
			template : HandleBars.compile('<a>fff</a>'),  //TemplateManager.getLanguageTemplate(),
			tagName : "div",
			
			events : {
				"click a" : "navigate",
			},
			navigate : function(e) {
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			onRender : function() {
				//if (this.model.selected) {
					// add class so Bootstrap will highlight the active entry in
					// the navbar
					//this.$el.addClass("active");
				//}
				
			}
		});
		
		

		
	});

	return Mystore.Main.View;
});
