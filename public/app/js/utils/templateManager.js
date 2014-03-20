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
		 getContentLayoutTemplate:function(){
			 var contentLayoutTemplate = require('text!layout/content/products/templates/layout.html');
			 return load(contentLayoutTemplate);
		 },
		 getLeftPanelLayoutTemplate:function(){
			 var leftPanelLayoutTemplate = require('text!layout/content/products/templates/left_panel.html');
			 return load(leftPanelLayoutTemplate);
		 },
		 getProductLayoutTemplate:function(){
			 var productLayoutTemplate = require('text!layout/content/products/templates/content_panel.html');
			 return load(productLayoutTemplate);
		 },
		 getLoadingTemplate:function(){
			 var loadingTemplate = require('text!layout/loading/template.html');
			 return load(loadingTemplate);
		 },
		 getProductContentLayoutTemplate:function(){
			 var productContentLayoutTemplate = require('text!layout/content/products/templates/main_layout.html');
			 return load(productContentLayoutTemplate);
		 },
		 getProductFilterTemplate:function(){
			 var productFilterTemplate = require('text!layout/content/products/templates/product_filter_template.html');
			 return load(productFilterTemplate);
		 },
		 getProductGridTemplate:function(){
			 var productGridTemplate = require('text!layout/content/products/templates/product_template.html');
			 return load(productGridTemplate);
		 },
		 getProductPaginationTemplate:function(){
			 var productPaginationTemplate = require('text!layout/content/products/templates/pagination_template.html');
			 return load(productPaginationTemplate);
		 },
		 getDivTemplate:function(){
			 return Handlebars.compile('<div class="product-grid"></div>');
		 },
		 getLinksTemplate:function(){
			 var linksTemplate = require('text!layout/links/toplink/templates/template.html');
			 return load(linksTemplate);
		 },
		 getLoginTemplate:function(){
			 var loginTemplate = require('text!layout/main/templates/login_template.html');
			 return load(loginTemplate);
		 },
		 getLoginFormTemplate:function(){
			 var loginformTemplate = require('text!layout/content/login/templates/loginform_template.html');
			 return load(loginformTemplate);
		 },
		 getSignupTemplate:function(){
			 var signupTemplate = require('text!layout/main/templates/signup_template.html');
			 return load(signupTemplate);
		 },
		 getWishListTemplate:function(){
			 var wishlistTemplate = require('text!layout/main/templates/wishlist_template.html');
			 return load(wishlistTemplate);
		 },
		 getWishItemTemplate:function(){
			 return load(require('text!layout/main/templates/wishitem_template.html'));
		 },
		 getTopLinksTemplate:function(){
			 var toplinksTemplate = require('text!layout/main/templates/toplinks_template.html');
			 return load(toplinksTemplate);
		 },
		 getMyAccountTemplate:function(){
			 var myaccountTemplate = require('text!layout/main/templates/myaccount_template.html');
			 return load(myaccountTemplate);
		 },
		 getContactTemplate:function(){
			 return load(require('text!layout/main/templates/contact_template.html'));
		 },
		 getCheckoutTemplate:function(){
			 return load(require('text!layout/main/templates/checkout_template.html'));
		 },
		 getSearchLayoutTemplate:function(){
			 return load(require('text!layout/hsecond/templates/search_layout_template.html'));
		 },
		 getSearchTemplate:function(){
			 return load(require('text!layout/hsecond/templates/search_template.html'));
		 },
		 getCartTemplate:function(){
			 return load(require('text!layout/hsecond/templates/cart_template.html'));
		 },
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