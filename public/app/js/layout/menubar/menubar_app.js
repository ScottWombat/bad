define(["application", "layout/menubar/list/menubar_controller"], function(Mystore, ListController){
  Mystore.module("Menubar_Catalogues", function(Menubar, Mystore, Backbone, Marionette, $, _){
    var API = {
      listHeader: function(){
        ListController.listHeader();
      }
    };

   Mystore.commands.setHandler("set:active:header", function(name){
	   
      ListController.setActiveHeader(name);
    });

    Menubar.on("start", function(){
    	
        API.listHeader();
    });
  });

  return Mystore.Menubar_Catalogues;
});