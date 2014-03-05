define([ "application",'handlebars'], function(Mystore,HandleBars) {
	
	Mystore.module("HeaderApp_Link.List.View", function(View,Mystore,Backbone, Marionette, $, _) {
		View.Header = Marionette.ItemView.extend({
		  
		   template: HandleBars.compile(
					'<a href="{{url}}">{{name}}</a>'
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
			//itemViewContainer: 'tbody',//where do you wish to render this within the composite template
			id: "nav",
			itemView : View.Header,
			itemViewContainer : "ul",//where do you wish to render this within the composite template

			events : {
				
				
			}
		});
		
	});

	return Mystore.HeaderApp_Link.List.View;
});
