define([ "application", "marionette" ], function(Mystore, Marionette) {
	var Router = Marionette.AppRouter.extend({
		appRoutes : {
			"login" : "showLogin"
		}
	});

	var API = {
		showLogin : function() {
			
			require([ "layout/content/login/show/login_controller" ], function(loginController) {
				Mystore.startSubApp(null);
				loginController.showLogin();
				//Mystore.execute("set:active:header", "login");
				Mystore.commands.setHandler("set:active:header", function(name){
				    
				      loginController.setActiveHeader(name);
				});
			});
		}
	};
	
	
	   

	Mystore.on("login:show", function() {
		Mystore.navigate("login");
		API.showLogin();
		Mystore.execute("set:active:header","login");
	});


	Mystore.addInitializer(function() {
		new Router({
			controller : API
		});
	});

	return Router;
});