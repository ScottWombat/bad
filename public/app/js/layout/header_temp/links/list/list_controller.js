define(["application", "layout/header/links/list/list_view"], function(Mystore, View){
  Mystore.module("HeaderApp_Link.List", function(List, Mystore, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
    	
        require(["layout/header/links/entities/link"], function(){
        	                       
          var links = Mystore.request("link_header:entities");
         //console.info(collection);
          //console.info(View.Headers);
          var headers = new View.Headers({collection: links});
          
         headers.on("itemview:navigate", function(childView, model){
              var trigger = model.get("navigationTrigger");
              Mystore.trigger(trigger);
         });
         // alert(View);
         // alert("controller");
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
          
          Mystore.links.show(headers);
        });
      },

      setActiveHeader: function(headerUrl){
        var links = Mystore.request("link_header:entities");
        var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
       // headerToSelect.select();
        links.trigger("reset");
      }
    };
  });

  return Mystore.HeaderApp_Link.List.Controller;
});
