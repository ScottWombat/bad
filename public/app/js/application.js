define(['marionette','commons/ui/dialog'],function(Marionette){
	var Mystore = new Marionette.Application();

	// app.root ='/';
	Mystore.addRegions({
		wrapperbox : '.wrapper-box'
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
		require(["layout/content/login/login_app", "layout/content/about/about_app"], function () {
				
				Backbone.history.start();
				if (Mystore.getCurrentRoute() === "") {
				//Mystore.trigger("slide:show");
				}
		});
		}
	});
	return Mystore
});