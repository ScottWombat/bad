var REST_URL = "http://localhost:8080/ishop-services/rs/";

/********************* CSS PATH *********************/
var MAIN_CSS    = 'js/layout/common/css/main.css';
var LOADING_CSS = 'js/layout/loading/loading.css';

var MAIN_TEMPLATE_FILE = 'layout/main/templates/main.html';


var LANG_ITEM = 'js/layout/header/languages/list/templates/languageItem.hbr';
var LANG_LIST = 'js/layout/header/languages/list/templates/languageList.hbr';


var CURR_ITEM = 'js/layout/header/currencies/list/templates/currencyItem.hbr';
var CURR_LIST = 'js/layout/header/currencies/list/templates/currencyList.hbr';

var LOGIN_TEMPLATE     = 'js/layout/content/login/templates/login_form.html';
var CHECKOUT           = 'js/layout/content/checkout/templates/message.hbr';
var ABOUT              = 'js/layout/content/about/show/templates/message.hbr';
var SLIDESHOW_TEMPLATE = 'js/layout/content/slideshow/templates/slideshow.html';
var LINKS              = 'js/layout/header/links/list/templates/menu.html';

var LANGUAGE_ITEM_TEMPLATE = function(){
	return TemplateManager.load(LANG_ITEM);
}

var LANGUAGE_LIST_TEMPLATE = function(){
	return TemplateManager.load(LANG_LIST);
}

var CURRENCY_ITEM_TEMPLATE = function(){
	return TemplateManager.load(CURR_ITEM);
}

var CURRENCY_LIST_TEMPLATE = function(){
	return TemplateManager.load(CURR_LIST);
}

var sleepNow = function(milliseconds){
	var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
}



//var app = {
//	session : require('commons/authentication/session')
//}
var APP = {logged : false}
	



/*
var TemplateManager = (function(HandleBars){
	var templateManager ={}
	templateManager.load = function(url){
		if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
			$.ajax({
				//url : 'js/templates/' + name + '.handlebars',
				url : url,
				success : function(data) {
					
					if (Handlebars.templates === undefined) {
						Handlebars.templates = {};
					}
					var compiledTemplate = Handlebars.compile(data);
					
					Handlebars.templates[url] = compiledTemplate ;//Handlebars.compile(data);
				},
				async : false
			});
		}
		return Handlebars.templates[url];
	}
	
	return templateManager;
})('/libs/handlebars/handlebars-v1.3.0');

*/