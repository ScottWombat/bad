define([ "application", "layout/main/main_controller" ], function(Mystore,MainController) {
	
	Mystore.module("MAIN_CONTENTS", function(Main, Mystore, Backbone,
			Marionette, $, _) {

		var Router = Marionette.AppRouter.extend({
			appRoutes : {
				"products" : "showProducts"
			}
		});

		var API = {
			listHeader : function() {
				MainController.listHeader();
			},
			showProducts: function(id){
				
				MainController.showProducts(id);
			}
		};

		Mystore.on("itemview:menu:navigate", function(id) {
			Mystore.navigate("products");
			API.showProducts(id);
		});
		
		// <<todolist delete
		Mystore.on("loginNavigate", function(options) {
			
			options.set({
			    loggedIn: false
			});
			
		});
		

		Mystore.commands.setHandler("set:active:header", function(name) {
			MainController.setActiveHeader(name);
		});

		Main.on("start", function() {
			API.listHeader();
		});
	});

	return Mystore.MAIN_CONTENTS;
});