define(["application", "marionette"], function(Mystore, Marionette){
  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      "products" : "showProducts"
    }
  });

  var API = {
    showProducts: function(){
      require(["layout/content/products/products_controller"], function(ProductsController){
        Mystore.startSubApp(null);
        ProductsController.showProducts();
        Mystore.execute("set:active:header", "about");
      });
    }
  };

  Mystore.on("products:show", function(){
	 
	  Mystore.navigate("products");
	  API.showProducts();
  });

  Mystore.addInitializer(function(){
    new Router({
      controller: API
    });
  });

  return Router;
});