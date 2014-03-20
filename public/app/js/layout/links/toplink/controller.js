define(["application", "layout/links/toplink/view"], function(Mystore, View,LinksLayout){
  Mystore.module("Main", function(Main, Mystore, Backbone, Marionette, $, _){
    Main.Controller = {
      listHeader: function(){
    	
    			 var layout = new View.Layout()
    			
    			 Mystore.wrapperbox.show(layout);
    		
    	  
    	
     
      },
      showProducts: function(id){
    	 
    	 var view = new ProductLayout.Layout({menuId: id});
    	 Mystore.maincontent.show(view);
      },

      setActiveHeader: function(headerUrl){
        var links = Mystore.request("catalogues:entities");
       // var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
       // headerToSelect.select();
       // links.trigger("reset");
      }
    };
  });

  return Mystore.Main.Controller;
});
