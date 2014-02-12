define([ 'jquery', 'backbone', 'marionette', 'underscore', 'handlebars'
		], function($, Backbone, Marionette, _, Handlebars){

	var Mystore = new Backbone.Marionette.Application();

	// app.root ='/';
	Mystore.addRegions({
		language : '#language',
		currency : '#currency',
		links	 : '#links'
	});

	Mystore.navigate = function(route, options) {
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	Mystore.getCurrentRoute = function() {
		return Backbone.history.fragment
	};

	Mystore.on("initialize:after", function() {
		
		if (Backbone.history) {
			Backbone.history.start();

			//if (this.getCurrentRoute() === "") {
			//	Mystore.trigger("contacts:list");
			//}
		}
	});
	return Mystore
});