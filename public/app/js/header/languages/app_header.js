define(["application", "header/languages/list/list_controller"], function(Mystore, ListController){
  Mystore.module("HeaderApp", function(Header, Mystore, Backbone, Marionette, $, _){
    var API = {
      listHeader: function(){
        ListController.listHeader();
      }
    };

   Mystore.commands.setHandler("set:active:header", function(name){
	   
      ListController.setActiveHeader(name);
    });

    Header.on("start", function(){
    	
      API.listHeader();
    });
  });

  return Mystore.HeaderApp;
});
