define(['application','backbone.picky','localstorage'], function(Mystore){
  Mystore.module("Entities", function(Entities, Mystore, Backbone, Marionette, $, _){
    Entities.Link = Backbone.Model.extend({
    	initialize: function(){
    		 var selectable = new Backbone.Picky.Selectable(this);
    	        _.extend(this, selectable);
    	     
    	}
    });

    Entities.LinkCollection = Backbone.Collection.extend({
    	 model: Entities.Link,
    	 initialize: function(){
    	        var singleSelect = new Backbone.Picky.SingleSelect(this);
    	        _.extend(this, singleSelect);
    	 }
    });

    var initializeHeaders = function(){
    
    	Entities.Links = new Entities.LinkCollection([
    	         { name: "Login" ,url:'login',navigationTrigger:'login:show'},
    	         { name: "Register", url:'register',navigationTrigger:'register:show'},
    	         { name: "Wish List",url:'wishlist',navigationTrigger:'wishlist:show'},
    	         { name: "About", url:'about',navigationTrigger:'about:show'},
    	         { name: "My Account", url:'myaccount',navigationTrigger:'myaccount:show'},
    	         { name: "Checkout",url:'checkbout',navigationTrigger:'checkout:show'}
    	]);
    	
    };
    
   
    var API = {
      getHeaders: function(){
    	
    	 if(Entities.Links === undefined){
             initializeHeaders();
          }
          return Entities.Links;
      }
    };

    Mystore.reqres.setHandler("link_header:entities", function(){
      console.info(API.getHeaders());
      return API.getHeaders();
    });
  });

  return ;
});
