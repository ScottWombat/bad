define(["application", "layout/main/main_view",
        "layout/content/products/products_view"], 
		function(Mystore, View,ProductLayout){
  Mystore.module("Products", function(Products, Mystore, Backbone, Marionette, $, _){
    Products.Controller = {
    
      showProducts: function(id){
    	 // alert(id);
    	 var view = new ProductLayout.Layout({menuId: id});
    	 Mystore.maincontent.show(view);
      },

      setActiveHeader: function(headerUrl){
        var links = Mystore.request("catalogues:entities");
       // var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
   
      }
    };
  });

  return Mystore.Products.Controller;
});
