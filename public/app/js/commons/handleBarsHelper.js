define(['handlebars','commons/authentication/session'],function(Handlebars,Session){

	   Handlebars.registerHelper('session',function(input,options){
		   //alert(APP.logged);
	       //var logged_in =Session.get(input);
		   var logged_in = APP.logged;
	      
	      if(logged_in){
	    	  return  options.fn(this);
	      }else{
	    	  return options.inverse(this);
	      }
		   /*
	       if(logged_in == undefined){
	    	   console.info('Not login')
	    	   return options.inverse(this);
	       }else{
	    	   console.info('login')
	    	   return  options.fn(this);
	       }
	       */
	       
	    });
	   
	   //{{#gate kye="open"}}open{{/gate}}
	   Handlebars.registerHelper('gate',function(block){
			  if(block.hash["key"] == "open")
				  return block();
		 });
	   
	   //{{gate key="open"}}
	   Handlebars.registerHelper('gate2',function(block){
			 return bloc.hask["key"];
		 });
});
    /*
    // register our dependencies
    var Handlebars = require('handlebars');
    
    // create a label helper
    Handlebars.registerHelper('input_label',
      // we'll make context be the text
      function(context, options){
        // we'll send in the id as an attribute
        id = options.hash.id;
        return '<label for="'+ id +'" class="control-label">'+ context +'</label>';
      }
    );
    
    Handlebars.registerHelper('isActive', function(context) {
        context = _.extend(context, opts.data, this);
        context.hash.class = context.hash.class || 'active';
        var active = '';
        if(context.isCurrentPage === true) {
          active = ' class="' + context.hash.class + '"';
        }
        return new Handlebars.SafeString(active);
      });
    */
 //    Handlebars.registerHelper('session',function(input){
  //  	  return Session.get(input);
  //  });
    
    
    /*
     Handlebars.registerHelper('session',function(input){
    return Session.get(input);
});

You can then call it in your template like this

{{session "isCurrentUser"}}

Note that the auth packages come with a global helper named CurrentUser that you can use to detect if the user is logged in:

{{#if currentUser}}
    ...
{{/if}}

     */
    
    
  //});