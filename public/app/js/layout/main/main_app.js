define(["application", "layout/main/main_controller"], function(Mystore, ListController){
  Mystore.module("MAIN_CONTENTS", function(Main, Mystore, Backbone, Marionette, $, _){
    var API = {
      listHeader: function(){
        ListController.listHeader();
      }
    };

   Mystore.commands.setHandler("set:active:header", function(name){
	   
      ListController.setActiveHeader(name);
    });

    Main.on("start", function(){
    	
        API.listHeader();
    });
  });

  return Mystore.MAIN_CONTENTS;
});