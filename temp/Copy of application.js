define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars','baseRouter'],function ($, Backbone, Marionette, _, 
		Handlebars,BaseRounter) {
	
        var app = new Backbone.Marionette.Application();

        //app.root ='/';
        appe.addRegions({
            slideShow:"#slideshow"
        });
        
       

        app.addInitializer(function () {
          new BaseRounter();
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
        //	app.router.navigate();
        	console.log("EVENT > initialize:after");
        });

       
        return app;
});