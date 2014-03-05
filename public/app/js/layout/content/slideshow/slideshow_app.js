define(["application", "marionette"], function(Mystore, Marionette){
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "slideshow" : "showSlide"
    }
  });

  var API = {
    showSlide: function(){
      require(["layout/content/slideshow/slideshow_controller"], function(ShowController){
        Mystore.startSubApp(null);
        ShowController.showSlide();
        //Mystore.execute("set:active:header", "slideshow");
      });
    }
  };

  Mystore.on("slide:show", function(){
    console.info("DDDDDDDDDDD");
    Mystore.navigate("slideshow");
    API.showSlide();
  });

  Mystore.addInitializer(function(){
    new Router({
      controller: API
    });
  });

  return Router;
});
