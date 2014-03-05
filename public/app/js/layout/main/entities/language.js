define(["application",'localstorage'], function(Mystore){
  Mystore.module("Entities", function(Entities, Mystore, Backbone, Marionette, $, _){
    Entities.Language = Backbone.Model.extend({
    	 defaults : {
             name   : '',
             img  : ''
        },	
        initialize: function(){}
        
    });

    Entities.Languages = Backbone.Collection.extend({
      model: Entities.Language,
      url: REST_URL + "languages?callback=jsonCallback",
	    initialize: function(){
	        console.info("Languages initialize")
	      
	    },
	    parse: function (response) {
	        return response;
	    },
	    //localStorage: new Backbone.LocalStorage('MyStore'),
	 
	    refreshFromServer: function(options) {
	    	return Backbone.ajaxSync('read', this,options);
	    	
	    }
	    
    });

    var initializeHeaders = function(){
     /*
      Entities.Collection = new Entities.Languages([
            {"name":"English","img":"en.png"},
            {"name":"Turkey","img":"tr.png"},
            {"name":"Ireland","img":"il.png"}
     ]);
      
      */
      
    	//Entities.Collection = new Entities.Languages();
    	// Entities.Collection.fetch().done(function() { 
       // 		console.info('fetching languages collection from locale storage');
       // });
        /*
        Entities.Collection.refreshFromServer({
    			success : function(freshData){
    				this.Entities.Collection.add(freshData);
    				console.info('adding languages collection from server to local storage');
    			},
    			error : function(){
    				console.info("ERR");
    			}
    			
    	});
    	*/
    	/*
    	Entities.Collection = new Entities.Languages();
    	deferred = $.Deferred();
    	Entities.Collection.fetch({
            success: deferred.resolve
        });
    	
    	return deferred.promise();//Entities.Collection;
    	*/
    	//Entities.Collection = new Entities.Languages();
    	return new Entities.Languages();
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

    Mystore.reqres.setHandler("language:entities", function(){
     
      return API.getHeaders();
    });
  });

  return ;
});
