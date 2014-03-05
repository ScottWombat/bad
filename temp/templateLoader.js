define(['commons/templateManager'],function(TemplateManager) {
	
	var LANG_ITEM = 'js/header/languages/list/templates/languageItem.hbr';
	var LANG_LIST = 'js/header/languages/list/templates/languageList.hbr';

	var CURR_ITEM = 'js/header/currencies/list/templates/currencyItem.hbr';
	var CURR_LIST = 'js/header/currencies/list/templates/currencyList.hbr';
	
	var ABOUT     = 'pages/about/show/templates/message.hbr';
	
	
	var ABOUT_TEMPLATE = function(){
		return TemplateManager.getTemplate(ABOUT);
	}
	
	var LANGUAGE_ITEM_TEMPLATE = function(){
		return TemplateManager.getTemplate(LANG_ITEM);
	};
	var LANGUAGE_LIST_TEMPLATE = function(){
		return TemplateManager.getTemplate(LANG_LIST);
	};
	
	var CURRENCY_LIST_TEMPLATE = function(){
		return TemplateManager.getTemplate(CURR_LIST);
	}
	
	var CURRENCY_ITEM_TEMPLATE = function(){
		return TemplateManager.getTemplate(CURR_ITEM);
	}
	
	return {
		LANGUAGE_ITEM_TEMPLATE : LANGUAGE_ITEM_TEMPLATE,
		LANGUAGE_LIST_TEMPLATE : LANGUAGE_LIST_TEMPLATE,
		
		CURRENCY_ITEM_TEMPLATE : CURRENCY_ITEM_TEMPLATE,
		CURRENCY_LIST_TEMPLATE : CURRENCY_LIST_TEMPLATE,
	    
	}
	
});