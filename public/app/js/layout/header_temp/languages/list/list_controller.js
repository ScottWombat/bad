define(["application", "layout/header/languages/list/list_view"], function(Mystore, View){
  Mystore.module("HeaderApp.List", function(List, Mystore, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
        require(["layout/header/languages/entities/language"], function(){
        	                           
          var links = Mystore.request("language_header:entities");
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
          Mystore.language.show(headers);
        });
      },

      setActiveHeader: function(headerUrl){
    
        var links = Mystore.request("language_header:entities");
        var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
       // headerToSelect.select();
        links.trigger("reset");
      
    	/*
    	var promise = Mystore.request("language_header:entities");
    	promise.done(function(links){
    		  var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
    	      headerToSelect.select();
    	      links.trigger("reset");
    	});
    	*/
      }
    };
  });

  return Mystore.HeaderApp.List.Controller;
});
