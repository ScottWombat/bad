define(["application", "layout/header/currencies/list/list_controller"], function(Mystore, ListController){
  Mystore.module("HeaderApp_Currency", function(Header, Mystore, Backbone, Marionette, $, _){
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

  return Mystore.HeaderApp_Currency;
});
