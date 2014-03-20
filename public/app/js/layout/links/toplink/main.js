define([ "application", "layout/links/toplink/controller" ], function(Mystore,LinksController) {
	
	Mystore.module("TOPLINK", function(Main, Mystore, Backbone,
			Marionette, $, _) {

		var Router = Marionette.AppRouter.extend({
			appRoutes : {
				"products" : "showProducts"
			}
		});

		var API = {
			listHeader : function() {
				LinksController.listHeader();
			},
			showProducts: function(id){
				
				Controller.showProducts(id);
			}
		};

		Mystore.on("itemview:menu:navigate", function(id) {
			Mystore.navigate("products");
			API.showProducts(id);
		});

		Mystore.commands.setHandler("set:active:header", function(name) {
			LinksController.setActiveHeader(name);
		});

		Main.on("start", function() {
			API.listHeader();
		});
	});

	return Mystore.TOPLINK;
});