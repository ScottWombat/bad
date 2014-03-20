define([ "application", "marionette" ], function(Mystore, Marionette) {
	var Router = Marionette.AppRouter.extend({
		appRoutes : {
			"signup" : "showSignup"
		}
	});

	var API = {
		showSignup : function() {
			require([ "layout/content/signup/signup_controller"], function(signupController) {
				Mystore.startSubApp(null);
				signupController.showSignup();
			});
		}
	};
	
	Mystore.on("trigger:signup", function() {
		Mystore.navigate("signup");
		API.showSignup();
		//Mystore.execute("set:active:header","login");
	});
	
		
	Mystore.addInitializer(function() {
		new Router({
			controller : API
		});
	});

	return Router;
});