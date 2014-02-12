define([ "application","commons/templateManager",'handlebars'], function(Mystore,TemplateManager,HandleBars) {
	
	Mystore.module("HeaderApp_Link.List.View", function(View,Mystore,Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
		  
		   template: HandleBars.compile(
					'<a title="{{name}}">{{name}}</a>'
			),
		    //className : links,
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
			template: HandleBars.compile(
					'<ul></ul>'
			),
			//template : function(){
			
			//	return TemplateManager.getTemplate(CURR_LIST_TEMPLATE);
			//},
			
			//className : "links",
			id: "nav",
			itemView : View.Header,
			itemViewContainer : "ul",

			events : {
				
				
			}
		});
	});

	return Mystore.HeaderApp_Link.List.View;
});
