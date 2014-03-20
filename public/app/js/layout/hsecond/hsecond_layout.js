define([ "application",'handlebars' ,
         'utils/templateManager',
         'layout/hsecond/entities/cart'
         ], function(Mystore,HandleBars,TemplateManager,Cart) {
	
		Mystore.module("Hsecond.View", function(View,Mystore,Backbone, Marionette, $, _) {
			
			View.SearchRegion = Marionette.Region.extend({
		    	el: "#search",
		    	initialize: function(){
		    		console.info('Initialize Menu region');
		    	},
		    	onShow: function (view) {
		    		this.listenTo(view, "itemview:menu:navigate", this.displayMessage);
		    	},
		    	displayMessage: function (id) {
		    
		    		console.log('regionManager received display:message');
		    	}
		    
		    });
			
			View.CartRegion = Marionette.Region.extend({
		    	el: "#cart",
		    	initialize: function(){
		    		console.info('Initialize Menu region');
		    	},
		    
		    	onShow: function (view) {
		    		this.listenTo(view, "itemview:menu:navigate", this.displayMessage);
		    	},
		    	displayMessage: function (id) {
		    
		    		console.log('regionManager received display:message');
		    	}
		    
		    });
	 
			
			View.Layout = Marionette.Layout.extend({
				id:"myhsecond",
				className : '',
				itemViewContainer :'section',
				//tagName:'section',
				template: TemplateManager.getSearchLayoutTemplate(),
				regions: {
					//searchRegion: "#search",
					searchRegion: View.SearchRegion,
					cartRegion:View.CartRegion
		       
				},
				initialize: function(){
					this.viewSearch= new View.Search();
					this.viewCart = new View.Cart();
		    	  
				},
				onRender: function() {},

				onShow: function() {
					this.searchRegion.show(this.viewSearch);	
					this.cartRegion.show(this.viewCart);
				}
			});
		 
		 View.Search  = Marionette.ItemView.extend({
					template : TemplateManager.getSearchTemplate(),
					tagName : "div",
					className:'search',
					
					events : {
						"click a" : "navigate",
					},
					
					navigate : function(e) {
						e.preventDefault();
						e.stopPropagation();
						var menuId = $(e.currentTarget).attr('id');
					
						this.trigger("menu:navigate",menuId,menuId);
						// this.trigger("menu:navigate",menuId);
					},
					onRender : function() {
						//if (this.model.selected) {
							
						//	this.$el.addClass("active");
						//}
						
					}
		});
		 
		 View.Cart  = Marionette.ItemView.extend({
				template : TemplateManager.getCartTemplate(),
			    //template: Handlebars.compile("Hello, {{name}}"),
			    //model: new Backbone.Model({cartId: "Steve"}),
				id:'mycart',
				model : Mystore.request("cart:entities"),
				initialize:function(){
					
				},
				events : {
					"click a.mycart" : "navigate",
					'mouseover .content': 'mouseOver',
					'mouseout .content': 'mouseevent'
					
				},
				
				navigate : function(e) {
					e.preventDefault();
					e.stopPropagation();
					this.$el.addClass('active');
					
				},
				mouseOver:function(){
					this.$el.addClass('active');
				},
				mouseevent:function(){
					//alert('d');
					this.$el.removeClass('active');
				},
				onRender : function() {
					//if (this.model.selected) {
						
					//	this.$el.addClass("active");
					//}
					
				}
	});
	});
	
	return Mystore.Hsecond.View;
	
});