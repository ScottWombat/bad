define([ "application",'handlebars' ,'utils/templateManager','layout/main/entities/language',
         'layout/main/entities/currency','layout/main/entities/catalogues'], function(Mystore,HandleBars,TemplateManager) {
	
	Mystore.module("Main.View", function(View,Mystore,Backbone, Marionette, $, _) {
		
		 View.Layout = Marionette.Layout.extend({
			  className : 'main-wrapper',
			  itemViewContainer :'div',
		      template: TemplateManager.getMainTemplate(),
		      regions: {
		        languageRegion: "#language",
		        currencyRegion: "#currency",
		        navRegion : '#menu'
		      },
		      initialize: function(){
		    	  var languageCollection = Mystore.request("language:entities");
		    	  var currencyCollection = Mystore.request("currency:entities");
		    	  var catalogueCollection = Mystore.request("catalogues:entities");
		    	  this.viewLanguages = new View.Languages({collection:languageCollection});
		    	  this.viewCurrencies = new View.Currencies({collection:currencyCollection});
		    	  this.viewMenu		= new View.Catalogues({collection:catalogueCollection});
		      },
		      onRender: function() {},

			  onShow: function() {
					this.languageRegion.show(this.viewLanguages);
					this.currencyRegion.show(this.viewCurrencies);
					this.navRegion.show(this.viewMenu);
			  }
		});
		
		View.Language = Marionette.ItemView.extend({
			//template: HandleBars.compile(
			//		'<a title="{{name}}"><img src="assets/image/lang/{{img}}" alt="{{name}}">&nbsp;&nbsp;&nbsp;&nbsp;{{name}}</a>'
			//),
			template : TemplateManager.getLanguageTemplate(),
			tagName : "li",
			
			events : {
				"click a" : "navigate",
			},
			navigate : function(e) {
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			onRender : function() {
				if (this.model.selected) {
					// add class so Bootstrap will highlight the active entry in
					// the navbar
					this.$el.addClass("active");
				}
				
			}
		});
		
		View.Languages = Marionette.CompositeView.extend({
			//template: HandleBars.compile('<span>Language<b></b></span><ul class="ulLanguages"></ul>'),
			template : TemplateManager.getLanguagesTemplate(),
			itemViewContainer : ".ulLanguages",
			itemView : View.Language
			
		});
		
		View.Currency = Marionette.ItemView.extend({
			//template: HandleBars.compile(
			//		'<a title="{{name}}">&nbsp;&nbsp;&nbsp;&nbsp;{{name}}</a>'
			//),
			template : TemplateManager.getCurrencyTemplate(),
			tagName : "li",
			events : {
				"click a" : "navigate",
			},
			navigate : function(e) {
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			onRender : function() {
				if (this.model.selected) {
					// add class so Bootstrap will highlight the active entry in
					// the navbar
					this.$el.addClass("active");
				}
				
			}
		});
		
		View.Currencies = Marionette.CompositeView.extend({
			//template: HandleBars.compile('<span>Currency<b></b></span><ul class="ulCurrencies"></ul>'),
			template : TemplateManager.getCurrenciesTemplate(),
			itemViewContainer : ".ulCurrencies",
			itemView : View.Currency
			
		});
		
		View.Catalogue = Marionette.ItemView.extend({
			template : TemplateManager.getCatalogueTemplate(),
			tagName : "li",
			className:'categories_hor',
			events : {
				"click a" : "navigate",
			},
			navigate : function(e) {
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			onRender : function() {
				if (this.model.selected) {
					// add class so Bootstrap will highlight the active entry in
					// the navbar
					this.$el.addClass("active");
				}
				
			}
		});
		View.Catalogues = Marionette.CompositeView.extend({
			template : TemplateManager.getCataloguesTemplate(),
			itemViewContainer : "ul",
			itemView : View.Catalogue
			//className:'my'
			 //el: '#menu'
			//tagName:'nav'
			
		});

		
	});

	return Mystore.Main.View;
});
