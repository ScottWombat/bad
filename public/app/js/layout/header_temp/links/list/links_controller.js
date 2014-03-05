define(["application", "layout/header/links/list/links_view"], function(Mystore, View){
  Mystore.module("HeaderApp_Link.List", function(List, Mystore, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
    	var menu = new View.Header();
    	
        menu.on("mymenu:navigate", function(triggerName){
             Mystore.trigger(triggerName);
         });
    	Mystore.links.show(menu);
        
      },

      setActiveHeader: function(headerUrl){
       
      }
    };
  });

  return Mystore.HeaderApp_Link.List.Controller;
});

