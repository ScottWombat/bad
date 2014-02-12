define([ "application","commons/templateManager",'handlebars'], function(Mystore,TemplateManager,HandleBars) {
	
	Mystore.module("HeaderApp_Currency.List.View", function(View,Mystore,Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
		   template: HandleBars.compile(
					'<a title="{{name}}">{{name}}</a>'
			),
		
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
				;
			}
		});

		View.Headers = Marionette.CompositeView.extend({
			//template: HandleBars.compile(
			//		'<span>Language1</span><ul></ul>'
			//),
			template : function(){
			
				return TemplateManager.getTemplate(CURR_LIST_TEMPLATE);
			},
			
			className : "currency",
			itemView : View.Header,
			itemViewContainer : "ul",

			events : {
				"click a.brand" : "brandClicked",
				"mouseover": "doStuff"
			},
			doStuff: function(){
				
				//return;background:url(../image/bullet-d.png)
				//
				$('.currency').mouseover(function() {
					//$('.mylang').css('background-image', 'url(../../../assets/image/bullet-d.png)');
					$('.currency').find('ul').slideDown('fast');
					$('.currency').bind('mouseleave', function() {
						$('.currency').find('ul').slideUp('fast');
					});
				});
			},
		
			brandClicked : function(e) {
				e.preventDefault();
				this.trigger("brand:clicked");
			}
		});
	});

	return Mystore.HeaderApp_Currency.List.View;
});
