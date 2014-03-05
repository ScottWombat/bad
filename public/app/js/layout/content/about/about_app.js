define(["application", "marionette"], function(Mystore, Marionette){
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "about" : "showAbout"
    	  
    }
  });

  var API = {
    showAbout: function(){
      require(["layout/content/about/show/about_controller"], function(AboutController){
        Mystore.startSubApp(null);
        AboutController.showAbout();
        Mystore.execute("set:active:header", "about");
      });
    }
  };

  Mystore.on("about:show", function(){
	  alert("DDD");
    Mystore.navigate("about");
    API.showAbout();
  });

  Mystore.addInitializer(function(){
	 
    new Router({
      controller: API
    });
  });

  return Router;
});
