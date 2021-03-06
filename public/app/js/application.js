define(['marionette','commons/ui/dialog'],function(Marionette){
	//Marionette.Region.prototype.open = function(view){
	//	  this.$el.hide();
	//	  this.$el.html(view.el);
		  //this.$el.slideDown("slow");
	//	  this.$el.fadeIn();
	//}
	
	var Mystore = new Marionette.Application();
	
	Mystore.loginModal =  Marionette.Region.extend({
		 el: "#loginModal",
		 
		 constructor: function(){
		 //_.bindAll(this);
		 Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
		 this.on("login:show", this.showModal, this);
		 },
		  
		 getEl: function(selector){
		 var $el = $(selector);
		 $el.on("hidden", this.close);
		 return $el;
		 },
		  
		 showModal: function(view){
		 view.on("close", this.hideModal, this);
		 this.$el.modal('show');
		 },
		  
		 hideModal: function(){
		 this.$el.modal('hide');
		 }
	 });
	

	// app.root ='/';
	Mystore.addRegions({
		wrapperbox : '.wrapper-box',
		maincontent	 : '#maincontent'
		//hsecond      : '.hsecond'
		
		
		/*
		language     : '#language',
		currency     : '#currency',
		links	     : '#links',
		maincontent	 : '#maincontent',
		message      : '#maincontent',
		menu : '#menu',
		dialogRegion: Marionette.Region.Dialog.extend({
			      el: "#dialog-region"
		})
		*/
	});

	Mystore.navigate = function(route, options) {
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	Mystore.getCurrentRoute = function() {
		return Backbone.history.fragment
	};
	
	Mystore.startSubApp = function(appName, args){
	    var currentApp = appName ? Mystore.module(appName) : null;
	    if (Mystore.currentApp === currentApp){ return; }

	    if (Mystore.currentApp){
	    	Mystorer.currentApp.stop();
	    }

	    Mystore.currentApp = currentApp;
	    if(currentApp){
	      currentApp.start(args);
	    }
	  };

	  
   Mystore.addInitializer(function (options) {
	  
   });
   
   
   Mystore.on("initialize:after", function() {
		//alert(MyAmd);
		if (Backbone.history) {
		require(['libs/bootstrap/js/bootstrap',
		         'layout/content/products/products_app',
		         "layout/content/login/login_app", 
		         "layout/content/about/about_app"], function () {
				
				Backbone.history.start();
				if (Mystore.getCurrentRoute() === "") {
				//Mystore.trigger("slide:show");
				}
		});
		}
	});
   
  
   
   
	return Mystore
});