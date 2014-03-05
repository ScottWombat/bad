define(['marionette','utils/exception'], function(Marionette,Exception) {
	
   var baseView = Backbone.Marionette.View.extend({
	   tagName:      "div",
	   template:     null,
	   templateName: "",
	   context:      {},

	   /**
	    * Default constructor
	    */
	   initialize: function () {
		   _.bindAll(this, "beforeRender", "render", "afterRender");
		   var _this = this;

		   this.render = _.wrap(this.render, function(render) {
			   _this.beforeRender();
			   render();
			   _this.afterRender();
			   return _this;
		   });

		   if(this.templateName.length === 0) {
			   throw new Exception("template name is not defined");
		   }

		   this.template = tpl_loader.get(this.templateName);
	   },

	   /**
	    * Before render
	    */
	   beforeRender: function() {

	   },

	   /**
	    * Render
	    */
	   render: function () {
		   var template = Handlebars.compile(this.template);
		   this.$el.append(template(this.context));
		   return this;
	   },

	   /**
	    * After render
		*/
		afterRender: function() {

		},

		getApplicationContext: function () {
			return myapp;
		}
   });

	
})
