define(["application", "layout/header/currencies/list/list_view"], function(Mystore, View){
  Mystore.module("HeaderApp_Currency.List", function(List, Mystore, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
        require(["layout/header/currencies/entities/currency"], function(){
        	                           
          var links = Mystore.request("currency_header:entities");
          var headers = new View.Headers({collection: links});
       
          //console.info(headers);
          //console.info(links);
         // console.info('collection'+links.size);
         // console.info(headers);
          /*
          headers.on("brand:clicked", function(){
            ContactManager.trigger("contacts:list");
          });

          headers.on("itemview:navigate", function(childView, model){
            var trigger = model.get("navigationTrigger");
            ContactManager.trigger(trigger);
          });
		  */
          
          //var userListRegion = new Backbone.Marionette.Region({ el: '#language1'});
          //userListRegion.show(headers);
          Mystore.currency.show(headers);
        });
      },

      setActiveHeader: function(headerUrl){
        var links = Mystore.request("currency_header:entities");
       // var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
       // headerToSelect.select();
       // links.trigger("reset");
      }
    };
  });

  return Mystore.HeaderApp_Currency.List.Controller;
});
