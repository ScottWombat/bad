requirejs.config({
    baseUrl: 'js',
    paths: {
    	jquery                  : 'libs/jquery/jquery-1.9.1',
    	'jquery-ui'             : 'libs/jquery-ui/jquery-ui',
    	underscore              : 'libs/underscore/underscore', // https://github.com/amdjs
    	backbone                : 'libs/backbone/backbone',// https://github.com/amdjs
    	'backbone.picky'        : "libs/backbone/backbone.picky",
    	'backbone.syphon'       : "libs/syphon/backbone.syphon",
    	bootstrap				: 'libs/bootstrap/js/bootstrap',
    	localstorage            : 'libs/localStorage/backbone.localStorage',
    	marionette              : 'libs/marionette/backbone.marionette',
    	handlebars              : 'libs/handlebars/handlebars-v1.3.0',
    	json                    : 'libs/json/json2',
    	text                    : 'libs/text/text',
    	i18n					: 'libs/i18n/i18n',
    	traffiCop               : 'libs/trafficcop/TrafficeCop',
    	global			        : 'commons/global'
    	
    
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
        bootstrap:{
        	 deps: ['jquery'] ,
        	 "exports" : "bootstrap"
        	
        },
        "jquery-ui": ["jquery"],
        'trafficCop' : ['trafficCop'],
        global:{
        	deps:['handlebars']
        }
     },
    
     deps : ['jquery','jquery-ui','underscore','commons/dom'/'commons/cssLoader','commons/global','commons/authentication/session']
   
});

//require(['jquery','bootstrap','commons/custom'], function(){});
require(['application','jquery','bootstrap','commons/custom',
        // 'libs/trafficcop/TrafficCop',
         'commons/handleBarsHelper',
        // 'layout/header/links/app_header',
        // 'layout/header/languages/app_header',
 		// 'layout/header/currencies/app_header',
 		// 'layout/menubar/menubar_app',
         'layout/main/main_app',
 		 'commons/dom',
 		 'commons/global'], function(Application){
	
	Application.start();		
});


/*
 * 
 function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

loadCss ('js/libs/jquery.mobile-1.3.1.min.css');
 */





