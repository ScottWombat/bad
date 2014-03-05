define([ "application",'handlebars'], function(Mystore,HandleBars) {
	Mystore.module("HeaderApp.List.View", function(View,Mystore,Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
		   template: HandleBars.compile(
					'<a title="{{name}}"><img src="assets/image/lang/{{img}}" alt="{{name}}">{{name}}</a>'
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
			template: HandleBars.compile('<span>Language3<b></b></span><ul></ul>'),
			//template : LANGUAGE_LIST_TEMPLATE,
			className : "language",
			itemView : View.Header,
			itemViewContainer : "ul",

			events : {
				"click a.brand" : "brandClicked",
				"mouseover": "doStuff"
			},
			doStuff: function(){
				
				//return;background:url(../image/bullet-d.png)
				//
				$('.language').mouseover(function() {
					//$('.mylang').css('background-image', 'url(../../../assets/image/bullet-d.png)');
					$('.language').find('ul').slideDown('fast');
					$('.language').bind('mouseleave', function() {
						$('.language').find('ul').slideUp('fast');
					});
				});
			},
			mouseovercard : function() {
				console.log('hello world');
				$('#currency, #language').mouseover(function() {
					$(this).find('> ul').slideUp('fast');
					$(this).bind('mouseleave', function() {
						$(this).find('> ul').slideDown('fast');
					});
				});
			},
			brandClicked : function(e) {
				e.preventDefault();
				this.trigger("brand:clicked");
			}
		});
	});

	return Mystore.HeaderApp.List.View;
});
