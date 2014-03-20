define(["application"], function(Mystore){
  Mystore.module("Entities", function(Entities, Mystore, Backbone, Marionette, $, _){
	
	Entities.Model = Backbone.Model.extend({
		 
	
		 url: REST_URL + "cart?callback=jsonCallback",
	     
		initialize: function(){
		        console.info("Cart initialize")
		      
		 },
		 parse: function (response) {
		        return response;
		 }
		
	});

    Entities.Cart = Backbone.Collection.extend({
      model: Entities.Model,
      url: REST_URL + "cart?callback=jsonCallback",
     
	  initialize: function(){
	        console.info("Cart initialize")
	      
	    },
	    parse: function (response) {
	        return response;
	    }
    });

    var initializeCart = function(){
    	Entities.Model = new Entities.Model();
    	return Entities.Model;
    };
    
   
    var API = {
      getCart: function(){
           Entities.Model = initializeCart();
           Entities.Model.fetch(
        		   {success:function(){
        			   console.info('fetching cart collection from locale storage');
        		      //console.info('collection size:'+Entities.Collection.length)
        		   },
        		   error:function(){
         		      console.info('error populating data');
         		   }
         });     
       
        return Entities.Model;
      }
    };

    Mystore.reqres.setHandler("cart:entities", function(){
      return API.getCart();
    });
  });

  return ;
});
