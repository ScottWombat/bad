define([ "jquery",'marionette','handlebars'],function($,Marionette,Handlebars){
	Marionette.Handlebars = {
			path : 'js/templates/',
			extension : '.hbr'
		};
	Marionette.TemplateCache.prototype.load = function() {
		if (this.compiledTemplate) {
			return this.compiledTemplate;
		}
		if (Handlebars.templates && Handlebars.templates[this.templateId]) {
			this.compiledTemplate = Handlebars.templates[this.templateId];
		} else {
			var template = this.loadTemplate(this.templateId);
			this.compiledTemplate = this.compileTemplate(template);
		}
		return this.compiledTemplate;
	};
	
	

	Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
		var template, templateUrl;
		try {
			template = Marionette.$(templateId).html();
		} catch (e) {
		}
		if (!template || template.length === 0) {
			templateUrl = Marionette.Handlebars.path + templateId
					+ Marionette.Handlebars.extension;
			
			template =mytemplateFunction(templateUrl);
			alert("return:" +template);
			/*
			$.ajax({
				url : templateUrl,
				success : function(data) {
					alert(data);
					template = data;
				},
				error: function (xhr, status, err) {
					console.log( 'something went wrong');
	             },
				async : false
			});
			*/
			/*
			if (!template || template.length === 0) {
				throw "NoTemplateError - Could not find template: '"
						+ templateUrl + "'";
			}
			*/
		}
		alert('load'+template);
		return template;
	};

	Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		//alert("here:" + rawTemplate);
		return Handlebars.compile(rawTemplate);
	};
	
	var mytemplateFunction = function(templateId){
		var rawTemplate;
		
		Marionette.$.when( Marionette.$.ajax( templateId ) ).then(function( data, textStatus, jqXHR ) {
			//alert( jqXHR.status );
			
			rawTemplate = data;
			
		
		});
		
	    //alert('in'+ rawTemplate);
		return rawTemplate;
	}

	
	
});