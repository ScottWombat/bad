define([ "application",'handlebars' ,'text!layout/menubar/list/templates/menubar.html','utils/templateManager'], function(Mystore,HandleBars,tpl,TemplateManager) {
	
	Mystore.module("Menubar_Catalogues.List.View", function(View,Mystore,Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
		   //template: HandleBars.compile(tpl),
		   //template: TemplateManager.getMessageTemplate(),
			template: HandleBars.compile('<div></div>'),
		  
			//tagName : "li",
            //className:'wrapper-box',
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
			
			//template: HandleBars.compile('<div></div>'),
			template: TemplateManager.getMainTemplate(),
			className : "main-wrapper",
			itemView : View.Header,
			
			/*
			itemView: [My.ParentView, My.ChildView],

			addChildView: function(item, collection, options){
			  this.closeEmptyView();
			  var itemViews = this.getItemView(item);
			  var index = this.collection.indexOf(item);

			  _.each(itemViews, function(ItemView) {
			    this.addItemView(item, ItemView, index);
			  });
			*/
			//itemViewContainer : "ul",
			//itemViewContainer : "div",
			events : {
				"click a.brand" : "brandClicked",
				"mouseover": "doStuff"
			},
			doStuff: function(){
				//alert('dddd');
				//return;background:url(../image/bullet-d.png)
				$('#Electronics').show();
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

	return Mystore.Menubar_Catalogues.List.View;
});
