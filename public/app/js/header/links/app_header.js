define(["application", "header/links/list/list_controller"], function(Mystore, ListController){
  Mystore.module("HeaderApp_Link", function(Link, Mystore, Backbone, Marionette, $, _){
    var API = {
      listHeader: function(){
        ListController.listHeader();
      }
    };

   Mystore.commands.setHandler("set:active:header", function(name){
	   
      ListController.setActiveHeader(name);
    });

    Link.on("start", function(){
     
      API.listHeader();
      console.info("Links started");
    });
  });

  return Mystore.HeaderApp_Link;
});
