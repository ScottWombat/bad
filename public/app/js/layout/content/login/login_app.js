define([ "application", "marionette" ], function(Mystore, Marionette) {
	var Router = Marionette.AppRouter.extend({
		appRoutes : {
			"login" : "showLogin"
		}
	});

	var API = {
		
		showLogin : function(model) {
			
			require([ "layout/content/login/show/login_controller"], function(loginController) {
				
				Mystore.startSubApp(null);
				loginController.showLogin(model);
				
			});
		}
	};
	
	
	   

	Mystore.on("trigger:login", function(model) {
	   //alert(model);
		Mystore.navigate("login");
		API.showLogin(model);
		Mystore.execute("set:active:header","login");
	});
	
	Mystore.on("trigger:logout", function(model) {
		model.set({
			loggedIn : false,
			loginMsg : "You are logged off"
		});
		//Mystore.navigate("login");
		//API.showLogin(model);
		//Mystore.execute("set:active:header","login");
		
	});
	
	//Mystore.on("login:success",function(){
		//alert(API.LoginItemView);
	//	alert("success");
	//});
	
	//Mystore.on("login:failed",function(){
	//	alert("failed");
	//});


	Mystore.addInitializer(function() {
		new Router({
			controller : API
		});
	});

	return Router;
});