define(["application", "layout/menubar/list/menubar_view",'layout/loading/loadingManager'], function(Mystore, View){
  Mystore.module("HeaderApp_Currency.List", function(List, Mystore, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
    	  require(['layout/loading/loadingManager'], function(){     
    		
    		  require(['layout/common/css/css',"layout/menubar/entities/catalogues"], function(){     
    			  $('.wrapper-box').delay(2000).queue(function(){
    				  var links = Mystore.request("catalogues:entities");
        	          var headers = new View.Headers({collection: links});
        	          Mystore.wrapperbox.show(headers);
        	          $('.wrapper-box').dequeue();
    			  });
    	         
    	        });
    	  });
    	
     
      },

      setActiveHeader: function(headerUrl){
        var links = Mystore.request("catalogues:entities");
       // var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
       // headerToSelect.select();
       // links.trigger("reset");
      }
    };
  });

  return Mystore.HeaderApp_Currency.List.Controller;
});
