define( function( require ) {
	 var Handlebars = require('handlebars');
	 var Marionette = require('marionette');
	 
	 Backbone.Marionette.TemplateCache.loadTemplate = function(templateId){
		
		 var myTemplate = _compiled(templateId);
		 return myTemplate;
	 }
	 var _compiled = function(tpl, context) {
			var compiled = Handlebars.compile(tpl);
			return context ? compiled(context) : compiled;
	 };
	 
	 var load = function(rawTemplate){
		 var template = Backbone.Marionette.TemplateCache.loadTemplate(rawTemplate);
		 return template; 
	 }
	 
	 return{
		 getMainTemplate:function(){
			 var tpl = require('text!layout/main/templates/main_template.html');
			 return load(tpl);
		 },
		 getLanguageTemplate:function(){
			 var languageTemplate = require('text!layout/main/templates/language_template.html');
			 return load(languageTemplate);
		 },
		 getLanguagesTemplate:function(){
			 var languageTemplate = require('text!layout/main/templates/languages_template.html');
			 return load(languageTemplate);
		 },
		 getCurrencyTemplate:function(){
			 var currencyTemplate = require('text!layout/main/templates/currency_template.html');
			 return load(currencyTemplate);
		 },
		 getCurrenciesTemplate:function(){
			 var currenciesTemplate = require('text!layout/main/templates/currencies_template.html');
			 return load(currenciesTemplate);
		 },
		 getCatalogueTemplate:function(){
			 var catalogueTemplate = require('text!layout/main/templates/catalogue_template.html');
			 return load(catalogueTemplate);
		 },
		 getCataloguesTemplate:function(){
			 var cataloguesTemplate = require('text!layout/main/templates/catalogues_template.html');
			 return load(cataloguesTemplate);
		 },
		 getLoadingTemplate:function(){
			 var loadingTemplate = require('text!layout/loading/template.html');
			 return load(loadingTemplate);
		 }
		
	 }
	
});
/*
define( function( require ) {
	var Handlebars = require('Handlebars')
	, _template1 = require('text!app/templates/template-1.tpl')
	, _template2 = require('text!app/templates/template-2.tpl')
	, _template3 = require('text!app/templates/template-3.tpl')
	, _template4 = require('text!app/templates/template-4.tpl');
	
	 Backbone.Marionette.TemplateCache.loadTemplate = function(templateId, callback){
         var tmpId = templateId.replace("#", "");
         var url = "templates/" + tmpId + ".html";
         var promise = $.trafficCop(url);
         promise.done(function(template){
           callback.call(this, Handlebars.compile($(template).html()));
         });
       }
	
	var _compiled = function(tpl, context) {
		var compiled = Handlebars.compile(tpl);
		return context ? compiled(context) : compiled;
	};

		// Expose a public API which provides named methods for retrieving
		// each compiled template; defer to Handlebars to cache previously
		// compiled templates upon subsequent invocations
		return {
		template1: function() {
		return _compiled(_template1, arguments[0]);
		},
		template2: function() {
		return _compiled(_template2, arguments[0]);
		},
		template3: function() {
		return _compiled(_template3, arguments[0]);
		},
		template4: function() {
		return _compiled(_template4, arguments[0]);
		}
		}
	
});
*/