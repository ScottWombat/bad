define(["application",'localstorage'], function(Mystore){
  Mystore.module("Entities", function(Entities, Mystore, Backbone, Marionette, $, _){
    Entities.Currency = Backbone.Model.extend({
    	 defaults : {
    		 id		:'',
             name   : ''
     
        },	
        initialize: function(){}
        
    });

    Entities.Currencies = Backbone.Collection.extend({
      model: Entities.Currency,
      url: REST_URL + "currencies?callback=jsonCallback",
     
	  initialize: function(){
	        console.info("Currencies initialize")
	      
	    },
	    parse: function (response) {
	        return response;
	    }
    });

    var initializeHeaders = function(){
    
    	Entities.Collection = new Entities.Currencies();
    	//d = obj.refreshFromServer();
    	
    	return Entities.Collection;
    };
    
   
    var API = {
      getHeaders: function(){
    	
           Entities.Collection = initializeHeaders();
           
           
           Entities.Collection.fetch(
        		   {success:function(){
        			   console.info('fetching languages collection from locale storage');
        		      console.info('collection size:'+Entities.Collection.length)
        		   },
        		   error:function(){
         		      console.info('error populating data');
         		   }
         });     
       
        return Entities.Collection;
      }
    };

    Mystore.reqres.setHandler("currency_header:entities", function(){
     
      return API.getHeaders();
    });
  });

  return ;
});
