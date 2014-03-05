define(["application", "marionette"], function(Mystore, Marionette){
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "checkout" : "showCheckout"
    }
  });

  var API = {
    showCheckout: function(){
      require(["layout/content/checkout/show/checkout_controller"], function(ShowController){
        Mystore.startSubApp(null);
        ShowController.showCheckout();
        Mystore.execute("set:active:header", "checkout");
      });
    }
  };

  Mystore.on("checkout:show", function(){
    Mystore.navigate("checkout");
    API.showCheckout();
  });

  Mystore.addInitializer(function(){
    new Router({
      controller: API
    });
  });

  return Router;
});
