define(["application", "layout/main/main_view",'layout/loading/loadingManager'], function(Mystore, View){
  Mystore.module("Main", function(Main, Mystore, Backbone, Marionette, $, _){
    Main.Controller = {
      listHeader: function(){
    	  //var layout = View.Layout();
			// layout.render();
			  ////var langCollection = M
    	  require(['layout/loading/loadingManager'], function(){   
    		  //
    		 // require(['layout/common/css/css',"layout/header/languages/entities/language"], function(){
    		  require(['layout/common/css/css',
    		           //'layout/main/entities/language',
    		          // 'layout/main/entities/currency',
    		          // 'layout/main/entities/catalogues'
    		           ], function(){
    			
    			 var layout = new View.Layout()
    			
    			 Mystore.wrapperbox.show(layout);
    		  });
    		
    		 // require(['layout/common/css/css',"layout/menubar/entities/catalogues"], function(){     
    			//  $('.wrapper-box').delay(2000).queue(function(){
    				 // var links = Mystore.request("catalogues:entities");
        	         // var mainWrapper = new View.Headers({collection: links});
        	                             
    				 
        	          //Mystore.wrapperbox.show(mainWrapper);
        	        //  $('.wrapper-box').dequeue();
    			// });
    	         
    	        //});
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

  return Mystore.Main.Controller;
});
