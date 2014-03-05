define(['marionette','templates/templateManager'],function (Marionette,templateManager) {
	
    "use strict";

    return Marionette.Layout.extend({
    	templateName: "",
    	context: {},
       
    	initialize: function () {
    		_.bindAll(this, 'beforeRender', 'render', 'afterRender');
    		var _this = this;

    		this.render = _.wrap(this.render, function(render) {
    			_this.beforeRender();
    			render();
    			_this.afterRender();
    			return _this;
    		});

    		if(this.templateName.length === 0) {
    			throw new App.BaseViewException("no template_id is defined");
    		}

    		//this.template = tpl_loader.get(this.templateName);
    	},

    	beforeRender: function () {

    	},

    	render: function () {
    		//var template = Handlebars.compile(this.template);
    	    var compiledTemplate = templateManager.getTemplate(this.templateName);
    		this.$el.append(compiledTemplate(this.context));
    		return this;
    	},

    	afterRender: function () {

    	}

        
    });

});