requirejs.config({
    baseUrl: 'js',
    paths: {
    	jquery                  : 'libs/jquery/jquery-1.9.1',
    	underscore              : 'libs/underscore/underscore', // https://github.com/amdjs
    	backbone                : 'libs/backbone/backbone',// https://github.com/amdjs
    	'backbone.picky'        : "libs/backbone/backbone.picky",
    	localstorage            : 'libs/localStorage/backbone.localStorage',
    	marionette              : 'libs/marionette/backbone.marionette',
    	handlebars              : 'libs/handlebars/handlebars-v1.3.0',
    	text                    : 'libs/text/text',
    	i18n					: 'libs/i18n/i18n',
    	templateManager			: 'commons/templateManager'
    
    },
    shim: {
        backbone: {
          deps: ['jquery', 'underscore'],
          exports: 'Backbone'
        },
        marionette: {
  	      deps: ['backbone'] ,
  	      exports: 'Backbone.Marionette'
        },
        handlebars:{
            "exports":"Handlebars"
        },
       // localstorage:{
        //	"exports":"Backbone.LocalStorage"
       // },
        templateManager:{
        	exports : 'TemplateManager'
        }
     },
    
     deps : ['jquery','underscore','utils/cssLoader','global','custom','main']
   
});

require(['global'], function(){});
//require(['application'], function(Application){
	
//	Application.start();		
//});






