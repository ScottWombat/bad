define(['jquery'],function ($) {
	
	    var templates = new function(){
	    	options: [{''}]
	    }
	
        var app = new Backbone.Marionette.Application();

        //app.root ='/';
        app.addRegions({
            slideShow:"#slideshow"
        });

        app.addInitializer(function () {
          
        });
        
        app.initApplicationEvents = function () {
        	//myapp.vent.on("myapp:myEvent", function () {
        	//	console.log("EVENT > myEvent");
        	//});
        };

        
        app.on('initialize:before', function() {
        	console.log("EVENT > initialize:before");
        });
        
        app.on('initialize:after', function() {
            Backbone.history.start();
        	app.router.navigate();
        	console.log("EVENT > initialize:after");
        });

       
        return app;
});